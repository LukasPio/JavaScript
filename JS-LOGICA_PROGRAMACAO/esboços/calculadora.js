let opcao;

function somar() {

  const value1 = parseFloat(prompt("Digite o primeiro número"))
  const value2 = parseFloat(prompt("Digite o segundo número"))

  if (isNaN(value1) || isNaN(value2) || value1 === null || value2 === null) {
    return "Um ou mais valores inválidos!"
  }

  const resultado = value1 + value2
  const resultadoF = ["O resultado é " + resultado]
  return resultadoF
}

function subtrair() {

  const value1 = parseFloat(prompt("Digite o primeiro número"))
  const value2 = parseFloat(prompt("Digite o segundo número"))

  if (isNaN(value1) || isNaN(value2 || value1 === null || value2 === null)) {
    return "Um ou mais valores inválidos!"
  }

  const resultado = value1 - value2
  const resultadoF = ["O resultado é " + resultado]
  return resultadoF
}

function dividir() {

  const value1 = parseFloat(prompt("Digite o primeiro número"))
  const value2 = parseFloat(prompt("Digite o segundo número"))

  if (isNaN(value1) || isNaN(value2) || value1 === null || value2 === null) {
    return "Um ou mais valores inválidos!"
  }

  const resultado = value1 / value2
  const resultadoF = ["O resultado é " + resultado]
  return resultadoF
}

function multilplicar() {

  const value1 = parseFloat(prompt("Digite o primeiro número"))
  const value2 = parseFloat(prompt("Digite o segundo número"))

  if (isNaN(value1) || isNaN(value2) || value1 === null || value2 === null) {
    return "Um ou mais valores inválidos!"
  }

  const resultado = value1 * value2
  const resultadoF = ["O resultado é " + resultado]
  return resultadoF
}

function radiciacao() {
  const value = prompt("Digite o número que deseja para descobrir sua raiz quadrada")
  resultado = "O resultado é " + Math.sqrt(value)
  return resultado
}

function potenciacao() {
  const base = prompt("Digite a base da potência")
  const expoente = prompt("Digite o valor do expoente")
  const resultado = "O resultado é " + Math.pow(base, expoente)
  return resultado
}
function baskara() {

  const valueA = parseFloat(prompt("Digite o valor de a"))
  const valueB = parseFloat(prompt("Digite o valor de b"))
  const valueC = parseFloat(prompt("Digite o valor de c"))

  if (isNaN(valueA) || isNaN(valueB) || isNaN(valueC) || valueA === null || valueB === null || valueC === null) {
    return "Um ou mais valores inválidos!"
  }

  delta = Math.pow(valueB, 2) - 4 * valueA * valueC

  if (delta > 0) {
    const resultado1 = (-valueB + Math.sqrt(delta)) / (2 * valueA)
    const resultado2 = (-valueB - Math.sqrt(delta)) / (2 * valueA)
    const resultados = [resultado1 + " e " + resultado2]
    const resultadosF = "As raízes dessa equação são " + resultados
    return resultadosF
  }

  else if (delta === 0) {
    const resultado = -valueB / 2 * valueA
    const resultadoF = "A raíz dessa equação é " + resultado
    return resultadoF
  }

  else {
    return "Como o delta é " + delta + ", ele não possui raízes por ser negativo."
  }

}

function pitagoras() {
  opcao = prompt("O que deseja calcular usando pitagoras?" + "\n1- Cateto" + "\n2- Hipotenusa")

  if (opcao == '1') {

    const cateto = prompt("Digite o valor do outro cateto")
    const hipotenusa = prompt("Digite o valor da hipotenusa")
    const resultado = Math.sqrt(Math.pow(hipotenusa, 2) - Math.pow(cateto, 2))
    const resultadoF = ["O valor do cateto é de " + resultado]

    return resultadoF
  }

  else if (opcao == '2') {

    const cateto = prompt("Digite o valor de um cateto")
    const cateto2 = prompt("Digite o valor do outro cateto")
    const hipotenusa = Math.sqrt(Math.pow(cateto, 2) + Math.pow(cateto2, 2))
    const resultadoF = ["O valor da hipotenusa é de " + hipotenusa]

    return resultadoF
  }
  else {
    return "Opção inválida!"
  }

}


do {

  opcao = prompt("Olá, digite o valor correspondente da operação que deseja realizar" +
    "\n1- Operações básicas" +
    "\n2- Operações algébricas" +
    "\n3- Operações geométricas")

  switch (opcao) {

    case '1':

      operacaoBasica = prompt("Qual das 4 operações básicas você deseja realizar?" + "\n1- Soma" + "\n2- Subtração" + "\n3- Multiplicação" + "\n4- Divisão")

      switch (operacaoBasica) {

        case '1': alert(somar())
          break
        case '2': alert(subtrair())
          break
        case '3': alert(multilplicar())
          break
        case '4': alert(dividir())
          break
        default: alert("Opção inválida")
      }
      break

    case '2':

      operacaoAlgebrica = prompt("Escolha qual operação algébrica você deseja realizar:" + "\n1- Radiciação" + "\n2- Potenciação" + "\n3- Fórmula de bhaskara")

      switch (operacaoAlgebrica) {

        case '1': alert(radiciacao())
          break
        case '2': alert(potenciacao())
          break
        case '3': alert(baskara())
          break
        default: alert("Opção inválida")
      }
      break

    case '3':

      operacaoGeometrica = prompt("Escolha a operação geometrica que deseja realizar:" + "\n1- Área/Perímetro/Volume" + "\n2- Teorema de Pitágoras")

      switch (operacaoGeometrica) {

        case '1':

          forma = prompt("Qual forma geométrica você deseja calcular?" + "\n1- Retângulo" + "\n2- Triângulo" + "\n-3 Volume")

          switch (operacao) {
            case '1': area = prompt("Esolha qual forma geométrica você deseja calcular a área" + "\n1")


          }
      }

    default: alert("Opção inválida")
  }
} while (opcao != '7')

alert("Programa encerrado!")