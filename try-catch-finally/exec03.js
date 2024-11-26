function soma (primeiroNumero, segundoNumero) {

    try {

        if(typeof primeiroNumero !== 'number' || typeof segundoNumero !== 'number') {

            throw new Error('Tipo de dado inválido')
        
        } 
        
        return primeiroNumero + segundoNumero


    } catch (error) {
        
        console.log(error.message);
    
    } finally {

        console.log('Fim da execução da função')

    }

}

console.log(soma(10, 20))


