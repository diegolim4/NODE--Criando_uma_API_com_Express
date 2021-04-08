const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize');

//Template Engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//Conexão com o banco de dados MySql
const sequelize = new Sequelize('pokemons', 'root', 'amocafe',{
    host: 'localhost',
    dialect: 'mysql'
});

app.listen(31415, () => console.log('Servidor rodando no http://localhost:31415'))