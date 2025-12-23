const fakeCardapio = [

    { id: "p1", nome: "X-burguer", preco: 20.0 },
    { id: "p2", nome: "X-Bacon", preco: 25.0 },
    { id: "p3", nome: "X-Maionese", preco: 30.0 }

];

let pedidosFake = [];

module.exports = {

    async store(req, res) {

        const { clientes, itens } = req.body
        let = totalPedidos = 0;


        // o map percorre cada item e transforma no objeto final
        const itensProcessados = itens.map(item => {

            const produto = fakeCardapio.find(p => p.id === item.id)

            if (!produto) {

                return null;

            };

            return {

                nome: produto.nome,
                precoUnitario: produto.preco,
                quantidade: item.qnt,
                subtotal: produto.preco * item.qnt

            }

        });

        // validando se algum produto nao foi encontrado
        if (itensProcessados.includes(null)) {

            return res.json(404).json({ erro: "Produto não existe" })

        }

        // calcula
        const totalPedido = itensProcessados.reduce((acumulador, item) => {
            // A cada volta, o que eu retornar aqui será o novo valor do acumulador
            return acumulador + item.subtotal;

        }, 0) // <- muito importante esse 0, pois ele é o valor inicial



        const novosPedidos = {

            id: Date.now(),
            clientes,
            itens: itensProcessados,
            total: totalPedido,
            status: "pendente"

        };

        pedidosFake.push(novosPedidos)
        return res.json(201).json(novosPedidos)

    },


    async index(req, res){

        return res.json(pedidosFake)

    },


    // muda os satatus dos pedidos(atencao na hora do BD)
    async uptade(req, res){

        const { id } = req.params;
        const { status } = req.body;

        const pedido = pedidosFake.find(p => p.id == id);

        if (!pedido){

            return res.status(404).json({erro: "pedido nao encontrado"})

        }
        
        pedido.status = status;
        return res.json(pedido)

    }

}