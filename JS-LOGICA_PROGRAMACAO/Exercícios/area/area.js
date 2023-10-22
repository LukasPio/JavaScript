let opcaoMenu = ""
do {

  opcaoMenu = prompt("Olá, qual área você deseja calcular?\n"
    + "1- Área de um triângulo\n"
    + "2- Área de um retângulo\n"
    + "3- Área de um quadrado\n"
    + "4- Área de um trapezio\n"
    + "5- Área de um círculo\n"
    + "6- Encerrar programa")
  switch (opcaoMenu) {

    case '1':

      let areaTriangulo = {}
      areaTriangulo.base = parseFloat(prompt("Qual é o valor da base desse triângulo?"))
      areaTriangulo.altura = parseFloat(prompt("Qual é o valor da altura desse triângulo?"))

      function calcularTriangulo(base, altura) {
        return area = (base * altura) / 2
      }
      area = calcularTriangulo(areaTriangulo.base, areaTriangulo.altura)
      alert("A área desse triangulo é de " + area + " metros quadrados")


      break
    case 2: function areaTriangulo(base, altura) {
      let triangulo = (b * h) / 2
      return triangulo
    }
      break
    case 3: function areaTriangulo(base, altura) {
      let triangulo = (b * h) / 2
      return triangulo
    }
      break
    case 4: function areaTriangulo(base, altura) {
      let triangulo = (b * h) / 2
      return triangulo
    }
      break
    case '5': function areaTriangulo(base, altura) {
      let triangulo = (b * h) / 2
      return triangulo
    }
      break
    case '6': alert("Encerrando o programa...")
    default: ("Opção inválida!")
  }
} while (opcaoMenu != '6')
alert("O programa foi encerrado!")