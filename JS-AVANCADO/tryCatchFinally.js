function sum(a, b) {
    const oneNumber = Number(a)
    const otherNumber = Number(b)
    if (isNaN(oneNumber) || isNaN(otherNumber)) {
        throw new Error("Two arguments must be numbers!")
    }
    return oneNumber + otherNumber
}

try {
    console.log(sum('1', 6))
console.log(sum(true, 8))
// console.log(sum(undefined, 5))
console.log(sum(1, 7))
} catch (error) {
    console.error(error.message)
}  finally {
    console.log("Sum completed!")
}

