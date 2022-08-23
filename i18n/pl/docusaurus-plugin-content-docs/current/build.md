---
sidebar_position: 7
---

# Buduj swoją grę

## Gra

Po kliknięciu przycisku _Uruchom_ (w prawym górnym rogu okna _edytora projektu_, przycisk play), program rozpocznie komplilację gry, a po jej zakończeniu otworzy okno, w którym można grać w aktualny projekt. Zobacz temat [Klawiatura - skróty klawiszy](/docs/getting-started/keyboard-shortcuts), aby uzyskać szczegółowe informacje na temat poruszania się (patrz na dział _sterowanie podczas gry_).

## Terminal

W _nawigatorze projektu_ przejdź do menu _zbuduj i uruchom_, spowoduje to wyświetlenie _terminalu_, gdzie zostanie wyświetlony dziennik (log) kompilacji projektu. Można przejść do tego ekranu także poprzez naciśnięcie _uruchom_ podczas kompilacji. Ten ekran pokazuje, czy w kompilacji występują błędy, które mogą pomóc w ich poprawieniu.

## Eksportuj jako ROM

Kliknięcie w przycisk _eksportuj jako ROM_ i program rozpocznie proces utworzenia pliku ROM w folderze projektu `$ PROJECT_ROOT / build / rom / game.gb`. Plik ROM jest to plik gry, którą można otworzyć na dowolnym emulatorze obsługującym konsolę Nintendo Gam Boy, takim jak [OpenEMU](https://openemu.org/) lub [KiGB](http://kigb.emuunlim.com/downloads.htm). 

## Eksportuj jako wersja Web

Możesz przesłać ten folder na dowolny serwer sieciowy i przejść do pliku `index.html`, aby zagrać w grę w przeglądarce internetowej. Jeśli korzystasz z przeglądarki internetowej na telefonie komórkowym lub tablecie, gra będzie również zawierać dotykowe elementy sterujące.

Jeśli spakujesz folder `build / web`, możesz przesłać go do [Itch.io](https://itch.io) jako gra HTML. W takim przypadku zalecany rozmiar okienka ekranu to `480px` x `432px`.

## Rozwiązywanie problemów

W systemie macOS, jeśli masz problemy z budowaniem lub uruchomieniem gry, może być również konieczne zainstalowanie narzędzi wiersza polecenia Apple, otwierając `Applications / Terminal.app` i wprowadzając następujące polecenie.

```
xcode-select --install
```

W systemie Windows konieczne może być dodanie aplikacji do białej listy/listy zaufanych programów w oprogramowaniu antywirusowym, aby wykonać kompilację.
