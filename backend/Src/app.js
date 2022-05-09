const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const router = require('./Routes/main')

// Create express app
const app = express()

// Load the configuration
dotenv.config({ path: './Src/Config/config.env' })

// Database Connection
require('./Config/database_connection')()

// Allow cross origin requests to communicate with react front-end
const AllowedCors = { origin: process.env.ORIGIN }

// Allow cross origin requests (React JS is used in the front-end)
app.use(cors(AllowedCors))

// JSON Parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes
app.use(router)

module.exports = app
