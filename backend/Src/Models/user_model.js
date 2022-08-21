const mongoose = require('mongoose')

//-------------------------------------------------------------------------------------
// Schema for CRUD operations on user details[Full Name, Email, Phone, Social Links]
//-------------------------------------------------------------------------------------

const userSchema = mongoose.Schema({
    profile: {
        type: Buffer,
        contentType: String
    },
    fullname: { type: String, required: true },
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: { type: String, unique: true, required: true },
    phone: { type: String, required: true },
    linkedin: { type: String, required: false},
    instagram: { type: String, required: false},
    youtube: { type: String, required: false},
    github: { type: String, required: false},
    about: {type: String, required: false},
    blogs: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: false },
    ],
}, {timestamps: true})

exports.User = mongoose.model('User', userSchema)
