# Imagens de fundo

import { Swatch } from '@site/src/components/Swatch';

Cada uma das suas cenas exige uma imagem de fundo que define como essa cena deve se parecer.

Você pode adicionar imagens de fundo ao seu jogo incluindo arquivos `.png` na pasta `assets/backgrounds` do seu projeto.

## Requisitos de cor

### Paletas manuais

Quando uma cena está usando [paletas manuais](/docs/project-editor/scenes/color#automatic-color), os PNGs de imagem de fundo devem conter apenas as quatro cores a seguir:

<Swatch color="#071821" description="Mais escuro" />
<Swatch color="#306850" />
<Swatch color="#86c06c" />
<Swatch color="#e0f8cf" description="Mais claro" />

Baixe as amostras de paleta do GB Studio para:  
[Adobe Photoshop](/assets/swatches/gb-studio-photoshop.aco)  
[Aseprite](/assets/swatches/gb-studio-aseprite.aseprite)  
[Piskel](/assets/swatches/gb-studio-piskel-background-palette.gpl)  

Cores que não forem de um dos códigos hexadecimais acima serão correspondidas à cor mais próxima. Ao contrário dos sprites, a cor `#65ff00` não pode ser usada em imagens de fundo.

Ao atribuir paletas de cores de imagem de fundo para uma cena, essas cores são mapeadas do Mais escuro ao Mais claro na paleta.

### Paletas automáticas

Quando uma cena está usando [paletas automáticas](/docs/project-editor/scenes/color#automatic-color), você pode fornecer imagens coloridas, desde que elas obedeçam às seguintes regras:

- Cada tile de `8px`x `8px` pode usar apenas 4 cores.
- A cena pode conter no máximo 8 paletas de 4 cores únicas.

Os dados de tile monocromático serão criados automaticamente a partir da sua imagem colorida, se você pretende ter suporte a dispositivos monocromáticos, pode ser necessário fornecer uma [imagem de sobrecarga monocromática](/docs/assets/backgrounds#monochrome-overrides).

## Requisitos de tamanho

- As imagens de fundo são divididas em conjuntos de tiles de `8px`x `8px`, de modo que o tamanho total da imagem deve ser um múltiplo de `8px` tanto na largura quanto na altura.
- Uma imagem de fundo tem um tamanho mínimo de `160px` x `144px` (o tamanho da tela do GB).
- Tanto a largura quanto a altura de uma imagem de fundo devem ser menores ou iguais a `2040px`.
- A largura da imagem multiplicada pela altura deve ser menor ou igual a `1.048.320`. Por exemplo, uma imagem com a largura de `2016px` terá uma altura máxima de `520px` (porque `2016 * 520 = 1048320`).

## Requisitos de tile

#### Jogos em "Monocromático" e "Cor + Monocromático"

Na maioria dos tipos de cena, para jogos que usam os modos de cor `Monocromático` ou `Cor + Monocromático`, uma imagem de fundo não pode conter mais do que **192** tiles únicos de `8px` x `8px` de uma só vez devido aos limites de memória. Isso significa que, mesmo usando o menor tamanho de imagem de fundo possível, você deve repetir cerca de metade dos seus tiles. Sempre que possível, repita os tiles entre as imagens, pois eles serão agrupados, economizando no tamanho total do jogo. É recomendável usar um editor de mapas de tiles, como o [Tiled](https://www.mapeditor.org/), para garantir que as suas imagens de fundo estejam em conformidade com a grade de pixels.

A exceção a isso são as cenas com o seu _Tipo de cena_ definido como _Logotipo_. Essas cenas podem usar uma imagem no tamanho de `160px` x `144px` sem limites de tiles únicos, mas observe que nas cenas de _Logotipo_ você não pode usar _Atores_ ou exibir um _Jogador_.

#### Jogos "Apenas cor"

Ao usar o modo de cor `Apenas cor`, os limites de tiles da imagem de fundo são dobrados, permitindo até **384** tiles únicos de `8px` x `8px` por cena.

## Sobrecargas monocromáticas

Ao usar [paletas automáticas](/docs/project-editor/scenes/color#automatic-color), os dados do tile monocromático são gerados automaticamente a partir da sua imagem colorida. No entanto, os tons gerados podem não corresponder perfeitamente às suas intenções. Para o modo `Apenas cor`, isso não será um problema. Se você planeja ter suporte a dispositivos monocromáticos, pode fornecer uma segunda imagem como uma sobrecarga monocromática, nomeando-a de forma idêntica à sua imagem colorida com uma extensão de arquivo `.mono.png`.

Por exemplo, ao usar paletas automáticas na imagem a seguir sem uma sobrecarga:

<img src="/assets/examples/mono-override/parallax.png" style={{width:550}} />
`assets/backgrounds/parallax.png`  

A cena ficará assim em dispositivos monocromáticos:
<img src="/assets/examples/mono-override/parallax_broken.png" style={{width:550}} class="margin-bottom"/>

Ao fornecer a imagem de sobrecarga a seguir, a cena ficará como você espera tanto em dispositivos coloridos quanto monocromáticos:

<img src="/assets/examples/mono-override/parallax.mono.png" style={{width:550}} />
`assets/backgrounds/parallax.mono.png`  


- [assets/backgrounds/parallax.png](/assets/examples/mono-override/parallax.png)
- [assets/backgrounds/parallax.mono.png](/assets/examples/mono-override/parallax.mono.png)
