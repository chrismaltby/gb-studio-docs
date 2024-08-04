---
sidebar_position: 2
---

# Gracz

## Pozycja startowa gracza

Pozycja startowa gracza jest widoczna w trybie _Świat gry_ za pomocą ikony <img src="/img/screenshots/player-start.png" style={{height:12}} /> .

Kliknięcie w tło między scenami przełącza pasek boczny z powrotem do Edytora Projektu, gdzie można ustawić scenę startową gracza, jego pozycję i kierunek.

Można również zmienić pozycję startową gracza, przeciągając ikonę <img src="/img/screenshots/player-start.png" style={{height:12}} />  i można nawet przeciągać ją między scenami.

:::tip
Innym sposobem ustawienia pozycji startowej gracza jest kliknięcie prawym przyciskiem myszy na scenę i wybranie z menu kontekstowego kierunku, w którym gracz ma być zwrócony.

<div className="drop-shadow"><img src="/img/screenshots/set-starting-pos.gif" width="320" className="clip-bottom" /></div>
:::

## Domyślna grafika gracza

Każdy rodzaj sceny (_Widok z góry (2D RPG)_, _Platformowa_ itp.) może mieć inny domyślny arkusz spritów gracza, który będzie używany we wszystkich scenach tego typu, chyba że zostanie on nadpisany dla konkretnej sceny.

Można edytować domyślne arkusze spritów gracza dla każdego typu sceny w [Ustawieniach](/docs/settings).

## Skryptowanie

Większość zdarzeń skryptowych aktora można również zastosować do gracza. Dodatkowo, można użyć polecenia [Aktor: zmień grafikę gracza](/docs/scripting/script-glossary/actor#set-player-sprite-sheet), aby zmienić grafikę używaną dla postaci gracza w trakcie gry. Należy pamiętać, że zmiana grafiki wpłynie tylko na bieżącą scenę.

Podczas przechodzenia między scenami, gracz zawsze stanie się widoczny w miejscu startu sceny, niezależnie od wcześniejszych opcji widoczności. Jeśli chcesz, aby gracz był ukryty w scenie, np. podczas wyświetlania ekranu tytułowego lub przerywnika, dodaj polecenie [Aktor: schowaj (niewidzialny)](/docs/scripting/script-glossary/actor#hide-actor) do _skryptu (auto start)_ sceny.
