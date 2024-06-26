---
sidebar_position: 2
#
# This file is autogenerated. DO NOT MODIFY DIRECTLY
#
---

import ScriptEventPreview from '@site/src/components/ScriptEventPreview';

# Bildschirm

### Bildschirm: Einblenden
Die Szene von einem leeren Bildschirm einblenden.
<ScriptEventPreview title={"Bildschirm: Einblenden"} fields={[{"key":"speed","label":"Geschwindigkeit","description":"Die Einblendegeschwindigkeit.","type":"fadeSpeed","defaultValue":"2"}]} />

- **Geschwindigkeit**: Die Einblendegeschwindigkeit.  

### Bildschirm: Ausblenden
Die Szene zu einem leeren Bildschirm ausblenden
<ScriptEventPreview title={"Bildschirm: Ausblenden"} fields={[{"key":"speed","label":"Geschwindigkeit","description":"Die Einblendegeschwindigkeit.","type":"fadeSpeed","defaultValue":"2"}]} />

- **Geschwindigkeit**: Die Einblendegeschwindigkeit.  

## Overlay
### Überlagerung: Ausblenden
Blendet die Bildschirmüberlagerung aus.
<ScriptEventPreview title={"Überlagerung: Ausblenden"} fields={[{"label":"Blendet das Überlagerung-Fenster vom Bildschirm aus."}]} />


### Überlagerung: Zu Position Bewegen
Moves the overlay to a new position on the screen.
<ScriptEventPreview title={"Überlagerung: Zu Position Bewegen"} fields={[{"type":"group","fields":[{"key":"x","label":"X","description":"Die horizontale Position.","type":"number","min":0,"max":20,"defaultValue":0,"width":"50%"},{"key":"y","label":"Y","description":"Die vertikale Position.","type":"number","min":0,"max":18,"defaultValue":0,"width":"50%"}]},{"key":"speed","label":"Geschwindigkeit","description":"Die Bewegungsgeschwindigkeit.","type":"cameraSpeed","defaultValue":"0"}]} />

- **X**: Die horizontale Position.  
- **Y**: Die vertikale Position.  
- **Geschwindigkeit**: Die Bewegungsgeschwindigkeit.  

### Überlagerung: Einblenden
Show either a black or white window over the top of the current game screen. Can be used to obscure and then reveal parts of the scene background for example on the sample project logo screen.
<ScriptEventPreview title={"Überlagerung: Einblenden"} fields={[{"key":"color","label":"Füllfarbe","description":"Die Farbe, mit der das Überlagerungsbild gefüllt werden soll, entweder schwarz oder weiß.","type":"overlayColor","defaultValue":"black"},{"type":"group","fields":[{"key":"x","label":"X","description":"Die horizontale Position.","type":"number","min":0,"max":20,"defaultValue":0,"width":"50%"},{"key":"y","label":"Y","description":"Die vertikale Position.","type":"number","min":0,"max":18,"defaultValue":0,"width":"50%"}]}]} />

- **Füllfarbe**: Die Farbe, mit der das Überlagerungsbild gefüllt werden soll, entweder schwarz oder weiß.  
- **X**: Die horizontale Position.  
- **Y**: Die vertikale Position.  

