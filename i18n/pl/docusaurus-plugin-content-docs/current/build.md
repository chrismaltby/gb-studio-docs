---
sidebar_position: 7
---
# Tworzenie gry


## Gra

Kliknięcie przycisku _Uruchom_ w prawym górnym rogu okna _Edytora Projektu_ rozpocznie kompilację gry, a po zakończeniu procesu otworzy nowe okno, w którym można zagrać w swoją grę. Zobacz [Skróty klawiszowe](/docs/getting-started/keyboard-shortcuts), aby uzyskać szczegółowe informacje na temat sterowania w _oknie gry_.


## Eksportuj jako ROM

Kliknięcie przycisku _Eksportuj_ i wybranie opcji _Eksportuj jako ROM_ skompiluje grę i utworzy plik ROM w folderze projektu jako `$PROJECT_ROOT/build/rom/game.gb`. Plik ten można uruchomić na dowolnym kompatybilnym emulatorze, takim jak [OpenEMU](https://openemu.org/) lub [KiGB](http://kigb.emuunlim.com/downloads.htm). 

## Eksportuj do wersja Web

Kliknięcie przycisku _Eksportuj_ i wybranie opcji _Eksportuj do wersji Web_ skompiluje grę i utworzy wersję HTML5 w folderze `$PROJECT_ROOT/build/web`. 


Można ten folder przesłać na dowolny serwer internetowy i uruchomić grę w przeglądarce, otwierając plik `index.html`. W przypadku korzystania z przeglądarki na telefonie komórkowym lub tablecie, gra będzie zawierać dotykowe elementy sterujące.

Jeśli spakujesz folder `build/web`, możesz przesłać go na [Itch.io](https://itch.io) jako grę HTML. Zalecany rozmiar okna to `480px` x `432px`.


## Eksportuj do urządzenia Pocket

Kliknięcie przycisku _Eksportuj_ i wybranie opcji _Eksportuj do urządzenia Pocket_ skompiluje projektu jako plik `.pocket` do użycia na urządzeniach [Analogue Pocket](https://www.analogue.co/pocket)

Aby zagrać w grę `.pocket`:

- Utwórz folder `GB Studio` w katalogu głównym karty MicroSD,
- Skopiuj plik `.pocket` do folderu `GB Studio`,
- Włóż kartę MicroSD do urządzenia Pocket,
- W menu Pocket wybierz `Tools` / `GB Studio` / `Play Creations` i wybierz swój plik z listy.


## Rozwiązywanie problemów

W systemie macOS, jeśli masz problemy z kompilacją lub uruchomieniem gry, może być konieczne zainstalowanie narzędzi wiersza polecenia Apple. Otwórz `Applications/Terminal.app` i wprowadź następujące polecenie:

```
xcode-select --install
```

W systemie Windows może być konieczne dodanie aplikacji do białej listy/listy zaufanych w oprogramowaniu antywirusowym, aby wykonać kompilację gry.
