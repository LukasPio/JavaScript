let opcaoMenu
do {

  opcaoMenu = prompt("Escolha uma opção:\n\n"
    + "1- Calcular a área de um triângulo\n"
    + "2- Calcular a área de um retângulo\n"
    + "3- Calcular a área de um quadrado\n"
    + "4- Calcular a área de um trapezio\n"
    + "5- Calcular a área de um círculo\n"
    + "6- Encerrar programa")

  switch (opcaoMenu) {

    case '1':

      let areaTriangulo = {}

      areaTriangulo.base = parseFloat(prompt("Qual é o medida da base desse triângulo?"))
      areaTriangulo.altura = parseFloat(prompt("Qual é o medida da altura desse triângulo?"))

      function calcularTriangulo(base, altura) {
        return area = (base * altura) / 2
      }

      area = calcularTriangulo(areaTriangulo.base, areaTriangulo.altura)
      alert("A área desse triangulo é de " + area + " metros quadrados")
      break

    case '2':

      let areaRetangulo = {}

      areaRetangulo.base = parseFloat(prompt("digite o medida da base desse retangulo"))
      areaRetangulo.altura = parseFloat(prompt("Digite o medida da altura de um retângulo"))

      function calcularRetangulo(base, altura) {
        return area = base * altura
      }

      area = calcularRetangulo(areaRetangulo.base, areaRetangulo.altura)
      alert("A área desse retângulo é de " + area + " metros quadrados")
      break

    case '3':

      let areaQuadrado = {}

      areaQuadrado.base = parseFloat(prompt("Qual é o medida do lado desse quadrado?"))

      function calcularQuadrado(lado) {
        return area = lado * lado
      }

      area = calcularQuadrado(areaQuadrado.base)
      alert("A área desse quadrado é de " + area + " metros quadrados")
      break

    case '4':

      let areaTrapezio = {}

      areaTrapezio.baseMaior = parseFloat(prompt("Digite o medida da maior base desse trapézio"))
      areaTrapezio.baseMenor = parseFloat(prompt("Digite o medida da menor base desse trapézio"))
      areaTrapezio.altura = parseFloat(prompt("Digite o medida da altura desse trapézio"))

      function calcularTrapezio(baseMaior, baseMenor, altura) {
        return area = (baseMaior + baseMenor) * altura / 2
      }

      area = calcularTrapezio(areaTrapezio.baseMaior, areaTrapezio.baseMenor, areaTrapezio.altura)
      alert("A área desse trapézio é de " + area + " metros quadrados")
      break

    case '5':

      let areaCírculo = {}

      areaCírculo.raio = parseFloat(prompt("Digite a medida do raio desse círculo"))
      function calcularCirculo(raio, pi = 3.14) {
        return area = pi * (raio * raio)
      }

      area = calcularCirculo(areaCírculo.raio)
      alert("A área desse círculo é de " + area + " metros quadrados")
      break

    case '6':

      alert("Encerrando...")

      break

    default: alert("Opção inválida!")
  }
} while (opcaoMenu != '6')

alert("O programa foi encerrado!")