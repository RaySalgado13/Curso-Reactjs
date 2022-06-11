//Manera tradicional de manejar promesas:
//Manera 1:
const getImagenPromesa = () => {
    const promesa = new Promise((resolve, reject) => {
        resolve('https://url.com')
    })

    return promesa
}
//Manera 2:
const getImagenPromesa2 = () =>  new Promise( resolve => resolve('https://url.com'))

// getImagenPromesa().then(console.log)
// getImagenPromesa2().then(console.log)


/* 
    Utilizando Async Await se simplifica
    Para manejar errores en async await se debe utilizar try catch
*/

const getImage = async () => { //Al incluir la palabra async, la funcion se convierte en promesa
    try {
        //await permite trabajar el codigo como si fuera sincrono
        const apiKey = 'myPOod3EQUYl8dw0JaEDex7QUzJM8D9h'
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const {data} = await response.json()
        const {url} = data.images.original    
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    } catch (error) {
        console.warn(error)
    }
}

getImage()
