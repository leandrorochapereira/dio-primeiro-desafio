**Módulos**

Arquivos JavaScript que tem a capacidade de exportar e importar informações de outros arquivos do mesmo tipo.

Vantagens:
    - Organização do código
    - Compartilhamento de variáveis em escopos diferentes
    - Explicita as dependências dos arquivos

>Exportando

named exports

export function mostraIdade(pessoa) {
    return `A idade da ${pessoa.nome} é ${pessoa.idade};
}

default exports

function mostraIdade(pessoa) {
    return `A idade da ${pessoa.nome} é ${pessoa.idade};
}

export {
    mostraIdade,
    mostraCidade,
    mostraHobby
}

Só pode haver um export default por arquivo
Será o retorno padrão do seu arquivo

>Importando

named exports
import {funcao, variavel, classe} from './arquivo.js';

default exports
import valorDefault from './arquivo.js';

Podemos trocar os nomes dos imports
import {arquivo as Apelido} from './arquivo.js';

Apelido.metodo();

>Importando tudo de um arquivo

import * as INFOS from './arquivo.js';

INFOS.metodoA();

console.log(INFOS.variavel);

>Vinculando ao HTML

<script type="module" src="./main.js"></script> 

para fazer testes localmente é necessário estar rodando um servidor, isso pode ser feito pela extensão live code do VSCode


*Curiosidades*

- Módulos estão sempre em "strict mode"
- Podem ser utilizadas as extensões .js e .mjs
- Para testes locais é necessário utilizar um servidor
- Ao importar sempre lembrar da extensão ".js"
- Ao importar sempre lembrar de usar "./" como ponto de partida