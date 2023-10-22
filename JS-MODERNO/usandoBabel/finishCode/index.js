"use strict";

var mediaAritimetica = function mediaAritimetica() {
  for (var _len = arguments.length, num = new Array(_len), _key = 0; _key < _len; _key++) {
    num[_key] = arguments[_key];
  }
  var soma = num.reduce(function (acumulador, numero) {
    return acumulador += numero;
  }, 0);
  var media = soma / num.length;
  return media;
};
var mediaPonderada = function mediaPonderada() {
  for (var _len2 = arguments.length, numbers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    numbers[_key2] = arguments[_key2];
  }
  var soma = numbers.reduce(function (acumulador, _ref) {
    var numero = _ref.numero,
      peso = _ref.peso;
    return acumulador += numero * (peso !== null && peso !== void 0 ? peso : 1);
  }, 0);
  var somaPeso = numbers.reduce(function (acumulador, numero) {
    var _numero$peso;
    return acumulador += (_numero$peso = numero.peso) !== null && _numero$peso !== void 0 ? _numero$peso : 1;
  }, 0);
  return soma / somaPeso;
};
var mediana = function mediana() {
  var meio = 0;
  for (var _len3 = arguments.length, arr = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    arr[_key3] = arguments[_key3];
  }
  var arrOrdenada = arr.sort(function (a, b) {
    return a - b;
  });
  if (arrOrdenada.length % 2 > 0) {
    meio = Math.floor(arrOrdenada.length / 2);
    return arrOrdenada[meio];
  }
  meio = arrOrdenada.length / 2;
  var mediana = arrOrdenada[meio] + arrOrdenada[meio - 1];
  return mediana / 2;
};
var moda = function moda() {
  for (var _len4 = arguments.length, arr = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    arr[_key4] = arguments[_key4];
  }
  var repeticoes = arr.map(function (num) {
    return [num, arr.filter(function (n) {
      return num === n;
    }).length];
  });
  repeticoes.sort(function (a, b) {
    return b[1] - a[1];
  });
  return repeticoes[0][0];
};

moda(1, 6, 2, 6, 12)