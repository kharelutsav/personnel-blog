const mongoose = require('mongoose')
// const { OPTIONS} = require('../Config/config')

module.exports = async () => {
    try {
        // const conn = await mongoose.connect(process.env.MONGO_URI, OPTIONS)
        const conn = await mongoose.connect(
            'mongodb://127.0.0.1:27017/portfolio'
        )
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}
