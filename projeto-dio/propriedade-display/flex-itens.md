# Aula 02 - Fundamentos parte 02 - **Flex Itens**

**Flex-grow**

Define a proporcionalidade de crescimento dos itens, respeitando o tamanho de seus conteúdos internos.
Ela não faz a contenção ou expansão do item

**OBS**: Não irá funcionar caso tenhamos adicionado justify-content ao nosso flex container

**Flex-basis**

É a propriedade que estabelece o tamanho inicial do item antes da distribuição de espaço restante dentro dele, usando como base o conteúdo interno disposto.

>>Valores possíveis:
- auto: caso o item não tenha tamanho, este será proporcional ao conteúdo do item
- px, %, em: são valores exatos previamente definidos 
- 0: terá relação com a definição do flex-grow

**Flex-shrink**

É a propriedade que estabelece a capacidade de redução ou compressão do tamanho de um item

**Flex**

- grow, shrink e basis. Podemos colocar como flex: 1 0 auto (grow, shrink, basis)

**Align-self**

É a propriedade que estabelece o alinhamento de modo individual sobre um determinado item.

- auto: valor padrão, vai respeitar a definição de align-items do container
- flex-start: o inicio do container
- flex-end: final do container
- center: relativo ao centro de acordo com o eixo
- stretch: ocupa todos os espaços relativos
- baseline: utiliza a linha base da tipografia
  