const express = require ("express");
const router = express.Router();

// importa meu controller
const PedidoController = require ('./Controllers/Controllers');
const ControllersRestaurante = require ('./Controllers/ControllersRestaurante')

// rota de criar o pedido
router.post('/pedidos' , PedidoController.store)

// rota de lista os pedidos
router.get('/pedidos', PedidoController.index)

// rota de subir os pedidos
router.patch('./pedidos/:id', PedidoController.uptade)

router.post('/api/restaurante', RestaurantController.store);

// Listar todos os restaurantes registrados
router.get('/api/restaurante', RestaurantController.index);

// me mostra detalhes de um restaurante específico pelo ID
router.get('/api/restaurante/:id', RestaurantController.show);

// atualizar dados de um restaurante 
router.put('/api/restaurante/:id', RestaurantController.update);

// Deletar um restaurante do sistema
router.delete('/api/restaurante/:id', RestaurantController.delete);

module.exports = router;

