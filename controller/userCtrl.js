const User = require("../models/usermodel");
const asyncHandler = require("express-async-handler");

const createUser = asyncHandler(async(req, res) =>{
    const email = req.body.email;
    const findUser = await User.findOne({email: email});
    if(!findUser){
        //create new user
        const newUser = await User.create(req.body);
        res.json(newUser);

    }
    else {
        throw new Error("User already exist");
    }

});


const loginUserControl = asyncHandler(async(req, res) =>{
    const{email, password} = req.body;
    // check if user exists or not
    const findUser = await User.findOne({ email});
    if(findUser && (await findUser.isPasswordMatched(password))){
        res.json(findUser);
    }

        else{
            throw new Error("Invalid credentials");
        }
    

});


module.exports = {createUser, loginUserControl};
