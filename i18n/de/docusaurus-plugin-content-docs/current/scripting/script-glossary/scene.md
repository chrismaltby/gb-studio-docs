---
sidebar_position: 2
#
# This file is autogenerated. DO NOT MODIFY DIRECTLY
#
---

import ScriptEventPreview from '@site/src/components/ScriptEventPreview';

# Szene

### Szene: Szene Wechseln
Überleitung zu einer neuen Szene mit dem Spieler an einer bestimmten Position und Richtung. Es wird eine Verbindungslinie zwischen der Quelle des Ereignisses und der Zielszene gezogen, wobei an der Zielposition ein Symbol erscheint. Es ist möglich, dieses Symbol zwischen den Szenen zu verschieben, um das Ereignis zu ändern.
<ScriptEventPreview title={"Szene: Szene Wechseln"} fields={[{"key":"sceneId","label":"Szene","description":"Die Szene, zu der übergeleitet werden soll.","type":"scene","defaultValue":"LAST_SCENE"},{"type":"group","fields":[{"key":"x","label":"X","description":"Die horizontale Ausgangsposition des Spielers in der neuen Szene.","type":"value","min":0,"max":255,"defaultValue":{"type":"number","value":0},"width":"50%"},{"key":"y","label":"Y","description":"Die vertikale Ausgangsposition des Spielers in der neuen Szene.","type":"value","min":0,"max":255,"defaultValue":{"type":"number","value":0},"width":"50%"}]},{"key":"direction","label":"Blickrichtung","description":"Die anfängliche Blickrichtung des Spielers.","type":"direction","width":"50%","defaultValue":""},{"key":"fadeSpeed","label":"Einblendegeschwindigkeit","description":"Die Einblendegeschwindigkeit.","type":"fadeSpeed","allowNone":true,"defaultValue":"2","width":"50%"}]} />

- **Szene**: Die Szene, zu der übergeleitet werden soll.  
- **X**: Die horizontale Ausgangsposition des Spielers in der neuen Szene.  
- **Y**: Die vertikale Ausgangsposition des Spielers in der neuen Szene.  
- **Blickrichtung**: Die anfängliche Blickrichtung des Spielers.  
- **Einblendegeschwindigkeit**: Die Einblendegeschwindigkeit.  

## Control Flow
### Falls die aktuelle Szene ist
<ScriptEventPreview title={"Falls die aktuelle Szene ist"} fields={[{"key":"sceneId","label":"Szene","type":"scene","defaultValue":"LAST_SCENE"},{"key":"true","label":"Wahr","type":"events"},{"key":"__collapseElse","label":"Andernfalls","type":"collapsable","defaultValue":true,"conditions":[{"key":"__disableElse","ne":true}]},{"key":"false","label":"Falsch","conditions":[{"key":"__collapseElse","ne":true},{"key":"__disableElse","ne":true}],"type":"events"}]} />

- **Szene**  
- **Wahr**  
- **Falsch**  

## Scene Stack
### Szene: Szenenstapel Leeren
Alle Szenen vom Szenenstapel entfernen, ohne die aktuelle Szene zu verlassen.
<ScriptEventPreview title={"Szene: Szenenstapel Leeren"} fields={[{"label":"Entfernt alle gespeicherten Szenenzustände vom Szenenstapel."}]} />


### Szene: Allerersten Szenenzustand Vom Stapel Zurück Holen
Übergang zur allerersten, auf dem Stapel gespeicherten, Szene. Wenn man z.B. mehrere Ebenen mit Menüszenen hat kann man somit sofort zur Spielszene zurückzukehren. Dieses Ereignis führt dazu, dass der Szenenstapel geleert wird.
<ScriptEventPreview title={"Szene: Allerersten Szenenzustand Vom Stapel Zurück Holen"} fields={[{"label":"Entfernt alle Szenenzustände vom Szenenstapel."},{"type":"break"},{"key":"fadeSpeed","label":"Einblendegeschwindigkeit","description":"Die Einblendegeschwindigkeit.","type":"fadeSpeed","defaultValue":"2","width":"50%"}]} />

- **Einblendegeschwindigkeit**: Die Einblendegeschwindigkeit.  

### Szene: Vorherigen Szenenzustand Vom Stapel Holen
Übergang zur letzten gespeicherten Szene vom Szenenstapel mit der angegebenen Überblendgeschwindigkeit. Die vorherige Szene wird dann vom Stapel entfernt, so dass bei der nächsten Verwendung dieses Ereignisses der Übergang zur Szene vor dieser erfolgt.
<ScriptEventPreview title={"Szene: Vorherigen Szenenzustand Vom Stapel Holen"} fields={[{"label":"Gibt den obersten Szenenzustand des Szenenstapels wieder und entfernt diesen vom Szenenstapel."},{"type":"break"},{"key":"fadeSpeed","label":"Einblendegeschwindigkeit","description":"Die Einblendegeschwindigkeit.","type":"fadeSpeed","defaultValue":"2","width":"50%"}]} />

- **Einblendegeschwindigkeit**: Die Einblendegeschwindigkeit.  

### Szene: Derzeitigen Szenenzustand Auf Stapel Speichern
Speichert die aktuelle Szene und den Zustand des Spielers auf dem Szenenstapel, so dass es möglich ist, später mit den Ereignissen 'Vorherigen Szenenzustand Vom Stapel Holen' zu genau dieser Stelle zurückzukehren. Eine häufige Verwendung dieses Ereignisses wäre die Einbindung in ein Skript kurz vor einem 'Szene ändern'-Ereignis, um eine Menüszene zu öffnen. In der Menüszene könnte man warten, bis der Spieler eine 'Schließen'-Taste drückt, und dann das Ereignis 'Vorherigen Szenenzustand Vom Stapel Holen' verwenden, um zu der Stelle zurückzukehren, an der der Spieler das Menü geöffnet hat.
<ScriptEventPreview title={"Szene: Derzeitigen Szenenzustand Auf Stapel Speichern"} fields={[{"label":"Derzeitigen Szenenzustand auf dem Szenenstapel legen."}]} />


## Tiles
### Replace Tile At Position
Replace a tile at a specified coordinate with another from a tileset.
<ScriptEventPreview title={"Replace Tile At Position"} fields={[{"type":"group","fields":[{"key":"x","label":"X","description":"Die horizontale Position.","type":"value","min":0,"max":255,"width":"50%","defaultValue":{"type":"number","value":0}},{"key":"y","label":"Y","description":"Die vertikale Position.","type":"value","min":0,"max":255,"width":"50%","defaultValue":{"type":"number","value":0}}]},{"type":"group","fields":[{"key":"tilesetId","type":"tileset","label":"Tileset","description":"The tileset to fetch tiles from","defaultValue":"LAST_TILESET","unitsField":"tileSize","unitsDefault":"8px","unitsAllowed":["8px","16px"]},{"key":"tileIndex","label":"Tile","description":"The tile offset inside tileset","type":"value","min":0,"defaultValue":{"type":"number","value":0}}]}]} />

- **X**: Die horizontale Position.  
- **Y**: Die vertikale Position.  
- **Tileset**: The tileset to fetch tiles from  
- **Tile**: The tile offset inside tileset  

### Replace Tile At Position From Sequence
Replace a tile at a specified coordinate with another from a tileset in a sequence.
<ScriptEventPreview title={"Replace Tile At Position From Sequence"} fields={[{"type":"group","fields":[{"key":"x","label":"X","description":"Die horizontale Position.","type":"value","min":0,"max":255,"width":"50%","defaultValue":{"type":"number","value":0}},{"key":"y","label":"Y","description":"Die vertikale Position.","type":"value","min":0,"max":255,"width":"50%","defaultValue":{"type":"number","value":0}}]},{"key":"tilesetId","type":"tileset","label":"Tileset","description":"The tileset to fetch tiles from","defaultValue":"LAST_TILESET","unitsField":"tileSize","unitsDefault":"8px","unitsAllowed":["8px","16px"]},{"type":"group","fields":[{"key":"tileIndex","label":"From Tile","description":"The starting tile offset inside tileset","type":"value","min":0,"width":"50%","defaultValue":{"type":"number","value":0}},{"key":"frames","label":"Animation Frames","description":"The number of animation frames to cycle through.","type":"value","min":1,"width":"50%","defaultValue":{"type":"number","value":1}}]},{"key":"variable","label":"State Variable","description":"A variable to store the current state of this event","type":"variable","defaultValue":"LAST_VARIABLE"}]} />

- **X**: Die horizontale Position.  
- **Y**: Die vertikale Position.  
- **Tileset**: The tileset to fetch tiles from  
- **From Tile**: The starting tile offset inside tileset  
- **Animation Frames**: The number of animation frames to cycle through.  
- **State Variable**: A variable to store the current state of this event  

