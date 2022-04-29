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

>>>For e While
Loop dentro de elementos iteráveis (arrays, strings)

>>>While e do while
Executa instruções até que a condição se torne falsa

*do while*
Executa instruções até que a condição se torne falsa, porém a primeira execução sempre ocorre.

**This**
A palavra reservada this é uma referência de contexto.
No exemplo, this refere-se ao objeto pessoa

const pessoa = {
    firstName: "André",
    lastName: "Soares",
    id: 1,
    fullName: function (){ //quando uma função esta dentro de um objeto ele é um `método`
        return this.firstName + " " + this.lastName;
    },
    getId: function(){
        return this.id;

    }
};

Seu valor pode mudar de acordo com o lugar no código onde foi chamada

            Contexto                        Referência
        Em um objeto (método)            Próprio objeto dono do método
            Sozinha                   Objeto global (navegadores, windows)
            Função                          Objeto global
            Evento                    Elemento que recebeu o evento

>>>Manipulando seu valor
const pessoa = {
    nome: 'Miguel',
};

const animal = {
    nome: 'Murphy',
};

function getSomething(){
    console.log(this.nome);
}

getSomething.call(pessoa); -> o método call se referindo ao objeto pessoa, então pessoa.nome 

É possível passar parâmetros para essa função separando-os por vírgulas.

*Apply*

const pessoa = {
    nome: 'Miguel',
};

const animal = {
    nome: 'Murphy',
};

function getSomething(){
    console.log(this.nome);
}

getSomething.apply(pessoa); -> Miguel

É possível passar parâmetros para essa função dentro de um array, diferente do call

*Bind*
Clona a estrutura da função onde é chamado e aplica o valor do objeto passado como parâmetro 

**Arrow functions**

const helloWorld = () => "Hello World";

- Caso exista apenas uma linha, pode dispensar as chaves e o return
- Caso exista apenas um parâmetro, pode dispensar os parênteses
- Arrow function **não faz hoisting**!

>>Restrições
- "This" sempre será o objeto global. Métodos para modificar seu valor não irão funcionar
- Não existe o objeto "arguments"
- O construtor também não pode ser utilizado ex: (new MeuObjeto())


1  Dado o código

function minhaFuncao(num = 0) {
  return num;
}

possui o valor padrão

2 Dado o código

for(let i = 0; i < array.length; i++) {
  console.log(array[i])
}

a partir do indice 0 enquanto o indice for menor que o tamanho do array o codigo ira logar o elemento que estiver em cada indice do array


3 Sobre funções anônimas, é correto afirmar que

sao funções sem um nome especifico e que podem ter seu valor atribuido a uma variavel

4 Dadas as afirmações abaixo

I. Funções sempre precisam de parâmetros;
II. Funções são determinadas pela palavra reservada function;
III. Funções podem retornar ou não algum valor;
IV. O escopo de uma variável criada dentro de uma função é a própria função.

São verdadeiras:

II e III

5 Sobre funções autoinvocáveis, assinale a alternativa falsa:

não podem receber parametros

6 Sobre o método apply, é correto afirmar que

transforma o valor de this no do objeto enviado como primeiro parametro e aceita outros parametros através de um array é reutilizável em outros objetos

7 Sobre o método call, é correto afirmar que
transforma o valor de this no do objeto enviado como primeiro parametro e aceita outros parametros separados por virgulas é reutilizavel 