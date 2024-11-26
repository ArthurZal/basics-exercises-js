function convertJson(string) {
     const novoJson = JSON.parse(string)
    return novoJson
}

const myString = '{"nome": "Arthur", "idade": 24}'

try {
    console.log(convertJson(myString))
} catch (error) {
    console.error(error)
}