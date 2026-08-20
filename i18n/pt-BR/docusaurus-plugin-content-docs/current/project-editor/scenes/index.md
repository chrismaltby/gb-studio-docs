---
sidebar_position: 1
---

# Cenas

Uma cena é uma única tela do seu jogo, ela pode conter vários [atores](/docs/project-editor/actors) e [gatilhos](/docs/project-editor/triggers). Um jogo é normalmente composto por muitas cenas conectadas entre si com gatilhos usando o evento [Trocar cena](/docs/scripting/script-glossary/scene#change-scene).

## Adicionando uma cena

Clique no botão **` + `** nas _Ferramentas do editor_ e selecione _Cena_ no menu. Clique em qualquer espaço vazio na _Janela de visualização do projeto_ para posicionar a nova cena.

<div className="drop-shadow margin-bottom"><img src="/img/screenshots/add-scene-v4-PTBR.gif" width="320" className="clip-bottom" /></div>

Você pode usar a _Barra lateral do editor_ para dar um nome à sua cena e uma imagem de fundo dos ativos do seu projeto. Veja a documentação sobre [Imagens de fundo](/docs/assets/backgrounds) para obter mais informações sobre como adicionar imagens de fundo.

## Propriedades da cena

- **Nome** - Nomeia a sua cena. Útil para localizar a sua cena com a barra de pesquisa e o [navegador de cena](/docs/project-editor/navigator).

:::tip
Usar caracteres `/` no nome da sua cena fará com que ela apareça dentro de pastas no navegador de cena (ex.: `ui/title screen` aparecerá como `title screen` dentro da pasta `ui`)
:::

- **Tipo** - Permite que você escolha na lista de modos de jogo, como _Visão superior 2D_ ou _Plataforma_. Esta opção altera como a cena se comporta durante o jogo. Usando [plugins](/docs/extending-gbstudio/plugins) é possível adicionar tipos de cena adicionais aqui e modificar os tipos integrados.

  Alguns tipos, quando selecionados, mostrarão um botão <img className="gbs-icon" title="Botão de configurações" src="/img/screenshots/settings-button.png" width="22" /> permitindo que você acesse rapidamente as [Configurações](/docs/settings) do tipo de cena.

- **Imagem de fundo** - Permite que você escolha uma [imagem de fundo](/docs/assets/backgrounds) da pasta `assets/backgrounds`. Opcionalmente, permite extrair as paletas de cores automaticamente para imagens coloridas .png.

- **Paletas monocromáticas** - A paleta do fundo (BGP) e duas paletas de sprite (OBP0 e OBP1) que são usadas ao executar um jogo sem cor.

- **Paletas de fundo (Apenas modos de cor)** - As oito paletas que serão usadas ao colorir a cena.

- **Paletas de sprite (Apenas modos de cor)** - As oito paletas que serão usadas para sprites na sua cena.

- **Folha de sprite do jogador** - Usado para definir um sprite de jogador personalizado para esta cena. Por padrão, a cena usará o sprite de jogador padrão para o _tipo_ de cena selecionado.

## Modo de paralaxe

Quando uma cena é mais larga que 20 tiles (160px), o modo de paralaxe fica disponível. Você pode habilitá-lo clicando no botão <img className="gbs-icon" title="Botão de alternar paralaxe" src="/img/screenshots/parallax-button.png" width="22" /> à direita do _Seletor de Imagem de fundo_.

Quando o modo de paralaxe está habilitado, você pode dividir a imagem de fundo em até três fatias, que podem ser modificadas para rolar em velocidades diferentes conforme a câmera se move no jogo.

<img src="/img/screenshots/parallax-v420-PTBR.jpg" style={{width:550}} />

## Limites da câmera

Quando uma cena é mais larga que 20 tiles (160px) ou mais alta que 18 tiles (144px), a capacidade de limitar os limites da câmera de uma cena fica disponível. Você pode habilitá-la clicando no botão <img className="gbs-icon" title="Botão de alternar limites da câmera" src="/img/screenshots/camera-bounds-button.png" width="22" /> à direita do Seletor de Imagem de fundo.

<img className="margin-bottom" src="/img/screenshots/camera-bounds-v420-PTBR.jpg" style={{width:550}} />

Quando habilitado, isso permite que você defina a área mínima e máxima que será visível pela câmera na sua cena. Também é possível definir esses valores dinamicamente usando um evento [Definir limites da câmera](/docs/scripting/script-glossary/camera#set-camera-bounds).

<div className="drop-shadow margin-bottom"><img src="/img/screenshots/camera-bounds-preview.jpg" width="320" className="clip-bottom" /></div>

## Conjuntos de tiles comuns

:::warning
Esta é uma técnica avançada que pode exigir a compreensão de como a memória de vídeo é alocada e carregada no seu jogo.
:::

Ao usar o evento [Trocar cena](/docs/scripting/script-glossary/scene#change-scene) com a _Velocidade da transição_ definida como `Instantâneo`, muitas vezes você verá gráficos _"falhando"_ conforme você se move para a próxima cena. Isso ocorre porque há um pequeno atraso no carregamento dos dados dos tiles e, por um curto período de tempo, a cena mostrará os dados dos tiles da cena anterior usando o layout da nova cena. Para confirmar isso, você pode usar o [Painel VRAM](/docs/debugger) no Depurador.

Para ajudar a corrigir este problema, você pode especificar um [conjunto de tiles](/docs/assets/tilesets) que é compartilhado entre as duas cenas. Conjuntos de tiles são imagens da pasta `assets/tilesets`. Quando duas cenas compartilham um conjunto de tiles comum, os tiles comuns sempre serão carregados nos mesmos locais na memória, permitindo transições mais fluidas.

Ex.: estas duas cenas têm o mesmo conjunto de tiles em comum
<img src="/img/screenshots/common-tilesets-PTBR.png" className="drop-shadow margin-bottom" />

o que permite alternar instantaneamente entre elas

<div className="drop-shadow margin-bottom"><img src="/img/screenshots/common-tileset-example.gif" width="320" className="clip-bottom" /></div>

Os ativos usados neste exemplo são:

- [assets/backgrounds/east.png](/assets/examples/common-tilesets/east.png)
- [assets/backgrounds/west.png](/assets/examples/common-tilesets/west.png)
- [assets/tilesets/town.png](/assets/examples/common-tilesets/town.png)

:::note
Observe como a imagem do conjunto de tiles não precisa conter apenas tiles únicos (embora possa, se você preferir), ao executar o seu jogo, apenas os tiles únicos encontrados na imagem serão carregados.
:::

## Scripts

As cenas podem conter um script _Ao iniciar_ que será chamado assim que a cena for carregada no jogo. Você pode usar isso para fazer coisas como reproduzir música enquanto a cena carrega, configurar eventos para acontecer quando botões são pressionados, inicializar atores com base nos valores de variáveis e muito mais.

Você também pode definir scripts para chamar quando o jogador colide com _Atores_ que têm um _Grupo de colisão_ definido clicando na aba _Ao acertar_ e escolhendo um grupo de colisão.

Para começar a construir um script, selecione uma cena, clique no tipo de script que você quer editar e clique no botão _Adicionar evento_ na _Barra lateral do editor_ para abrir o menu de eventos. Selecione um evento para adicioná-lo ao script.

Para obter mais informações, veja a documentação de [Scripting](/docs/scripting).
