/* function assyncSum(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject("Arguments must be of type number")
        }
        resolve(a + b)
    })
}

function assyncSubtract(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject("Arguments must be of type number")
        }
        resolve(a - b)
    })
}

const sumResult = assyncSum(50, 23)
const subtractResult = assyncSubtract(40, 10)

Promise.all([sumResult, subtractResult]).then((results) => {
    console.log(results)
}).catch((error) => {
    console.log(error)
}) */

const numbers = [1, 8, 2, 2, 9, 4]

function assyncSquare(x) {
    return new Promise((resolve, reject) => {
        if (typeof x !== 'number') {
            reject("Arguments must be numbers")
        }
        resolve(x ** 2)
    })
}

Promise.all(numbers.map((number) => assyncSquare(number))).then(squares => {
    console.log(squares)
}).catch((error) => {
    console.log(error)
})