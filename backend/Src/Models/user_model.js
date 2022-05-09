const mongoose = require('mongoose')

//-------------------------------------------------------------------------------------
// Schema for CRUD operations on user details[Full Name, Email, Phone, Social Links]
//-------------------------------------------------------------------------------------

const userSchema = mongoose.Schema({
    fullname: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    phone: { type: Number, required: true },
    social: { type: JSON, required: true },
})

exports.User = mongoose.model('User', userSchema)
