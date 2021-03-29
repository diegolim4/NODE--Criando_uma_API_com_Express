const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send('Hello Word!')
})

app.listen(31415, () => console.log('Servidor rodando...'))