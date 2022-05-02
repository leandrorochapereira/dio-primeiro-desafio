**JS Assíncrono**

Que não ocorre ou não se efetiva ao mesmo tempo.

`O JavaScript roda de maneira síncrona`

>>>Promises
Objeto de processamento assíncrono

Inicialmente seu valor é desconhecido. Ela pode, então, ser *resolvida* ou *rejeitada*.
Um dado que quando recebemos ainda não temos o conhecimento do seu valor.

Uma promise pode ter 3 estados:
    - Pending
    - Fulfilled
    - Rejected

Estrutura

const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve(console.log('Resolvida'));        
    }, 2000);
});

await myPromise
    .then((result) => result + 'passando pelo then')
    .then((result) => result + 'e agora acabou!')
    .catch((err) => console.log(err.message));

//Após 2 segundos, retornará o valor "Resolvida passando pelo then e agora acabou!"

>>>Async/Await

funções assíncronas precisam dessas duas palavras chave

async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve(console.log('Resolvida'));        
        }, 2000);
    });

    await myPromise
        .then((result) => result + 'passando pelo then')
        .then((result) => result + 'e agora acabou!')
        .catch((err) => console.log(err.message));
    
    return resolved;
}


>>>Consumindo APIs

>APIs

Application Programming Interface

Uma API é uma forma de intermediar os resultados do back-end com o que é apresentado no front-end

Voce consegue acessa-las por meio de urls

web apps ------------
                    |
mobile apps ---------   APIs  --------   Database
                    |
others APIs ---------


`JSON`

JavaScript Object Notation

É muito comum que APIs retornem seus dados no formato .json,
portanto precisamos tratar esses dados quando os recebemos


`Fetch`

fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json))

