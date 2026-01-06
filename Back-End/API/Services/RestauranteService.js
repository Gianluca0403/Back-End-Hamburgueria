let restaurantes = []; // meu BD fake

class restaurantesService{

    create(data){

        const newRestaurante = {

            ...data, // pega tudo que veio do body
            cretedAt: new date (),
            isActive: data.isActive ?? true // padrao ativo caso nao seja enviado

        };

        restaurantes.push(newRestaurante)
        return newRestaurante;

    }

    listarTudo(){

        return restaurantes;

    }

    //pegando os restaurantes pelo id (nome em ingles mais facil de entender)
    getByID(id){

        const res = restaurantes.find(restaurante => restaurante.id === id)
        if (!restaurantes) throw new Error ("Restaurante nao foi encontrado")
        return restaurantes;

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