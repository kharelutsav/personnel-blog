const express = require('express');


const router = express.Router();

router.get('/', (req, res) => {
    res.end("Hello World");
})

router.post('/upload-post', (req, res) => {
    console.log(req.body);
    res.end('Form Submitted');
});

router.post('/edit-post', (req, res) => {
    console.log(req.body);
    res.end('Edit request Complete');
});

router.post('/delete-post', (req, res) => {
    console.log(req.body);
    res.end('Blog post deleted succesfully.');
})

module.exports = router;