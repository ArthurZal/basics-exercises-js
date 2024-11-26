function convertNumber(number) {

    try {
        if(typeof number !== 'number') {
            throw new Error('Tipo de dado inválido!')
        } else {
            console.log(number)
        }
    } catch(error) {
        console.log(error.message)
    }
}

convertNumber()