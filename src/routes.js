const express = require('express');

const routes = express.Router();

const DespesaController = require('./controllers/DespesaController');
const ReceitaController = require('./controllers/ReceitaController');
const UserController = require('./controllers/UserController');

routes.post('/user/:id/despesa',DespesaController.store);
routes.post('/user/:id/receita',ReceitaController.store);//

routes.post('/user',UserController.store);
routes.get('/user/:id',UserController.show);


module.exports = routes;