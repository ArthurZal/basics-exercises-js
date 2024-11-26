async function chamandoAPI() {
    try {
        const response = await fetch('https://exemplo.com/dados')
        if(!response.ok) {

            throw new Error('Erro de conexão')
        }

        const data =  await response.json()
        console.log(data)
    
    } catch (error) {
        console.error('Erro ao buscar dados:', error)
    } 
}

setTimeout(chamandoAPI, 3000)