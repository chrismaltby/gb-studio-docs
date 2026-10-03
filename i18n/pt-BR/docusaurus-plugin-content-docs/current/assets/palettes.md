import { Swatch } from '@site/src/components/Swatch';

# Paletas

Usando o _Editor de paletas_ você pode configurar as cores disponíveis no seu jogo em [Cor + Monocromático](/docs/settings#color-options) ou [Apenas cor](/docs/settings#color-options).

<img title="Editor de paletas" src="/img/screenshots/palette-editor-v420.jpg" width="752" />

Para usar as paletas você deve atribuí-las à sua [Cena](/docs/project-editor/scenes/) e então pintar a imagem de fundo escolhida da sua cena com a [Ferramenta de cor](/docs/project-editor/scenes/color).

## Editando uma paleta

Para criar uma nova paleta, clique no botão _Adicionar paleta_ no topo do _Navegador_.

Para renomear uma paleta, clique no botão _Renomear paleta_ próximo ao nome da paleta, ou clique com o botão direito na paleta no _Navegador_ e escolha _Renomear_.

Quando uma paleta é selecionada, você verá as suas quatro cores. As cores em uma paleta substituem as cores monocromáticas no seu jogo, mapeando do Mais claro ao Mais escuro.

<div className="margin-bottom">
    <Swatch color="#e0f8cf" description="Mais claro" />
    <Swatch color="#86c06c" />
    <Swatch color="#306850" />
    <Swatch color="#071821" description="Mais escuro" />
</div>

Clique em uma cor para editá-la usando valores **RGB** (vermelho, verde, azul) ou **HSB** (matiz, saturação, brilho). Você também pode colar um **Valor hexadecimal** na entrada _Cor hexadecimal_.

:::info
Como o GBC não pode exibir a gama completa de cores mostrada nos monitores modernos, o GB Studio converterá automaticamente o seu valor hexadecimal para a cor mais próxima que pode ser exibida no hardware real.
:::
