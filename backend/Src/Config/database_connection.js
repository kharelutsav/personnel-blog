const mongoose = require('mongoose')


module.exports = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, process.env.OPTIONS);
        console.log(`MongoDB connected: ${conn.connection.host}`);      
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}