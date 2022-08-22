---
sidebar_position: 1
---

# Szenen

Eine Szene ist eine einzelne Kulisse des Spiels, auf welches man mehrere [Darsteller](/docs/project-editor/actors) und [Auslöser](/docs/project-editor/triggers) platzieren kann. Ein Spiel besteht typischerweise aus mehreren Szenen, die miteinander über das _Szene: Szene Wechseln_ Ereignis verbunden sind.

## Eine Szene hinzufügen

Eine Szene kann dem Spiel hinzuzufügt werden, indem man auf dem _**+** Knopf_ in der oberen rechten _Editor Werkzeugleiste_ drückt und danach _Szene_ auswählt (alternativ auch mit der **S** Taste). Anschließend kann man auf eine leere Stelle innerhalb des _Projektfensters_ klicken und die neue Szene wird daraufhin dort platziert.

<img src="/img/screenshots/add-scene.gif" style={{ width:300 }} />

Sobald die Szene hinzugefügt wurde, wird die _Editor Seitenleiste_ für die jeweilige Szene geöffnet. Darin können Szeneneinstellungen angepasst werden wie die Auswahl eines Hintergrundbildes oder das Umbenennen des Szenennamens. Weitere Informationen findet man in der Dokumentation für [Hintergründe](/docs/assets/backgrounds).

## Skript Ereignisse

Der _On Init/Szenenstart_ Skript kann verwendet werden um Ereignisse auszuführen sobald die Szene geladen wird. Falls die Szene ausgewählt ist, kann durch Klicken des _Ereignis hinzufügen_ Knopfs in der _Editor Seitenleiste_ das Ereignismenü geöffnet und ein Skript zusammengestellt werden.

Falls Darsteller innerhalb der Szene ebenfalls über einen _On Init/Szenenstart_ Skript verfügen, dann werde diese Ereignisse zuerst ausgeführt.

Weitere Informationen findet man in der Dokumentation für [Skript Ereignisse](/docs/scripting).
