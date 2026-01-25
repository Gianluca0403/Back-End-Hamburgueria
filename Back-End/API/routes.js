const express = require('express');
const router = express.Router();

// importando os controllers
const PedidoController = require('./Controllers/PedidoControllers');
const RestauranteController = require('./Controllers/RestauranteControllers');
const UsuarioController = require('./Controllers/UsuarioController'); // Novo
const ProdutoControllers = require('./Controllers/ProdutoControllers');

// rotas de restaurantes
router.post('/api/restaurante', RestauranteController.store);
router.get('/api/restaurante', RestauranteController.index);

// rotas de usuários
router.post('/api/usuarios', UsuarioController.store);
router.get('/api/usuarios', UsuarioController.index);
router.get('/api/usuarios/:id', UsuarioController.show);

// rotas de produtos
router.post('/api/produtos', ProdutoControllers.store);
router.get('/api/produtos', ProdutoControllers.index);

// rotas de pedidos
router.post('/api/pedidos', PedidoController.store);
router.get('/api/pedidos', PedidoController.index);

module.exports = router;