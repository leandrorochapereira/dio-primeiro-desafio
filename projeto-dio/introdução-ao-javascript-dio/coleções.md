**Estruturas**

>>>Map

Uma coleção de arrays no formato [chave, valor];
Pode ser iterado por um loop for...of

Adicionar, ler e deletar

const myMap = new Map()

myMap.set('apple', 'fruit');
//Map(1) {"apple" -> "fruit"}

myMap.get("apple");
//"fruit"

myMap.delete("apple")
//true

myMap.get("apple")
//undefined

>>>Diferença de map vs objeto
- Mas podem ter chaves de qualquer tipo; //Objetos tem chaves do tipo String
- Maps possuem a propriedade length; //Objeto temos que iterar por todas propriedades
- Maps são mais fáceis de iterar;
- Utilizado quando o valor das chaves é desconhecido;  //Utilizamos o objeto quando conhecemos o valor das chaves, diferente do Map
- Os valores tem o mesmo tipo.  //Objeto não necessariamente precisamos ter valores do mesmo tipo
  
**Set**

Sets são estruturas que armazenam apenas `valores únicos`

const myArray = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 2, 1];

const mySet = new Set(myArray); //uma coleção de valores unicos que não se repetem nunca

Adicionar, consultar e deletar
const mySet = new Set();

mySet.add(1);
mySet.add(5);

mySet.has(1);
//true

mySet.has(3);
//false

mySet.delete(5);