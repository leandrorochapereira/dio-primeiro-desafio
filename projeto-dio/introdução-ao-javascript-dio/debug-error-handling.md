**Erros em JS**

*ECMAScript Error*

Composto por:
    - Mensagem
    - Nome
    - Linha
    - Call Stack

*DOMException*

Erros relacionados ao Document Object Model DOM
Erros referentes à estrutura

**Tratando Erros**

1 - Diferenças entre throw e return
2 - Apresentar a implementação try/catch

>Throw

function verificaPalindromo(string){
    if (!string) throw "String Inválida";

    return string === string.split('').reverse().join('');
}

verificaPalindromo('cat');

//retorna uma mensagem Uncaught String Inválida de erro personalizada, demonstrando um erro no console, ao invés de colocarmos "return "String Inválida" onde só 
//vai retornar uma string, ao invés de um sinal de erro realmente com suas propriedades 

>Try.. catch

É uma declaração dentro do bloco try verificamos a parte do código e caso retorne algum erro ele é capturado na função catch e podemos manipular esse erro

function tryCatchExemplo(string){
    try {
        verificaPalindromo(string)
    }
    catch(e){
        console.log(e)
        //throw e; para demonstrar uma mensagem de erro personalizada
    }
}

tryCatchExemplo('');


//tryCatchPalindromo('');
//String inválida

>Finally

function tryCatchExemplo(string){
    try {
        verificaPalindromo(string)
    }
    catch(e){
        throw e;
    }
    finally{
        console.log('A string eviada foi: ' + string);
    }
}

é um bloco que vai ser utilizado de qualquer maneira

