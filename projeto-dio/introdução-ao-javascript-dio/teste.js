//adicionando comentários 
//introdução ao javascript, se familiarizando com a lang
//ctrl+/ com linhas selecionadas as muda para comentários
//boas práticas - constantes com nomes em CAPS


//declarando uma função
//function soma(a, b){//entre os () vão parâmetros que podemos usar
//    return a + b;//8
//}
//chamando a função
//soma(3, 5);

//função para retornar números pares, array uma lista de números
function returnEvenValues(array){
    let evenNums = [];
    for(let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0) {
            evenNums.push(array[i]);
        }
    }
    console.log('Os números pares são: ', evenNums);
}

let array = [1, 2, 4, 5, 7, 8];

returnEvenValues(array);