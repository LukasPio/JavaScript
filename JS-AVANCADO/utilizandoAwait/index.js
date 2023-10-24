async function assyncSum(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return Promise.reject("Arguments must be of type number");
    }
    return a + b;
  }

/* async function execute() {
 assyncSum(50, 22).then((resultSum) => console.log(resultSum))
} */

// await faz com que o código espere o resultado da promise para continuar
async function execute () {
    try {
        const result = await assyncSum("50", 22)
        console.log(result)
    } catch (error) {
        console.error(error)
    }
}

execute()