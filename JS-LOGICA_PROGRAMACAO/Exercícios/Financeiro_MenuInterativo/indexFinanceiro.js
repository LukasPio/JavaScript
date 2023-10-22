alert("Esse é o Controle de finanças!")
let dinheiro = parseFloat(prompt("Digite quanto dinheiro você possui"))
let opcao;
do {
  opcao = parseFloat(prompt("Você possui: " + dinheiro + "R$" + " Escolha alguma das opções para continuar: \n1- Adicionar dinheiro \n2- Remover dinheiro \n3- Encerrar programa"))
  if (opcao === 1) {
    dinheiro += parseFloat(prompt("Quanto dinheiro você deseja adicionar?"))
  }
  else if (opcao === 2) {
    dinheiro -= parseFloat(prompt("Quanto dinheiro você deseja remover?"))
  }
  else if (opcao === 3) {
    alert("Encerrando o programa...")
  }
  else {
    alert("Opção inválida")
  }
} while (opcao != 3)
alert("O programa foi encerrado")