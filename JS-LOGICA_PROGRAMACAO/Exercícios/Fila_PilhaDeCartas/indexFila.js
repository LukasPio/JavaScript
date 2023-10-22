let fila = []
let opcaoMenu

do {
  let pacientes = ""
  for (let i = 0; i < fila.length; i++) {
    pacientes += (i + 1) + "º - " + fila[i] + "\n"
  }

  opcaoMenu = prompt("Pacientes Aguardando: \n" + pacientes +
    "\nOpções:" + "\n1- Novo Paciente" + "\n2- Consultar Paciente" + "\n3- Sair")

  switch (opcaoMenu) {
    case '1': const NovoPaciente = prompt("Digite o nome do paciente que quer adicionar na fila");
      fila.push(NovoPaciente)
      break
    case '2': const PacienteConsultado = fila.shift();
      alert(PacienteConsultado + " foi removido da fila")
      break
    case '3': alert("Encerrando")
      break
    default: alert("Opção inválida")
  }
}
while (opcaoMenu !== '3')
alert("Foi difícil, mas deu!")
