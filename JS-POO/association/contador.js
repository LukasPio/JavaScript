const frase = 'lorem ipsum dolor sit amet consectetur adipiscing elit';

const palavras = frase.split(' ')
const letras = frase.split('')
let quantiadeDeLetras = 0;

letras.forEach((letra) => {
    if (letra != ' ') {
        quantiadeDeLetras++
    }
})

console.log(`Quantidade de palavras: ${palavras.length}`)
console.log(`Quantidade de letras: ${quantiadeDeLetras}`)

