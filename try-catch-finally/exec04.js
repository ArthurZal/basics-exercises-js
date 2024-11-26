function verificarIdade(idade) {

    try {
        if( !Number.isInteger(idade) || idade < 18) {
            throw new Error('Idade inválida para cadastro no sistema!')
        
        } else {   
            console.log('Usuário cadastrado com sucesso!')
        }
    } catch(error) {
        console.log(error.message)
    }
}

verificarIdade()