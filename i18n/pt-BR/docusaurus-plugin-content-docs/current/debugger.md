---
sidebar_position: 8
---

# Depurador

O painel **Depurador** permite que você examine o estado atual do seu jogo em tempo real, ajudando-o a identificar e resolver problemas enquanto desenvolve os scripts do seu jogo.

Você pode acessar o Depurador clicando para abrir o painel na parte inferior da visualização da _Área do jogo_ ou selecionando `Jogo > Executar com depuração` no menu.

<img title="Depurador" src="/img/screenshots/debugger-v4.png" width="1458" />

## Pré-visualização de VRAM

O painel **VRAM** mostra a memória de vídeo atual usada pelos gráficos no seu jogo em execução.

Você pode usar este painel para obter uma pré-visualização visual de quantos tiles adicionais de sprite e imagem de fundo estão disponíveis na cena atual e para ajudar a depurar problemas quando você usar tiles únicos demais na cena.

Abaixo da pré-visualização de tiles, o painel também mostra as 8 paletas de tiles de imagem de fundo e as 8 paletas de tiles de sprite sendo usadas para a cena atual em jogos coloridos.

:::info
Observe que, a menos que você esteja usando o modo [Apenas cor](/docs/settings#color-options), apenas metade da VRAM está disponível para o seu jogo.
:::

## Estado atual

O painel **Estado atual** informa qual cena está sendo executada no momento no jogo e quantas [threads de script](/docs/debugger#active-script-threads) estão ativas.

Se você clicar no nome da cena atual, será direcionado para essa cena na visualização da _Área do jogo_.

## Pontos de interrupção

O painel **Pontos de interrupção** consiste em algumas configurações globais e uma lista dos pontos de interrupção de evento atuais ativados para o seu projeto. Os pontos de interrupção permitem que você pause o jogo em execução, permitindo ver quais eventos de script estão sendo executados no momento e visualizar o valor atual das variáveis do seu jogo.

- **Pausar ao mudar script**: Habilitar esta configuração fará com que o depurador pause sempre que um novo script for iniciado, por exemplo, quando você interagir com um ator/gatilho ou carregar uma nova cena.

- **Pausar ao detectar mudança na variável**: Habilitar esta configuração fará com que o depurador pause sempre que qualquer script modificar uma de suas [variáveis monitoradas](/docs/debugger#variable-values).

### Definindo pontos de interrupção

Para definir um ponto de interrupção em um evento, você pode usar o botão suspenso e selecionar "Definir ponto de interrupção" conforme mostrado abaixo:

<img title="Definindo um ponto de interrupção" src="/img/screenshots/set-breakpoint-v4.png" width="418" className="drop-shadow margin-bottom" />

Para remover o ponto de interrupção, você pode repetir esse processo ou clicar no botão **` x `** que aparecerá ao passar o mouse sobre a entrada no painel **Pontos de interrupção**.

## Valores das variáveis

O painel **Variáveis** permite que você veja o valor atual das variáveis usadas no seu jogo. Você também pode digitar novos valores que serão **atualizados ao vivo** no seu jogo em execução.

### Monitorando variáveis

Você pode monitorar variáveis passando o mouse sobre o item da lista e clicando no botão **` ★ `** que aparece à direita. O monitoramento de variáveis permite que você faça uso da configuração de pontos de interrupção [Pausar ao detectar mudança na variável](/docs/debugger#breakpoints).

<img title="Monitorando variáveis" src="/img/screenshots/watching-variables-v4.png" width="332" className="drop-shadow margin-bottom" />

## Threads de script ativas

Quando o seu jogo estiver pausado, você poderá navegar pelos scripts atualmente em execução. Você pode pausar o jogo clicando no botão **` ⏸ `** no canto superior direito do depurador, pressionando `F8` ou acionando um [ponto de interrupção](/docs/debugger#breakpoints).

### Visualização de script

No canto superior direito do painel **Threads de script ativas**, existem abas para alternar entre a visualização do Editor de eventos (o padrão) ou ver o [Script GBVM](/docs/scripting/gbvm) gerado. Na visualização do Editor, você pode modificar o script, incluindo a adição e remoção de eventos. No entanto, observe que quaisquer alterações feitas aqui não terão efeito até que você compile o seu jogo novamente.

### Avançando pelo seu jogo

Quando o seu jogo estiver pausado, você pode usar os _Botões de avançar_ ou os [atalhos de teclado](/docs/debugger#keyboard-shortcuts) para avançar lentamente pelo seu jogo e acompanhar o progresso de quaisquer scripts em execução.

<img title="Avançando pelo seu jogo" src="/img/screenshots/debugger-step-controls-v4.png" width="296" className="margin-bottom" />

- **Pausar/Retomar**: Alterna entre os modos de reprodução e pausa.
- **Avançar**: Executa o jogo até que o próximo evento de script inicie, permitindo que você acompanhe a lógica dos seus scripts.
- **Avançar um quadro**: Executa o jogo até que o próximo quadro de animação inicie. Isso é útil para entender o que está acontecendo a cada quadro durante eventos que levam tempo, como [Mover ator para](/docs/scripting/script-glossary/actor#actor-move-to).

### Atalhos de teclado

Quando o depurador estiver ativado, você pode usar os seguintes atalhos de teclado tanto na _Janela do projeto_ quanto na _Janela de jogo_:

**Pausar/Retomar** - `F8`  
**Avançar uma instrução** - `F9`  
**Avançar um quadro** - `F10`

## Registro de compilação

O **Registro de compilação** permite que você veja o progresso atual enquanto o seu jogo está sendo compilado. Ele também lista quaisquer avisos, como problemas com a complexidade das suas cenas ou incompatibilidade com plugins.

Você pode acessar o Registro de compilação clicando no botão de alternância `Registro de compilação` no canto superior direito do painel Depurador. Para fechar o Registro de compilação, você pode clicar no botão uma segunda vez.

O Registro de compilação abrirá automaticamente se o seu projeto tiver avisos. Se preferir que isso não aconteça, você pode desativar o recurso nas [opções de compilação](/docs/settings#build-options) do seu projeto.

<img title="Registro de compilação" src="/img/screenshots/build-log-v4.png" width="864" className="drop-shadow margin-bottom" />
