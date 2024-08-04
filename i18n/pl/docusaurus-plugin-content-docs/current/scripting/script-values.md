---
sidebar_position: 4
---

import ScriptEventPreview, {FakeValue} from '@site/src/components/ScriptEventPreview';

# Wartości skryptowe

Wiele poleceń skryptowych obsługuje teraz używanie **wartości skryptowych** jako wejść. Pozwalają one na łączenie wartości liczbowych, zmiennych, operacji matematycznych i funkcji, aby stworzyć złożone wartości.


<div className="drop-shadow margin-bottom"><img src="/img/screenshots/script-values-edit-v4.gif" width="320" className="clip-bottom" /></div>

Możesz używać **wartości skryptowych** w swoich skryptach wszędzie tam, gdzie widzisz przycisk po lewej stronie pola wejściowego (jak pokazano poniżej), klikając przycisk, aby otworzyć menu.

<div style={{maxWidth: 300}}>
    <FakeValue>0</FakeValue>
</div>

## Wyrażenia matematyczne

Wartości skryptowe są bardzo podobne do [wyrażeń matematycznych](/docs/scripting/math-expressions) z bardziej wizualnym interfejsem; te same funkcje matematyczne są dostępne dla obu typów wartości. Gdziekolwiek możesz używać wartości skryptowych, możesz również użyć menu, aby przełączyć się na wyrażenia matematyczne, pozwalając ci na wpisanie swoich wyrażeń. Możesz także łączyć wartości skryptowe i wyrażenia matematyczne, jeśli zajdzie taka potrzeba.


## Przeciągnij i upuść

Przeciągając przyciski wartości skryptowe, szybko przenosisz wartości między różnymi częściami skryptu.

<div className="drop-shadow margin-bottom"><img src="/img/screenshots/script-values-dnd-v4.gif" width="320" className="clip-bottom" /></div>

Jeśli musisz przenieść wartości między różnymi skryptami, otwarcie menu i wybranie "Kopiuj Wartość" pozwoli ci wybrać "Wklej wartość" podczas otwierania menu z innego skryptu.
