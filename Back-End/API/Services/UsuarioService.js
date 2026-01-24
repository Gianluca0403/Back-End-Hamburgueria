let usuarios = [];

class UsuarioService{
    create(data){

        const NovoUsuario = {

            id : Date.now().toString(),
            nome: data.nome,
            email: data.email,
            senha: data.senha, // futuramente usar uma hash
            funcao: data.funcao || 'cliente', // cliente ou adm
            createdAt: new Date ()

        }

        usuarios.push(NovoUsuario)
        return NovoUsuario

    }

    listarUsuarios(){

        return usuarios;

    }

    getById(id){

        const user = usuarios.find(u => u.id === id);
        if (!user) throw new Error ("Usuario nao encontrado")
        return user;

    }

    update(id, data){

        const index = usuarios.findIndex(u => u.id === id);
        if(index === -1) throw new Error ("Usuario nao encontrado");
        usuarios[index] = {...usuarios[index],... data};
        return usuarios[index]

    }

    delete(id){

        const index = usuarios.findIndex(u => u.id === id);
        if (index === -1) throw new Error ("Usuario nao encontrado")
        usuarios.splice(index , 1);
        return { message: "Usuario deletado" }

    }

}

module.exports = new UsuarioService(); 