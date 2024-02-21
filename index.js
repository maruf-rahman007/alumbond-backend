require("./database/db");

const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const UserRouter = require('./api/User')
app.use(bodyParser.json())

app.use('/user',UserRouter)

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})