---
sidebar_position: 11
---

# Configurações

Clicar no _Botão de visão do projeto_ e selecionar _Configurações_ levará você a uma lista das configurações do seu projeto.

## Opções de cor

O GB Studio é compatível com vários modos de cor, cada um oferecendo diferentes recursos, [limitações](/docs/project-editor/scenes/limits) e compatibilidade com dispositivos.

<img title="Configurações de cor" src="/img/screenshots/color-settings-v420.jpg" width="650" className="drop-shadow" />

- **Monocromático**  
  Permite que seu jogo seja executado em todos os dispositivos, usando apenas quatro cores.  
  Plataformas compatíveis: **GB**, **GB Color**, **Super GB**, **Analogue Pocket**

- **Cor + Monocromático** -
  Permite que seu jogo seja executado em dispositivos monocromáticos e coloridos.  
  Paletas de cores podem ser usadas para [colorir as suas cenas](/docs/project-editor/scenes/color) em dispositivos compatíveis.  
  Plataformas compatíveis: **GB** (Somente monocromático), **GB Color**, **Super GB**, **Analogue Pocket**

- **Apenas cor** Aumenta a quantidade de [tiles disponíveis](/docs/project-editor/scenes/limits) em cada cena para exibir imagens de fundo e sprites. Permite que seu jogo seja executado somente em dispositivos coloridos.  
  Plataformas compatíveis: **GB Color**, **Analogue Pocket**

Dependendo do modo de cores escolhido, você também pode ver configurações adicionais.

<img title="Configurações de cor adicionais" src="/img/screenshots/color-settings2-v420.jpg" width="650" className="drop-shadow margin-bottom" />

- **Correção de cor**  
  Modifica as suas paletas de cores para corresponder mais de perto a como elas apareceriam no hardware original. Em uma tela física do GBC, as cores parecem mais desbotadas do que em monitores modernos. Muitos emuladores (incluindo o embutido no GB Studio) levam isso em consideração, então ativar a correção de cor permite que as suas cores apareçam conforme o esperado. Se preferir não usar isso, você pode desativar o recurso, fazendo com que as cores hexadecimais em suas paletas apareçam como estariam em um monitor moderno.

- **Inversão automática de tile**  
  Cenas do modo Apenas cor têm a capacidade de inverter os tiles de fundo horizontalmente, verticalmente ou ambos, permitindo que as cenas usem menos memória de tiles. Este é um processo totalmente automático. No entanto, se você preferir não usá-lo (por exemplo, se precisar de controle estrito sobre a ordem dos tiles na memória para scripts), você pode desativá-lo para o seu projeto aqui. Como alternativa, você pode ativar/desativar esse recurso por cena na barra lateral do _Editor de cena_ no menu suspenso superior direito em cenas do modo Apenas cor.

<img title="Paletas monocromáticas padrão" src="/img/screenshots/color-settings3-v420.jpg" width="650" className="drop-shadow margin-bottom" />

- **Paletas monocromáticas padrão**  
  Permite que você defina a paleta de fundo (BGP) e duas paletas de sprite (OBP0 e OBP1) que são usadas ao executar um jogo sem cor.

<img title="Paletas de cor padrão" src="/img/screenshots/color-settings4-v420.jpg" width="650" className="drop-shadow margin-bottom" />

- **Paletas de fundo e sprite padrão**  
  Quando o modo de cores for `Cor + Monocromático` ou `Apenas cor`, você pode selecionar até 8 Paletas de fundo padrão e 8 Paletas de sprite padrão. Estas são as paletas que toda nova cena no seu jogo usará, a menos que você as substitua especificamente. Veja [Colorindo uma cena](/docs/project-editor/scenes/color) para saber como usar paletas de fundo.

## Opções do Super GB

Para habilitar a compatibilidade com o Super GB, marque a caixa de seleção `Habilitar modo Super GB`.

<img title="SGB" src="/img/screenshots/sgb-mode.png" width="650" className="drop-shadow margin-bottom" />

Este modo permitirá que você defina uma imagem de borda personalizada de `256px × 224px` e uma paleta de cores para usar quando o seu jogo for executado em hardware ou emuladores compatíveis.

Na primeira vez que você compilar o seu jogo após ativar este modo, uma imagem de borda padrão será copiada para o seu projeto em `assets/sgb/border.png`. Edite esta imagem para substituir a borda pela sua própria.

## Tipos de cena

O GB Studio inclui vários [Tipos de cena](/docs/project-editor/scenes/types) integrados que definem como uma cena se comporta. Você também pode adicionar os seus próprios tipos de cena ao [ampliar o GB Studio](/docs/category/extending-gb-studio).

Use esta seção para ativar apenas os tipos de cena que você precisa e para configurar as definições de cada tipo.

<img title="Configurações de tipo de cena" src="/img/screenshots/scene-settings-v420.jpg" width="650" className="drop-shadow margin-bottom" />

Esta seção também permite que você substitua a folha de sprite padrão do jogador que será usada para as cenas desse tipo.

Você pode substituir a folha de sprite do jogador para uma cena individual nas [propriedades da cena](/docs/project-editor/scenes/#scene-properties), ou em tempo de execução [usando scripts](/docs/scripting/script-glossary/actor#set-player-sprite-sheet).

### Configurações do motor

Dependendo de quais tipos de cena estão ativados, você verá uma lista de configurações do motor para esses tipos. Elas permitem que você ajuste como o seu jogo é sentido, como ajustar a gravidade em cenas de _Plataforma_ ou alterar cenas de _Visão superior 2D_ para usar uma grade de 16px.

<img title="Configurações do motor" src="/img/screenshots/engine-settings.png" width="650" className="drop-shadow margin-bottom" />

Para redefinir para os valores originais, você pode usar o botão _Restaurar o padrão_.

## Elementos de IU e fontes

Use esta seção para ver a imagem do quadro usada para as janelas de diálogo no seu jogo, a imagem do cursor usada em menus e para selecionar a fonte padrão para o seu projeto. Clicar no cursor ou na imagem do quadro irá abri-los no seu editor de imagens selecionado; alternativamente, você pode encontrar os arquivos na pasta `assets/ui` do seu projeto.

<img title="Elementos de IU" src="/img/screenshots/ui-elements-v3.png" width="650" className="drop-shadow" />

### Fontes

As fontes podem ser encontradas em `assets/fonts` e consistem em uma imagem `.png` e um arquivo de definição `.json` compartilhando o mesmo nome. Por exemplo, `gbs-mono.png` e `gbs-mono.json`. A imagem .png de uma fonte deve conter caracteres com um tamanho máximo de 8px por 8px, dispostos em linhas com 16 caracteres de largura.

<img title="Exemplo de GBS Mono" src="/img/screenshots/gbs-mono.png" width="256" className="drop-shadow margin-bottom" />

Por padrão, as fontes usam um [mapeamento ASCII](https://en.wikipedia.org/wiki/ASCII#Character_set) com o código de caractere 32 (Espaço) mapeado para o caractere superior esquerdo da sua fonte. Você pode fornecer um mapeamento personalizado editando o arquivo `.json` da sua fonte conforme a seguir.

```
{
  "name": "Japanese Font",
  "mapping": {
    "ヲ": 166,
    "ァ": 167,
    "ィ": 168
  }
}
```

Neste exemplo, usar um caractere `ヲ` agora exibirá o caractere 166 do seu `.png`.

**Observe que** como os 32 primeiros caracteres ASCII não estão incluídos na sua imagem, você precisa levar isso em consideração no seu mapeamento. Por exemplo, se você quisesse mapear o caractere `?` para o segundo tile no seu `.png`, você definiria o mapeamento como `"?": 33`

Você pode criar fontes de largura variável (com caracteres com menos de 8px de largura) preenchendo a borda direita dos caracteres da sua fonte com magenta `#ff00ff` como no exemplo abaixo.

<img src="/img/screenshots/gbs-var.png" width="256" className="drop-shadow margin-bottom" />

Quando o [Modo de cores](#gb-color-options) está habilitado, os elementos da IU e fontes adotam as cores escolhidas para a paleta de fundo #8 do GB Color. Veja [Colorindo uma cena](/docs/project-editor/scenes/color) para saber como usar paletas de fundo.

## Formato de música

O formato de música escolhe qual motor de música usar no seu jogo, isso por sua vez determina o formato dos arquivos de música suportados no seu projeto.

A configuração recomendada é `UGE (hUGEDriver)` (arquivos `.uge`), pois isso permite que você use o editor de música integrado, embora se você tiver criado um projeto no GB Studio 2.0 ou inferior você precisará manter essa configuração como `MOD (GBT Player)` (arquivos `.mod`) para manter a compatibilidade com os seus arquivos de música existentes.

<img title="Motor de música" src="/img/screenshots/music-driver.png" width="650" className="drop-shadow margin-bottom" />

Veja [Música](/docs/assets/music) para obter mais informações.

## Controles

A seção _Controles_ permite que você substitua os controles padrão usados ao jogar o seu jogo a partir de uma compilação web e da _Janela de jogo_.

Para editar os controles de um botão, clique na caixa de entrada e enquanto a entrada estiver destacada, digite a tecla que você deseja atribuir. Para remover todas as teclas atribuídas, clique na entrada e, em seguida, pressione a tecla _Backspace_ no seu teclado.

<img title="Controles" src="/img/screenshots/controls-v3.png" width="650" className="drop-shadow margin-bottom" />

Para redefinir para os controles originais, você pode usar o botão _Restaurar o padrão_.

## Tipo de cartucho

A seção _Tipo de cartucho_ permite que você escolha qual Controlador de Banco de Memória deseja usar e se deseja ativar o Salvamento sem bateria para Cartuchos Flash compatíveis.

Se você não sabe o que essas configurações significam, é melhor manter isso como o padrão de MBC5, com o recurso sem bateria desativado, o que você pode fazer usando o botão _Restaurar o padrão_.

## Opções de compilação

A seção _Opções de compilação_ permite que você modifique as configurações relacionadas à compilação do seu projeto.

<img title="Opções de compilação" src="/img/screenshots/build-settings-v420.png" width="650" className="drop-shadow margin-bottom" />

- **Nome do arquivo ROM**  
  Por padrão, as ROMs exportadas usam o nome do seu projeto como o nome do arquivo. Você pode substituí-lo aqui (não inclua a extensão do arquivo, isso usará automaticamente `.gb` ou `.gbc` dependendo do modo de cores selecionado).

- **Abrir registro de compilação em avisos**  
  Escolha se o [Registro de compilação](/docs/debugger#build-log) deve ser exibido automaticamente quando avisos forem exibidos, como "muitos tiles ou paletas únicos usados em uma cena". Se você está optando por ignorar esses avisos, pode ser útil desativá-los, caso contrário, ele será exibido toda vez que seu jogo for executado. Por favor, observe que os _erros_ ao compilar seu projeto sempre abrirão o [Registro de compilação](/docs/debugger#build-log), independentemente dessa configuração.

- **Gerar arquivos de depuração**  
  Ao usar a opção `Exportar ROM`, arquivos de depuração adicionais (como `game.cdb`) são gerados, os quais permitem uma depuração melhorada ao testar o seu jogo em emuladores compatíveis como o [Emulicious](https://emulicious.net/).

- **Abrir pasta da compilação ao exportar**  
  Ao exportar uma ROM, o GB Studio abrirá a pasta contendo os arquivos exportados no navegador de arquivos do seu sistema operacional. Desative esta opção se preferir que ela não seja aberta automaticamente.

## Cabeçalho HTML personalizado

Você pode usar a seção _Cabeçalho HTML personalizado_ para adicionar conteúdo ao `<head>` do HTML ao gerar uma compilação da web do seu jogo. Você pode usar isso para adicionar qualquer CSS ou Javascript personalizado que desejar à página HTML da compilação da web.
