let pilha = [];
let opcaoMenu;
do {

  opcaoMenu = prompt("Cartas no baralho: " + pilha.length + "\n1- Adicionar uma carta" + "\n2- Puxar uma carta" + "\n3- Sair")

  switch (opcaoMenu) {

    case '1':
      let cartaNova = prompt("Qual e o nome da carta a ser adicionada?")
      pilha.unshift(cartaNova)
      break
    case '2':
      let puxarCarta = pilha.shift()
      if (!puxarCarta) {
        alert("Não tem mais cartas no baralho!")
      }
      else {
        alert("voce puxou a carta: " + puxarCarta)
      }
      break
    case '3':
      alert("Encerrando...")
      break
    default: alert("Opcão inválida!")
  }
} while (opcaoMenu !== '3')
alert("O programa foi encerrado!")