const Produto = require('../Models/ProdutoDB');

class ProdutoService {
    async create(data) {
        return await Produto.create({
            nome: data.nome,
            preco: data.preco,
            descrisao: data.descrisao,
            restauranteID: data.restauranteID, // vinculando o produto ao restaurante
            categoria: data.categoria
        });
    }

    async listarPorRestaurante(restauranteID) {
        return await Produto.find({ restauranteID });
    }

    async delete(id) {
        const res = await Produto.findByIdAndDelete(id);
        if (!res) throw new Error("Produto nao encontrado");
        return { message: "Produto Removido" };
    }
}

module.exports = new ProdutoService();