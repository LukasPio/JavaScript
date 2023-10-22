let imovelLista = {
  imovelCadastrados: []
}
let opcaoMenu;
do {
  opcaoMenu = prompt("Quantidade de imóveis cadastrados: " + imovelLista.imovelCadastrados.length +
    "\nOpcoes:" + "\n1- Salvar um imóvel" + "\n2- Mostrar todos os imóveis cadastrados" + "\n3- Sair");

  switch (opcaoMenu) {

    case '1':
      let nome = prompt("Qual é o nome do proprietário desse imóvel?")
      let quartos = parseFloat(prompt("Quantos quartos esse imóvel possui?"))
      let garagem = prompt("Essa casa possui garagem?")
      let banheiro = parseFloat(prompt("Quantos banheiros esse imóvel possui?"))
      let imovelNovo = {
        "Qual é o nome do proprietário desse imóvel?": nome,
        "Quantos quartos esse imóvel possui?": quartos,
        "Essa casa possui garagem?": garagem,
        "Quantos banheiros esse imóvel possui?": banheiro
      }
      imovelLista.imovelCadastrados.push(imovelNovo)
      break
    case '2':
      let mensagem = ""
      for (i = 0; i < imovelLista.imovelCadastrados.length; i++) {
        mensagem += "\nImóvel " + (i + 1) + ":\n"
        mensagem += "Nome do propietário: " + imovelLista.imovelCadastrados[i]["Qual é o nome do proprietário desse imóvel?"] + "\n";
        mensagem += "Quantidade de quartos: " + imovelLista.imovelCadastrados[i]["Quantos quartos esse imóvel possui?"] + "\n";
        mensagem += "Quantidade de banheiros: " + imovelLista.imovelCadastrados[i]["Quantos banheiros esse imóvel possui?"] + "\n";
        mensagem += "Possui garagem? " + imovelLista.imovelCadastrados[i]["Essa casa possui garagem?"] + "\n"
      }
      alert("Imóveis cadastrados: " + mensagem)

      break
    case '3':
      alert("Encerrando...")
      break
    default: alert("Opção inválida!")
  }
} while (opcaoMenu != 3)

alert("O programa foi encerrado!")