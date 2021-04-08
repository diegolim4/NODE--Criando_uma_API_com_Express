const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

//Template Engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Conexão com o banco de dados MySql
const sequelize = new Sequelize('pokemons', 'root', '******',{
    host: 'localhost',
    dialect: 'mysql'
});

//Rotas
app.get('/', (req, res) =>{
    res.render('pokeForms')
})

app.post('/add', (req, res) =>{
    res.send(`Pokemon: ${req.body.nome} e do tipo ${req.body.tipo}`)
})


app.listen(31415, () => console.log('Servidor rodando no http://localhost:31415'))