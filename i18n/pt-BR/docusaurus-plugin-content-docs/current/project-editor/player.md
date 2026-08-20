---
sidebar_position: 2
---

# Jogador

## Posição inicial

A posição inicial do jogador é indicada na visualização da área do jogo pelo ícone <img src="/img/screenshots/player-start.png" style={{height:12}} />.

Clicar na imagem de fundo entre as cenas alterna a barra lateral de volta para o Editor de projetos, onde você terá opções para definir a cena inicial, a posição e a direção do jogador.

Você também pode alterar a posição inicial do jogador arrastando o ícone <img src="/img/screenshots/player-start.png" style={{height:12}} /> e pode até mesmo arrastar entre cenas.

:::tip
Outra maneira de definir a posição inicial do jogador é clicando com o botão direito na cena e selecionando em qual direção você deseja que o jogador fique virado a partir do menu suspenso.

<div className="drop-shadow"><img src="/img/screenshots/set-starting-pos.gif" width="320" className="clip-bottom" /></div>
:::

## Folha de sprite padrão

Cada tipo de cena (_Visão superior 2D_, _Plataforma_ etc.) pode ter uma folha de sprite do jogador padrão diferente, que será usada em qualquer cena desse tipo, a menos que você substitua isso para a cena específica.

Você pode editar as folhas de sprite do jogador padrão para cada tipo de cena a partir da [Visualização de configurações](/docs/settings).

## Scripts

A maioria dos eventos de script de ator também pode ser aplicada ao jogador. Além disso, você pode usar o evento [Definir folha de sprite do jogador](/docs/scripting/script-glossary/actor#set-player-sprite-sheet) para alterar os gráficos usados para o personagem do jogador no meio do jogo. Alterar a folha de sprite do jogador afetará apenas a cena atual.

Ao alternar entre cenas, o jogador sempre se tornará visível no local inicial da cena, independentemente das opções de visibilidade anteriores. Se você deseja que o jogador fique oculto em uma cena, por exemplo, ao mostrar uma tela de título ou cutscene, adicione um evento [Ocultar ator](/docs/scripting/script-glossary/actor#hide-actor) ao script _Ao iniciar_ da cena.
