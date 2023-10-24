
async function assyncSum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject("Arguments must be of type number");
  }
  return a + b;
}

async function assyncSubtract(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return Promise.reject("Arguments must be of type number");
    }
    return a - b;
}

const sumResult = assyncSum(50, 23);
const subtractResult = assyncSubtract(40, 10);

Promise.all([sumResult, subtractResult])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  });