const express = require('express');
const path = require('path');
const port = 3000;
const basePath = path.join(__dirname, '../templates');
const app = express();
const router = express.Router();

router.post('/signup', (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;

    console.log(`Usuário ${nome} cadastrado com  o e-mail ${email}`);

    res.sendFile(`${basePath}/signup.html`);
});


router.get('/', (req, res) => {
    res.sendFile(`${basePath}/signup.html`)
})


module.exports = router;


