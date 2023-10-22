let x1 = prompt("Digite o modelo do primeiro veículo")
let v1 = prompt("Digite a velocidade desse veículo")

let x2 = prompt("Digite o modelo do segundo veículo")
let v2 = prompt("Digite a velocidade desse segundo veículo")
parseFloat(v1, v2)
if (v1 > v2) {
  alert("A velocidade do(a) " + x1 + " é maior")
}
else if (v2 > v1) {
  alert("A velocidade do(a) " + x2 + " é maior")
}
else {
  alert("A velocidade deles é igual!")
}