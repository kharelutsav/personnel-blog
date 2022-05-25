const mongoose = require('mongoose')

//-------------------------------------------------------------------------------------
// Schema for CRUD operations on blog [thumbnail, blog title, and abstract]
//-------------------------------------------------------------------------------------

const blogSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    thumbnail: { type: String },
    title: { type: String, required: true },
    abstract: { type: String, required: true },
    author: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
}, {timestamps: true})

exports.Blog = mongoose.model('Blog', blogSchema)
