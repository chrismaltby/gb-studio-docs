---
sidebar_position: 4
---

# Edytor projektu

Domyślny widok _Edytora projektu_, jak pokazano poniżej, to _Świat gry_. To tutaj możesz tworzyć swoją grę, łącząc sceny, dodając aktorów i wyzwalacze, a następnie budując zdarzenia skryptowe, aby dodać interakcje.

<img title="The Project Editor" src="/img/screenshots/project-editor-v4.png" width="1258" />

Użyj _Narzędzi edytora_, aby przełączać się między trybami zaznaczania, dodawania, usuwania, i rysowania - kolizji lub koloryzacji.

Domyślnie, właściwości twojego projektu są wyświetlane w _Bocznym pasku edytora_ po prawej stronie. Tutaj możesz ustawić nazwę projektu i wybrać początkową scenę. W tym widoku projektu ustawiane są również początkowe wartości dla aktora Gracza. Więcej informacji o graczu znajdziesz na stronie w temacie [Gracz](/docs/project-editor/player).

Aby ponownie przejrzeć właściwości projektu na _Bocznym pasku edytora_, kliknij w dowolne puste miejsce między scenami.

## Narzędzia edytora

### Tryb zaznaczania

Kliknięcie dowolnej sceny, aktora lub wyzwalacza zaktualizuje _Boczny pasek edytora_, aby pokazać właściwości i skrypty dla wybranego elementu. Możesz wrócić do właściwości Projektu, klikając poza sceną.

:::tip
Jeśli przytrzymasz `Shift` podczas klikania na sceny, możesz je dodawać i usuwać z zaznaczenia. Pozwala to na przeciąganie wielu scen razem lub kliknięcie prawym przyciskiem myszy, aby usunąć wiele na raz. Możesz także przytrzymać `Shift` podczas przeciągania, aby stworzyć zaznaczenie ramką.

<img title="Scene box selection" src="/img/screenshots/multi-select.gif" width="320" className="drop-shadow" />

:::

### Tryb dodawania

Możesz wybrać dodanie nowego aktora, wyzwalacz lub scenę. Po kliknięciu jednej z trzech opcji, kursor myszy zostanie załadowany nowym elementem. Możesz umieścić nowy element, klikając wewnątrz _Edytora projektu_, i anulować akcję, naciskając `Escape` lub wybierając inne narzędzie z _Narzędzi edytora_.


### Tryb usuwania

Wszystkie kolizje, aktorzy i wyzwalacze zostaną usunięte po kliknięciu. Akcje usuwania można cofnąć, naciskając `Ctrl / Cmd` + `Z`.

Tryb usuwania nie działa na sceny. Aby usunąć scenę, wykonaj jedną z poniższych czynności:
- Wybierz _tryb zaznaczania_, wskaż scenę, a następnie w _Bocznym pasku edytora_, przy nazwie sceny kliknij w ikonkę strzałki w dół i wybierz opcję "Usuń scenę". 
- Wybierz scenę i naciśnij na klawiaturze `Backspace`.
- Kliknij prawym przyciskiem myszy na scenę i wybierz "Usuń scenę" z menu.

### Tryb kolizji

Tryb ten umożliwia [dodanie kolizji](/docs/project-editor/scenes#adding-collision-to-a-scene) do dowolnego typu sceny za pomocą _trybu rysowania_ w GB Studio.


### Tryb koloryzacji

Tryb ten umożliwia [kolorowanie tafli](/docs/project-editor/scenes#colorizing-a-scene) w twojej scenie przy użyciu 8 palet kolorów na scenę. _Narzędzie Kolorowania_ również używa _trybu rysowania_ w GB Studio. Palety używane tutaj są określane w zakładce _Palety_ w _Edytorze projektu_.

Zobacz dokumentację na temat [klawiatura - skróty klawiszy](/docs/getting-started/keyboard-shortcuts) dla skrótów narzędzi edytora.

## Podgląd projektu

Używając _przycisku podgląd projektu_ możesz przełączać się między różnymi widokami projektu i jego zasobów.

<img title="Scene box selection" src="/img/screenshots/project-view-btn.gif" width="320" className="drop-shadow" />

- **Świat gry:** Twórz swoją grę, łącząc [sceny](/docs/project-editor/scenes), [aktorów](/docs/project-editor/actors) i [wyzwalacze](/docs/project-editor/triggers).

- **Obiekty:** Edytuj swoje obiekty, [sprite'y](/docs/assets/sprites) i [twórz animację](/docs/assets/sprites#sprite-editor).

- **Obrazy:** Podglądaj swoje zasoby [tła](/docs/assets/backgrounds) i [tafli](/docs/assets/tilesets).

- **Muzyka:** Podglądaj i edytuj swoje pliki [muzyczne](/docs/assets/music).

- **Palety:** Edytuj swoje palety dla gier kolorowych.

- **Podgląd dialogów:** Przeglądaj i edytuj cały tekst w swojej grze.

- **Ustawienia:** Zmień [ustawienia projektu](/docs/settings) takie jak domyślne grafiki gracza, palety kolorów i kontrolki klawiatury.

Zobacz dokumentację na temat [Zasoby](/docs/assets), aby uzyskać więcej informacji na temat dodawania nowych zasobów.
