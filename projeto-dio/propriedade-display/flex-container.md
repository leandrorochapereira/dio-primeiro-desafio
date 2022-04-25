# Display Flex - notes

**Display flex**
Display: flex
Torna a tag um elemento do tipo flex container, e assim automaticamente todos os seus filhos diretos desta tag, tornam-se em flex itens

 
**Flax Wrap**

É a propriedade que define se os itens devem ou não quebrar a linha.
Por padrão eles não quebram linhas, isso faz com que os flex itens sejam compactados além do limite do conteúdo


- nowrap: é o padrão, não permite a quebra de linha
- wrap: permite a quebra de linha assim que um dos flex itens não puder mais ser compactado.
- wrap-reverse: permite a quebra de linha assim que um dos flex itens não puder mais ser compactado, porém na direção contrária da linha, acima.

**Flex Flow**

É um atalho para as propriedades flex-direction e flex-wrap
Porém seu uso não é tão comum, visto que, quando mudamos o flex-direction para column, mantemos o padrão do flex-wrap que é nowrap.

**Justify Content**

Essa propriedade vai se encarregar de alinhar os itens dentro do container de acordo com a direção pretendida e tratar da distribuição de espaçamento entre eles

Obs: Não funciona caso os itens filhos estejam ocupando 100% de todo o container.

variações:
- flex-start: inicio do container
- flex-end: final do container
- center: ao centro do container
- space-between: cria um espaçamento igual entre os elementos
- space-around: os espaçamentos do meio são duas vezes maiores que o inicial e o final

**Align-Items**

Trata do alinhamento dos flex itens de acordo com o eixo do container
O alinhamento é diferente para quando os itens estão em colunas ou linhas
Permite o alinhamento central no eixo vertical

> Tipos de alinhamento
- center: alinhamento dos itens ao centro
- stretch: padrão, e os flex itens cresçam igualmente
- flex-start: alinhamento dos itens no início
- flex-end: alinhamento dos itens no final
- baseline: alinhamento de acordo com a linha base da tipografia dos itens

**Align-content**

É a propriedade responsável pelo tratamento do eixo vertical das linhas do container

>> Precisamos que:
- O container utilize quebra de linhas
- A altura do container tem que ser maior que a soma das linhas dos itens

>>Tipos de alinhamento:
- center: alinhamento dos itens ao centro
- stretch: é o padrão e os flex itens crescem igualmente
- flex-start: alinhamento dos itens no início
- flex-end: alinhamento dos itens no final
- space-between: cria um espaçamento igual entre os elementos
- space-around: os espaçamentos do meio são duas vezes maiores que o inicio e final