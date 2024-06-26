---
sidebar_position: 2
#
# This file is autogenerated. DO NOT MODIFY DIRECTLY
#
---

import ScriptEventPreview from '@site/src/components/ScriptEventPreview';

# Kamera

### Kamera: An Spieler Binden
Move the camera back to centering on the player, locking into position when the player moves. Optionally allows locking to follow player in only horizontal or vertical axis.
<ScriptEventPreview title={"Kamera: An Spieler Binden"} fields={[{"key":"speed","width":"50%","label":"Geschwindigkeit","description":"Die Bewegungsgeschwindigkeit, 'Instant' benutzen um unmittelbar zur neuen Position zu bewegen.","type":"moveSpeed","defaultValue":0,"allowNone":true,"noneLabel":"Sofort"},{"key":"axis","width":"50%","label":"Achse sperren","description":"Legt fest, ob entweder die horizontale, die vertikale oder beide Achsen gesperrt werden sollen.","type":"togglebuttons","options":[["x","H","Horizontal"],["y","V","Vertikal"]],"allowMultiple":true,"allowNone":false,"defaultValue":["x","y"]}]} />

- **Geschwindigkeit**: Die Bewegungsgeschwindigkeit, 'Instant' benutzen um unmittelbar zur neuen Position zu bewegen.  
- **Achse sperren**: Legt fest, ob entweder die horizontale, die vertikale oder beide Achsen gesperrt werden sollen.  

### Kamera: Zu Position Bewegen
Die Kamera zu einer neuen Position bewegen.
<ScriptEventPreview title={"Kamera: Zu Position Bewegen"} fields={[{"type":"group","fields":[{"key":"x","label":"X","description":"Die horizontale Position.","type":"value","min":0,"max":2047,"width":"50%","unitsField":"units","unitsDefault":"tiles","unitsAllowed":["tiles","pixels"],"defaultValue":{"type":"number","value":0}},{"key":"y","label":"Y","description":"Die vertikale Position.","type":"value","min":0,"max":2047,"width":"50%","unitsField":"units","unitsDefault":"tiles","unitsAllowed":["tiles","pixels"],"defaultValue":{"type":"number","value":0}}]},{"key":"speed","label":"Geschwindigkeit","description":"Die Bewegungsgeschwindigkeit, 'Instant' benutzen um unmittelbar zur neuen Position zu bewegen.","type":"moveSpeed","defaultValue":0,"allowNone":true,"noneLabel":"Sofort"}]} />

- **X**: Die horizontale Position.  
- **Y**: Die vertikale Position.  
- **Geschwindigkeit**: Die Bewegungsgeschwindigkeit, 'Instant' benutzen um unmittelbar zur neuen Position zu bewegen.  

### Kamera: Schütteln
Die Kamera für eine gewisse Zeit schütteln.
<ScriptEventPreview title={"Kamera: Schütteln"} fields={[{"type":"group","fields":[{"key":"time","type":"number","label":"Länge","description":"Die Dauer des Schüttelns der Kamera in Sekunden oder Frames.","min":0,"max":60,"step":0.1,"defaultValue":0.5,"unitsField":"units","unitsDefault":"time","unitsAllowed":["time","frames"],"conditions":[{"key":"units","ne":"frames"}]},{"key":"frames","label":"Länge","description":"Die Dauer des Schüttelns der Kamera in Sekunden oder Frames.","type":"number","min":0,"max":3600,"width":"50%","defaultValue":30,"unitsField":"units","unitsDefault":"time","unitsAllowed":["time","frames"],"conditions":[{"key":"units","eq":"frames"}]},{"key":"shakeDirection","label":"Bewegungstyp","description":"Auswählen ob die Kamera nur in der horizontalen oder vertikalen Achse oder in beide Richtungen verwackeln soll.","hideLabel":true,"type":"moveType","defaultValue":"horizontal","flexBasis":30,"flexGrow":0,"alignBottom":true}]},{"key":"magnitude","label":"Magnitude","description":"The amount of camera movement during a camera shake.","type":"value","min":1,"max":255,"defaultValue":{"type":"number","value":5}}]} />

- **Länge**: Die Dauer des Schüttelns der Kamera in Sekunden oder Frames.  
- **Bewegungstyp**: Auswählen ob die Kamera nur in der horizontalen oder vertikalen Achse oder in beide Richtungen verwackeln soll.  
- **Magnitude**: The amount of camera movement during a camera shake.  

### Set Camera Position
Die Kamera zu einer neuen Position bewegen.
<ScriptEventPreview title={"Set Camera Position"} fields={[{"type":"group","fields":[{"key":"x","label":"X","description":"Die horizontale Position.","type":"value","min":0,"max":2047,"width":"50%","unitsField":"units","unitsDefault":"tiles","unitsAllowed":["tiles","pixels"],"defaultValue":{"type":"number","value":0}},{"key":"y","label":"Y","description":"Die vertikale Position.","type":"value","min":0,"max":2047,"width":"50%","unitsField":"units","unitsDefault":"tiles","unitsAllowed":["tiles","pixels"],"defaultValue":{"type":"number","value":0}}]}]} />

- **X**: Die horizontale Position.  
- **Y**: Die vertikale Position.  

## Screen
### Bildschirm: Einblenden
Die Szene von einem leeren Bildschirm einblenden.
<ScriptEventPreview title={"Bildschirm: Einblenden"} fields={[{"key":"speed","label":"Geschwindigkeit","description":"Die Einblendegeschwindigkeit.","type":"fadeSpeed","defaultValue":"2"}]} />

- **Geschwindigkeit**: Die Einblendegeschwindigkeit.  

### Bildschirm: Ausblenden
Die Szene zu einem leeren Bildschirm ausblenden
<ScriptEventPreview title={"Bildschirm: Ausblenden"} fields={[{"key":"speed","label":"Geschwindigkeit","description":"Die Einblendegeschwindigkeit.","type":"fadeSpeed","defaultValue":"2"}]} />

- **Geschwindigkeit**: Die Einblendegeschwindigkeit.  

