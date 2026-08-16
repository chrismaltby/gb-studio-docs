---
sidebar_position: 1
---

# Navegador

O Navegador é a barra lateral à esquerda que permite navegar rapidamente pelo seu projeto.

<img title="Navegador" src="/img/screenshots/navigator-v4.png" width="246" className="drop-shadow" />

## Menu de contexto

Ao clicar com o botão direito nos itens no Navegador, você pode abrir um menu de contexto. O menu de contexto da cena mostrado abaixo permite definir rótulos de cor, definir a cena como a cena inicial para o seu projeto, renomear e apagar a cena.

<img title="Navegador" src="/img/screenshots/navigator-context-menu-v420.jpg" width="412" className="drop-shadow margin-bottom" />

## Pastas

Se as suas cenas, scripts, paletas ou ativos contiverem caracteres `/` ou `\` em seus nomes, eles serão tratados como pastas no Navegador, permitindo que você organize o seu projeto.

Ex.: Nomear uma cena como `caves/Underground`, como mostrado abaixo:

<img title="Renomear pastas no Navegador" src="/img/screenshots/navigator-folders-rename-v4.png" width="246" className="drop-shadow margin-bottom" />

fará com que ela apareça no navegador como `Underground` com uma pasta chamada `caves`:

<img title="Pastas do Navegador" src="/img/screenshots/navigator-folders-v4.png" width="246" className="drop-shadow margin-bottom" />

:::warning
Ao renomear ativos, como Imagens de fundo, para dentro de pastas usando o Navegador, os arquivos físicos no seu projeto (`.png` etc.) também serão movidos para a nova estrutura de pastas especificada. É importante salvar o seu projeto após fazer alterações como esta, pois mover esses arquivos sem salvar pode fazer com que o aplicativo não consiga localizar os ativos na próxima vez que você carregar o seu projeto.

É recomendável que você use um [sistema de controle de versão](/docs/getting-started/saving-loading#version-control), permitindo que você reverta erros.
:::

## Atalhos de teclado

**Mover seleção para cima** - `Seta para cima`  
**Mover seleção para baixo** - `Seta para baixo`  
**Abrir pasta** - `Seta para direita`  
**Fechar pasta** - `Seta para esquerda`  
**Renomear** - `Enter`  
**Selecionar vários itens** (Apenas cenas) - `Shift` ao clicar
