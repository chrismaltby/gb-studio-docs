# Colisões

## Adicionando colisão a uma cena

Selecione a _Ferramenta de colisão_ nas _Ferramentas do editor_. Existem 5 tipos comuns de colisão que podem ser adicionados à maioria das cenas.

- **Sólido** Impede que atores em colisão entrem no tile por qualquer lado.
- **Superior/Inferior/Esquerda/Direita** Impede que atores em colisão entrem no tile daquele lado específico. Isso é útil para plataformas semi-sólidas e colisão unidirecional.

Além disso, dependendo do tipo de cena selecionado, você pode ter tiles de colisão adicionais disponíveis.

- **Escada (Apenas em jogos de plataforma)** Permite mover-se para cima e para baixo em cenas de _Plataforma_.

Alguns tipos de cena, como `Apontar e clicar`, oferecem suporte apenas a colisões do tipo **Sólido**.

Ao [modificar o motor do seu jogo](/docs/extending-gbstudio/engine-eject) ou usar [plugins](/docs/extending-gbstudio/plugins), você pode definir tipos de cena adicionais que podem, cada um, especificar os seus próprios tiles de colisão específicos da cena no arquivo `engine.json` deles.

## Desenhando rampas

O Pincel de rampas é uma maneira rápida de adicionar colisões de rampa às suas cenas (apenas Plataforma). Com o pincel selecionado, clique no tile inicial e arraste para um tile **depois** de onde você deseja que a rampa seja posicionada. Ao posicionar uma rampa rasa, você pode segurar `Shift` enquanto arrasta para deslocar a rampa verticalmente.

Também é possível usar esta ferramenta para desenhar colisões horizontais e verticais segurando `Ctrl` enquanto arrasta. Ao arrastar da esquerda para a direita, você criará uma colisão Superior, da direita para a esquerda cria uma colisão Inferior, de cima para baixo cria uma colisão à Esquerda e de baixo para cima cria uma colisão à Direita. Segurar `Ctrl + Shift` irá inverter a direção da colisão (Superior se tornará Inferior etc).

<div className="drop-shadow"><img src="/img/screenshots/slopes.gif" width="320" className="clip-bottom" /></div>

## Pincel mágico

O Pincel mágico fica disponível ao adicionar colisões ou colorir uma cena, e pode ser usado para pintar instantaneamente todos os tiles da cena que correspondam àquele em que você clicou.

<div className="drop-shadow"><img src="/img/screenshots/magic-brush.gif" width="320" className="clip-bottom" /></div>
