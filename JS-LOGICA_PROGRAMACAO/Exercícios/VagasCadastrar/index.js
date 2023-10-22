let opcaoMenu = 0;
const vagas = []

do {
  opcaoMenu = prompt('Ola, o que deseja em nosso sistema? \n\n1- Listar vagas disponíveis \n2- Criar uma nova vaga \n3- Visualizar uma vaga \n4-Inscrever um candidato para uma vaga \n5- Excluir uma vaga \n6- Sair')

  switch (opcaoMenu) {

    case '1':

      if (vagas.length > 0) {
        const lista = vagas.reduce((acumulador, vaga, indice) => {
          acumulador += (indice + '. ' + vaga.nome + '(' + vaga.candidatos.length + ' candidatos) \n')
          return acumulador
        }, '')

        alert(lista)

        break
      }

      alert('Não tem vagas disponiveis')

      break
    case '2':

      const nomeVaga = prompt('Digite um nome para a vaga')
      const descricaoVaga = prompt('Digite uma breve descrição sobre a vaga em questão')
      const dataLimiteVaga = prompt('Digite uma data limite para sua vaga')

      const novaVaga = {
        nome: nomeVaga,
        descricao: descricaoVaga,
        dataLimite: dataLimiteVaga,
        candidatos: []
      }

      const confirmacao = confirm('Deseja cadastrar a seguinte vaga? \n\n' +
        'Nome da vaga: ' + novaVaga.nome +
        '\nDescrição da vaga: ' + novaVaga.descricao +
        '\nData limite da vaga: ' + novaVaga.dataLimite)

      if (confirmacao) {
        vagas.push(novaVaga)
      }

      break
    case '3':

      const indiceVisualizar = prompt('Digite o índice da vaga a ser apresentada')
      const vagaVisualizar = vagas[indiceVisualizar]

      if (vagas[indiceVisualizar]) {

        const candidatosTexto = vagaVisualizar.candidatos.reduce((acumulador, candidatos) => {
          return acumulador + '\n - ' + candidatos
        }, '')

        alert('Nome da vaga: ' + vagaVisualizar.nome +
          '\nDescrição da vaga: ' + vagaVisualizar.descricao +
          '\nData limite: ' + vagaVisualizar.dataLimite +
          '\nNúmero de candidatos inscritos: ' + vagaVisualizar.candidatos.length +
          '\nNome dos candidatos: ' + candidatosTexto)
        break
      }

      alert('Não existe uma vaga com o índice ' + indiceVisualizar)

      break
    case '4':

      const nomeCandidato = prompt('Insira o nome do candidato a ser cadastrado na vaga')
      const indiceCandidato = prompt('insira o indice da vaga requerida')

      if (vagas[indiceCandidato]) {
        const confirmaCadastrar = confirm('Tem certeza que quer cadastrar o canditato ' + nomeCandidato + ' na vaga de indice ' + indiceCandidato + '?')

        if (confirmaCadastrar) {
          vagas[indiceCandidato].candidatos.push(nomeCandidato)
        }
        break
      }

      alert('No momento não há nenhuma vaga de índice ' + indiceCandidato)

      break
    case '5':

      if (vagas.length > 0) {
        const indiceExcluir = prompt('Escreva o indice da vaga à ser excluída')

        if (vagas[indiceExcluir]) {
          const confirmaExcluir = confirm('Deseja excluir a vaga: ' +
            '\n\nNome da vaga: ' + vagas[indiceExcluir].nome +
            '\nDescricao ' + vagas[indiceExcluir].descricao +
            '\nData limite: ' + vagas[indiceExcluir].dataLimite)

          if (confirmaExcluir) {
            vagas.splice(indiceExcluir, 1)
            alert('Vaga excluída!')
            break
          }
        }

        alert('Não existe nenhuma vaga com o índice ' + indiceExcluir)
        break
      }

      alert('No momento, não há vagas disponíveis')
      break

    case '6': alert('Encerrando o programa...')

      break
    default: alert('Opção inválida!')
  }
} while (opcaoMenu != 6)

