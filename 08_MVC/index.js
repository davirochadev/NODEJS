const express = require('express');
const exphbs = require('express-handlebars');
const conn = require('./db/conn');
const app = express();

//Configuração da Template Engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

//Importando os Models
const Tarefa = require('./models/Tarefa');

//Importando as rotas
const tarefasRoutes = require('./routes/tarefasRoutes');

//Configuração para aceitar dados de formularios
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//Rotas da aplicação
app.use('/tarefas', tarefasRoutes);

conn.sync()
.then(
    app.listen(3000)
).catch((erro) => console.log(erro));



