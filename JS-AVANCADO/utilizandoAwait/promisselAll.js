function waitFor (seconds) {
    return new Promise((resolve) => {
        setTimeout(() => resolve())
    }, seconds * 1000)
}

const numbers = [1, 9, 3, 1, 0, 4, 2, 8]


// Promise.all(squares).then((results) => console.log(results))

async function execute() {
    console.time('map')
    const squares = await Promise.all(numbers.map(async (number) => {
        await waitFor(2)
        return number * number
      }))

      console.log(squares)
      
      console.timeEnd('map')
}

execute()


