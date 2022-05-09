const { format } = require('express/lib/response')
const mongoose = require('mongoose')
const { Blog } = require('./blog_model')
const { User } = require('./user_model')
require('../Config/database_connection')()

const user = new User({
    profile: 'Helo',
    fullname: 'me',
    email: 'me2@me.com',
    phone: 9869733555,
    social: {},
    blogs: [],
})

const blog = new Blog({
    _id: new mongoose.Types.ObjectId(),
    thumbnail: 'image',
    title: 'title',
    abstract: 'abstract',
})

User.findOneAndUpdate({ email: format.email }, { $push: { blogs: blog.id } })

// User.find()
// .populate('blog')
// .then((data) => {
//     console.log(data);
// })
// .catch(err => console.log(err))

// user.save((err,data) => {
//     if (err) console.log(err);
//     console.log(data);
// })

user.populated('blog')

// User.create(user)
// .then((data) => {
//     console.log(data);
// })
// .catch(err => {
//     console.log(err);
// })

// Blog.create(blog)
// .then((old_data) => {
//     User.findOne({email: 'me@me.com'})
//     .then((data) => {
//         User.updateOne({email: 'me@me.com'}, {$set: {blogs: data.blogs.push(old_data._id)}})
//     })
//     .catch(err => console.log(err))
// })
// .catch(err => {
//     console.log(err);
// })
