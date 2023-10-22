const Adress = require('./Adress')
const Person = require('./Person')

const endereço = new Adress('Rua Sílvia, 1072', 'Rio de Janeiro', 'RJ', 'Brasil')

const pessoa = new Person('Lucas', 15, endereço)

console.log(pessoa)

