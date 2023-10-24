async function calculateBmi(peso, altura) {
 if (isNaN(peso) || isNaN(altura)) {
   return Promise.reject("The arguments must be type of numbers")
 }
 return peso / (altura ** 2)
}

async function executeBmi(peso, altura) {
  const bmi = calculateBmi(peso, altura);
  bmi.then((result) => {
    console.log(result);
    let situation = "";
    if (bmi < 18.5) {
      situation = "magreza";
    } else if (bmi > 18.5 && bmi < 24) {
      situation = "normal";
    } else if (bmi > 25 && bmi < 29.9) {
      situation = "sobrepeso";
    } else if (bmi > 30 && bmi < 39.9) {
      situation = "obesidade";
    } else {
      situation = "obesidade grave";
    }
    console.log(`Situação: ${situation}`);
  }).catch((erro) => console.log(erro))

    console.log(`Calculando o IMC para a altura: ${altura} e peso: ${peso}`)
}

executeBmi(71, 1.74)
executeBmi(48, 1.6)
executeBmi(71, "lucas")
executeBmi(82, 1.72)
executeBmi(120, 1.7)