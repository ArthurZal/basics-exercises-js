function user(nome, idade) {

    if(typeof nome == 'undefined' || typeof idade == 'undefined') {
        throw new Error('Dados não encontrados!');
        
    } else {
        console.log(nome, idade)
    }

}

try {
    user('Arthur', 24)

} catch (error) {
    console.log(error.message)
}
