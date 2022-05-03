**DOM**

Document Object Model

O DOM HTML é um padrão de como acessar e modificar os elementos HTML de uma página

**DOM vs BOM**

>BOM
Browser Object Model
Tudo o que está dentro do objeto window
Um nível acima do DOM, que compõe o DOM

**Manipulando Objetos no DOM**

>Métodos

Podemos selecionar os elementos de uma página de diversas formas

document.getElementByID('titulo');
// <h1 id="titulo"></h1>

document.getElementByTagName('li');
//retorna um array com os elementos escolhidos, se queremos um exato temos que usar um índice do array específico

document.getElementByClassName('textos');
//mesma forma, pode retornar vários elementos dentro de um array, mesmo com um elemento ele também retorna um array, temos que especificar pelo índice

document.querySelectorAll('.primeira-classe .segunda-classe');
//retorna todos os elementos da classe

document.querySelectorAll('li .opcao');
//retornando uma classe de um elemento 


**Manipulando estilos**

element.classList

<div id="meu-elemento" class="classe"> </div>

const meuElemento = document.getElementById("meu-elemento)

meuElemento.classList.add("novo-estilo");
//Adiciona a classe "meu-estilo"

meuElemento.classList.remove("classe");
//Remove a classe "classe"

meuElemento.classList.toggle("dark-mode");
//Adiciona a classe "dark-mode" caso ela não faça parte da lista e remove ela caso faça

<div id="meu-elemento" class="novo-estilo dark-mode"> </div>
ficaria assim após o código js

>Adicionando diretamente o CSS de um elemento
document.getElementByTagName("p").style.color = "blue";
//Seleciona todos os parágrafos e adiciona a cor azul às letras

**Eventos**

Qualquer tipo de ação que um usuário completa em uma página

>Tipos de eventos
- mouseover, mouseout -> mouse por cima ou tirando o mouse
- click, dbclick -> clickando ou double click
- change, load -> eventos de atualização, quando um campo muda ou quando a página terminar de carregar algo aconteça

>Acionando eventos
Diretamente no JavaScript, cria um evento que vai ser acionado no momento em que o usuário realizar determinada ação

const botao = document.getElementById("meuBotao");

botao.addEventListener("click", outraFuncao);

