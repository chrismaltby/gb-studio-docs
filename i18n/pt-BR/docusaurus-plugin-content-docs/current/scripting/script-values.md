---
sidebar_position: 4
---

import ScriptEventPreview, {FakeValue} from '@site/src/components/ScriptEventPreview';

# Valores de script

Muitos eventos de script agora suportam o uso de **Valores de script** como entradas. Eles permitem que você combine valores numéricos, variáveis, operações matemáticas e funções para criar valores complexos.

<div className="drop-shadow margin-bottom"><img src="/img/screenshots/script-values-edit-v4.gif" width="320" className="clip-bottom" /></div>

Você pode usar os Valores de script em seus scripts em qualquer lugar em que vir um botão à esquerda de um campo de entrada (como mostrado abaixo), clicando no botão para abrir o menu.

<div style={{maxWidth: 300}}>
    <FakeValue>0</FakeValue>
</div>

## Expressões matemáticas

Os Valores de script são muito semelhantes às [Expressões matemáticas](/docs/scripting/math-expressions) com uma interface mais visual, as mesmas funções matemáticas estão disponíveis para ambos os tipos de valores. Em qualquer lugar em que você possa usar Valores de script, você também pode usar o menu para mudar para o uso de Expressões matemáticas, permitindo que você digite as suas expressões. Você também é capaz de combinar Valores de script e Expressões matemáticas, se necessário.

## Arrastar e soltar

Ao arrastar os botões de Valores de script, você move rapidamente os valores entre diferentes partes do seu script.

<div className="drop-shadow margin-bottom"><img src="/img/screenshots/script-values-dnd-v4.gif" width="320" className="clip-bottom" /></div>

Se você precisar mover valores entre scripts diferentes, abrir o menu e selecionar "Copiar valor" permitirá que você selecione "Colar valor" ao abrir o menu a partir de outro script.
