const PedidoService = require('../Services/PedidoServices');

module.exports = {
    async store(req, res) {
        try {
            const { clientes, itens } = req.body;

            // fica aguardando o service processsar
            const pedido = PedidoService.criarPedido(clientes, itens);

            return res.status(201).json(pedido);

            // se o throw new error nao funfa ele devolve o erro
        } catch (error) {
            return res.status(400).json({ erro: error.message });
        }
    },

    async index(req, res) {

        const pedidos = PedidoService.listarPedidos();

        return res.json(pedidos);
    }, 

    async uptade(req, res) {

        try {
            const { id } = req.params; 
            const { status } = req.body; 

            // chama o Service
            const pedidoAtualizado = PedidoService.update(id, status);

            return res.json(pedidoAtualizado);

        } catch (error) {
            // se o throw new error nao funfa ele devolve o erro (pedido nao encontrado)
            return res.status(404).json({ erro: error.message });
        }
    } 
}; 