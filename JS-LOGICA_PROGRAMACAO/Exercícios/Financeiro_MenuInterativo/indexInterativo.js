let opcao;
do {
  opcao = parseFloat(prompt("Opções: \n1- Continuar \n2- Continuar \n3- Continuar \n4- Continuar \n5- Encerrar"))
  switch (opcao) {
    case 1: alert("O programa continua")
      break
    case 2: alert("O programa continua")
      break
    case 3: alert("O programa continua")
      break
    case 4: alert("O programa continua")
      break
    case 5: alert("Encerrando...")
  }
} while (opcao != 5)
alert("O programa foi encerrado!")
