const express = require ("express");
const router = express.Router();

// importa meu controller
const PedidoController = require ('./Controllers');

// rota de criar o pedido
router.post('/pedidos' , PedidoController.store)

// rota de lista os pedidos
router.get('/pedidos', PedidoController.index)

// rota de subir os pedidos
router.patch('./pedidos', PedidoController.uptade)

module.exports = router;

