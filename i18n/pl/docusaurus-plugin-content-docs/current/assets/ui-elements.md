# Elementy systemu (UI Elements)

import { Swatch } from '@site/src/components/Swatch';


Twój projekt zawiera kilka plików w folderze `assets/ui` o stałych nazwach plików, które definiują części interfejsu użytkownika gry. Edytowanie tych plików pozwala na zmianę domyślnej czcionki, ustawienie ramki okna oraz modyfikację kursora wyboru.

Jeśli usuniesz którykolwiek z plików w folderze ui, zostaną one zastąpione domyślnymi zasobami przy następnym budowaniu gry, co pozwoli na przywrócenie niepożądanych zmian.


## frame.png

Silnik gry używa [skalowania 9-częściowego](https://en.wikipedia.org/wiki/9-slice_scaling) tego obrazu do tworzenia ramki wokół okienek tekstowych. Edytowanie tego obrazu pozwala na zmianę projektu ramki lub ustawienie jej na jednolity kolor.

<img src="/img/ui/frame.png" class="HelpSprite" style={{width:72, height:"auto"}} />

## cursor.png

Ten obraz jest używany jako kursor wyboru podczas wyświetlania opcji wielokrotnego wyboru w grze.


<img src="/img/ui/cursor.png" class="HelpSprite" style={{width:24, height:"auto"}} />

## Wymagania

Pliki PNG interfejsu użytkownika mogą zawierać tylko następujące cztery kolory:

<Swatch color="#071821" />
<Swatch color="#306850" />
<Swatch color="#86c06c" />
<Swatch color="#e0f8cf" />

Pobierz palety GB Studio dla programów:
- [Adobe Photoshop](/assets/swatches/gb-studio-photoshop.aco)  
- [Aseprite](/assets/swatches/gb-studio-aseprite.aseprite)  

## Czcionki (Fonts)

Czcionki są przechowywane w folderze `assets/fonts`, więcej informacji znajdziesz w sekcji [Ustawienia](/docs/settings/#ui-elements--fonts).

## Emotikony

Emotikony są przechowywane w folderze `assets/emotes` i muszą mieć rozmiar `16px x 16px` w formacie `.png`, zgodnie z tymi samymi wymaganiami kolorystycznymi, które są używane przy tworzeniu arkuszy sprite'ów. Możesz wyświetlić emotikonę, używając polecenia `Aktor: wyświetl emotikonę` w skrypcie.


## Awatary

Awatary są przechowywane w folderze `assets/avatars` i muszą mieć rozmiar `16px x 16px` w formacie `.png`, zgodnie z tymi samymi wymaganiami kolorystycznymi, które są używane przy tworzeniu arkuszy sprite'ów. Możesz wyświetlić awatar w zdarzeniu [Tekst: wiadomość](/docs/scripting/script-glossary/dialogue-menus#display-dialogue), klikając `Dodaj grafikę (awatara)` w ramach tego zdarzenia.
