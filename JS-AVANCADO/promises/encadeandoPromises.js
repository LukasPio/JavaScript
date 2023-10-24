function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age > 18) {
            resolve(age > 18)
        }
        reject(new Error("The age must be over 18"))
    })
}

function getAge(birthday) {
    return new Promise((resolve, reject) => {
        if (birthday) {
            const birthYear = new Date(birthday).getFullYear()
            const currentYear = new Date().getFullYear()
            resolve(currentYear - birthYear)
        }
        else {
            reject(new Error("Birthday is required"))
        }
    })
}

/* getAge('1999-01-29').then((result) => {
    checkAge(result).then((isOver18) => {
        if (isOver18) {
            console.log("Maior de idade")
        }
        else {
            console.log("Menor de idade")
        }
    }).catch((error) => {
        console.log(error)
    })
}).catch((error) => {
    console.log(error)
}) */

getAge("2009-01-29")
  .then((age) => checkAge(age))
  .then((isOver18) => {
    if (isOver18) {
      console.log("Maior de idade");
    } else {
      console.log("Menor de idade");
    }
  }).catch((error) => {
    console.log(error.message)
  })
