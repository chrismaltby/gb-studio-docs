# Elementos de IU

import { Swatch } from '@site/src/components/Swatch';

Seu projeto contém vários arquivos em `assets/ui` com nomes de arquivos fixos que definem partes da interface de usuário do seu jogo. A edição desses arquivos permite que você altere a fonte padrão, defina o quadro da janela e modifique o cursor de seleção.

Se você remover qualquer um dos arquivos na pasta ui, eles serão substituídos pelos ativos padrão na próxima vez que você compilar seu jogo, permitindo que você reverta quaisquer alterações indesejadas.

## frame.png

O motor do jogo usa a [escala de 9 fatias](https://en.wikipedia.org/wiki/9-slice_scaling) desta imagem para criar a moldura ao redor das caixas de texto. A edição desta imagem permitirá que você altere o design da moldura ou defina-a para uma cor sólida.

<img src="/img/ui/frame.png" class="HelpSprite" style={{width:72, height:"auto"}} />

## cursor.png

Esta imagem é usada como um cursor de seleção ao exibir opções de múltipla escolha no seu jogo.

<img src="/img/ui/cursor.png" class="HelpSprite" style={{width:24, height:"auto"}} />

## Requisitos

Os PNGs de IU devem conter apenas as quatro cores a seguir:

<Swatch color="#071821" description="Mais escuro" />
<Swatch color="#306850" />
<Swatch color="#86c06c" />
<Swatch color="#e0f8cf" description="Mais claro" />

Baixe as amostras de paleta do GB Studio para:  
[Adobe Photoshop](/assets/swatches/gb-studio-photoshop.aco)  
[Aseprite](/assets/swatches/gb-studio-aseprite.aseprite)  

## Fontes

As fontes são armazenadas em `assets/fonts`, veja [Configurações](/docs/settings#fonts) para obter mais informações.

## Gestos

Os gestos são armazenados em `assets/emotes` e devem ser definidos como arquivos `.png` de tamanho `16px x 16px` seguindo os mesmos requisitos de cores usados para criar folhas de sprites. Você pode exibir um gesto usando o evento [Exibir balão de gesto](/docs/scripting/script-glossary/dialogue-menus#show-emote-bubble) em um script.

## Avatares

Os avatares são armazenados em `assets/avatars` e devem ser definidos como arquivos `.png` de tamanho `16px x 16px` seguindo os mesmos requisitos de cores usados para criar imagens de fundo. Você pode exibir um avatar em um evento [Exibir diálogo](/docs/scripting/script-glossary/dialogue-menus#display-dialogue) clicando em `Adicionar avatar` dentro do evento.
