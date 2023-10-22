let listaImovel = {
  imovelCadastrado: []
}

let opcaoMenu;
do {
  opcaoMenu = prompt("Quantidade de imóveis cadastrados: " + listaImovel.imovelCadastrado.length +
    "\nOpcoes:" + "\n1- Salvar um imóvel" + "\n2- Mostrar todos os imóveis cadastrados" + "\n3- Sair");
  switch (opcaoMenu) {
    case '1':
      let nome = prompt("Qual o nome do proprietário desse imóvel?");
      let qbanheiro = parseFloat(prompt("Qual é a quantidade de banheiros desse imóvel?"));
      let qquartos = parseFloat(prompt("Qual é a quantidade de quartos desse imóvel?"));
      let garagem = prompt("Esse imóvel possui garagem?(Sim/Não)");

      let imovelNovo = {
        "nome do proprietário": nome,
        "quantidade de banheiros": qbanheiro,
        "quantidade de quartos": qquartos,
        "possui garagem": garagem,
      }

      listaImovel.imovelCadastrado.push(imovelNovo);
      break;
    case '2':
      let mensagem = "";
      for (let i = 0; i < listaImovel.imovelCadastrado.length; i++) {
        mensagem += "\nImóvel " + (i + 1) + ":\n";
        mensagem += "Nome do proprietário: " + listaImovel.imovelCadastrado[i]["nome do proprietário"] + "\n";
        mensagem += "Quantidade de banheiros: " + listaImovel.imovelCadastrado[i]["quantidade de banheiros"] + "\n";
        mensagem += "Quantidade de quartos: " + listaImovel.imovelCadastrado[i]["quantidade de quartos"] + "\n";
        mensagem += "Possui garagem? " + listaImovel.imovelCadastrado[i]["possui garagem"] + "\n";
      }
      alert("Esses são os imóveis cadastrados: " + mensagem);
      break;
    case '3':
      alert("Encerrando...");
      break;
    default:
      alert("Opção inválida");
  }
} while (opcaoMenu != '3');

