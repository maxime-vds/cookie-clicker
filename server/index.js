require('dotenv').config();
const cors = require('cors')
const routes = require('./routes/routes')

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL //set url


mongoose.set('strictQuery', false); //removes the wwarning
mongoose.connect(mongoString, {useNewUrlParser: true, useUnifiedTopology: true})
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database Connected')
})
const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', routes)

app.listen(3001, () => {
    console.log(`server started at ${3001}`)
})
