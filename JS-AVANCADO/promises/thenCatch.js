function execute() {
    return new Promise ((resolve, reject)=> {
        console.log("Sendo executada")
        setTimeout(() => {
            if (false) {
                reject("A promise foi rejeitada")
            }
            console.log("Resolvendo a promise")
            resolve(10)
        }, 1000 * 2)
    }) 
}

execute().then((resultado)=> {
    console.log("A promise resultou em " + resultado)
}).catch((error)=> {
    console.log(`Promise rejeitada. Motivo: ${error}`)
}).finally(()=> {
    console.log("Os processos foram encerrados")
})