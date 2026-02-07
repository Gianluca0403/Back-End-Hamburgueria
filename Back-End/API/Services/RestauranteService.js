const Restaurante = require('../Models/RestauranteDB');

class restaurantesService {

    async create(data) {
        const horasFuncionamento = [
            { dia: 'Segunda', abertura: '09:00', fechamento: '18:00', isOpen: true },
            { dia: 'Terça', abertura: '09:00', fechamento: '18:00', isOpen: true },
            { dia: 'Quarta', abertura: '09:00', fechamento: '18:00', isOpen: true },
            { dia: 'Quinta', abertura: '09:00', fechamento: '18:000', isOpen: true },
            { dia: 'Sexta', abertura: '09:00', fechamento: '22:00', isOpen: true },
            { dia: 'Sábado', abertura: '09:00', fechamento: '22:00', isOpen: true },
            { dia: 'Domingo', abertura: '09:00', fechamento: '22:00', isOpen: true },
        ];

        return await Restaurante.create({
            name: data.name,
            slug: data.slug,
            logo: data.logo,
            coverImage: data.coverImage,
            description: data.description || 'Descrição padrão do restaurante.',
            address: data.address,
            phone: data.phone,
            isActive: data.isActive ?? true,
            openingHours: data.openingHours || horasFuncionamento
        });
    }

    async ListarRestaurante() {
        return await Restaurante.find(); // busca direto no banco de dados
    }

    //pegando os restaurantes pelo id (nome em ingles mais facil de entender)
    async getByID(id) {
        const res = await Restaurante.findById(id); // o Mongo busca pelo ID automático
        if (!res) throw new Error("Restaurante nao foi encontrado");
        return res;
    }

    async update(id, updateData) {
        // me retorna uma posição do array (o find.index faz isso pra mim) 
        // obs: No Mongo usamos findByIdAndUpdate para simplificar
        const res = await Restaurante.findByIdAndUpdate(id, updateData, { new: true });
        if (!res) throw new Error("Restaurante não encontrado");

        // aqui ele sobreescreve apenas oque eu colocar de novo, exemplo um numero novo, ou um novo endereço
        return res;
    }

    async delete(id) {
        // acha a posição no array pra mim / splice é como se fosse uma tesoura, ele vai cortar fora oque eu deletar
        const res = await Restaurante.findByIdAndDelete(id);
        if (!res) throw new Error("Restaurante nao foi encontrado");

        return { message: "Restaurante removido com sucesso" };
    }
}

module.exports = new restaurantesService();