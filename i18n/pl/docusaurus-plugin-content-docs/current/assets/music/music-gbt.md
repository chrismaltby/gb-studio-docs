# Muzyka MOD 

GBT Player jest _sterownikiem legacy_ (sterownikiem starszego typu, który nadal jest obsługiwany w celu zapewnienia kompatybilności z wcześniejszymi wersjami oprogramowania). Domyślnie nowe projekty używają wbudowanego [Edytora muzyki](https://www.gbstudio.dev/docs/assets/music/music-huge).

Aby włączyć tryb GBT Player, należy uruchomić ustawienia (menu programu _Podgląd - Ustawienia_), następnie
w dziale muzyki zmienić _format muzyki_ na MOD (GBT Player).

## Wymagania

Dodaj muzykę do gry, umieszczając pliki .mod w folderze `assets/music` projektu. Pliki te powinny być dostosowane do użytku z GBT Player. Możesz przejrzeć [zasoby społeczności GB Studio](https://github.com/DeerTears/GB-Studio-Community-Assets), aby znaleźć darmową, kompatybilną z GBT muzykę na licencji MIT.

Można użyć takiego oprogramowania jak [**OpenMPT**](https://openmpt.org/) (dla Windows lub Linux za pomocą Wine), [**MilkyTracker**](https://milkytracker.titandemo.org/) (dla Windows, Mac i Linux), [**ProTracker**](https://16-bits.org/pt.php) oraz [**BassoonTracker**](https://www.stef.be/bassoontracker/) (opartego na przeglądarce), tak aby wymienić tylko kilka.


## Zasoby

Zalecane jest zapoznanie się z dokumentacją twojego trackera:
- [Dokumentacja OpenMPT](https://wiki.openmpt.org/Tutorial:_Getting_Started)
- [Dokumentacja MilkyTracker](https://milkytracker.org/docs/MilkyTracker.html#shortcuts)
- [Dokumentacja BassoonTracker](https://www.stef.be/bassoontracker/docs/#about)

Na koniec, kanał [Discord GB Studio](https://discord.gg/v9xAJCJ) posiada również dedykowany kanał do udzielania pomocy #music-help.

## Pierwsze kroki

1. Stwórz pusty projekt w GB Studio.
2. Znajdź plik `assets/music/template.mod` i otwórz go w wybranym przez siebie trackerze.
   - **UWAGA! Należy edytować ten plik, aby uzyskać dokładne odwzorowanie instrumentów, które można użyć.**
3. Użyj listy instrumentów przedstawionej później w tym dokumencie, aby wybrać dźwięki, które chcesz. Zmiana sampli w trackerze nie wpłynie na ich brzmienie w grze.
4. Dodaj w zdarzeniu polecenie `Muzyka: odegraj utwór` do swojej gry i wybierz swoją piosenkę z rozwijanego menu.
5. Kliknij przycisk _Odtwórz_ obok nazwy piosenki, aby uzyskać podgląd w edytorze, lub uruchom grę, aby uzyskać podgląd w grze.

Ponieważ format pliku .mod nie jest przeznaczony wyłącznie dla Game Boya, to zaleca się przetestować piosenkę w grze lub w oknie podglądu muzyki, aby wychwycić różnice dźwiękowe między odtwarzaniem w trackerze a wyjściem GBT Playera.

## Ograniczenia kanałów GBT Playera

Pliki .mod mają 4 kanały. Załadowanie kopii template.mod (dołączonego do każdego nowego projektu) zapewni poprawne ustawienie tych kanałów.

| Numer kanału # | Typ dźwięku | Zakres nut <sup>1</sup> | Instrumenty | Efekty               |
| -------------- | ----------- | ----------------------- | ----------- | -------------------- |
| Kanał 1 & 2    | Puls	       | C3 do B8                | 1-4         | 0, C, E8, EC, B, D, F |
| Kanał 3        | Fala        | C3 do B8                | 8-15        | 0, C, E8, EC <sup>**2**</sup> |
| Kanał 4        | Szum        | Tylko C5                | 16-31       | C, E8, EC, B, D, F    |

*<sup>1</sup> Ten zakres dotyczy trakerów jedno-indeksowych (indeksowanych od jedynki; C1 to najniższa możliwa nuta). Jest to porównywalne z domyślnymi ustawieniami OpenMPT.*
*Trackery, które są domyślnie indeksowane od zera (C0 to najniższa możliwa nuta), powinny interpretować te zakresy nut jako pełną oktawę niżej. Jest to porównywalne z domyślnymi ustawieniami MilkyTracker.*

*Przy użyciu domyślnych ustawień w OpenMPT i MilkyTracker, C3 do B8 w OpenMPT brzmi tak samo jak C2 do B7 w MilkyTracker.*

*<sup>2</sup> Efekty B, D i F mogą być również używane na kanale 3, jeśli ten sam wiersz nie jest używany do ustawienia nuty/instrumentu.*

## Instrumenty

Pseudonimy i opisy obok tych instrumentów nie są oficjalne dla GBT Playera, mają na celu pomoc w szybkiej identyfikacji instrumentów.

Kanały pulsacyjne 1 i 2 mają cztery opcje instrumentów:

1. Puls 25%
2. Puls 50% (fala kwadratowa)
3. Puls 75% (odwrócony puls 25%)
4. Puls 12,5%

Instrumenty od 5 do 7 są celowo pozostawione puste.

Kanał 3, kanał falowy, ma 8 opcji instrumentów:

8. Buzzy
9. Ringy
10. (A) Sync Saw
11. (B) Ring Saw
12. (C) Oktawowy Puls + Trójkąt
13. (D) Fala piłokształtna
14. (E) Kwadrat
15. (F) Sinusoida

Instrumenty od 16 do 23 używają okresowego szumu przy różnych wysokościach, podczas gdy instrumenty od 24 do 32 używają pseudolosowego szumu przy różnych wysokościach.

Okresowy szum:

16. (10hx) "stutter" - Kwadrat plus puls o losowych szerokościach impulsu
17. (11hx) "rumble" - Ta sama fala, ale szybsza
18. (12hx) "engine" - Ta sama fala, ale jeszcze szybsza
19. (13hx) "low tone" - Brzmi jak D5
20. (14hx) "undertone" - Brzmi jak E5 + 50 centów
21. (15hx) "middletone" - Brzmi jak B5 + 50 centów
22. (16hx) "overtone" - Brzmi jak D6 + 50 centów
23. (17hx) "high tone" - Brzmi jak D7

Pseudolosowy szum:

24. (18hx) "earthquake" - Kwadrat z cienkim pulsem o losowych szerokościach impulsu
25. (19hx) "spaceship" - To samo co 24, ale szybsze
26. (1Ahx) "ocean" - itd.
27. (1Bhx) "scratch" - itd.
28. (1Chx) "glitch" - Czysta próbka białego szumu, niezwiązana z innymi instrumentami
29. (1Dhx) "volcano" - Puls z szybko zmieniającą się szerokością impulsu
30. (1Ehx) "scream" - To samo co 29, ale szybsze
31. (1Fhx) "static" - itd.

## Efekty

### Efekty utworów

| Efekt | Nazwa | Opis | Kanały |
| ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -- |
| **Bxx** | Skok | Skok do określonego wzoru w utworze. | 1, 2, 3<sup>1</sup>, 4
| **Dxx** | Przerwanie wzoru | Skok do następnego wzoru wcześniej, rozpoczynając wzór od wiersza `xx`. To jedyny sposób na skrócenie długości wzoru. | 1, 2, 3<sup>1</sup>, 4 |
| **Fxx** | Ustaw prędkość | Ustawia prędkość utworu na `xx`, od 0x1 (szybko) do 0x1F (wolno). Jest to zalecana alternatywa dla regulacji tempa utworu. `xx` oznacza liczbę tików na wiersz. Zobacz [Tabelę prędkości](#speed-table) po więcej informacji. | 1, 2, 3<sup>1</sup>, 4 |

<sup>1</sup> Nie może być używany przez kanał 3 w wierszach, gdzie kanał 3 odtwarza nową nutę.

### Efekty kanału

Utrzymują się na kanale, dopóki efekt nie zostanie ustawiony ponownie. Zobacz [Trwałość efektów](#effect-persistence) po więcej informacji.

| Efekt | Nazwa | Opis | Kanały |
| ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -- |
| **9ve** | Obwiednia głośności | Ustawia początkową głośność nuty na `v` (0-F) i dodaje obwiednię wygaszenia głośności. Kierunek i prędkość wygaszenia ustawiane są przez `e`. 1-7 zmniejsza głośność w czasie, gdzie 1 jest szybki. 9-F zwiększa głośność w czasie, gdzie 9 jest szybki. 8 usuwa obwiednię. Użycie `9ve` po `Cxx` nadpisuje `Cxx`. | 1, 2, 4 |
| **Cxx** | Głośność | Ustawia głośność kanału na `xx`. Zobacz [Ograniczenia głośności Cxx](#cxx-volume-limitations) po więcej informacji. Użycie `Cxx` po `9ve` nadpisuje wartość `v`, ale zachowuje `e` bez zmian. | 1, 2, 3, 4 |
| **E8x** | Panoramowanie | Ustawia panoramowanie na jedną z trzech wartości. `0-3` = 100% lewo, `4-B` = środek, `C-F` = 100% prawo. | 1, 2, 3, 4 |

### Efekty nuty

Wpływa na nutę indywidualnie.

| Efekt | Nazwa | Opis | Kanały |
| ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -- |
| **0xy** | Arpeggio | Szybko cyklicznie zmienia między 3 nutami. `x` i `y` reprezentują liczbę półtonów powyżej nuty początkowej. | 1, 2, 3, 4 |
| **1xx**| Przesunięcie wysokości w górę | Przesuwa wysokość dźwięku w górę o `xx` takty. Ustawienie `100` po poprzednim `1xx` używa tej samej wartości co poprzednie ustawienie. | 1, 2, 3 |
| **2xx**| Przesuwa wysokość dźwięku w dół o `xx` takty. Ustawienie `200` po poprzednim `2xx` używa tej samej wartości co poprzednie ustawienie. | 1, 2, 3 |
| **ECx** | Obcięcie nuty | Obcina nutę po `x` klatkach. Musi być poniżej prędkości `Fxx`, aby być słyszalnym. | 1, 2, 3, 4 |

## Trwałość efektu

Po ustawieniu, efekt kanału będzie utrzymywał się na nutach tego kanału, dopóki ten sam efekt nie zostanie ponownie ustawiony.

W większości trackerów, jeśli nuta jest odtwarzana bez polecenia głośności, głośność nuty zostaje zresetowana do maksimum. Gdy plik .mod zostanie skonwertowany przez GBT Player, nuty bez efektu głośności będą odtwarzane z tą samą głośnością, co poprzedni efekt `Cxx`.

**Przykład:**

```
ModPlug Tracker MOD
|C-502...C40|
|...........|
|...........|
|...........|
|........C00|
|...........|
|E-502......|
```

W dowolnym trackerze .mod, nuta E-5 zostanie wznowiona przy pełnej głośności po efekcie C00.

W grze nie usłyszysz nuty E-5. Dzieje się tak, ponieważ efekt C00 trwa do momentu ustawienia innego efektu `Cxx`. Aby ta nuta była słyszalna w grze, głośność musi być ponownie ustawiona:

```
ModPlug Tracker MOD
|C-502...C40|
|...........|
|...........|
|...........|
|........C00|
|...........|
|E-502...C40|
```

Można użyć `EC0` jako alternatywy dla `C00`, aby obcinać nuty i zachować ostatni efekt głośności.

## Ograniczenia głośności Cxx

`Cxx` ustawia głośność kanału, dopóki nie zostanie użyty efekt `Cxx` lub `9ve`.

Gameboy ma 16 unikalnych ustawień głośności dla kanałów 1, 2 i 4. Chociaż pliki .mod pozwalają na wartości głośności między 0 a 40hx, GBT Player zaokrągli te wartości do najbliższej liczby będącej wielokrotnością 4, aby zachować kompatybilność. Oto prawidłowe wartości głośności dla każdego z kanałów:

### Ustawienia Cxx dla kanałów 1, 2 i 4:

`00, 04, 08, 0C, 10, 14, 18, 1C, 20, 24, 28, 2C, 30, 34, 38, 3C`

Każda wartość `Cxx`, która nie jest wielokrotnością 4, zostanie zaokrąglona w dół do jednej z powyższych wartości.

**Przykład:** Wprowadzenie `C01`, `C02` i `C03` będzie brzmiało tak samo, jak wprowadzenie `C00`.

**Przykład:** Wprowadzenie `C40` będzie brzmiało tak samo, jak wprowadzenie `C3C`.

### Unikalne ustawienia głośności dla kanału 3:

Kanał 3 jest wyjątkiem, z tylko 4 unikalnymi ustawieniami głośności:

`00, 10, 20, 40`

GBT Player zaokrągli efekty `Cxx` na kanale 3 do najbliższej liczby wymienionej powyżej.

**Przykład:** Wprowadzenie `C30` zaokrągli głośność do `C40`.

### Tabela prędkości

Ta tabela zakłada, że flaga prędkości (-speed flag) nie jest ustawiona w oknie _Muzyka_ dla każdego utworu.


| Wartość Fxx (w większośći trackerów .mod) | BPM (w dowolnych trackerach . mod) | BPM (w grze) |
| --------------------------------- | --------------------------- | ------------- |
| **F01<sup>1</sup>**    | 750 BPM          | 900 BPM       |
| **F02<sup>1</sup>**    | 375 BPM          | 450 BPM       |
| **F03<sup>1</sup>**    | 250 BPM          | 300 BPM       |
| **F04<sup>1</sup>**    | 187.5 BPM        | 225 BPM       |
| F05                    | 150 BPM          | 150 BPM       |
| F06                    | 125 BPM          | 128.57 BPM    |
| F07                    | 107.14 BPM       | 112.50 BPM    |
| F08                    | 93.75 BPM        | 100 BPM       |
| F09                    | 83.33 BPM        | 90 BPM        |
| F0A                    | 75 BPM           | 81.82 BPM     |
