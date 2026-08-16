---
sidebar_position: 1
---

# Tipos de cena

O **Tipo** de uma cena determina como o jogador é controlado e como as interações funcionam enquanto o jogo está sendo executado. Internamente, o GB Studio usa o tipo selecionado para configurar a cena quando ela é carregada e para decidir qual lógica de jogo é executada a cada quadro.

Os tipos de cena também podem alterar quais [Tiles de colisão](/docs/project-editor/scenes/collisions) são suportados e quais [Marcadores de colisão do ator](/docs/project-editor/actors#collision-groups) estão disponíveis.

Usando [plugins](/docs/extending-gbstudio/plugins), você também pode adicionar tipos de cena adicionais ou modificar os integrados.

## Tipos de cena integrados

O GB Studio inclui vários tipos de cena integrados projetados para gêneros comuns.

### Visão superior 2D

Use isto para mundos no estilo RPG e movimento baseado em grade.

- O jogador se move em uma **grade de 8px** (opcionalmente **16px**, configurável nas [Configurações](/docs/settings)).
- **Interação com ator:** Fique perto de um ator, vire-se para ele e pressione o botão de `Interação` (padrão `A`) para executar o script **Ao interagir** do ator.
- **Interação com gatilho:** Quando o jogador pisa em um gatilho, o script **Ao entrar** do gatilho é executado. Quando o jogador sai desse gatilho (pisando em um tile sem gatilho), o seu script **Ao sair** é executado.

### Logotipo

Use isto para telas de título, telas de abertura e outras exibições estáticas.

O tipo de cena Logotipo contém lógica de jogo mínima (por exemplo, ele não exibe um jogador controlável), mas permite imagens de fundo mais complexas do que as cenas normais.

Normalmente, devido aos [limites de cena](/docs/project-editor/scenes/limits#background-and-sprite-tile-limits), uma única imagem de fundo de cena pode conter até **128 tiles únicos** (ou **256** em `Apenas cor`). Uma tela inteira tem **20 tiles de largura × 18 tiles de altura** (360 tiles), então imagens detalhadas podem exceder o limite de tiles únicos.

Cenas de logotipo são projetadas para exibir essas imagens mais complexas sem a necessidade de simplificar a sua arte para caber nos limites de tiles das cenas padrão.

### Plataforma

Use isto para níveis de plataforma de rolagem lateral ou vertical.

As cenas de plataforma fornecem controle detalhado sobre o movimento do jogador, incluindo aceleração, velocidade e gravidade, e oferecem suporte a recursos opcionais como:

- Correr
- Pular / Pulo duplo
- Pulo de parede
- Flutuar
- Impulso
- Escadas

Cada recurso pode ser habilitado/desabilitado nas configurações para que as mecânicas não utilizadas não afetem o desempenho do seu jogo.

### Aventura

Use isto para jogos com visão superior e movimento fluido, não baseado em grade.

As cenas de aventura são semelhantes a Visão superior 2D, mas o jogador não está preso a uma grade. O movimento é mais preciso (semelhante a Plataforma) e você pode opcionalmente habilitar recursos como Correr, Impulso e o estado de empurrar.

- O jogador pode se mover diagonalmente (ou você pode impor o **movimento em 4 vias**).
- Você pode restringir a direção em que ele olha para **Apenas horizontal**, o que também pode se adequar a jogos no estilo beat ’em up de rolagem lateral.

### Apontar e clicar

Use isto para interações guiadas por cursor.

Em cenas do tipo Apontar e clicar, o personagem do jogador é tratado como um **cursor**. Pressionar o botão de `Interação` irá interagir com os [Gatilhos](/docs/project-editor/triggers) na cena.

### Shoot ’Em Up

Use isto para clássicos jogos de tiro de rolagem horizontal ou vertical.

- A direção da rolagem é determinada pela **direção inicial para qual o jogador está virado** ao entrar na cena.
- Nas configurações do tipo de cena, você pode:
  - Bloquear o movimento do jogador em uma única borda da tela, ou
  - Permitir movimento livre por toda a tela.
  