const express = require('express')
const app = express()
const dotenv = require('dotenv').config();


app.listen(process.env.PORT || 5000, ()=>{
    console.log(`Server running on port ${process.env.PORT}`);
})