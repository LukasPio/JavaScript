alert("Olá, insira os dados do atacante!");
let dmg = prompt("Digite o dano do atacante");
let name1 = prompt("Digite o nome desse personagem");

alert("Obrigado, agora informe-nos os dados do defensor!");
let dfs = prompt("Digite os pontos de defesa do defensor");
let lif = prompt("Quantos pontos de vida ele possui?");
let shel = prompt("Responda com sim ou não, ele possui um escudo?");
let name2 = prompt("Digite o nome desse personagem");

dmg = parseFloat(dmg);
dfs = parseFloat(dfs);
lif = parseFloat(lif);

let fdmg;

if (dmg <= dfs) {
  fdmg = 0;
}
else if (dmg > dfs && shel === "nao") {
  fdmg = dmg - dfs;
}
else {
  fdmg = (dmg - dfs) / 2;
}