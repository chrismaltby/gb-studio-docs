---
sidebar_position: 1
---

# Edytor muzyki

:::Informacja
Po aktualizacji programu do GB Studio 4 z wcześniejszej wersji, warto zapoznać się z [przewodnikiem migracyjnym](/docs/migrate), by mieć pewność, że twoja muzyka została prawidłowo zaktualizowana.
:::


Jeżeli w menu _Podgląd Ustawienia_ w dziale muzyki, został ustawiony _format muzyczny_ na `UGE (hUGEDriver)` (domyślny dla GB Studio 3 i nowszych), to możesz dodać muzykę do swojej gry, umieszczając pliki `.uge` w folderze `assets/music` twojego projektu.

Te pliki można edytować za pomocą _Edytora muzyki_, klikając przycisk _Podgląd_ projektu i wybierając _Muzyka_. Edytor umożliwia również tworzenie nowych utworów poprzez naciśnięcie przycisku `+` na górze listy utworów.

> Pliki `.uge` można również edytować za pomocą programu **[hUGETracker](https://nickfa.ro/index.php/HUGETracker)**


## Rozpoczęcie

_Edytor muzyki_ jest podzielony na trzy części:

-   **Nawigator**: Zawiera listę utworów i instrumentów dla wybranego utworu.

-   **Kreator utworu**: Sam edytor muzyki. Posiada dwa widoki: [Tryb piano](#piano-roll) i [tryb Trackera](#tracker). Pierwsza ikona na pasku narzędzi pozwala zmienić widok.

-   **Pasek boczny edytora**: Pozwala edytować tytuł utworu, nazwę artysty i tempo oraz pokazuje edytor instrumentów lub efektów, gdy jest wybrany.

### Struktura utworu

Utwór składa się z:

* Czterech _Kanałów_: Duty 1, Duty 2, Wave i Noise. 
  * Każdy kanał jest lepiej dostosowany do innego rodzaju dźwięku (na przykład: kanał Noise jest zwykle odpowiedni do rytmów perkusyjnych).
  * Każdy kanał ma własny zestaw 15 _[instrumentów](#instruments)_. Duty 1 i Duty 2 dzielą ten sam zestaw instrumentów.
* Wielu _Wzorów_, unikalnej grupy nut w każdym z czterech kanałów.
  * Każdy wzór zawiera sekwencję do 64 nut na kanał, a każda nuta składa się z wysokości dźwięku od `C-3` do `B-8`, instrumentu i efektu.
  * Wzory można powtarzać lub układać, aby utworzyć pełny utwór za pomocą _[Nawigatora wzorów](#pattern-navigator)_.
* _Tempa_,  czyli ile tików (64 na sekundę) musi upłynąć, zanim rząd zostanie ukończony. Im większa liczba tików, tym wolniejszy jest utwór.

## Tryb Piano

W trybie Piano używasz myszy do dodawania nut do wzoru. Odczytuje się to jak nuty na pięciolinii, czas jest reprezentowany na osi poziomej (kolumny), a wysokość dźwięku na osi pionowej (rzędy).

<img title="Piano Roll" src="/img/screenshots/music-editor-piano-roll-v3.1.png" width="1241" />

Możesz dodawać nuty tylko do jednego kanału naraz, wybierając go na pasku narzędzi w prawym górnym rogu. Kanały można wyciszać, używając ikony głośnika dla każdego kanału. Kanały, które nie są wybrane, można podglądać, klikając ikonę oka.

### Używanie trybu piano

Aby wprowadzić nutę, wybierz narzędzie ołówka na pasku narzędzi i kliknij na komórkę. Nuta będzie używać wybranego instrumentu na pasku narzędzi.

Aby usunąć nutę, wybierz narzędzie gumki na pasku narzędzi i kliknij na istniejącą nutę. Możesz również kliknąć prawym przyciskiem myszy na istniejącą nutę, aby ją usunąć.

Aby wybrać nutę, wybierz narzędzie wyboru lub naciśnij `Shift`. Po zaznaczeniu grupy nut przeciągnij i upuść je w dowolne miejsce na siatce.

Pasek efektów, na dole siatki piano, pozwala dodać [efekt](#effects) do danej nuty za pomocą edytora efektów w prawym panelu.

Utwór można odsłuchać w dowolnym momencie, naciskając przycisk odtwarzania.

Aby ustawić pozycję początkową odtwarzania, kliknij obszar nad pianinem, gdzie pokazuje się głowica odtwarzania.

Utwór można zapisać, naciskając przycisk zapisu lub Ctrl/Cmd + S.

## Tryb Trackera

W trybie Trackera używasz klawiatury do dodawania nut do wzoru. Utwór przechodzi od góry do dołu, z każdą linią reprezentującą pozycję utworu.

<img title="Tracker" src="/img/screenshots/music-editor-tracker-v3.1.png" width="1241" />

Jest jedna kolumna dla każdego kanału, a każda kolumna jest podzielona na 3 pola: Wysokość dźwięku (lub nuta), Instrument i Efekt. 

```
C-5 01 240
--- -- ---
 |   |  |
 |   |  +------ Kolumna efektu (Zmiany głośności, arpeggia, panoramowanie itp.)
 |   +--------- Instrument
 +------------- Nuta i oktawa (Nuta C w 5 oktawie. Dash może być #, co oznacza podwyższoną nutę, np. C#, D#)
```

Wiersze mogą być puste lub częściowo wypełnione (na przykład tylko efektem).

### Używanie trybu trackera

Siatkę utworu można nawigować za pomocą klawiszy kursora.

Istnieją dwa układy klawiatury do wprowadzania wartości w kolumnie nut. Układ można wybrać w _preferencjach GB Studio_.

***Układ Liniowy*** 
<img title="Tracker" src="/img/screenshots/music-editor-keys-openmpt.png" width="360" class="drop-shadow" />

*To jest układ używany przez trackery, takie jak OpenMPT i hUGETracker.*

Każdy wiersz klawiatury (lub "linia") reprezentuje jedną oktawę na pianinie. Klawisze od `Q` do `/` służą do wprowadzania wartości, zaczynając od `C` w bazowej oktawie (domyślnie 3). 

***Układ Pianina***
<img title="Tracker" src="/img/screenshots/music-editor-keys-milkyt.png" width="360" class="drop-shadow" />

*To jest układ używany przez trackery, takie jak MilkyTracker lub FastTracker2.* 

Klawiatura jest podzielona na dwie grupy po dwa rzędy klawiszy. W każdej grupie górne klawisze reprezentują czarne klawisze pianina, a dolne klawisze białe. Klawisze od `2` do `/` służą do wprowadzania wartości, zaczynając od `C` w bazowej oktawie + 1 (domyślnie 4).

Bazową oktawę można wybrać na pasku narzędzi.

Klawisze numeryczne służą do wprowadzania wartości w kolumnie instrumentów. Domyślny [instrument](#instruments) można wybrać na pasku narzędzi i używać automatycznie podczas dodawania nowej nuty.

Klawisze numeryczne i klawisze `A` do `F` służą do wprowadzania wartości w kolumnie [efektów](#effects) column.

Utwór można odsłuchać w dowolnym momencie, naciskając przycisk odtwarzania.

Aby ustawić pozycję początkową odtwarzania, kliknij numer wiersza po lewej stronie siatki trackera.

Utwór można zapisać, naciskając przycisk zapisu lub Ctrl/Cmd + S.

## Nawigator wzorów

<img title="Patterns" src="/img/screenshots/music-editor-patterns.png" width="710" class="drop-shadow" />

Menu rozwijane w każdej komórce pozwala wybrać jeden z istniejących wzorów lub przypisać pusty do bieżącej pozycji.

Przycisk plus pozwala dodać nowy wzór do utworu.


**Uwaga:**  wszelkie nieużywane wzorce zostaną usunięte z utworu podczas zapisywania.


## Instrumenty

>Wzorując się na opisach w [podręczniku hUGETracker](https://nickfa.ro/images/HUGETrackerManual.pdf)

Wybór instrumentu w lewym pasku bocznym otworzy edytor instrumentów w prawym pasku bocznym.

Zmiany w instrumencie można podglądać w dowolnym momencie, naciskając przycisk "Testuj instrument (C5)", który przez kilka sekund odtworzy dźwięk C5 z wybranym instrumentem.

Oprócz nazwy instrumentu, każdy instrument posiada własny zestaw pól, które można edytować.

### Instrumenty Duty

**Długość:** Po włączeniu, dźwięk zostanie natychmiast przerwany po określonym czasie. Jeśli nie jest włączone, dźwięk będzie odtwarzany, dopóki nie rozpocznie się nowy dźwięk.

**Głośność początkowa**: Ustawia początkową głośność obwiedni. Jeśli nie ma ustawionej zmiany sweep, to będzie to głośność dźwięku.

**Zmiana sweep<sup>1</sup>**: Określa, jak stroma będzie zmiana głośności. Im wyższa lub niższa wartość, tym szybciej dźwięk zanika lub narasta.

**Czas sweep<sup>1</sup>**: Wybiera czas "sweep" dla dźwięku. Im większa wartość, tym wolniejszy sweep.

**Przesunięcie sweep<sup>1</sup>**: Wybiera kierunek i wielkość sweep dla dźwięku na każdy "tick" zgodnie z czasem sweep. Dodatnie wartości podnoszą dźwięk, ujemne obniżają.

**Duty:** Wybiera barwę dźwięku do odtworzenia. Każdy brzmi inaczej i są przydatne, gdy nie chcesz, aby oba kanały duty kolidowały ze sobą.

>**<sup>1</sup>** Sweep to termin techniczny w kontekście dźwięku i instrumentów, który oznacza stopniową zmianę parametrów dźwięku, takich jak głośność lub wysokość dźwięku w określonym czasie. 

### Instrumenty Wave

**Długość**: Po włączeniu, dźwięk zostanie natychmiast przerwany po określonym czasie. Jeśli nie jest włączone, dźwięk będzie odtwarzany, dopóki nie rozpocznie się nowy dźwięk.

**Głośność**: Określa, z jaką głośnością będzie odtwarzany instrument wave, chyba że zostanie zastąpiona przez komendę efektu głośności. Istnieją tylko 3 możliwe wartości, ponieważ interfejs głośności kanału wave jest bardziej ograniczony niż innych kanałów.

**Fala**: Wybiera, która fala powinna być odtwarzana jako część tego instrumentu. Wybrana fala może być edytowana przez rysowanie na podglądzie fali.

### Instrumenty Noise

**Długość**: Po włączeniu, dźwięk zostanie natychmiast przerwany po określonym czasie. Jeśli nie jest włączone, dźwięk będzie odtwarzany, dopóki nie rozpocznie się nowy dźwięk.

**Głośność początkowa**: Ustawia początkową głośność obwiedni. Jeśli nie ma ustawionej zmiany sweep, to będzie to głośność dźwięku.

**Zmiana sweep<sup>1</sup>**: Określa, jak stroma będzie zmiana głośności. Im wyższa lub niższa wartość, tym szybciej dźwięk zanika lub narasta.

**Licznik 7-bitowy**: Po zaznaczeniu, instrument będzie brzmiał bardziej jak ton muzyczny niż szum.

**Makro szumu**: Podobnie jak efekt arpeggio, ustaw do 8 zmian wysokości +-32 od częstotliwości szumu, zmieniającą się co klatkę. Świetne dla bębnów basowych lub szybkiego zmieniającego się szumu. Musi być krótszy niż aktualne tempo utworu.

>**<sup>1</sup>** Sweep to termin techniczny w kontekście dźwięku i instrumentów, który oznacza stopniową zmianę parametrów dźwięku, takich jak głośność lub wysokość dźwięku w określonym czasie.


## Efekty

>Wzorując się na opisach w [podręczniku hUGETracker](https://nickfa.ro/images/HUGETrackerManual.pdf)

| Efekt | Nazwa               | Opis                                    |
| ------ | ------------------ | --------------------------------------- |
| 0xy    | Arpeggio           | Co tick, przełącza się między grającą nutą, nutą + `x`, a nutą + `y`, gdzie `x` i `y` są wartościami w półtonach. Może być używany do tworzenia "akordów" lub efektu strumienia.|
| 1xx    | Portamento w górę      | Przesuwa wysokość dźwięku w górę o `xx` jednostek co tick.|
| 2xx    | Portamento w dół    | Przesuwa wysokość dźwięku w dół o `xx` jednostek co tick.|
| 3xx    | Portamento do tonu   | Przesuwa wysokość dźwięku w kierunku określonej wartości nuty o `xx` jednostek co tick. Zatrzymuje się, gdy osiągnie określoną wartość nuty.<br/> **Ten efekt nie może być używany w komórce z wartością instrumentu.**|
| 4xy    | Vibrato            | Szybko przełącza się między określoną wartością nuty a nutą + `y`, z częstotliwością `x`, gdzie `y` jest wartością w jednostkach. Podobne do arpeggio, ale można kontrolować częstotliwość, a ilość jest określona w jednostkach, a nie w półtonach.|
| 5xx    | Ustawienie głośności master  | Ustawia kontrolę głośności master Gameboya dla lewego i prawego głośnika. Użyj edytora efektów, aby stworzyć jeden z tych efektów. Zauważ, że głośność zero nie jest całkowicie cicha.|
| 6xx    | Wywołanie procedury       | Wywołuje użytkownika zdefiniowaną procedurę. Procedury mogą być tworzone za pomocą polecenia [Muzyka: ustaw rutynę](/docs/scripting/script-glossary/music-sound-effects#set-music-routine).|
| 7xx    | Opóźnienie nuty         | Czeka `xx` ticków przed odtworzeniem nuty w tej komórce.|
| 8xx    | Ustawienie panoramy        | Ustawia, które kanały odtwarzają na których głośnikach. Użyj edytora efektów, aby stworzyć jeden z tych efektów.<br/> Może być również używany jako wyciszenie kanału przez ustawienie go na odtwarzanie ani na lewym, ani na prawym głośniku.|
| 9xx    | Ustawienie cyklu duty     | Wybiera cykl duty dla kanałów Duty 1 lub Duty 2. Jeśli ten efekt pojawi się na kanałach Noise lub Wave, będzie miał wpływ na kanał Duty 2. Prawidłowe wartości dla `xx` to 00, 40, 80, C0. Pod maską, wartość `xx` jest ładowana bezpośrednio do rejestru długości Duty 1 lub Duty 2, więc teoretycznie można osiągnąć inne efekty niż tylko zmiana cyklu duty.|
| Axy    | Zjeżdżanie głośności       | Przesuwa głośność dźwięku w górę o `x` jednostek, a następnie w dół o `y` jednostek.<br/> Ten efekt faktycznie ponownie wyzwala nutę co tick, co może nie być zauważalne dla instrumentów bez długości/obwiedni, ale może potencjalnie brzmieć źle, jeśli są obecne.<br/> Zaleca się używanie albo obwiedni instrumentów, albo komendy `C`, jeśli to możliwe.<br/>**Ten efekt nie działa w tej samej komórce co nuta/instrument!**|
| Bxx    | Skok do pozycji      | Skacze do początku wzorca `xx`. Jeśli `xx` jest `00`, skacze do następnego wzorca.|
| Cev    | Ustawienie głośności         | Ustawia obwiednię `e` i głośność `v` kanału. Musi być towarzyszone przez nutę i instrument, aby działało (z wyjątkiem kanału Wave). Prawidłowe głośności wahają się od 00 do 0F (00,04,08,0F dla kanału Wave).<br/>Prawidłowe obwiednie dla `Cev` 00-F0, 0 użyj instrumentu, 8 brak zaniku, 1-7 zanik ciszej, 9-F |
| Dxx    | Przerwa wzorca      | Skacze do następnego wzorca wcześniej i zaczyna od wiersza `xx`.|
| Exx    | Skrócenie nuty           | Skraca nutę po `xx` tickach.|
| Fxx    | Ustawienie prędkości          | Ustawia liczbę ticków na wiersz na `xx`. Może być używany na przemian, aby stworzyć rytm swing.|

## Skróty klawiszowe

Zobacz temat [Skróty klawiszowe > Edytor muzyki](/docs/getting-started/keyboard-shortcuts#music-editor)

