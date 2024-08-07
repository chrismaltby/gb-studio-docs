---
sidebar_position: 3
---

# Aktorzy

Aktorzy to postacie i obiekty w twojej scenie, z którymi możesz wchodzić w interakcje.

## Dodanie aktora

Aby dodać aktora na scenę, kliknij przycisk **` + `** w _Narzędziach Edytora_ i wybierz _Aktora_ z menu (alternatywnie naciśnij klawisz **A**), a następnie kliknij na scenę i miejsce, w którym chcesz umieścić aktora.

<img src="/img/screenshots/add-actor.gif" style={{width:300}} />

## Właściwości aktora
- **Nazwa** - Nadaje nazwę aktorowi. Nadanie aktorom *nazwy* pomaga zorganizować je w projekcie. Nazwa aktora będzie widoczna w każdym rozwijanym menu, które wymaga wyboru aktora, takim jak polecenie [Aktor: schowaj (niewidzialny)](/docs/scripting/script-glossary/actor#hide-actor).
- **Pozycja** - Ustawia pozycję X i Y, w której aktor będzie umieszczony w scenie. Możesz także zmienić to, przeciągając aktora po _Świecie Gry_.
- **Przypnij do ekranu** - Używając przycisku _Przypnij_ obok pozycji aktora, możesz wybrać przypięcie aktora do ekranu, co spowoduje, że nie będzie się poruszał wraz z przewijaniem ekranu gry.
- **Arkusz obiektów** - Wybierz, które grafiki sprite mają być używane do wyświetlania aktora.
- **Szybkość ruchu** - Wybierz, jak szybko aktor powinien się poruszać podczas wykonywania zdarzeń skryptowych.
- **Szybkość animacji** - Wybierz, jak szybko mają być odtwarzane animacje aktora.
- **Grupa kolizji** - Wybierz, czy skrypty powinny się automatycznie uruchamiać podczas kolizji z tym aktorem.

### Przypnij do ekranu
Gdy aktor jest przypięty, będzie się pojawiał w stałej lokalizacji, gdy kamera gry się porusza. Przypięty aktor nie będzie się poruszał bez skryptu i nie będzie powodował kolizji z innymi aktorami w twojej scenie.

Włączenie tej właściwości tymczasowo zmieni scenę na wyciemnioną, z obszarem ``160px x 144px`` w lewym górnym rogu, pokazującym część oryginalnej sceny. Użyj myszy, aby przeciągnąć aktora tam, gdzie chcesz go przypiąć do ekranu.

Wybierz innego aktora, scenę lub projekt, aby powrócić do normalnego widoku sceny.

### Grupy kolizji
Aktorzy mogą mieć przypisaną grupę kolizji w _Pasku bocznym edytora_. Gdy ta opcja jest włączona, możliwość uruchamiania skryptów na podstawie kolizji pojawi się w _Pasku bocznym edytora_. Aby dowiedzieć się więcej o skryptach na dotknięcie, zobacz dokumentację dotyczącą [Skryptowania](/docs/scripting).


## Skryptowanie
Aktorzy mogą zawierać wiele skryptów, które będą wywoływane w różnych momentach twojej gry.

- **Skrypt (naciśnięcie):** Jest wywoływany, gdy gracz stoi przed tym aktorem i naciśnie przycisk _Interakcja_.
- **Skrypt (dotknięcie)** (tylko jeśli ustawiona jest grupa kolizji) Jest wywoływany, gdy ten aktor zderza się z graczem lub pociskiem o określonej grupie kolizji.
- **Skrypt (auto start):** Wywoływany natychmiast po załadowaniu sceny w grze.
- **Skrypt (równoległy):** Powtarzany, gdy aktor jest na ekranie, a po zakończeniu skryptu będzie się powtarzał. Możesz tego użyć do tworzenia skryptów ruchu.

Aby rozpocząć tworzenie skryptu, wybierz aktora, kliknij typ skryptu, który chcesz edytować, i kliknij przycisk _Dodaj polecenie_ w _Pasku bocznym edytora_, aby otworzyć menu poleceń. Wybierz polecenie, aby dodać je do skryptu.

Więcej informacji znajdziesz w dokumentacji dotyczącej [Skryptowania](/docs/scripting).

## Limity
Istnieją ograniczenia dotyczące tego, jak aktorzy i ich sprite'y mogą być używane w GB Studio. Te ograniczenia mają na celu zapewnienie, że twoja gra będzie wyglądać zgodnie z zamierzeniami oraz aby logiczne działanie aktorów przebiegało płynnie. Dokładne limity zależą od złożoności obrazu tła używanego w twojej scenie, zobacz dział z [Scenami](/docs/project-editor/scenes/#actor-limits) po więcej informacji.
