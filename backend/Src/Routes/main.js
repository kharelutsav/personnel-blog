const express = require('express')
const { Blog } = require('../Models/blog_model')
const { User } = require('../Models/user_model')
const mongoose = require('mongoose')
const router = express.Router()

// @desc Fetch all the records and responds JSON data.
// @route GET /
router.get('/', async (req, res) => {
    await Blog.find()
        .sort({createdAt: 'desc'})
        .limit(4)
        .populate({path: 'author', select: ['_id', 'profile', 'fullname', 'email', 'phone', 'social']})
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            console.log(err)
            res.status(400).send('Unable to fetch data.')
        })
})

// @desc Fetch all blogs of one user and responds JSON data.
// @route GET /user
router.get('/user', async (req, res) => {
    try {
        await User.find({email: req.query.email})
            .populate('blogs')
            .then((data) => {
                res.json(data)
            })
            .catch((err) => {
                console.log(err)
                res.status(400).send('Unable to fetch data.')
            })
    } catch (err) {
        res.status(400).send('Unable to fetch data.')
    }
})

// @desc Register user or create user profile
// @route POST /create-user
router.post('/create-user', async (req, res) => {
    const account = { ...req.body, blogs: [] }
    User.create(account)
        .then(() => {
            res.status(200).send(
                'User registered succesfully. Please post blogs.'
            )
        })
        .catch(() => res.status(400).send('Unable to submit the post.'))
})


// @desc Update the blog with changed creds.
// @route POST /edit-post
router.post('/update-post', async (req, res) => {
    const query = { _id: req.body._id }
    await Blog.findOneAndUpdate(query, req.body, { new: true })
        .then(() => {
            res.status(200).send('Updated Succesfully')
        })
        .catch((err) => {
            console.log(err)
            res.status(400).send('Unable to update the data.')
        })
})

// @desc Delete blog post based on the provided blog id.
// @route DELETE /delete-post
router.post('/delete-post', async (req, res) => {
    const email = req.body.email
    const _id = req.body.article._id
    await Blog.findByIdAndDelete(_id)
        .then(() => {
            User.findOneAndUpdate({ email: email }, { $pull: { blogs: _id } })
                .then(() => {
                    res.status(200).send('Post succesfully deleted.')
                })
                .catch(() => res.status(400).send('Unable to delete the post.'))
        })
        .catch(() => {
            res.status(400).send('Unable to delete the post.')
        })
})

module.exports = router
