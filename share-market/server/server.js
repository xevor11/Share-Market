const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config() // dotenv file
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.port || 5000

connectDB()
const app = express()

//middleware
app.use(express.json()) 
app.use(express.urlencoded({extended: false}))
app.use(post)