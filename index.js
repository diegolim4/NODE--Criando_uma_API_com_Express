const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');
const e = require('express');


//Template Engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Rotas

app.get('/', (req, res)=> {
    Post.findAll({order: [['id', 'DESC']]}).then((tabs)=>{        
        res.render('home', {tabs: tabs})
    })   
})

app.get('/cad', (req, res) => {
    res.render('pokeForms')
})

app.post('/add', (req, res) => {
    Post.create({
        Nome: req.body.nome,
        Tipo: req.body.tipo,
        pokeID: req.body.pokeid
    }).then(() => {
        res.redirect('/')
    }).catch((erro) => {
        res.send(`Houve um erro: ${erro}`)
    })
})

app.listen(31415, () => {
    console.log("Servidor Rodando na url http://localhost:31415")
})
