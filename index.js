const express = require('express')
const app = express()

app.get("/", (req, res)=> { 
    res.sendFile(__dirname + '/html/main.html')
})

app.get("/page", (req, res) =>{
    res.sendFile(__dirname + '/html/page.html')
})

app.listen(31415, () => console.log('Servidor rodando no http://localhost:31415'))