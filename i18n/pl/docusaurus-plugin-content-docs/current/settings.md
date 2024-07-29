---
sidebar_position: 11
---

# Ustawienia

Kliknięcie przycisku menu projektu _Podgląd_ i wybranie _Ustawienia_ uruchomi okno z ustawieniami Twojego projektu.

## Opcje koloru

GB Studio obsługuje wiele trybów kolorów, gdzie każdy z nich oferuje różne funkcje, [ograniczenia](/docs/project-editor/scenes#scene-limits) i zgodność z urządzeniami.

- **Monochromatyczny**  
  Umożliwia uruchomienie gry na wszystkich urządzeniach, używając tylko czterech kolorów.  
  Obsługiwane platformy: **GB**, **GB Color**, **Super GB**, **Analogue Pocket**

- **Kolor + Monochromatyczny** 
  Umożliwia uruchomienie gry na urządzeniach monochromatycznych i kolorowych.
  Palety kolorów mogą być używane do [koloryzacji scen](http://localhost:3001/docs/project-editor/scenes#colorizing-a-scene) na kompatybilnych urządzeniach.
  Obsługiwane platformy: **GB** (tylko monochromatyczne), **GB Color**, **Super GB**, **Analogue Pocket**

- **Tylko kolor** 
  Zwiększa ilość [dostępnych tafli](/docs/project-editor/scenes#scene-limits) dla każdej sceny do wyświetlania tła i obiektów. Umożliwia uruchomienie gry tylko na urządzeniach kolorowych.
  Obsługiwane platformy: **GB Color**, **Analogue Pocket**

<img title="Color" src="/img/screenshots/color-palette-v4.png" width="650" className="drop-shadow margin-bottom" />

Gdy tryb koloru jest ustawiony na `Kolor + Monochromatyczny` lub `Tylko kolor`, możesz wybrać do 8 domyślnych palet tła i 8 domyślnych palet obiektów. Są to palety, które będą używane z każdą nową sceną w grze, chyba że zdecydujesz się je zmienić. Zobacz temat [koloryzacja sceny](/docs/project-editor/scenes/#colorizing-a-scene), aby dowiedzieć się, jak używać palet tła.

## Opcje dla Super GB

Aby uruchomić obsługę Super GB, należy zaznaczyć pole `Włącz tryb Super GB`.

<img title="SGB" src="/img/screenshots/sgb-mode.png" width="650" className="drop-shadow margin-bottom" />

Ten tryb pozwoli na ustawienie niestandardowego obrazu ramki o wymiarach `256px × 224px` 
oraz paletę kolorów, które będą używane podczas uruchamiania gry na kompatybilnym sprzęcie lub emulatorach.

Po pierwszej kompilacji gry po włączeniu tego trybu, domyślny obraz ramki zostanie skopiowany do Twojego projektu w `assets/sgb/border.png`. Edytuj ten obraz, aby zastąpić ramkę własnym projektem.


## Domyślna grafika gracza

Każdy _Rodzaj sceny_ może mieć ustawiony inny arkusz graficzny dla gracza. Użyj tej sekcji, aby zastąpić domyślną grafikę gracza, który będzie używany dla każdego rodzaju sceny. Możesz nadpisać arkusz graficzny używany dla poszczególnych scen, edytując właściwości sceny lub używając skryptów. Zobacz temat [Gracz](/docs/project-editor/player/#default-sprite-sheet).

<img title="Default Player Sprites" src="/img/screenshots/default-sprites.png" width="650" className="drop-shadow" />

## Elementy systemu i czcionki

W tej sekcji można zobaczyć obraz ramki używany dla okien dialogowych w grze, obraz kursora używany w menu oraz wybrać domyślną czcionkę dla projektu. Kliknięcie obrazu kursora lub ramki otworzy je w wybranym edytorze graficznym. Alternatywnie, pliki te można znaleźć w folderze projektu `assets/ui`.

<img title="UI Elements" src="/img/screenshots/ui-elements-v3.png" width="650" className="drop-shadow" />

### Czcionki
Czcionki znajdują się w `assets/fonts` i składają się z obrazu `.png` oraz pliku definicji `.json` o tej samej nazwie. Na przykład `gbs-mono.png` i `gbs-mono.json`. Obraz czcionki .png powinien zawierać znaki o maksymalnym rozmiarze 8px na 8px, ułożone w wierszach po 16 znaków.

<img title="GBS Mono example" src="/img/screenshots/gbs-mono.png" width="256" className="drop-shadow margin-bottom" />

Domyślnie czcionki używają [mapowania ASCII](https://en.wikipedia.org/wiki/ASCII#Character_set) z kodem znaku 32 (Spacja) mapującym się jako pierwszy znak w lewym górnym rogu czcionki. Można dostarczyć niestandardowe mapowanie, edytując plik `.json` czcionki w następujący sposób.

```
{
  "name": "Japanese Font",
  "mapping": {
    "ヲ": 166,
    "ァ": 167,
    "ィ": 168
  }
}
```
W tym przykładzie użycie znaku `ヲ` spowoduje wyświetlenie znaku nr 166 z pliku `.png`.

**Należy pamiętać** że pierwsze 32 znaki ASCII nie są uwzględnione na obrazie, więc należy to uwzględnić w mapowaniu. Na przykład, jeśli chcesz przypisać znak `?` do drugiego miejsca w pliku `.png`, należy ustawić mapowanie jako `"?": 33`.

Można tworzyć czcionki o zmiennej szerokości (ze znakami mniejszymi niż 8px szerokości), wypełniając prawą krawędź znaków czcionki magentą `#ff00ff`, jak na poniższym przykładzie.

<img src="/img/screenshots/gbs-var.png" width="256" className="drop-shadow margin-bottom" />

Kiedy [tryb kolorów](#gb-color-options) jest włączony, elementy systemu UI i czcionki przyjmują kolory wybrane dla palety tła #8 z GB Color. Zobacz temat [koloryzacja sceny](/docs/project-editor/scenes/#colorizing-a-scene), aby dowiedzieć się, jak używać palet tła.


## Format muzyki

Format muzyki wybiera, który silnik muzyczny będzie używany w grze, co z kolei określa format plików muzycznych obsługiwanych w projekcie.

Zalecanym ustawieniem jest `UGE (hUGEDriver)` (pliki `.uge`), ponieważ pozwala to na korzystanie z wbudowanego edytora muzyki, jednak jeśli projekt został utworzony w GB Studio 2.0 lub starszej wersji, to musisz zachować ustawienie `MOD (GBT Player)` (pliki `.mod`), aby zachować zgodność z istniejącymi plikami muzycznymi.

<img title="Music Driver" src="/img/screenshots/music-driver.png" width="650" className="drop-shadow margin-bottom" />

Zobacz temat [Muzyka](/docs/assets/music), aby uzyskać więcej informacji.

## Ustawienie silnika

Silnik gry GB Studio posiada szereg niestandardowych ustawień podzielonych według rodzajów scen, które można zmieniać, aby dostosować klimat związany z grą. Na przykład można zmniejszyć grawitację w scenach z rodzajem _Platformowa_ lub ustawić siatkę 16px dla scen _Widok z góry (2D RPG)_.

<img title="Engine Settings" src="/img/screenshots/engine-settings.png" width="650" className="drop-shadow margin-bottom" />

Aby przywrócić pierwotne wartości, można użyć przycisku _Przywróć domyślne_.

## Sterowanie

Sekcja _Sterowanie_ pozwala na zastąpienie domyślnych ustawień sterowania używanych podczas grania w grę w _wersji webowej_ oraz w _oknie gry_.

Aby edytować sterowanie dla danego przycisku, kliknij pole wprowadzania i gdy będzie ono podświetlone, naciśnij klawisz, który chcesz przypisać. Aby usunąć wszystkie przypisane klawisze, kliknij pole wprowadzania, a następnie naciśnij klawisz _Backspace_ na klawiaturze.

<img title="Controls" src="/img/screenshots/controls-v3.png" width="650" className="drop-shadow margin-bottom" />

Aby przywrócić pierwotne ustawienia, można użyć przycisku _Przywróć domyślne_.

## Rodzaj kartridża

Sekcja _Rodzaj kartridża_ pozwala na wybór, który kontroler banków pamięci (Memory Bank Controller) chcesz używać i czy chcesz włączyć zapis bez baterii dla kompatybilnych kart Flash.

Jeśli nie wiesz, co oznaczają te ustawienia, najlepiej pozostawić domyślne ustawienie MBC5, z wyłączoną opcją dla zapisu bez baterii, co można zrobić za pomocą przycisku _Przywróć domyślne_.

## Opcje kompilacji

Sekcja _Opcje kompilacji_ pozwala na modyfikację ustawień związanych z kompilacją Twojego projektu.

<img title="Build Options" src="/img/screenshots/build-settings-v4.png" width="650" className="drop-shadow margin-bottom" />

- **Otwórz dziennik kompilacji przy ostrzeżeniach**  
  Wybierz, czy `Dziennik kompilacji` powinien być automatycznie wyświetlany, gdy pojawią się ostrzeżenia, takie jak "zbyt wiele unikalnych tafli lub palet użytych w scenie". Jeśli postanowisz ignorować te ostrzeżenia, warto będzie tę opcję wyłączyć, w przeciwnym razie nastąpi przekierowanie do `Dziennika kompilacji` za każdym razem, gdy gra jest uruchamiana. Należy zauważyć, że _błędy_ kompilacji projektu zawsze otworzą `Dziennik kompilacji` bez względu na to ustawienie.
  
- **Generuj pliki debugowania**  
  Przy użyciu opcji `Eksportuj ROM`, generowane są dodatkowe pliki debugowania (takie jak `game.cdb`), które umożliwiają lepsze debugowanie podczas testowania gry w kompatybilnych emulatorach, takich jak [Emulicious](https://emulicious.net/).

## Niestandardowy nagłówek HTML

Sekcja _Niestandardowy nagłówek HTML_ umożliwia dodanie treści do sekcji HTML `<head>` podczas generowania wersji webowej Twojej gry. Możesz użyć tego, aby dodać niestandardowy CSS lub Javascript do strony HTML wersji webowej.
