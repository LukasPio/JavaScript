alert("Esse é o robô da tabuada!");
let x = parseFloat(prompt("Digite o valor à ser multiplicado por cada número de 1 a 20"));
let y = 0;
let z = "";
for (; y < 20; z += "\n" + x * y) {
  ++y;
}
alert("Os resultados são: " + z);