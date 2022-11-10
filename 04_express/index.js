const express = require('express');

const app = express();

const port = 3000; // porta de acesso ao servidor

app.get('/', (requisicao, resposta) => {
    resposta.send('Esta é minha primeira página utilizando o Node.js');
});

app.listen(port, () => {
    console.log('Aplicação está rodando na porta ' + port);
})