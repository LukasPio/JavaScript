const name = prompt("Olá, qual é o seu nome?");
let visita = prompt("Você já visitou alguma cidade? (Sim/Não)");

let cidades = " "
let cidadesVisitadas = 1

while (visita === "Sim") {
  cidades += ("\n" + prompt("Qual é o nome da cidade que você visitou?"));

  visita = prompt("Já visitou mais alguma? (Sim/Não)");
  if (visita === "Sim") {
    cidadesVisitadas += 1
  }
}
alert("Lista de cidades que " + name + " Visitou:" + "\n" + cidades + "\nContabilizando um total de " + cidadesVisitadas + " cidades visitadas");