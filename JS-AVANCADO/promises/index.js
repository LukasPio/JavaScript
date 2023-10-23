/* const p = new Promise((resolve, reject) => {
    console.log("A promise está sendo executada")
    setTimeout(()=> {
        if (true) {
            reject(false)
        }
        console.log("Resolvendo a promisse")
        resolve(true)
    }, 2000)
})

console.log(p)

setTimeout(()=> {
    console.log(p)
}, 2500)
*/

function execute() {
    // fazendo alguma coisa

    return new Promise ((resolve, reject)=> {
        console.log("Sendo executada")
        setTimeout(() => {
            console.log("Resolvendo a promise")
            resolve('Resultado')
        }, 1000)
    }) 
}

const p = execute()

console.log(p)

setTimeout(() => {
    console.log(p)
}, 2000)