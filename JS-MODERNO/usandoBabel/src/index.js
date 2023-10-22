const mediaAritimetica = (...num) => {
    const soma = num.reduce((acumulador, numero) => (acumulador += numero), 0);
    const media = soma / num.length;
    return media;
  };
  
  const mediaPonderada = (...numbers) => {
    const soma = numbers.reduce(
      (acumulador, { numero, peso }) => acumulador += numero * (peso ?? 1),
      0
    );
    const somaPeso = numbers.reduce(
      (acumulador, numero) => acumulador += (numero.peso ?? 1),
      0
    );
    return soma / somaPeso;
  };
  
  const mediana = (...arr) => {
    let meio = 0;
    const arrOrdenada = arr.sort((a, b) => a - b);
  
    if (arrOrdenada.length % 2 > 0) {
      meio = Math.floor(arrOrdenada.length / 2);
      return arrOrdenada[meio];
    }
  
    meio = arrOrdenada.length / 2;
    const mediana = arrOrdenada[meio] + arrOrdenada[meio - 1];
    return mediana / 2;
  };
  
  const moda = (...arr) => {
    
      const repeticoes = arr.map(num => [
        num,
        arr.filter(n => num === n).length
      ])
  
      repeticoes.sort((a, b) => b[1] - a[1])
      return repeticoes[0][0]
  }
  