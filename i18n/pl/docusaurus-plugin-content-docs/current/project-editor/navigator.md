---
sidebar_position: 1
---

# Nawigator

Nawigator to pasek boczny po lewej stronie, który umożliwia szybkie poruszanie się po projekcie.

<img title="Navigator" src="/img/screenshots/navigator-v4.png" width="246" className="drop-shadow" />

## Menu kontekstowe

Klikając prawym przyciskiem myszy na elementy w Nawigatorze, możesz otworzyć menu kontekstowe. Menu kontekstowe sceny pokazane poniżej pozwala na ustawienie etykiet kolorów, ustawienie sceny jako początkowej dla projektu, zmianę nazwy i usunięcie sceny.

<img title="Navigator" src="/img/screenshots/navigator-context-menu-v4.png" width="528" className="drop-shadow margin-bottom" />

## Foldery

Jeśli nazwy twoich scen, skryptów, palet lub zasobów zawierają znaki `/` lub `\`, będą one traktowane jako foldery w Nawigatorze, co pozwala na organizację projektu.

np. Nazwanie sceny `jaskinie/Podziemie` jak pokazano poniżej:

<img title="Navigator Folders Rename" src="/img/screenshots/navigator-folders-rename-v4.png" width="246" className="drop-shadow margin-bottom" />

spowoduje, że pojawi się ona w Nawigatorze jako `Podziemie` w folderze o nazwie `jaskinie`:

<img title="Navigator Folders" src="/img/screenshots/navigator-folders-v4.png" width="246" className="drop-shadow margin-bottom" />

:::warning
Podczas zmiany nazw zasobów, takich jak tła, na foldery za pomocą Nawigatora, fizyczne pliki w twoim projekcie (np. `.png` itd.) również zostaną przeniesione do nowo określonej struktury folderów. Ważne jest, aby zapisać projekt po dokonaniu takich zmian, ponieważ przeniesienie tych plików bez zapisywania może spowodować, że aplikacja nie będzie mogła odnaleźć zasobów przy następnym załadowaniu projektu.

Zaleca się używanie [systemu kontroli wersji](/docs/getting-started/saving-loading#version-control), aby móc cofnąć błędy.

:::

## Skróty klawiszowe

**Przesuń wybór w górę** - `Strzałka w górę`  
**Przesuń wybór w dół** - `Strzałka w dół`  
**Otwórz folder** - `Strzałka w prawo`  
**Zamknij folder** - `Strzałka w lewo`  
**Zmień nazwę** - `Enter`  
**Zazmacz wiele elementów** (tylko sceny) - `Shift` podczas klikania
