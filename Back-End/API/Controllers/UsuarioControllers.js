const UsuarioService = require('../Services/UsuarioService')

module.exports = {

    async store(req, res) {
        try {

            const usuario = UsuarioService.create(req.body);
            return res.status(201).json(usuario);

        } catch (error) {
            return res.status(400).json({ erro: error.message });
        }
    },

    async index(req, res) {

        const lista = UsuarioService.listarUsuarios();
        return res.json(lista);

    },

    async show(req, res) {
        try {

            const { id } = req.params;
            const usuario = UsuarioService.getById(id);
            return res.json(usuario);

        } catch (error) {
            return res.status(404).json({ erro: error.message });
        }
    }
};