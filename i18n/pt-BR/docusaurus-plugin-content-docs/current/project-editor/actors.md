---
sidebar_position: 3
---

# Atores

Atores são os personagens e objetos na sua cena com os quais você pode interagir.

## Adicionando um ator

Para adicionar um ator a uma cena, clique no botão **` + `** nas _Ferramentas do editor_ e selecione _Ator_ no menu (alternativamente, pressione a tecla **A**), em seguida, clique na cena e na posição onde deseja colocar o ator.

<img src="/img/screenshots/add-actor.gif" style={{width:300}} />

## Propriedades do ator

- **Nome** - Nomeia o seu ator. Dar um _nome_ aos seus atores ajuda a organizá-los no seu projeto. O nome de um ator será visível em qualquer menu suspenso que peça para você escolher um ator, como o evento [Ocultar ator](/docs/scripting/script-glossary/actor#hide-actor).
- **Posição** - Define as posições X e Y onde o ator será posicionado em uma cena. Você também pode alterar isso arrastando o ator pela _Área do jogo_.
- **Fixar na tela** - Usando o _Botão de fixar_ próximo à posição do ator, você pode escolher fixar o ator na tela, o que faz com que ele não se mova conforme a tela do jogo rola.
- **Folha de sprite** - Escolha quais gráficos de sprite devem ser usados para exibir o ator.
- **Velocidade de movimento** - Escolha a rapidez com que o ator deve se mover quando eventos de script são usados.
- **Velocidade da animação** - Escolha a rapidez com que as animações do ator devem ser reproduzidas.
- **Grupo de colisão** - Escolha se os scripts devem ser reproduzidos automaticamente ao colidir com este ator.

### Fixar na tela

Quando um ator é fixado, ele aparecerá em um local fixo conforme a câmera do seu jogo se move. O ator fixado não se moverá sem um script e não cria colisões com outros atores na sua cena.

Ativar esta propriedade alterará temporariamente a sua cena para ficar escurecida, com um limite de `160px x 144px` no canto superior esquerdo mostrando parte da sua cena original. Use o seu mouse para arrastar o ator para onde você quer que ele seja fixado na tela.

Selecione um ator diferente, a cena ou o projeto para retornar a visualização escurecida da sua cena ao normal.

### Grupos de colisão

Atores podem receber um grupo de colisão na _Barra lateral do editor_. Quando habilitada, a opção de executar scripts com base em colisões aparecerá na _Barra lateral do editor_. Para saber mais sobre os scripts Ao acertar, veja a documentação de [Scripts](/docs/scripting).

Além disso, dependendo do [tipo de cena](/docs/project-editor/scenes/types) selecionado no momento, você pode ter opções de colisão adicionais para atores.

<img title="Marcadores de colisão" src="/img/screenshots/collision-flags.jpg" width="280" className="drop-shadow margin-bottom" />

- **É sólido:** Disponível em cenas de Plataforma e Aventura. Determina se o jogador deve ser capaz de atravessar este ator.

- **É plataforma:** Disponível em cenas de Plataforma. Determina se o jogador deve ser capaz de ficar em cima deste ator, mas ainda ser capaz de atravessá-lo.

Ao [modificar o motor do seu jogo](/docs/extending-gbstudio/engine-eject) ou usar [plugins](/docs/extending-gbstudio/plugins), você pode definir tipos de cena adicionais que podem, cada um, especificar os seus próprios marcadores de colisão de ator no arquivo `engine.json` deles.

## Scripts

Atores podem conter vários scripts que serão chamados em pontos diferentes do seu jogo.

- **Ao interagir:** Isso é chamado se o jogador estiver de frente para este ator e pressionar o botão de _Interação_.
- **Ao acertar:** (apenas se o grupo de colisão estiver definido) Isso é chamado quando este ator colide com o jogador ou com um projétil que tenha um grupo de colisão especificado.
- **Ao iniciar:** Chamado assim que a cena for carregada no jogo.
- **Ao atualizar:** Chamado repetidamente enquanto o ator estiver na tela e, assim que o script terminar, ele se repetirá. Você pode usar isso para criar scripts de movimento.

Para começar a construir um script, selecione um ator, clique no tipo de script que você quer editar e clique no botão _Adicionar evento_ na _Barra lateral do editor_ para abrir o menu de eventos. Selecione um evento para adicioná-lo ao script.

Para obter mais informações, veja a documentação de [Scripts](/docs/scripting).

## Limites

Existem limites para como atores e seus sprites podem ser usados no GB Studio. Esses limites servem para garantir que o seu jogo apareça conforme o planejado, bem como para manter a lógica do seu ator funcionando perfeitamente. Os limites exatos dependem da complexidade da imagem de fundo usada na sua cena, veja [Cenas](/docs/project-editor/scenes/limits#actor-limits) para obter mais informações.
