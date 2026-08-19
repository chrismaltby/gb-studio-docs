---
sidebar_position: 4
---

# Editor de projetos

A visualização padrão para o _Editor de projetos_ como mostrado abaixo é a _Área do jogo_. É aqui que você pode criar o seu jogo combinando cenas, adicionando atores e gatilhos e, em seguida, construindo eventos de script para adicionar interações.

<img title="Editor de projetos" src="/img/screenshots/project-editor-v420-PTBR.jpg" width="1258" />

Use as _Ferramentas do editor_ para alternar entre os modos de Seleção, Adição, Borracha, Colisão e Desenho de cor.

Por padrão, as propriedades do seu projeto são mostradas na _Barra lateral do editor_ à direita. Aqui você pode definir o nome do projeto e escolher a cena inicial. Esta visualização do projeto também é onde os valores iniciais para o ator Jogador são definidos. Veja a página [Jogador](/docs/project-editor/player) para obter mais informações sobre o jogador.

Para ver as propriedades do projeto novamente na _Barra lateral do editor_, clique em qualquer espaço vazio entre as cenas.

## Ferramentas do editor

### Ferramenta de seleção

Ao clicar em quaisquer cenas, atores ou gatilhos, a _Barra lateral do editor_ será atualizada para mostrar as propriedades e os scripts do item que você selecionou. Você pode voltar para as propriedades do projeto clicando fora de uma cena.

:::tip
Se você segurar `Shift` ao clicar em cenas, poderá adicioná-las e removê-las da sua seleção. Isso permite que você arraste várias cenas juntas ou clique com o botão direito para apagar várias de uma vez. Você também pode segurar `Shift` ao arrastar para criar uma seleção em caixa.

<img title="Seleção de cenas em caixa" src="/img/screenshots/multi-select.gif" width="320" className="drop-shadow" />

:::

### Ferramenta de adição

Você tem a opção de adicionar um novo Ator, Gatilho ou Cena. Após clicar em qualquer uma das 3 opções, o cursor do seu mouse será carregado com um novo item. Você pode posicionar o novo item clicando dentro do Editor de projetos e cancelar a ação pressionando Esc ou selecionando outra ferramenta nas _Ferramentas do editor_.

### Ferramenta de borracha

Todas as colisões, atores e gatilhos serão removidos ao serem clicados. As ações da borracha podem ser desfeitas pressionando `Ctrl / Cmd` + `Z`.

Cenas não são afetadas pelo _Modo borracha_. Para excluir uma cena, você pode:

- Selecionar a cena no _Modo de seleção_ e, na _Barra lateral do editor_, clicar na seta para baixo na parte superior e escolher o item de menu "Apagar cena".
- Selecionar a cena e pressionar a tecla `Backspace` no seu teclado.
- Clicar com o botão direito na cena e clicar em "Apagar cena" no menu.

### Ferramenta de colisão

Permite que você [adicione colisões](/docs/project-editor/scenes/collisions) a qualquer tipo de cena usando o _Modo de desenho_ do GB Studio.

### Ferramenta de cor

Permite que você [pinte tiles](/docs/project-editor/scenes/color) na sua cena com até 8 paletas de cores por cena. A _Ferramenta de cor_ também usa o _Modo de desenho_ do GB Studio. As paletas usadas aqui são determinadas na aba _Paleta_ no _Editor de projetos_.

Veja a documentação sobre os [Atalhos de teclado](/docs/getting-started/keyboard-shortcuts) para os atalhos das ferramentas do editor.

## Visualizações do projeto

Usando o _Botão de visualização do projeto_ você pode alternar entre as diferentes visualizações do seu projeto e seus ativos.

<img title="Seleção de cenas em caixa" src="/img/screenshots/project-view-btn.gif" width="320" className="drop-shadow" />

- **Área do jogo:** Crie o seu jogo combinando [cenas](/docs/project-editor/scenes), [atores](/docs/project-editor/actors) e [gatilhos](/docs/project-editor/triggers).

- **Sprites:** Edite os seus [sprites](/docs/assets/sprites) e [crie animações](/docs/assets/sprites#sprite-editor).

- **Imagens:** Visualize os seus ativos de [imagens de fundo](/docs/assets/backgrounds) e [conjuntos de tiles](/docs/assets/tilesets).

- **Música:** Visualize e edite os seus arquivos de [música](/docs/assets/music).

- **Efeitos sonoros:** Visualize os seus arquivos de [efeitos sonoros](/docs/assets/sound-effects).

- **Paletas:** Edite as suas [paletas](/docs/assets/palettes) para jogos em cores.

- **Revisar diálogos:** Visualize e edite todo o texto no seu jogo.

- **Configurações:** Altere as [configurações do seu projeto](/docs/settings), como sprites padrão, paletas de cores e controles de teclado.

Veja a documentação sobre [Ativos](/docs/assets) para obter mais informações sobre como adicionar novos ativos.
