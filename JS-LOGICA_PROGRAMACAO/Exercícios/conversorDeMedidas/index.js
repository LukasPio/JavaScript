let y = parseFloat(prompt("Digite o valor em metros a ser convertido"))

const x = prompt("Digite para qual unidade você deseja transferir: \nmm - milímetros \ncm - centímetros \ndm - decímetros \ndam - decâmetros \nhm - hectômetro \nkm - quilômetros");

switch (x) {
  case "mm": alert("Resultado: " + (y *= 1000) + " " + x)
    break
  case "cm": alert("Resultado: " + (y *= 100) + " " + x);
    break
  case "dm": alert("Resultado: " + (y *= 10) + " " + x);
    break
  case "dam": alert("Resultado: " + (y /= 10) + " " + x);
    break
  case "hm": alert("Resultado: " + (y /= 100) + " " + x);
    break
  case "km": alert("Resultado: " + (y /= 1000) + " " + x);
    break
  default: confirm("Você escolheu uma medida inválida, verifique se escreveu da maneira correta")
}
