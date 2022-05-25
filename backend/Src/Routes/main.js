const express = require('express')
const { Blog } = require('../Models/blog_model')
const { User } = require('../Models/user_model')
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
            .populate({path: 'blogs', options: { sort: { 'createdAt': 'desc' } }})
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


module.exports = router
