const express = require('express');             //Importando pacote/módulo express
const exphbs = require('express-handlebars');   // Importando pacote/módulo handlebars
const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');


app.get('/produtos', (req, res) => {
    
    const produtos = [
        {descricao: "Arroz", preco: 23.99, promocao: true},
        {descricao: "Feijão", preco: 9.99, promocao: false},
        {descricao: "Óleo", preco: 6.99, promocao: true},
        {descricao: "Açucar", preco: 15.99, promocao: false},
        {descricao: "Farinha de Trigo", preco: 5.99, promocao: true},
        {descricao: "Shampoo", preco: 11.99, promocao: false},
        {descricao: "Condicionador", preco: 15.99, promocao: true}
    ];

    res.render('produtos', {produtos})
});

//Rota principal
app.get('/', (req, res) => {
    const usuario = {
        nome: "Davi Rocha",
        email: "davi.rochab@gmail.com",
        dataNascimento: "05/04/1988"
    };

    const usuarioLogado = true;

    const array = [1, 2, 3, 4, 5, 6, 7];    

    res.render('home', {usuario, usuarioLogado});
});

//Executando o servidor
app.listen(3000);


