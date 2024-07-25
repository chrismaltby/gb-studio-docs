# Wtyczki

Wtyczki to sposób na rozszerzenie możliwości GB Studio oraz dzielenie się zasobami, tworzenie niestandardowych zdarzeń skryptowych, a nawet modyfikacje silnika gry.

## Instalowanie wtyczek

Aby używać wtyczek, najpierw musisz utworzyć folder `plugins` w swoim projekcie, w tym samym folderze, co plik `.gbsproj`. Następnie możesz umieścić w tym folderze dowolne wtyczki.

Struktura powinna wyglądać mniej więcej tak:

<img src="/img/screenshots/plugins-file-structure.png" className="event-preview" />

Możesz potrzebować zamknąć i ponownie otworzyć projekt po dodaniu wtyczek, aby zmiany były widoczne.

## Wtyczki zasobów

Najprostszym rodzajem wtyczki, jaką możesz stworzyć dla GB Studio, jest wtyczka zasobów. Pozwalają one na udostępnianie sprite'ów, tła, czcionek, dźwięków i wszystkiego, co normalnie umieszcza się w folderze `assets`.

Aby stworzyć wtyczkę zasobów, najpierw utwórz nowy folder w folderze `plugins` z nazwą, jaką chcesz nadać swojej wtyczce (powyżej użyliśmy `assetPlugin` jako nazwy). W tym folderze możesz utworzyć dowolne normalne foldery zasobów projektu (takie jak `backgrounds`) i umieścić w nich pliki. Te zasoby pojawią się normalnie w twoim projekcie, ale teraz będą łatwiejsze do spakowania i udostępniania między projektami lub innym osobom.


[Pobierz przykładową wtyczkę zasobów](/assets/plugins/assetExamplePlugin.zip)

## Wtyczki zdarzeń skryptowych

Te wtyczki pozwalają na tworzenie nowych zdarzeń skryptowych, które pojawią się wszędzie tam, gdzie używasz [poleceń skryptowych](/docs/scripting).

Aby stworzyć wtyczkę zdarzenia skryptowego, najpierw utwórz nowy folder w folderze `plugins` z nazwą, jaką chcesz nadać swojej wtyczce (np. `myPlugin`). W tym folderze utwórz folder `events`, a w nim umieść definicję JavaScript swoich zdarzeń. Zobacz [kod źródłowy GB Studio](https://github.com/chrismaltby/gb-studio/tree/develop/src/lib/events) dla przykładowych struktur tych plików i jak generują one wyjście [GBVM](/docs/scripting/gbvm). Zauważ, że nazwa pliku JavaScript wtyczki zdarzenia MUSI zaczynać się od `event`, np. `eventMyFirstEvent.js`.

[Pobierz przykładową wtyczkę zdarzenia skryptowego](/assets/plugins/eventExamplePlugin.zip)

## Wtyczka silnika

Wtyczka silnika pozwala na podobną funkcjonalność do [wysuń silnik](/docs/extending-gbstudio/engine-eject), ale pozwala na zmianę pojedynczych plików lub dodanie całkowicie nowych plików do silnika.

Wtyczki silnika zawierają folder `engine`, który ma tę samą strukturę co wysunięty silnik gry. Poniżej możesz pobrać przykładową wtyczkę, która dodaje nową funkcję silnika gry powodującą miganie ekranu (tylko gdy tryb Kolor jest wyłączony) oraz zawiera wtyczkę zdarzenia skryptowego, aby umożliwić wywołanie nowej funkcji.

:::info
Twoja wtyczka silnika musi określać, którą wersję silnika GB Studio obsługuje. Możesz to zrobić, upewniając się, że w twojej wtyczce znajduje się plik `engine/engine.json` z co najmniej dołączoną informacją o wersji silnika `{"version": "4.0.0-e0"}`
:::

[Pobierz przykładową wtyczkę zdarzenia skryptowego (wtyczka silnika)](/assets/plugins/engineExamplePlugin.zip)

### Pola silnika

Wtyczki silnika mogą definiować dodatkowe pola, które pojawią się w [Ustawieniach silnika](/docs/settings/#engine-settings).

Definiując poniższe pole i dodając zmienną `max_jump_height` do twojej wersji `platform.c` w wtyczce, możesz udostępnić zmienne do aktualizacji z ustawień lub skryptów za pomocą poleceń zdarzeń [Silnik: aktualizacja ustawień](/docs/scripting/script-glossary/engine-fields).


```
{
  "version": "4.0.0-e0",
  "fields": [
    {
      "key": "max_jump_height",
      "label": "Max Jump Height",
      "group": "GAMETYPE_PLATFORMER",
      "type": "slider",
      "cType": "WORD",
      "defaultValue": 16,
      "min": 0,
      "max": 64
    }
  ]
}
```
Aby zobaczyć, jak pola silnika mogą być używane w twojej wtyczce, możesz przejrzeć wbudowany plik [engine.json](https://github.com/chrismaltby/gb-studio/blob/develop/appData/src/gb/engine.json).

### Dodatkowe typy scen

Wtyczki silnika mogą również definiować dodatkowe typy scen, które pojawią się w rozwijanym menu  [rodzajów](/docs/project-editor/scenes#scene-properties) podczas edytowania scen.


```
{
  "version": "4.0.0-e0",
  "sceneTypes": [
    {
      "key": "battle",
      "label": "Battle"
    }
  ]
}
```

Podczas dodawania dodatkowych typów scen musisz również zdefiniować dwie funkcje w swoim niestandardowym silniku:

```
void SCENEKEY_init(void) BANKED { }
```
i
```
void SCENEKEY_update(void) BANKED { }
```

W tym przypadku te funkcje byłyby nazwane `battle_init` i `battle_update`.

Funkcja `init` zostanie wywołana raz podczas ładowania sceny, a funkcja `update` będzie wywoływana co klatkę, co pozwala na tworzenie niestandardowych trybów gry.
