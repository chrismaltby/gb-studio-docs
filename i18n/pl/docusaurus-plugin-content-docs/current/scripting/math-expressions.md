---
sidebar_position: 5
---

import ScriptEventPreview from '@site/src/components/ScriptEventPreview';

# Wyrażenia matematyczne

Polecenia [Zmienna: wyrażenie matematyczne](/docs/scripting/script-glossary/math#evaluate-math-expression) oraz [Warunek: wyrażenie matematyczne](/docs/scripting/script-glossary/math#if-math-expression), a także każde polecenie obsługujące [Wartości skryptowe](/docs/scripting/script-values), umożliwiają używanie wyrażeń matematycznych do przeprowadzania obliczeń.

<ScriptEventPreview title={"If Math Expression"} fields={[{"key":"expression","label":"Expression","description":"The expression to evaluate.","type":"matharea","rows":5,"placeholder":"e.g. $health >= 0...","defaultValue":""},{"key":"true","label":"True","description":"The script to run if the condition is true.","type":"events"},{"key":"**collapseElse","label":"Else","type":"collapsable","defaultValue":true,"conditions":[{"key":"**disableElse","ne":true}]},{"key":"false","label":"False","description":"The script to run if the condition is false.","conditions":[{"key":"__collapseElse","ne":true},{"key":"__disableElse","ne":true}],"type":"events"}]} />

Wyrażenia pozwalają używać wielu operacji matematycznych, takich jak:

- `+` dodawanie
- `-` odejmowanie
- `*` mnożenie
- `/` dzielenie
- `==` równe
- `!=` różne
- `>=` większe lub równe

Można również używać następujących funkcji:

- `min(a, b)` zwraca minimum z dwóch wartości `a` i `b`
- `max(a, b)` zwraca maksimum z dwóch wartości `a` i `b`
- `abs(a)` zwraca wartość bezwzględną `a`
- `atan2(a, b)` zwraca [arkus tangens](https://en.wikipedia.org/wiki/Atan2) z dwóch argumentów `a` i `b`
- `isqrt(a)` zwraca pierwiastek kwadratowy z `a` zaokrąglony w dół do najbliższej liczby całkowitej
- `rnd(a)` zwraca losową liczbę większą niż `0` i mniejszą niż `a`

Można używać zmiennych w wyrażeniach, wpisując `$` i wyszukując nazwę zmiennej.

Kiedy chcesz połączyć wiele warunków w swoim kodzie, możesz używać operatorów logicznych:

- `||` **lub**: Ten operator jest używany, gdy chcesz sprawdzić, czy przynajmniej jeden z warunków jest prawdziwy.
Na przykład, jeśli wpiszesz `$Local0 == 0` || `$Local1 == 0`, oznacza to "jeśli zmienna Local0 jest równa 0 lub zmienna Local1 jest równa 0".

- `&&` **i**: Ten operator jest używany, gdy chcesz sprawdzić, czy wszystkie warunki są prawdziwe.
Na przykład, jeśli wpiszesz `$Local0 == 0` && `$Local1 == 0`, oznacza to "jeśli zmienna Local0 jest równa 0 i zmienna Local1 jest równa 0".

- `!` **nie**: Ten operator jest używany, gdy chcesz odwrócić wartość logiczną warunku.
Na przykład, jeśli wpiszesz `!($Local0 == 0)`, oznacza to "jeśli zmienna Local0 nie jest równa 0".
