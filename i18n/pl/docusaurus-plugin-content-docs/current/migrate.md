---
sidebar_position: 10
---

# Przewodnik migracji

## GB Studio 3 do 4

### Muzyka

GB Studio 3.2.1 i wcześniejsze miały problem, w którym długości instrumentów falowych były zapisywane w sposób niezgodny z hUGETracker. Od wersji 4.0.0 problem ten został naprawiony, ale pliki `.uge` utworzone w starszych wersjach GB Studio mogą nie brzmieć poprawnie, jeśli na instrumentach falowych jest ustawiona wartość trwania. 

Jeśli uznasz, że twoja muzyka jest dotknięta tym problemem, możesz użyć tego narzędzia migracyjnego, aby naprawić swoje pliki.

https://chrismaltby.github.io/gbs-uge-migrator/

### Wtyczki

Jeśli twój projekt używa jakichkolwiek [wtyczek](/docs/extending-gbstudio/plugins), może być konieczne pobranie nowszych wersji dla kompatybilności z wersją GB Studio 4.

Teraz w przypadku używania [wtyczek silnika](/docs/extending-gbstudio/plugins#engine-plugins) wymagane jest, aby wtyczka zawierała plik `engine.json` określający, z którą wersją silnika ma działać. Autorzy wtyczek muszą utworzyć plik `PLUGIN/engine/engine.json`, zawierający przynajmniej następujący wpis:

```
{"version": "4.0.0-e0"}
```
Zastępując `4.0.0-e0` wersją silnika, którą wtyczka obsługuje.


## GB Studio 2 do 3

GB Studio 3.0 wprowadza szereg zmian w stosunku do poprzednich wersji w celu ulepszenia i zabezpieczenia przyszłości silnika gry oraz formatu projektu. Staramy się zautomatyzować jak najwięcej procesów migracji, jednak są przypadki, w których nie było to możliwe i konieczne może być wprowadzenie pewnych zmian w projekcie, jeśli chcesz przejść z poprzednich wersji GB Studio.


### Aktorzy

- Aktorzy będą teraz zawsze animowani, nawet gdy są w bezruchu (umożliwiając animacje bezczynności), co może powodować problemy, gdy chcesz manualnie przechodzić przez animacje (jak np. pola wyboru w scenach menu przykładowej gry GB Studio 2.0). Jeśli chcesz kontrolować animację manualnie jak wcześniej, ustaw szybkość animacji aktora na ''Brak''. Rozważ również użycie nowego [edytora obiektów (sprite)](/docs/assets/sprites/#sprite-editor) i [Stanów animacji](/docs/assets/sprites/#animation-states), ponieważ możesz osiągnąć podobne cele z dużo większą elastycznością.


- Jeśli masz wielu aktorów na scenie, którzy używają polecenia `Aktor: zmień grafikę`, możesz zauważyć, że licznik tafli sprite'ów stał się zbyt wysoki. Jest to spowodowane tym, że w GB Studio 3.0 dokonaliśmy innego kompromisu w sposobie radzenia sobie z tą sytuacją. Wcześniej wszystkie zaplanowane arkusze sprite'ów musiały być ładowane do pamięci podczas inicjalizacji sceny, co ograniczało liczbę unikalnych sprite'ów, które można było użyć w jednej scenie. Teraz rezerwujemy pamięć dla każdego aktora korzystającego z polecenia zmiany grafiki, ale możesz zastosować dowolną liczbę arkuszy sprite'ów dla jednego aktora. Zalecanym rozwiązaniem jest zastąpienie przełączania arkuszy sprite'ów używaniem [Stanów animacji](/docs/assets/sprites/#animation-states). Przykładem może być sceną ''Bitwa kosmiczna'', w której ten problem wystąpił. 
Można porównać przykładowy projekt dla GBC w GB Studio 2 z wersją GB Studio 3, gdzie animacje eksplozji statków są teraz częścią animacji sprite'ów wroga, a nie osobnym arkuszem sprite'ów.

- Jeśli migracja jest z GB Studio 2, to można zauważyć, że limit aktorów na scenę został zmniejszony do 20 aktorów na scenę. Limit ten może zostać zwiększony w przyszłych wersjach. W zależności od sposobu użycia aktorów, możliwe jest zastosowanie większych grafik (sprit'ów), aby osiągnąć ten sam efekt.


### Sprite'y (grafika obiektów)

- Domyślna grafika gracza jest teraz ustawiana dla każdego rodzaju sceny osobno (_Widok z góry (2D RPG)_, _Platformowa_, itp.), więc nie ma już potrzeby manualnego przełączania grafiki gracza w skrypcie sceny, chyba że chcesz to zrobić warunkowo. Podczas migracji projektu korzystającego z wielu rodzaju scen, należy ustawić _domyślną grafikę gracza_ dla każdego rodzaju sceny [Ustawieniach](/docs/settings/#default-player-sprites).

- Obramowanie kolizji można teraz konfigurować dla każdego grafiki. Wcześniej wszyscy aktorzy posiadali obramowanie kolizji o rozmiarze `16px` x `16px`, a gracz miał obramowanie kolizji `8px` x `16px`. Podczas migracji projektu został ustawiony arkusz sprite'ów, który był ustawiony jako domyślny dla gracza, aby używał obramowania kolizji `8px` x `16px`, aby zachować kompatybilność z poprzednimi wersjami. Jeśli kiedykolwiek sprite gracza był zmieniony za pomocą skryptów, być może zajdzie potrzeba manualnie ustawienia obramowania kolizji dla tych grafik, korzystając z [Edytora obiektów](/docs/assets/sprites/#sprite-editor).

- Grafika gracza w platformówkach posiada teraz niestandardową animacje skoku i wspinania się, które należy skonfigurować. Aby ich użyć, przejdź do [Edytora obiektów](/docs/assets/sprites/#sprite-editor), wybierz obiekt gracza w platformówce, a następnie na prawym pasku bocznym ustaw rodzaj animacji na ''Gracz platformowy''. Dzięki temu zostanie przypisanych kilka dodatkowych animacji, które można zdefiniować dla obiektu. Zobacz [Ustawienia animacji](/docs/assets/sprites/#animation-settings) po więcej informacji.


### Sceny

- Tafle drabiny teraz przyciągają grafikę gracza do środka tafli podczas wspinania się. Jeśli używasz drabin w swojej grze, upewnij się, że je przetestujesz, ponieważ może być konieczne przestawienie tafli kolizji, aby dopasować się do nowego wyrównania.


### Zapis / Wczytywanie

- Podczas wczytywania zapisanej gry, silnik gry kontynuuje wszelkie skrypty, które były wcześniej uruchomione. Oznacza to, że jeśli po zapisaniu gry zostało użyte polecenie do wyświetlenia wiadomość, jak np. ''Teraz możesz bezpiecznie wyłączyć system.'', to wiadomość ta zostanie również wyświetlona podczas wczytania tej gry.  Polecenie zapisu danych teraz zawiera funkcję zwrotną _Przy zapisie_. Będzie ona wywoływana tylko podczas zapisywania gry, a nie podczas jej wczytywania. Jeśli wcześniej polecenie wiadomości było zastosowane po zapisaniu, prawdopodobnie te polecenie będzie trzeba przenieść do skryptu _Przy zapisie_. Zobacz punkty zapisu w najnowszych przykładowych projektach, aby dowiedzieć się, jak to zaimplementować.
