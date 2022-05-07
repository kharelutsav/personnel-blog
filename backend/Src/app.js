const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');


// Create express app
const app = express();

// Load the configuration
dotenv.config({path: './Src/Config/config.env'});

// Allow cross origin requests to communicate with react front-end
const AllowedCors = { origin: process.env.ORIGIN }

// Allow cross origin requests (React JS is used in the front-end)
app.use(cors(AllowedCors));


module.exports = app;