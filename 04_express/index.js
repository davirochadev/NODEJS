const express = require('express');
const path = require('path');

const app = express();

const port = 3000; // porta de acesso ao servidor

const basePath = path.join(__dirname, 'templates');

app.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
    console.log('Aplicação está rodando na porta ' + port);
})