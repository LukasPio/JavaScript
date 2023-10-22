let imoveis = [];

let opcaoMenu;
do {
  opcaoMenu = prompt("Quantidade de imóveis cadastrados: " + imoveis.length +
    "\nOpções:" + "\n1- Salvar um imóvel" + "\n2- Mostrar todos os imóveis cadastrados" + "\n3- Sair");

  switch (opcaoMenu) {
    case '1':
      let imovel = {};
      imovel.nome = prompt("Qual é o nome do proprietário desse imóvel?");
      imovel.quartos = parseInt(prompt("Quantos quartos esse imóvel possui?"));
      imovel.garagem = prompt("Essa casa possui garagem?");
      imovel.banheiro = parseInt(prompt("Quantos banheiros esse imóvel possui?"));

      imoveis.push(imovel);
      break;

    case '2':
      let listaImoveis = "";
      for (let i = 0; i < imoveis.length; i++) {
        listaImoveis += "\nImóvel " + (i + 1) + ":\n" +
          "Nome do proprietário: " + imoveis[i].nome + "\n" +
          "Quantidade de quartos: " + imoveis[i].quartos + "\n" +
          "Quantidade de banheiros: " + imoveis[i].banheiro + "\n" +
          "Possui garagem? " + imoveis[i].garagem + "\n";
      }
      alert("Imóveis cadastrados: " + listaImoveis);
      break;

    case '3':
      alert("Encerrando...");
      break;

    default:
      alert("Opção inválida!");
      break;
  }
} while (opcaoMenu != '3');

alert("O programa foi encerrado!");