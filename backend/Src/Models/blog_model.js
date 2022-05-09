const mongoose = require('mongoose')

//-------------------------------------------------------------------------------------
// Schema for CRUD operations on blog [thumbnail, blog title, and abstract]
//-------------------------------------------------------------------------------------

const blogSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    thumbnail: {
        data: Buffer,
        contentType: String,
    },
    title: { type: String, required: true },
    abstract: { type: String, required: true },
})

exports.Blog = mongoose.model('Blog', blogSchema)
