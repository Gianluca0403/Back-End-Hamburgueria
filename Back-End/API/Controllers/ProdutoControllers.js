const ProdutoService = require ('../Services/ProdutoService')

module.exports = {

    async store(req, res) {
        try {

            const produto = ProdutoService.create(req.body);
            return res.status(201).json(produto);

        } catch (error) {

            return res.status(400).json({ erro: error.message });
        }
    },

    async index(req, res) {

        // fazendo filtragem , para nao receber os produtos de todos os restaurantes de uma vez
        const { restauranteId } = req.query; 
        const lista = restauranteId 

            // usando ternario pela 1 vez
            ? ProdutoService.listarPorRestaurante(restauranteId) // se sim
            : []; // se nao, me retorna uma lista vazia
        return res.json(lista);
    }
};