const express   = require('express');
const exphbs    = require('express-handlebars');
const conn      = require('./db/conn');
const app       = express();

const Clube = require('./models/Clube');
const Endereco = require('./models/Endereco');

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

//Middlewares para os formulários
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//Rota principal
app.get('/', (req, res) => {
    res.render('home');
});


//Rota dos clubes
//Apresentação dos clubes cadastrados
app.get('/clubes', async (req, res) => {

    const clubes = await Clube.findAll({raw: true});
    console.log(clubes);

    res.render('clubes', {clubes});
});
//Exibição dos detalhes de um clube específico
app.get('/clube/:id', async (req, res) => {

    const id = req.params.id;

    const clube = await Clube.findOne({include: Endereco, where: {id: id}});

    res.render('clube', {clube: clube.get({plain: true})});
});
//Cadastro de um novo clube
app.post('/clube/save', async (req, res) => {
    const nome = req.body.nome;
    let status = req.body.status;

    if(status === 'on') {
        status = true;
    } else {
        status = false;
    }
    await Clube.create({nome, status});
    res.redirect('/clubes');
});
//Exclusão de um clube da lista
app.get('/clube/delete/:id', async (req, res) => {
    const id = req.params.id;
    await Clube.destroy({where: {id: id}});
    res.redirect('/clubes');
});


app.get('/clube/edit/:id', async (req, res) => {
    const id = req.params.id;

    const clube = await Clube.findOne({raw: true, where: {id: id}});

    res.render('clube-edit', {clube});
});

//Edição de um clube da lista
app.post('/clube/edit/save', async (req, res) => {
    const id = req.body.id;
    const nome = req.body.nome;
    const status = req.body.status === 'on' ? true : false;
    const clubeAlterado = {id, nome, status};

    await Clube.update(clubeAlterado, {where: {id: id}});

    res.redirect('/clubes');
});


//Rotas do endereço

app.post('/endereco/save', async (req, res) => {
    const ClubeId = req.body.ClubeId;
    const logradouro = req.body.logradouro;
    const cep = req.body.cep;
    const numero = req.body.numero;
    const complemento = req.body.complemento;

    const enderecoNovo = {logradouro, cep, numero, complemento, ClubeId};
    
    await Endereco.create(enderecoNovo);

    res.redirect(`/clube/${ClubeId}`);    
});

app.get('/endereco/delete/:idClube/:idEndereco', async (req, res) => {
    
    const idClube = req.params.idClube;
    const idEndereco = req.params.idEndereco;
    
    await Endereco.destroy({where: {id: idEndereco}});

    res.redirect(`/clube/${idClube}`);

});

//Criando a conexão
conn
//.sinc({force: true})
.sync().then(() => {
    app.listen(3000);
}).catch((erro) => {
    console.log(erro);
});

