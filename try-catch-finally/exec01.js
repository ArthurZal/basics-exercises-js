function divisao (primeiroNumero, segundoNumero) {

    if (primeiroNumero === 0) {

        throw new Error("Por favor, digite um número válido")
    
    } else {

        return primeiroNumero / segundoNumero 

    } 

}

try {
    
    console.log(divisao(0, 2));

} catch (error) {
    
    console.log(error)

} 