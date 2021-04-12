const db = require('./db')

const Post = db.sequelize.define('pokemons',{
    Nome:{
        type: db.Sequelize.STRING
    },

    Tipo:{
        type: db.Sequelize.TEXT
    },

    pokeID:{
        type: db.Sequelize.TEXT
    }
})

//Post.sync({force: true})

//module.exports = Post //Exportando o metodo Post para acessa-lo atrávez de outros arquivos

