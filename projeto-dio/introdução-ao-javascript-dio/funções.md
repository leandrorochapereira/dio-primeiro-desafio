 **Tipos de funções**

>>>Estrutura

Definindo uma função
function nome(parâmetros){
    //instruções
    return; //valor de retorno
}
Variáveis criadas dentro de uma função apenas podem ser utilizadas dentro dela.
Quando invocamos o "return" a função para de ser executada

>>>Função anônima
Funções que representam expressões

const soma = function(a, b){
    return a + b;
}
Uma variável pode armazenar uma função

>>>Função auto invocável - IIFE 

Uma função anônima entre parênteses, seguida por outro par de parênteses, que representa sua chamada
(
    function(){
        let name = "Digital Innovation"
        return name;
    }
)();
Também pode ser utilizada com parâmetros ou armazenada em uma variável
(
    function (a,b){
        return a + b;
    }
)(1, 2);
//3

const soma3 = (
    function(){
        return a + b;
    }
)(1, 2);
console.log(soma3); //3

>>>Callbacks
Uma função passada como argumento para outra
Utilizando callbacks, você tem maior controle da ordem de chamadas.

>>>Parâmetros 
Valores padrão

>>>Objeto Arguments
Um array com todos os parâmetros passados quando a função foi invocada

function findMax(){
    let max = -Infinity;

    for (let i = 0; i < arguments.lenght; i++){
        if (arguments[i] > max){
            max = arguments[i];
        }
    }

    return max;
}

>>>Arrays e Objetos
Spread: uma forma de lidar separadamente com elementos
O que era parte de um array se torna um elemento independente

function sun(x, y, z){
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers)); //os ... significam o spread

Rest: combina os argumentos em um array

function confereTamanho(...args){
    console.log(args.lenght)
}

O que era um elemento independente se torna parte de um array


**Loops**

>>>If / Else

JavaScript *não tem elseif*, as palavras estão sempre espaçadas

function numeroPositivo(num){
    const ehNegativo = num < 0;
    const maiorQueDez = num > 10;

    if (ehNegativo){
        return "Esse número é negativo!";
    } else if (!ehNegativo && maiorQueDez) {
        return "Esse número é positivo e maior que 10!"
    }

    return "Esse número é positivo!";
}

>>>Switch
Serve pra quando temos muitas verificações para substituir uma quantidade alta de ifs

- Equivale a uma comparação de tipo e valor (===)
- Sempre precisa de um valor "default"
- Ideal para quando se precisa comparar muitos valores
  
function getAnimal(id){
    switch(id){
        case 1: 
            return "cão";
        case 2:
            return "gato";
        case 3:
            return "pássaro";
        default:
            return "peixe";
    }
}