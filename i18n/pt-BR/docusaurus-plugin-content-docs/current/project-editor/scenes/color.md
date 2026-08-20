# Cor

## Colorindo uma cena

Selecione a _Ferramenta de cor_ nas _Ferramentas do editor_. Existem 8 tipos de paletas que podem ser adicionadas a uma cena com o Modo de cor habilitado. As paletas podem ser ajustadas nas Configurações. Observe que a 8ª paleta em uma cena também será usada para as _Janelas de diálogo_ e menus.

As paletas usadas na _Ferramenta de cor_ podem ser trocadas por paletas existentes (como a paleta de UI) ao segurar o clique em uma paleta.

Para obter mais informações sobre o modo de desenho usado para a _Ferramenta de cor_ e a _Ferramenta de colisão_, veja [Atalhos de teclado](/docs/getting-started/keyboard-shortcuts).

## Cor automática

Se a sua imagem já for um arquivo `.png` colorido, você pode tentar mudar para o uso de Paletas de fundo no `Automático` usando a _Barra lateral do editor_.

<div className="drop-shadow margin-bottom"><img src="/img/screenshots/auto-color.gif" width="320" className="clip-bottom" /></div>

:::info
Você precisará ter o cuidado de seguir os mesmos requisitos sobre cores únicas por cena e tile ao usar Paletas de fundo automáticas se quiser que as suas imagens sejam exibidas corretamente. Por exemplo, usar mais de 7 paletas de cores únicas fará com que a paleta 8 seja substituída, o que significa que as janelas de diálogo e menu podem não aparecer corretamente para aquela cena.

Ao usar as Paletas de fundo automáticas, os tiles monocromáticos também são criados automaticamente. Se você deseja ter suporte a dispositivos coloridos e monocromáticos, pode ser necessário fornecer uma imagem de [Sobrecarga monocromática](/docs/assets/backgrounds#monochrome-overrides) para dar mais controle sobre como a imagem de fundo aparece em dispositivos monocromáticos.
:::

## Extrair paletas

O campo do tipo Paletas de fundo também inclui a capacidade de _Extrair paletas_ de uma imagem de fundo colorida.

<div className="drop-shadow margin-bottom"><img src="/img/screenshots/extract-palettes.jpg" width="320" className="clip-bottom" /></div>

Selecionar esta opção irá ler a imagem de fundo colorida atualmente selecionada e criar as paletas necessárias, pintar os tiles na sua cena e também criará uma imagem de [Sobrecarga monocromática](/docs/assets/backgrounds#monochrome-overrides) para a sua imagem de fundo.

## Prioridade de tile

Ao colorir uma cena, você pode usar o botão `<!>` para definir tiles de prioridade, esses tiles aparecerão na frente dos atores (apenas em jogos de GB Color), permitindo que você crie profundidade nas suas cenas. Observe que a primeira cor na paleta do tile será transparente e desenhada atrás dos atores.

<img src="/img/screenshots/tile-priority.png" width="320" className="drop-shadow" />

## Pincel mágico

O Pincel mágico fica disponível ao adicionar colisões ou colorir uma cena e pode ser usado para pintar instantaneamente todos os tiles da cena que correspondam àquele em que você clicou.

<div className="drop-shadow"><img src="/img/screenshots/magic-brush.gif" width="320" className="clip-bottom" /></div>
