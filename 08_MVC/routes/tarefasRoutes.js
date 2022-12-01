const express = require('express');
const router = express.Router();

const TarefaController = require('../controllers/tarefaController');

//Rotas
//Rota responsável por exibir todas as tarefas cadastradas
router.get('/', TarefaController.listarTarefas)
//Rota responsável por exibir o formulário de cadastro de tarefas.
router.get('/criar', TarefaController.criarTarefa);
//Rota responsável por salvar os dados da tarefa no banco de dados
router.post('/save', TarefaController.salvarTarefa);

module.exports = router;