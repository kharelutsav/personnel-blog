const { Blog } = require('../Models/blog_model')
const { User } = require('../Models/user_model')
const mongoose = require('mongoose')

module.exports = (io) => {

    io.on('connection', (socket) => {

        // Save the blog details (thumbnail => image; title => text; abstract => text)
        socket.on('create-post', (body) => {
            const email = body.email
            const article = body.article
            User.findOne({ email: email })
                .then((user) => {
                    if (user) {
                        const blog = {
                            ...article,
                            _id: new mongoose.Types.ObjectId(),
                            time: new Date().toLocaleString(),
                            author: user._id
                        }
                        Blog.create(blog).then((data) => {
                            User.findOneAndUpdate(
                                { email: email },
                                { $push: { blogs: blog._id } }
                            )
                                .then(() => {
                                    socket.emit('post-created', {status: 200, msg: 'Post created'})
                                    const blog = {
                                        blog_info: data._doc,
                                        user_info: user
                                    }
                                    io.emit('new-blog-added', {blog: blog})
                                })
                                .catch(() =>
                                    socket.emit('unable-to-create-post', {status: 500, msg: 'Internal Server Error'})
                                )
                        })
                    } else {
                        socket.emit('unable-to-create-post', {status: 400, msg: 'User not registered'})
                    }
                })
                .catch(() => {
                    socket.emit('unable-to-create-post', {status: 400, msg: 'Unable to create post'})
                })

        });


        // @desc Update the blog with changed creds.
        socket.on('update-post', (body) => {
            const query = { _id: body._id }
            Blog.findOneAndUpdate(query, body, { new: true })
                .then((data) => {
                    socket.emit('post-updated', {status: 200, blog: body._id, msg: 'Post updated'})
                    io.emit('blog-updated', {blog: data})
                })
                .catch((err) => {
                    console.log(err)
                    socket.emit('unable-to-update-post', {status: 400, msg: 'Unable to update post'})
                })
        });


        // @desc Delete blog post based on the provided blog id.
        socket.on('delete-post', (body) => {
            const email = body.email
            const _id = body.article._id
            Blog.findByIdAndDelete(_id)
                .then(() => {
                    User.findOneAndUpdate({ email: email }, { $pull: { blogs: _id } })
                        .then(() => {
                            socket.emit('post-deleted', {status: 200, blog: _id, msg: 'Post deleted'})
                            io.emit('blog-deleted', {blog: _id})
                        })
                        .catch(() => socket.emit('unable-to-delete-post', {status: 400, msg: 'Unable to delete post'}))
                })
                .catch(() => {
                    socket.emit('unable-to-delete-post', {status: 400, msg: 'Unable to delete post'})
                })

        });

    })
}