---
sidebar_position: 3
---

import ScriptEventPreview, {FakeValue} from '@site/src/components/ScriptEventPreview';

# Variáveis de diálogo

Os eventos de script que permitem exibir texto, como [Exibir diálogo](/docs/scripting/script-glossary/dialogue-menus), também permitem que você exiba o valor de variáveis.

Digitar `$` seguido pelo nome de uma variável permitirá que você pesquise entre as variáveis para exibir em seu texto. Uma vez que uma variável tenha sido adicionada, você pode clicar nela para abrir um menu que permite alterar a variável.

<div className="drop-shadow margin-bottom"><img src="/img/screenshots/dialogue-variables.gif" width="320" className="clip-bottom" /></div>

## Formatando variáveis

É possível adicionar prefixos às variáveis de diálogo permitindo que elas sejam usadas de forma diferente dentro do seu texto.

- **Tamanho fixo**: Adicionar `%D` seguido por um número entre `1` e `9` antes de uma variável faz com que ela seja exibida como um valor de tamanho fixo com zeros à esquerda. Ex.: `%D5$Variable` seria exibido como `00042`.
- **Código de caractere**: Adicionar `%c` antes de uma variável faz com que ela seja exibida como um código de caractere ASCII. Ex.: `%c$Variable` quando a variável for `65` exibirá como `A`.
- **Velocidade do texto**: Adicionar `%t` antes de uma variável faz com que ela seja usada para definir a velocidade do texto a partir desse ponto no diálogo.
- **Fonte**: Adicionar `%f` antes de uma variável faz com que a fonte mude para um índice com base no valor da variável. O índice de cada fonte no seu jogo é determinado pela ordem em que as fontes aparecem em `script_engine_init.s`, que você pode encontrar selecionando `Jogo > Avançado > Exportar dados do projeto` no menu do aplicativo.

## Comandos de texto

Digitar `!` seguido por um dos comandos abaixo permite que você altere como o diálogo é exibido a partir desse ponto, permitindo que você use várias fontes e velocidades em um único evento de diálogo.

- `!Font` Permite que você escolha uma fonte para a qual mudar no meio do diálogo.
- `!Speed` Permite que você escolha entre as diferentes velocidades de texto.
- `!Instant` Permite que você defina o texto para aparecer instantaneamente.
- `!Wait` Permite que você pause o diálogo no meio do texto até que um determinado período de tempo passe ou um botão especificado seja pressionado.
- `!Cursor` Permite que você mova o cursor de texto para uma nova posição. Clique no token `P(0,0)` ou `M(+1,+1)` para abrir um pop-up permitindo que você altere a posição para a qual mover.
