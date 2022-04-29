/*
1 - some todos os números de um array
2 - Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo 
final após subtrair todos os preços da lista enviada. 
*/

const meuArray = [];

function somaArray(arr) {
  return arr.reduce(function (prev, current) {
    console.log({ prev });
    console.log({ current });
    return prev + current;
  }, 0);
}

const arr = [1, 2];

console.log(somaArray(arr));
