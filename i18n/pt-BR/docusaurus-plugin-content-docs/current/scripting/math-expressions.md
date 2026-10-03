---
sidebar_position: 5
---

import ScriptEventPreview from '@site/src/components/ScriptEventPreview';

# Expressões matemáticas

Os eventos [Avaliar expressão matemática](/docs/scripting/script-glossary/math#evaluate-math-expression) e [Se a expressão matemática](/docs/scripting/script-glossary/math#if-math-expression), bem como quaisquer eventos compatíveis com [Valores de script](/docs/scripting/script-values), permitem que expressões matemáticas sejam usadas para realizar cálculos.

<ScriptEventPreview title={"If Math Expression"} fields={[{"key":"expression","label":"Expression","description":"The expression to evaluate.","type":"matharea","rows":5,"placeholder":"e.g. $health >= 0...","defaultValue":""},{"key":"true","label":"True","description":"The script to run if the condition is true.","type":"events"},{"key":"**collapseElse","label":"Else","type":"collapsable","defaultValue":true,"conditions":[{"key":"**disableElse","ne":true}]},{"key":"false","label":"False","description":"The script to run if the condition is false.","conditions":[{"key":"__collapseElse","ne":true},{"key":"__disableElse","ne":true}],"type":"events"}]} />

As expressões permitem que você use muitas operações matemáticas, como:

- `+` somar
- `-` subtrair
- `*` multiplicar
- `/` dividir
- `==` igual a
- `!=` diferente de
- `>=` maior ou igual a

Você também é capaz de usar as seguintes funções:

- `min(a, b)` retorna o mínimo de dois valores `a` e `b`
- `max(a, b)` retorna o máximo de dois valores `a` e `b`
- `abs(a)` retorna o valor absoluto de `a`
- `atan2(a, b)` retorna o [arco-tangente de 2 argumentos](https://en.wikipedia.org/wiki/Atan2) de `a` e `b`
- `isqrt(a)` retorna a raiz quadrada de `a` arredondada para baixo para o número inteiro mais próximo
- `rnd(a)` retorna um número aleatório maior que `0` e menor que `a`

Você pode usar variáveis em expressões digitando `$` e pesquisando pelo nome da variável.

Quando quiser combinar várias condições no seu código, você pode usar os operadores lógicos booleanos:

- `||` **ou**: Este operador é usado quando você deseja verificar se pelo menos uma das condições é verdadeira.  
  Por exemplo, se você escrever `$Local0 == 0 || $Local1 == 0`, isso significa "se a variável Local0 for igual a 0 ou a variável Local1 for igual a 0".

- `&&` **e**: Este operador é usado quando você deseja verificar se todas as condições são verdadeiras.
  Por exemplo, se você escrever `$Local0 == 0 && $Local1 == 0`, isso significa "se tanto a variável Local0 for igual a 0 quanto a variável Local1 for igual a 0".

- `!` **não**: Este operador é usado quando você deseja inverter o valor de verdade de uma condição.  
  Por exemplo, se você escrever `!($Local0 == 0)`, isso significa "se a variável Local0 não for igual a 0".
