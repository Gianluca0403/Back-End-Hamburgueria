//payload
const RestaurantService = require('../Services/RestauranteService')

module.exports = {
    async store(req, res) {
        try {
            const restaurant = RestaurantService.create(req.body);
            return res.status(201).json(restaurant);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async index(req, res) {
        const list = RestaurantService.ListarRestaurante();
        return res.json(list);
    },


    // me mostra detalhes de um restaurante específico pelo ID
    async show(req, res) {
        try {
            const restaurant = RestaurantService.getById(req.params.id);
            return res.json(restaurant);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    },

    async update(req, res) {
        try {
            const updated = RestaurantService.update(req.params.id, req.body);
            return res.json(updated);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    },

    async delete(req, res) {
        try {
            const result = RestaurantService.delete(req.params.id);
            return res.json(result); // <- volta meu resuultado
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }
};