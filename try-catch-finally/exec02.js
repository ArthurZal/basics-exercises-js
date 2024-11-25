const car = {
    color: "red",
    price: 50000,
    brand: "Volkswagen"
}


try {

    if(!("teste" in car)){

        throw new Error(`A propriedade ${property} não existe no objeto.`)

    } else {

        console.log(car.teste)

    }

} catch (error) {

    console.log(error)

} finally {

    console.log("Fim da execução do programa!")

}
