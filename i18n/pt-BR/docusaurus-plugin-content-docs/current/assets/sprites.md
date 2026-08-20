---
sidebar_position: 1
---

import { Swatch } from '@site/src/components/Swatch';

# Sprites

Sprites são os gráficos usados por personagens jogáveis ou interativos em suas cenas. Adicione sprites ao seu jogo incluindo arquivos `.png` na pasta `assets/sprites` do seu projeto.

Como existem limites de quantos tiles de sprites podem ser carregados em uma única cena, certifique-se de verificar os limites de quadros nas suas cenas ao adicionar novos sprites. Veja [Limites da cena](/docs/project-editor/scenes/limits) para obter mais informações.

## Sprites simples

Um sprite simples tem um ou mais quadros de `16px` x `16px` dispostos horizontalmente em um arquivo de imagem. Um sprite com um único quadro terá `16px` x `16px`, enquanto um sprite com três quadros terá `48px` x `16px`.

### Sprites estáticos

Para sprites que precisam apenas de um único quadro (ex.: itens estáticos, como placas), crie o seu `.png` como uma imagem de `16px` x `16px` contendo apenas o quadro necessário.

<img src="/img/sprites/cat.png" className="HelpSprite" />

### Sprites animados

Se você quiser ter sprites que reproduzem pequenas animações, pode criar um `.png` com entre 2 quadros a `32px` x `16px` e 25 quadros a `400px` x `16px`. Usar esses sprites em um ator permitirá que você selecione qual quadro deseja exibir por padrão, além de reproduzir a animação completa em uma velocidade especificada.

<img src="/img/sprites/fire.png" className="HelpSprite" />

### Ator

Para fazer um sprite estático que muda com base na direção do ator, crie um `.png` de `48px` x `16px` contendo três quadros: um virado para a frente, um virado para cima e um virado para a direita. O sprite virado para a esquerda é gerado automaticamente invertendo horizontalmente o quadro virado para a direita.

<img src="/img/sprites/npc001.png" className="HelpSprite" />

### Ator animado

Para fazer sprites que têm movimento animado, ou que podem ser usados como um personagem do jogador, crie um `.png` de `96px` x `16px` contendo seis quadros: dois virados para a frente, dois virados para cima e dois virados para a direita.

<img src="/img/sprites/player.png" className="HelpSprite" />

## Editor de sprites

Quando você quiser progredir para fazer sprites mais complexos, pode usar o _Editor de sprites_ clicando no _Botão de visualização do projeto_ e selecionando _Sprites_.

<img title="Editor de sprites" src="/img/screenshots/sprite-editor-v420.jpg" width="752" />

### Composição de um sprite

Um sprite consiste em:

- Vários _Estados da animação_, por padrão, apenas um estado de animação é criado para um sprite. Você pode criar um novo clicando no botão `+` no _Navegador de animações_.
  - Cada estado de animação consiste em vários quadros de animação, visíveis no _Navegador de quadros_. Clique no botão `+` para criar um novo quadro e clique em um quadro para visualizá-lo na _Tela de quadro_ para edição.
- Uma _Paleta de tiles_, este é o arquivo `.png` da sua pasta de ativos. Clique na paleta de tiles para selecionar um tile e, em seguida, você pode desenhá-lo clicando na _Tela de quadro_.
- Um _Tamanho da tela_, esta é a largura e a altura da sua _Tela de quadro_, defina isso na _Barra lateral do editor_ para o tamanho que você quer que o seu sprite tenha.
- A _Origem da tela_, que determina o ponto de ancoragem (0,0) do seu sprite.
- Uma _Caixa de limitação de colisão_, esta é a largura, altura e posição de uma caixa invisível usada para detecção de colisão no motor do jogo; defina isso para se ajustar o mais próximo possível ao redor da área colidível do seu sprite.

### Configurações de animação

Na _Barra lateral do editor_ você pode escolher em uma lista de tipos de sprite. A definição disso determinará o número de animações disponíveis para o seu sprite e quais nomes elas têm no _Navegador de animações_. Por exemplo, embora você possa usar qualquer tipo de sprite para o jogador em uma cena de _Plataforma_, é recomendável definir o tipo como _Jogador de plataforma_, pois isso permitirá que você configure as animações de `Pular` e `Escalando`.

Alguns tipos de sprite também permitem "Inverter 'direita' para criar quadros de 'esquerda'", isso permite criar as animações de sprite para a esquerda e para a direita a partir de uma única animação que é invertida automaticamente, evitando que você crie essas animações manualmente.

### Estados da animação

Usando o botão `+` no _Navegador de animações_, você pode criar novos _Estados da animação_. Isso permite criar animações personalizadas que podem ser acionadas a partir de scripts.

Depois de criar um novo _Estado da animação_, você pode nomeá-lo digitando no campo _Nome do estado_ na _Barra lateral do editor_ ou selecionando um nome de sprite existente.

A lista de nomes de sprites é global para o seu projeto e é recomendável manter o número de nomes únicos baixo. Cada um que você adiciona aumenta a quantidade de memória necessária para todos os sprites do seu jogo. Por exemplo, em vez de ter dois sprites únicos com os estados `Explodir` e `Esmagar`, considere criar um único estado usado por ambos chamado `Destruir`.

Para trocar qual estado de animação um ator deve usar no seu jogo, você pode usar um evento `Definir estado de animação do ator`. Isso permite que você escolha um ator e para qual estado de animação deve mudar. Certifique-se de que a folha de sprite que você está usando tenha animações definidas para o estado que você escolheu no evento!

### Tela de quadro

Uma vez que você selecionou uma _Animação_ e um _Quadro_ para editar, pode usar a _Paleta de tiles_ e a _Tela de quadro_ para criar um quadro de animação.

Comece clicando no tile que deseja usar na _Paleta de tiles_.

- Você pode selecionar vários tiles clicando e arrastando na _Paleta de tiles_
- Por padrão, a _Paleta de tiles_ se alinha a uma grade de `8px`. Isso serve para aumentar a chance de reutilização de tiles, já que cada tile único que você usa no seu sprite consome os limites quando usado em cenas. Se você sabe o que está fazendo e deseja desativar essa grade, pode ativar o `Precision Mode` clicando no botão no canto superior direito da _Paleta de tiles_ ou segurando `Alt` ao fazer a sua seleção.

Após fazer uma seleção de tiles, clique na _Tela de quadro_ para desenhar os tiles no seu quadro. Você pode então mover os tiles pela _Tela de quadro_ arrastando-os e, se tiver uma seleção de tiles, pode mover os quadros para a frente ou para trás e invertê-los horizontalmente ou verticalmente usando a _Barra lateral do editor_.

### Casca de cebola

Usando o botão _Casca de cebola_, você pode alternar o recurso _Casca de cebola_. Isso exibe uma versão semitransparente do quadro anterior atrás da _Tela de quadro_, permitindo que você tome decisões mais facilmente sobre o fluxo da animação.

### Botão de grade

Usando o _Botão de grade_, você pode alternar entre exibir uma grade atrás dos tiles do seu sprite para ajudar a alinhar os tiles.

### Botão de fundo escuro

Usando o _Botão de fundo escuro_, você pode alternar entre exibir uma cor clara ou escura atrás dos tiles do seu sprite.

### Apagando tiles e quadros

Para apagar um tile ou quadro, selecione-o na _Tela de quadro_ ou no _Navegador de quadros_ e pressione `Backspace` no seu teclado. Como alternativa, você pode fazer a sua seleção e clicar na seta do botão suspenso no canto superior direito da _Barra lateral do editor_ para acessar um menu onde a opção de apagar está disponível.

## Requisitos de imagem

Os `.png`s de sprite devem conter apenas as quatro cores a seguir:

<Swatch color="#071821" description="Mais escuro" />
<Swatch color="#86c06c" />
<Swatch color="#e0f8cf" description="Mais claro" />
<Swatch color="#65ff00" description="Transparente" />

Baixe as amostras de paleta do GB Studio para:  
[Adobe Photoshop](/assets/swatches/gb-studio-photoshop.aco)  
[Aseprite](/assets/swatches/gb-studio-aseprite.aseprite)  
[Piskel](/assets/swatches/gb-studio-piskel-sprites-palette.gpl)

A cor `#65ff00` é usada para representar um fundo transparente no jogo e será invisível no jogo e no _Editor de mundo_.

Cores que não forem de um dos códigos hexadecimais acima serão correspondidas à cor mais próxima. Ao contrário das imagens de fundo, a cor `#306850` não pode ser usada em sprites.

Ao atribuir paletas de cores de sprite para uma cena, essas cores são mapeadas do Mais escuro ao Mais claro na paleta.

