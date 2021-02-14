const express = require('express')
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
const morgan = require('morgan')

const connectDB = require('./config/db')

/* ===== This needs to loaded before other configurations ===== */
// load environment varibles from a .env file into process.env
dotenv.config({path: './config/config.env'})

// load DB connection
connectDB()

// initialize app
const app = express()

// use HTTP request logger middleware if server is running in development mode
process.env.NODE_ENV === 'development' && app.use(morgan('dev'))

// body parser middleware
app.use(bodyParser.json())

// use routes
app.use('/api/items', require('./routes/api/item'))

const PORT = process.env.PORT || 8000

app.listen(PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT} ...`))
