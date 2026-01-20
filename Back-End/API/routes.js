const express = require("express");
const router = express.Router();

// Importando os Controllers corretamente
const PedidoController = require('./Controllers/PedidoControllers');
const RestauranteController = require('./Controllers/RestauranteControllers');
const RestauranteControllers = require("./Controllers/RestauranteControllers");

// rota de criar o pedido
router.post('/pedidos' , PedidoController.store)

// rota de lista os pedidos
router.get('/pedidos', PedidoController.index)

// rota de subir os pedidos
router.patch('./pedidos/:id', PedidoController.uptade)

router.post('/api/restaurante', RestauranteControllers.store);

// Listar todos os restaurantes registrados
router.get('/api/restaurante', RestauranteControllers.index);

// me mostra detalhes de um restaurante específico pelo ID
router.get('/api/restaurante/:id', RestauranteControllers.show);

// atualizar dados de um restaurante 
router.put('/api/restaurante/:id', RestauranteControllers.update);

// Deletar um restaurante do sistema
router.delete('/api/restaurante/:id', RestauranteControllers.delete);

module.exports = router;

