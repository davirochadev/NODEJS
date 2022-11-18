const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');
const app = express();



app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

//Middlewares para receber dados dos formulários
app.use(
    express.urlencoded({extended: true})
);

app.use(express.json());

//Rota de usuários
app.get('/usuarios', (req, res) => {

    const sql = `SELECT * FROM USUARIO`;
    
    conn.query(sql, (erro, usuarios) => {
        if(erro) {
            console.log(erro);
            return;
        }
        res.render('usuarios', {usuarios});
       });  
});

app.post('/usuario/save', (req, res) => {
    const nome = req.body.nome;
    const endereco = req.body.endereco;
    const email = req.body.email;
    const dataNascimento = req.body.dataNascimento;

    const sql = `INSERT INTO USUARIO (nome_usuario, endereco_usuario, email_usuario, data_nascimento_usuario) VALUES ('${nome}', '${endereco}', '${email}', '${dataNascimento}')`;

    conn.query(sql, (erro) => {
        if(erro) {
            console.log(erro);
            return;
        }
        res.redirect('/usuarios');
    });
});


//Rota de Lcientes
app.get('/clientes', (req, res) => {
    
    const sql = `SELECT * FROM CLIENTE`;
    
    conn.query(sql, (erro, clientes) => {
        if(erro) {
            console.log(erro);
            return;
        }
        res.render('clientes', {clientes});
       }); 
});

app.post('/cliente/save', (req, res) => {
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const telefone = req.body.telefone;
    const email = req.body.email;
    const endereco = req.body.endereco;

    const sql = `INSERT INTO CLIENTE (nome_cliente, cpf_cliente,telefone_cliente, email_cliente, endereco_cliente) VALUES ('${nome}', '${cpf}', '${telefone}', '${email}', '${endereco}')`;

    conn.query(sql, (erro) => {
        if(erro) {
            console.log(erro);
            return;
        }
        res.redirect('/clientes');
    });
});

//Rota Principal
app.get('/', (req, res) => {
    res.render('home');
});

//Conexão com o banco
const conn = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database:'db_comum'
});

conn.connect((erro) => {
    if(erro) {
        console.log(erro);
        return;
    }
    console.log("Conectou ao banco db_comum");

    app.listen(3000, () => {
        console.log("Aplicação rodando na porta 3000");
    });
});


