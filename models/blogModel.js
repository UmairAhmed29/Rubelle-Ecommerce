const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        
    },
    description:{
        type:String,
        required:true,
       
    },
    category:{
        type:String,
        required:true,
        
    },
    numViews:{
        type:Number,
        default: 0
    },
    isLiked: {
        type: boolean,
        default: false,

    },
    isDisliked: {
        type: Boolean,
        default: false,
    },
    likes: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    dislikes: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    image: {
        type: String,
        default:"https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsb2d8ZW58MHx8MHx8fDA%3D"
    },
    author: {
        type: String,
        default:"Admin",
    },


},
{
    toJSON:{
        virtuals: true,
    },
    toObject:{
        virtuals: true,
    },
    timestamps: true,
}
);

//Export the model
module.exports = mongoose.model('Blog', blogSchema);