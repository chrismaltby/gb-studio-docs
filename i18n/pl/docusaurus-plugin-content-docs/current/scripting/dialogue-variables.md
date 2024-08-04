---
sidebar_position: 3
---

import ScriptEventPreview, {FakeValue} from '@site/src/components/ScriptEventPreview';

# Zmienne dialogowe

Zdarzenia skryptowe, które umożliwiają wyświetlanie tekstu, takie jak [Tekst i menu](/docs/scripting/script-glossary/dialogue-menus), pozwalają również na wyświetlanie wartości zmiennych.

Wpisanie `$`, a następnie nazwy zmiennej pozwoli przeszukać zmienne do wyświetlenia w tekście. Po dodaniu zmiennej można kliknąć na nią, aby otworzyć menu, które umożliwia zmianę zmiennej.

<div className="drop-shadow margin-bottom"><img src="/img/screenshots/dialogue-variables.gif" width="320" className="clip-bottom" /></div>

## Formatowanie zmiennych

Możliwe jest dodawanie prefiksów do zmiennych dialogowych, co pozwala na ich różne użycie w tekście.

- **Stała długość**: Dodanie `%D` przed zmienną, a następnie liczby między `1` a `9`, powoduje, że jest wyświetlana jako wartość o stałej długości z wiodącymi zerami. np. `%D5$Variable` wyświetli się jako `00042`.
- **Kod znaku**: Dodanie `%c` przed zmienną powoduje, że jest wyświetlana jako kod znaku ASCII. np. `%c$Variable` gdy zmienna wynosi `65`, wyświetli się jako `A`.
- **Szybkość tekstu**: Dodanie `%t` przed zmienną powoduje, że będzie używana do ustawienia szybkości tekstu od tego momentu w dialogu.
- **Czcionka**: Dodanie `%f` przed zmienną powoduje zmianę czcionki na indeks oparty na wartości zmiennej. Indeks każdej czcionki w grze jest określany przez kolejność, w jakiej czcionki pojawiają się w `script_engine_init.s`, co można znaleźć, wybierając `Gra > Zaawansowane > Eksportuj projekt` z menu aplikacji.

## Komendy tekstowe

Wpisanie `!` po którymś z poniższych poleceń pozwala zmienić sposób wyświetlania dialogu od tego momentu, co umożliwia użycie różnych czcionek i szybkości w jednym zdarzeniu dialogowym.

- `!Font` Pozwala wybrać czcionkę do zmiany w trakcie dialogu.
- `!Speed` Pozwala wybrać jedną z różnych szybkości tekstu.
- `!Instant` Pozwala ustawić, aby tekst pojawiał się natychmiast.
- `!Cursor`  Pozwala przesunąć kursor tekstowy do nowej pozycji. Kliknij token `P(0,0)` lub `M(+1,+1)`, aby otworzyć okno dialogowe umożliwiające zmianę pozycji, do której ma zostać przeniesiony kursor.
