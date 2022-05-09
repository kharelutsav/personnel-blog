const mongoose = require('mongoose')
const { OPTIONS } = require('../Config/config')

module.exports = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, OPTIONS)
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}
