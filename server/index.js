const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/',(req,res) => {
   res.send("<h1>Hello World </h1>")
})

app.listen(8080,() => {
    console.log("server on 8080")
})