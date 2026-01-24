let produtos = [];

class ProdutoService {
    create(data){

        const novoProduto = {

            id: Date.now().toString(),
            nome: data.nome,
            preco: data.preco,
            descrisao: data.descrisao,
            restauranteID: data.restauranteID, // vinculando o produto ao restaurante
            categoria: data.categoria

        }

        produtos.push(novoProduto)
        return novoProduto

    }

    listarPorRestaurante(restauranteID){

        return produtos.filter(p => p.restauranteID === restauranteID)

    }

    delete(id){

        const index = produtos.findIndex(p => p.restauranteID === restauranteID)
        if(index === -1) throw new Error ("Produto nao encontrado")
        produtos.splice(index , 1)
        return ( {message: "Produto Removido"} )

    }

}

module.exports = new ProdutoService();