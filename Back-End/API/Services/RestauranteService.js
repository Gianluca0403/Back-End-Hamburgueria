let restaurantes = []; // meu BD fake

class restaurantesService{

    create(data){

      const horasFuncionamento = [
        { dia: 'Segunda', abertura: '09:00', fechamento: '18:00', isOpen: true },
        { dia: 'Terça', abertura: '09:00', fechamento: '18:00', isOpen: true },
        { dia: 'Quarta', abertura: '09:00', fechamento: '18:00', isOpen: true },
        { dia: 'Quinta', abertura: '09:00', fechamento: '18:000', isOpen: true },
        { dia: 'Sexta', abertura: '09:00', fechamento: '22:00', isOpen: true },
        { dia: 'Sábado', abertura: '09:00', fechamento: '22:00', isOpen: true },
        { dia: 'Domingo', abertura: '09:00', fechamento: '22:00', isOpen: true },
    ];

    const ListarRestaurante = {  
        id: Date.now().toString(), 
        name: data.name,
        slug: data.slug,
        logo: data.logo,                                                                                       
        coverImage: data.coverImage,
        description: data.description || 'Descrição padrão do restaurante.',
        address: data.address,
        phone: data.phone,
        isActive: data.isActive ?? true,
        openingHours: data.openingHours || horasFuncionamento, 
        createdAt: new Date()
    };

        restaurantes.push(newRestaurante)
        return newRestaurante;

    }

    ListarTudo(){

        return restaurantes;

    }

    //pegando os restaurantes pelo id (nome em ingles mais facil de entender)
    getByID(id){

        const res = restaurantes.find(restaurante => restaurante.id === id)
        if (!restaurantes) throw new Error ("Restaurante nao foi encontrado")
        return res;

    }

    uptade(id , uptadeData){

        // me retorna uma posição do array (o find.index faz isso pra mim)
        const uptades = restaurantes.findIndex(restaurante => restaurante.id === id);
        if (index === -1) throw new Error ("Restaurante não encontrado")

        // aqui ele sobreescreve apenas oque eu colocar de novo, exemplo um numero novo, ou um novo endereço
        restaurantes [index] = { ...restaurantes[index], ...uptadeData}
        return restaurantes[index]

    }


    delete(id){

        //acha a posição no array pra mim
        const deletes = restaurantes.findIndex(restaurante => restaurante.id === id)
        if(index === -1) throw new Error ("Restaurante nao foi encontrado")

        // splice é como se fosse uma tesoura, ele vai cortar fora oque eu deletar
        restaurantes.splice(index, 1);
        return {message: "Restaurante removido com sucesso"}

    }

}

module.exports = new restaurantesService;