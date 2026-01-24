const fakeCardapio = [
    {id: "pedido1" , nome: "X-burguer" , preco:20.0},
    {id: "pedido2" , nome: "X-Bacon" , preco:25.0},
    {id: "pedido3" , nome: "X-Maionese" , preco:30.0}
];

let pedidosFake = [];

class PedidoService {
    
    criarPedido(clientes, itens) {

        // o map percorre cada item e transforma no objeto final
        const itensProcessados = itens.map(item => {
            const produto = fakeCardapio.find(pedido => pedido.id === item.id);

            if (!produto) {

                // mais eficiente
                throw new Error('ID nao encontrado')

            }

            // o produto pertence ao restaurante que está recebendo o pedido?
            if (produto.restauranteId !== restauranteId) {
            throw new Error(`O produto não pertence a este restaurante.`);
            }
            

            return {
                nome: produto.nome,
                precoUnitario: produto.preco,
                quantidade: item.qnt,
                subtotal: produto.preco * item.qnt
            };
        });

         // validando se algum produto nao foi encontrado
        if (itensProcessados.includes(null)) {
            throw new Error("produto não encontrado");
        }

        const totalPedido = itensProcessados.reduce((acumulador, item) => {
            // percorre pegando os item e adicionando em um "cofre"
            return acumulador + item.subtotal;
        }, 0); // <- muito importante esse 0, pois ele é o valor inicial

        const novoPedido = {
            id: Date.now(),
            clientes,
            itens: itensProcessados,
            total: totalPedido,
            status: "pendente"
        };

        pedidosFake.push(novoPedido);
        return novoPedido;
    }

    listarPedidos() {
        return pedidosFake;
    }

    update (id, novoStatus) {

        const pedido = pedidosFake.find(pedido => pedido.id == id);

        // esse erro aparece no controller
        if (!pedido) throw new Error("pedido não encontrado");

        pedido.status = novoStatus;
        return pedido;
    }
}

module.exports = new PedidoService();