**Se habituando com variáveis e constantes**

declarando variáveis em JavaScript

var `escopo global`
let `escopo dentro do bloco`

>>>Indicado usarmos let em escopos, utilizando dentro dos laços

>Constantes

Declarada em SNAKE_UPPER_CASE
Escopo de bloco
Não faz hoisting

const FIRST_NAME = "Leandro";
`não podemos reatribuir e nem redeclarar o valor de uma constante`

var, let e const
                var             const           let
escopo      global/local        bloco         bloco
redeclarar      sim             não           não
reatribuir      sim             não           sim
hoisting        sim             não           não

**Tipos**

>>Estrutura de dados

JavaScript é uma linguagem de tipagem dinâmica e fraca
Ou seja, antes de declarar um valor, não precisamos especificar o **tipo** dele

Dados são divididos em dois grupos

primitivos           &           não primitivos
não tem métodos                 objetos e arrays

>Strings
- Comumente utilizada para textos
- Valores declarados entre aspas duplas, simples ou crases
- Tipo de dado iterável

>Arrays
São listas iteráveis de elementos
Adicionando algo a um array declarado 
let array = [] `um array com zero valor`
array.push(x)

>Objetos
Estrutura tipo "chave e valor"

let person = {
    name: 'John',
    age: 20
}

>Empty, null e undefined
- Empty = não existe nenhum valor 
- Null = propositalmente não tenha valor
- Undefined = não declarado, inexistente
  
