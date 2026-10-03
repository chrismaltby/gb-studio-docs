---
sidebar_position: 1
---

# Editor de música

:::info
Se você atualizou recentemente para o GB Studio 4 de uma versão anterior, por favor, reveja este [guia de migração](/docs/migrate) para garantir que a sua música seja atualizada corretamente.
:::

Se o seu _Formato de música_ na _Visualização de configurações_ estiver definido como `UGE (hUGEDriver)` (o padrão no GB Studio 3 e superior), você pode adicionar música ao seu jogo incluindo arquivos `.uge` na pasta `assets/music` do seu projeto. 

Esses arquivos podem ser editados usando o _Editor de música_ clicando no _Botão de visualização do projeto_ e selecionando _Música_. O editor também permite criar novas músicas pressionando o botão `+` na parte superior da lista de músicas.

>Arquivos `.uge` também podem ser editados usando o **[hUGETracker](https://nickfa.ro/index.php/HUGETracker)**

## Primeiros passos

O _Editor de música_ é dividido em três partes:

-   **Navegador**: Contém a lista de músicas e instrumentos para a música selecionada.

-   **Compositor de músicas**: O próprio editor de música. Possui duas visualizações: [Piano](#piano-roll) e [Tracker](#tracker). O primeiro ícone na barra de ferramentas permite alternar entre as visualizações.

-   **Barra lateral do editor**: Permite editar o título da música, nome do artista e ritmo, e também mostra o editor de instrumento ou efeito quando selecionado.

### Estrutura de uma música

Uma música consiste em:

* Quatro _Canais_: Duty 1, Duty 2, Onda e Ruído. 
  * Cada canal é mais adequado para um tipo diferente de som (por exemplo: o canal de Ruído é geralmente adequado para ritmos de bateria).
  * Cada canal possui o seu próprio conjunto de 15 _[Instrumentos](#instruments)_. Duty 1 e Duty 2 compartilham o mesmo conjunto de instrumentos.  
* Vários _Padrões_, um grupo único de notas em cada um dos quatro canais. 
  * Cada padrão contém uma sequência de até 64 notas por canal, e cada nota é formada por uma tonalidade variando de `C-3` a `B-8`, um instrumento e um efeito.
  * Os padrões podem ser repetidos ou arranjados para formar a música completa usando o _[Navegador de padrões](#pattern-navigator)_.
* Um _Ritmo_, indicando quantos ticks (64 por segundo) devem decorrer antes que uma linha seja concluída. Quanto maior o número de ticks, mais lenta será a música.

## Piano

No modo Piano, você usa o mouse para adicionar notas ao padrão. Ele é lido como uma partitura, o tempo é representado no eixo horizontal (colunas) enquanto a tonalidade da nota é representada no eixo vertical (linhas).

<img title="Piano" src="/img/screenshots/music-editor-piano-roll-v3.1.png" width="1241" />

Você só pode adicionar notas a um canal por vez, selecionável na barra de ferramentas superior direita. Os canais podem ser silenciados com o ícone de alto-falante de cada canal. Os canais que não estão selecionados podem ser pré-visualizados clicando no ícone do olho.

### Usando o piano

Para inserir uma nota, selecione a ferramenta de caneta na barra de ferramentas e clique em uma célula. A nota usará o instrumento selecionado na barra de ferramentas.

Para remover uma nota, selecione a ferramenta de borracha na barra de ferramentas e clique em uma nota existente. Você também pode clicar com o botão direito em uma nota existente para removê-la.

Para selecionar uma nota, selecione a ferramenta de seleção ou pressione `Shift`. Uma vez selecionado um grupo de notas, arraste e solte-o em qualquer outro lugar na grade.

A barra de efeitos, na parte inferior da grade do piano, permite adicionar um [efeito](#effects) a uma determinada nota usando o editor de efeitos no painel à direita.

A música pode ser pré-visualizada a qualquer momento pressionando o botão de reproduzir.

Para definir a posição inicial da reprodução, clique na área acima do piano, onde o indicador de reprodução é mostrado.

A música pode ser salva pressionando o botão de salvar ou Ctrl/Cmd + S.

## Tracker

No modo Tracker, você usa o teclado para adicionar notas ao padrão. A música avança de cima para baixo, com cada linha representando uma posição da música. 

<img title="Tracker" src="/img/screenshots/music-editor-tracker-v3.1.png" width="1241" />

Há uma coluna para cada canal, e cada coluna é dividida em 3 campos: Tonalidade (ou Nota), Instrumento e Efeito.

```
C-5 01 240
--- -- ---
 |   |  |
 |   |  +------ Coluna de efeito (Alterações de volume, arpejos, panorama, etc.)
 |   +--------- Instrumento
 +------------- Nota e oitava (Uma nota C na 5ª oitava. O traço pode ser um #, que significa uma nota sustenida, ex.: C#, D#)
```

As linhas podem estar vazias ou podem ser parcialmente preenchidas (com apenas um efeito, por exemplo).

### Usando o tracker

A grade da música pode ser navegada com as teclas direcionais (setas). 

Existem duas disposições de teclado para inserir os valores na coluna da nota. A disposição pode ser selecionada na janela de _Preferências_ do GB Studio.

***Disposição linear*** 
<img title="Tracker" src="/img/screenshots/music-editor-keys-openmpt.png" width="360" class="drop-shadow" />

*Esta é a disposição usada por trackers como o OpenMPT e hUGETracker.*

Cada linha do teclado (ou "linha") representa uma oitava em um piano. As teclas de `Q` a `/` são usadas para inserir os valores, começando com `C` na oitava base (3 por padrão). 

***Disposição do piano***
<img title="Tracker" src="/img/screenshots/music-editor-keys-milkyt.png" width="360" class="drop-shadow" />

*Esta é a disposição usada por trackers como o MilkyTracker ou FastTracker2.* 

O teclado é dividido em dois grupos de duas linhas de teclas. Em cada grupo, as teclas superiores representam as teclas pretas de um piano, e as teclas inferiores as brancas. As teclas de `2` a `/` são usadas para inserir os valores, começando com `C` na oitava base + 1 (4 por padrão).

A oitava base pode ser selecionada na barra de ferramentas.

As teclas numéricas são usadas para inserir o valor na coluna de instrumento. Um [instrumento](#instruments) padrão pode ser selecionado na barra de ferramentas e usado automaticamente ao adicionar uma nova nota.

As teclas numéricas e as teclas de `A` a `F` são usadas para inserir valores na coluna de [efeito](#effects).

A música pode ser pré-visualizada a qualquer momento pressionando o botão de reproduzir.

Para definir a posição inicial de reprodução, clique no número da linha no lado esquerdo da grade do tracker.

A música pode ser salva pressionando o botão de salvar ou Ctrl/Cmd + S.

## Navegador de padrões

<img title="Padrões" src="/img/screenshots/music-editor-patterns.png" width="710" class="drop-shadow" />

O menu suspenso em cada célula permite que você selecione um dos padrões existentes ou atribua um padrão vazio à posição atual.

O botão de mais permite que você adicione um novo padrão à música.

**Observação:** qualquer padrão não utilizado será removido da música ao salvar.

## Instrumentos

>Emprestado das descrições no [manual do hUGETracker](https://nickfa.ro/images/HUGETrackerManual.pdf)

Selecionar um instrumento na barra lateral esquerda abrirá o editor de instrumentos na barra lateral direita.

As alterações no instrumento podem ser pré-visualizadas a qualquer momento pressionando o botão "Testar instrumento (C5)", que tocará a nota C5 por alguns segundos com o instrumento selecionado.

Além do nome do instrumento, cada instrumento tem o seu próprio conjunto de campos que podem ser editados.

### Instrumentos Duty

**Comprimento:** Quando habilitado, a nota será cortada imediatamente em um comprimento específico. Se não estiver habilitado, a nota tocará até que uma nova nota comece.

**Volume inicial**: Define o volume inicial para o envelope. Se não houver alteração gradual definida, este será o volume para a nota.

**Mudança gradual:** Define o quão acentuada será a mudança de volume. Quanto maior ou menor o valor, mais rápida será a transição da nota.

**Tempo de alteração gradual:** Seleciona o "tempo de alteração gradual" que a nota levará para ocorrer. Quanto maior o valor, mais lenta a alteração.

**Deslocamento gradual:** Seleciona a direção e a magnitude da alteração gradual para a nota ocorrer por "tick", conforme especificado pelo Tempo de alteração gradual. Valores positivos fazem o portamento da nota para cima, valores negativos fazem o portamento para baixo.

**Duty:** Seleciona o timbre da nota a tocar. Cada um soa diferente, e eles são úteis quando você não quer que os canais duty entrem em conflito um com o outro.

### Instrumentos de Onda

**Comprimento:** Quando habilitado, a nota será cortada imediatamente em um comprimento específico. Se não estiver habilitado, a nota tocará até que uma nova nota comece.

**Volume**: Especifica em qual volume um instrumento de onda deverá tocar, a menos que seja substituído por um comando de efeito de volume. Existem apenas 3 valores possíveis aqui, já que a interface de volume do canal de onda é mais limitada do que os outros canais.

**Forma de onda**: Seleciona qual forma de onda deve tocar como parte deste instrumento. A forma de onda selecionada pode ser editada desenhando na pré-visualização da forma de onda.

### Instrumentos de Ruído

**Comprimento:** Quando habilitado, a nota será cortada imediatamente em um comprimento específico. Se não estiver habilitado, a nota tocará até que uma nova nota comece.

**Volume inicial**: Define o volume inicial para o envelope. Se não houver alteração gradual definida, este será o volume para a nota.

**Mudança gradual:** Define o quão acentuada será a mudança de volume. Quanto maior ou menor o valor, mais rápida será a transição da nota.

**Contador de 7 bits:** Quando marcado, o instrumento soará mais como um tom musical do que ruído.

**Macro de ruído:** Como um efeito de arpejo, configura até 8 alterações de tonalidade +-32 a partir da frequência do ruído, avançando a cada quadro. Ótimo para bumbos de bateria ou ruídos rápidos de varredura. Deve ser mais curto que o ritmo atual da música.

## Efeitos

>Emprestado das descrições no [manual do hUGETracker](https://nickfa.ro/images/HUGETrackerManual.pdf)

| Efeito | Nome               | Descrição                               |
| ------ | ------------------ | --------------------------------------- |
| 0xy    | Arpejo             | A cada tick, alterna entre a nota tocada, nota + `x`, e nota + `y`, onde `x` e `y` são valores em semitons. Pode ser usado para criar "acordes" ou um efeito de dedilhado.|
| 1xx    | Portamento acima   | Desliza a tonalidade para cima em `xx` unidades a cada tick.|
| 2xx    | Portamento abaixo  | Desliza a tonalidade para baixo em `xx` unidades a cada tick.|
| 3xx    | Portamento de tom  | Desliza a tonalidade em direção ao valor da nota especificada em `xx` unidades a cada tick. Para quando atinge o valor da nota especificada.<br/> **Este efeito não pode ser usado em uma célula com um valor de instrumento.**|
| 4xy    | Vibrato            | Alterna rapidamente entre o valor da nota especificada e a nota + y, na taxa de `x`, onde `y` é um valor em unidades. Isso é semelhante ao arpejo, exceto que você pode controlar a frequência, e a quantidade é especificada em unidades em vez de semitons.|
| 5xx    | Definir volume principal | Define o controle do volume principal do Gameboy para os alto-falantes esquerdo e direito. Use o editor de efeitos para criar um desses efeitos. Observe que um volume de zero não é completamente silencioso.|
| 6xx    | Chamar rotina      | Chama uma rotina definida pelo usuário. Rotinas podem ser criadas usando o evento [Definir rotina de música](/docs/scripting/script-glossary/music-sound-effects#set-music-routine).|
| 7xx    | Atraso da nota     | Aguarda `xx` ticks antes de tocar a nota nesta célula.|
| 8xx    | Definir panorama   | Define quais canais tocam em quais alto-falantes. Use o editor de efeitos para criar um desses efeitos. <br/>Também pode ser usado para silenciar um canal definindo-o para não sair áudio nem pela esquerda nem pela direita.|
| 9xx    | Definir ciclo de onda | Seleciona o ciclo de onda para os canais Duty 1 ou Duty 2. Se este efeito aparecer nos canais de Ruído ou Onda, ele afetará o canal Duty 2. Valores válidos para `xx` são 00, 40, 80, C0. Nos bastidores, o valor `xx` é carregado diretamente no registrador de comprimento do Duty 1 ou Duty 2, então você teoricamente poderia alcançar outros efeitos além de apenas a mudança do ciclo de onda.|
| Axy    | Deslizamento de volume | Desliza o volume da nota para cima em `x` unidades e depois para baixo em `y` unidades.<br/>Este efeito na verdade reativa a nota a cada tick, o que pode não ser notável para instrumentos sem comprimento/envelope, mas pode soar mal se estes estiverem presentes.<br/>É recomendado usar envelopes do instrumento, ou o comando `C` como alternativa, se puder.<br/>**Este efeito não funciona na mesma célula que uma nota/instrumento!**|
| Bxx    | Salto de posição   | Pula para o início do padrão `xx`. Se `xx` for `00`, pula para o próximo padrão.|
| Cev    | Definir volume     | Define o envelope `e` e o volume `v` do canal. Deve ser acompanhado de uma nota e instrumento para funcionar (exceto no canal de Onda).<br/>Volumes válidos variam de 00-0F (00,04,08,0F para o canal de Onda).<br/>Envelopes válidos para `Cev` 00-F0, 0 usa instrumento, 8 sem transição, 1-7 transição mais silenciosa, 9-F transição mais alta, valores menores fazem a transição mais rapidamente. |
| Dxx    | Quebra de padrão   | Pula para o próximo padrão antecipadamente, e começa na linha `xx`.|
| Exx    | Corte da nota      | Corta a duração da nota repentinamente após `xx` ticks.|
| Fxx    | Definir velocidade | Define o número de ticks por linha como `xx`. Pode ser usado de maneira alternada para criar uma batida do tipo swing.|

## Atalhos de teclado

Veja [Atalhos de teclado > Editor de música](/docs/getting-started/keyboard-shortcuts#music-editor)

