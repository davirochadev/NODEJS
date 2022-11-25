const express   = require('express');
const exphbs    = require('express-handlebars');
const conn      = require('./db/conn');
const app       = express();

const Clube = require('./models/Clube');

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
app.get('/clubes', async (req, res) => {

    const clubes = await Clube.findAll({raw: true});
    console.log(clubes);

    res.render('clubes', {clubes});
});

app.get('/clube/:id', async (req, res) => {

    const id = req.params.id;

    const clube = await Clube.findOne({raw: true, where: {id: id}});

    res.render('clube', {clube});
});


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

app.post('/clube/edit/save', async (req, res) => {
    const id = req.body.id;
    const nome = req.body.nome;
    const status = req.body.status === 'on' ? true : false;
    const clubeAlterado = {id, nome, status};

    await Clube.update(clubeAlterado, {where: {id: id}});

    res.redirect('/clubes');
});

//Criando a conexão
conn.sync().then(() => {
    app.listen(3000);
}).catch((erro) => {
    console.log(erro);
});

