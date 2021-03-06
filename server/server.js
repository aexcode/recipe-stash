// Dependencies
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const app = express()
const cors = require('cors')
require('dotenv').config()

// Database configuration
require('./config/database')

// Middleware
app.use(cors())
app.use(express.json())
app.use('/server/uploads', express.static('server/uploads'))

// Routes
app.use('/api/users', require('./controllers/users'))
app.use('/api/recipes', require('./controllers/recipes'))

// App listener
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`server is listening on port: ${PORT}`))

// Production setup
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '../client/build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
  })
}
