const mongoose = require('mongoose');

//-------------------------------------------------------------------------------------
// Schema for CRUD operations on blog [thumbnail, blog title, and abstract]
//-------------------------------------------------------------------------------------

const blogSchema = mongoose.Schema(
    { 
        thumbnail: {type: String, unique:true, required:true},
        title: {type: String, required:true},
        abstract: {type: String, unique:true, required:true}
    }
);

exports.Blog = mongoose.model('Blog', blogSchema);