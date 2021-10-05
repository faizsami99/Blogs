
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    title: {
       type:String,
       required:true
    },
    category:{
        type: String,
        required: true
    },
    image:{
        type:String, 
        required:true
    },
    blog:{
        type: String,
        required: true
    },
    
});

const Blog = new mongoose.model('Blog', blogSchema);

module.exports = Blog;