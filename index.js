const express = require('express')
const app = express()
const dotenv = require('dotenv').config();
const authRouter = require('./routes/auth.routing')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api', authRouter)


app.listen(process.env.PORT || 5000, ()=>{
    console.log(`Server running on port ${process.env.PORT}`);
})