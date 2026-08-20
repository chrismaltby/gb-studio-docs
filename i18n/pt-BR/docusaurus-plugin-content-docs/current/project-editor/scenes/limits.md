# Limites da cena

Existem vários limites que o GB Studio implementou para manter o desempenho do jogo consistente e minimizar problemas visuais.

Cada cena pode ter no máximo 20 atores, 30 gatilhos e entre 192 e 64 tiles de sprite, dependendo das configurações do projeto e da complexidade da imagem de fundo usada. Você pode verificar esta informação selecionando uma cena e observando a barra cinza sob a sua cena que diz:

`A: 0/20 S: 0/96 T: 0/30`

As letras nesta barra representam o seguinte:

- `A:` representa o número de atores que a cena está usando.
- `S:` representa o número de tiles únicos de sprite que cada ator está usando na sua folha de sprite.
- `T:` representa o número de gatilhos que a cena está usando.

## Limites de atores

Cada cena pode ter no máximo 20 atores. O ideal é que nunca haja mais de 10 atores dentro de um limite de 20 x 18 tiles, equivalente a `160px x 144px`. Agrupar mais de 10 atores em uma cena fará com que alguns atores fiquem invisíveis no jogo. O GB Studio avisará você se achar que este será o caso de uma cena:

<img title="Limites de atores" src="/img/screenshots/actor-limits.png" width="320" className="drop-shadow margin-bottom" />

Você pode resolver esta mensagem movendo ou apagando atores para que não mais de 10 sejam vistos em um limite de 20 x 18 tiles. Você pode usar a [Ferramenta de borracha](/docs/getting-started/keyboard-shortcuts#game-world) para apagar atores. Os atores ainda ficarão invisíveis se mais de 10 atores se moverem para o espaço da tela após o início da cena.

## Limites de gatilhos

Cada cena pode ter no máximo 30 gatilhos. Você pode usar a [Ferramenta de borracha](/docs/getting-started/keyboard-shortcuts#game-world) para apagar gatilhos.

## Limites de tiles da imagem de fundo e sprites

Os limites de memória para a imagem de fundo e os tiles de sprite dependem se o modo de cor do seu jogo está definido como `Apenas cor`. No modo `Apenas cor`, aproximadamente o dobro da quantidade de memória fica disponível para dados de tiles, mas o jogo não rodará em dispositivos sem cor. Você pode definir o modo de cor na seção de [Configurações](/docs/settings).

Você pode usar o [Painel VRAM](/docs/debugger) no Depurador para obter uma representação visual de como os tiles estão sendo usados em cada cena do seu jogo.

### Jogos em "Monocromático" e "Cor + Monocromático"

Quando o modo de cor do seu jogo estiver definido como `Monocromático` ou `Cor + Monocromático`, os seguintes limites serão usados:

- **64 Tiles** reservados para Sprites
- **128 Tiles** reservados para Imagem de fundo
- **64 Tiles** reservados para UI
- **64 Tiles** compartilhados entre Sprites e Imagem de fundo. Quanto mais complexa for a sua imagem de fundo, menos tiles estarão disponíveis para uso pelos sprites. Note que como os sprites usam tiles no tamanho de 8x16, esta área compartilhada é mostrada como 32 tiles de sprite.

Se a sua imagem de fundo usar 128 tiles ou menos, você pode usar até 96 tiles de sprite (64 reservados + 32 compartilhados). No entanto, se a sua imagem de fundo usar todos os 192 tiles, você só poderá usar 64 tiles de sprite.

<img src="/img/screenshots/tile-allocation.png" width="650"  />

### Jogos "Apenas cor"

Quando o modo de cor do seu jogo estiver definido como `Apenas cor`, os seguintes limites ampliados serão usados:

- **128 Tiles** reservados para Sprites
- **256 Tiles** reservados para Imagem de fundo
- **128 Tiles** reservados para UI
- **128 Tiles** compartilhados entre Sprites e Imagem de fundo. Quanto mais complexa for a sua imagem de fundo, menos tiles estarão disponíveis para uso pelos sprites. Note que como os sprites usam tiles no tamanho de 8x16, esta área compartilhada é mostrada como 64 tiles de sprite.

Se a sua imagem de fundo usar 256 tiles ou menos, você pode usar até 192 tiles de sprite (128 reservados + 64 compartilhados). No entanto, se a sua imagem de fundo usar todos os 384 tiles, você só poderá usar 128 tiles de sprite.

<img src="/img/screenshots/tile-allocation-color.png" width="650"  />
