
/*
console.log(new Date())
const timeoutId = setTimeout(()=> {
    console.log(new Date())
}, 3000)

clearTimeout(timeoutId)
*/

let seconds = 0

const intervalId = setInterval(()=> {
    console.log('se passaram: ' + seconds + ' segundos')
    seconds++
    if (seconds > 10) {
        clearInterval(intervalId)
        console.log("Tempo esgotado...")
    }
}, 1000)
