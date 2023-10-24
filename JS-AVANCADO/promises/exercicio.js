function calculateBmi(peso, altura) {
    return new Promise((resolve, reject)=> {
        if (isNaN(peso) | isNaN(altura)) {
            reject("The two arguments must be numbers")
        }
        const bmi = peso / (altura * altura)
        resolve(bmi)
    })
}

function executeBmi(peso, altura) {
        calculateBmi(peso, altura).then((bmi)=> {
        console.log("IMC calculado: " + bmi)
        let situation = ""
        if (bmi < 18.5) {
            situation = "magreza"
        }
        else if (bmi > 18.5 && bmi < 24.) {
            situation = "normal"
        }
        else if (bmi > 25 && bmi < 29.9) {
            situation = "sobrepeso"
        }
        else if (bmi > 30 && bmi < 39.9) {
            situation = "obesidade"
        }
        else {
            situation = "obesidade grave"
        }
        console.log(`Situação: ${situation}`)
    }).catch((error)=> {
        console.log("Um erro ocorreu. Erro: " + error)
    }).finally(()=> {
        console.log("Os processos da promise foram encerrados!")
    })
    
    console.log(`Calculando IMC para altura: ${altura} e peso: ${peso}...`)
}

executeBmi(71, 1.74)
executeBmi(48, 1.6)
executeBmi(71, "lucas")
executeBmi(82, 1.72)
executeBmi(120, 1.7)