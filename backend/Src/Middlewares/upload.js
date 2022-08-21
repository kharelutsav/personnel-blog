const multer = require('multer');

const uploads = multer({
    limits: {
        fileSize: 4 * 1024 * 1024,
        files: 1,
    }
});

module.exports = uploads;