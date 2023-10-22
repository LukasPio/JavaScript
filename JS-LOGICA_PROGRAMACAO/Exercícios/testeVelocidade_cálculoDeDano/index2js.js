alert("Olá, insira os dados do atacante!");
const dmg = parseFloat(prompt("Digite o dano do atacante"));
const name1 = prompt("Digite o nome desse personagem");

alert("Obrigado, agora informe-nos os dados do defensor!");
const dfs = parseFloat(prompt("Digite os pontos de defesa do defensor"));
let lif = parseFloat(prompt("Quantas pontos de vida ele possui?"));
const shel = prompt("Responda com sim ou nao, ele possui um escudo?");
const name2 = prompt("Digite o nome desse personagem")

let fdmg = 0

if (dmg > dfs && shel === "nao") {
  fdmg = dmg - dfs
}
else if (dmg > dfs && shel === "sim") {
  fdmg = (dmg - dfs) / 2
}

lif -= fdmg

alert(name1 + " causou " + fdmg + " pontos de dano em " + name2)
alert(
  name1 + "\nPoder de ataque: " + dmg + "\n\n" +
  name2 + "\nPontos de vida: " + lif +
  "\nPoder de defesa: " + dfs + "\nPossui escudo: " + shel
);