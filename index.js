const express = require('express')
const app = express()

app.get("/", (req, res) => { 
    res.send('Hello Word!')
})

app.get("/main", (req, res) =>{
    res.send('Página dois!')
})

app.get("/page", (req, res) =>{
    res.send('Página três')
})

app.listen(31415, () => console.log('Servidor rodando...'))