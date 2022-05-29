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
    email: { type: String, unique: true, required: true },
    phone: { type: Number, required: true },
    social: { type: JSON, required: true },
    blogs: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: false },
    ],
}, {timestamps: true})

exports.User = mongoose.model('User', userSchema)
