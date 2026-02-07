const Pedido = require('../Models/PedidoDB');
const Produto = require('../Models/ProdutoDB');

class PedidoService {
    async criarPedido(clienteId, itens, restauranteId) {
        // o map percorre cada item e transforma no objeto final
        const itensProcessados = await Promise.all(itens.map(async (item) => {
            const produtoBD = await Produto.findById(item.id);

            if (!produtoBD) {
                // mais eficiente
                throw new Error('ID nao encontrado');
            }

            // o produto pertence ao restaurante que está recebendo o pedido?
            if (produtoBD.restauranteID.toString() !== restauranteId) {
                throw new Error(`O produto não pertence a este restaurante.`);
            }

            return {
                nome: produtoBD.nome,
                precoUnitario: produtoBD.preco,
                quantidade: item.qnt,
                subtotal: produtoBD.preco * item.qnt
            };
        }));

        // validando se algum produto nao foi encontrado
        if (itensProcessados.includes(null)) {
            throw new Error("produto não encontrado");
        }

        const totalPedido = itensProcessados.reduce((acumulador, item) => {
            // percorre pegando os item e adicionando em um "cofre"
            return acumulador + item.subtotal;
        }, 0); // <- muito importante esse 0, pois ele é o valor inicial

        return await Pedido.create({
            clienteId,
            restauranteId,
            itens: itensProcessados,
            total: totalPedido,
            status: "pendente"
        });
    }

    async listarPedidos() {
        return await Pedido.find().populate('clienteId').populate('restauranteId');
    }

    async update(id, novoStatus) {
        // esse erro aparece no controller
        const pedido = await Pedido.findByIdAndUpdate(id, { status: novoStatus }, { new: true });
        if (!pedido) throw new Error("pedido não encontrado");
        return pedido;
    }
}

module.exports = new PedidoService();