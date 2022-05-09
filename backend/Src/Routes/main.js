const express = require('express')
const { Blog } = require('../Models/blog_model')

const router = express.Router()

// @desc Fetch all the records and responds JSON data.
// @route GET /
router.get('/', async (req, res) => {
    await Blog.find()
        .then((data) => {
            console.log(data)
            res.json(data)
        })
        .catch((err) => {
            console.log(err)
            res.status(400).send('Unable to fetch data.')
        })
})

// @desc Save the blog details (thumbnail => image; title => text; abstract => text)
// @route POST /upload-post
router.post('/create-post', async (req, res) => {
    console.log(req.body)
    await Blog.create(req.body)
        .then(() => {
            res.status(200).send('Blog posted succesfully!')
        })
        .catch((err) => {
            console.log(err)
            res.status(400).send('Unable to submit the post.')
        })
})

// @desc Update the blog with changed creds.
// @route POST /edit-post
router.post('/update-post', async (req, res) => {
    const query = { id: req.body._id }
    await Blog.findOneAndUpdate(query, req.body, { new: true })
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            console.log(err)
            res.status(400).send('Unable to update the data.')
        })
})

// @desc Delete blog post based on the provided blog id.
// @route DELETE /delete-post
router.delete('/delete-post', async (req, res) => {
    console.log(req.body)
    await Blog.findByIdAndDelete(req.body._id)
        .then(() => {
            res.status(200).send('Post succesfully deleted.')
        })
        .catch((err) => {
            console.log(err)
            res.status(400).send('Unable to delete the post.')
        })
})

module.exports = router
