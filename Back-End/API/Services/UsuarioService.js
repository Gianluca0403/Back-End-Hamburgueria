const Usuario = require('../Models/UsuarioDB');

class UsuarioService {
    async create(data) {
        return await Usuario.create({
            nome: data.nome,
            email: data.email,
            senha: data.senha, // futuramente usar uma hash
            funcao: data.funcao || 'cliente' // cliente ou adm
        });
    }

    async listarUsuarios() {
        return await Usuario.find();
    }

    async getById(id) {
        const user = await Usuario.findById(id);
        if (!user) throw new Error("Usuario nao encontrado");
        return user;
    }

    async update(id, data) {
        const user = await Usuario.findByIdAndUpdate(id, data, { new: true });
        if (!user) throw new Error("Usuario nao encontrado");
        return user;
    }

    async delete(id) {
        const user = await Usuario.findByIdAndDelete(id);
        if (!user) throw new Error("Usuario nao encontrado");
        return { message: "Usuario deletado" };
    }
}

module.exports = new UsuarioService();