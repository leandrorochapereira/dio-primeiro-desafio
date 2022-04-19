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

