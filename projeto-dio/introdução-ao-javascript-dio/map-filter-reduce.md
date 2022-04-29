**Map**
método .map

- Cria um novo array
- Não modifica o array original
- Realiza as operações em ordem

array.map(callback, thisArg)

callback(item, index, array)
>Callback: Função a ser executa em cada elemento
>thisArg (opcional): valor de 'this' dentro da função de callback

>>>Map vs forEach

`utilizando Map`
const array = [1, 2, 3, 4, 5];

array.map((item) => item * 2); //retorno [2, 4, 6, 8, 10];  //cria outro array sem modificar o array inicial

`utilizando forEach`
const array = [1, 2, 3, 4, 5];

array.forEach((item) => item * 2) //retorno: undefined


**Filter**

Como se colocássemos todo o array dentro de um filtro e só os items que corresponderem a determinada condição serão retornados no novo array criado
- Cria um novo array como o map e não modifica o array original

array.filter(callback, thisArg)
>Callback: função a ser executada em cada elemento
>thisArg (opcional): valor de 'this' dentro da função de callback

const frutas = ['maça fuji', 'maça verde', 'laranja', 'abacaxi'];
frutas,filter((fruta) => fruta.includes('maça'))
//retorno: ['maça fuji', 'maça verde'];


**Reduce**

Diferente dos métodos map e reduce, ele não retorna um novo array
Ele executa uma função em todos os elementos do array e retorna apenas um valor `único`

array.reduce(callbackFn, initialValue)
>Callback: função a ser executada a partir do acumulador
>initialValue: valor sobre o qual o retorno final irá atuar - também é opcional

const callbackFn = function(accumulator, currentValue, index, array){
    //do something
}

array.reduce(callbackFn, initialValue)

>Accumulator/prevValue: acumulador de todas as chamadas de callbackFn
>currentValue: elemento atual sendo acessado pela função



Quiz:

1 - Dado o código abaixo:

let array = [1, 2, 3, 4];

array.map((item) => item * 2);

console.log(array);

[1, 2, 3, 4]

2 - Sobre o método map, é correto afirmar que:

Percorre o array e executa uma função em cada um de seus itens

3- Sobre o método reduce, é correto afirmar que:

Ele sempre retorna apenas um valor, que pode ou não ser um array

4 - Sobre o método “filter”, é correto afirmar que:

Ele sempre retorna um novo array

5 - Qual a diferença entre os métodos map e forEach?

O retorno, o map retorna um array e o forEach retorna undefined

6 - Sobre o método filter, é correto afirmar que:

Percorre o Array e retorna outro contendo apenas os itens que passaram por determinada validação

8 - Dado o código abaixo:

let array = [1, 2, 3, 4];

array.reduce((current, acc) => current + acc);

Qual será o retorno?

10

9 - Sobre o método reduce, é correto afirmar que:

Percorre o array e acumula o valor de cada operação para retornar um valor unico no final

10 - Sobre o método “map”, é correto afirmar que:

Sempre retorna um novo array

11 - Dado o código abaixo

let array = [1, 2, 3, 4];

array.filter((item) => item % 2 === 0);

Qual será o retorno?

[2, 4]