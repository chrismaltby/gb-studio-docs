---
sidebar_position: 2
#
# This file is autogenerated. DO NOT MODIFY DIRECTLY
#
---

import ScriptEventPreview from '@site/src/components/ScriptEventPreview';

# Bildschirm

## Bildschirm: Einblenden
Fade the scene from a blank screen.
<ScriptEventPreview title={"Bildschirm: Einblenden"} fields={[{"key":"speed","label":"Geschwindigkeit","description":"The speed of the fade animation.","type":"fadeSpeed","defaultValue":"2"}]} />

- **Geschwindigkeit**: The speed of the fade animation.  

## Bildschirm: Ausblenden
Fade the scene to a blank screen.
<ScriptEventPreview title={"Bildschirm: Ausblenden"} fields={[{"key":"speed","label":"Geschwindigkeit","description":"The speed of the fade animation.","type":"fadeSpeed","defaultValue":"2"}]} />

- **Geschwindigkeit**: The speed of the fade animation.  

## Überlagerung: Ausblenden
Hides the screen overlay.
<ScriptEventPreview title={"Überlagerung: Ausblenden"} fields={[{"label":"Blendet das Überlagerung-Fenster vom Bildschirm aus."}]} />


## Überlagerung: Bewegen Zu Position
Moves the overlay to a new position on the screen.
<ScriptEventPreview title={"Überlagerung: Bewegen Zu Position"} fields={[{"type":"group","fields":[{"key":"x","label":"X","description":"The horizontal position.","type":"number","min":0,"max":20,"defaultValue":0,"width":"50%"},{"key":"y","label":"Y","description":"The vertical position.","type":"number","min":0,"max":18,"defaultValue":0,"width":"50%"}]},{"key":"speed","label":"Geschwindigkeit","description":"The movement speed.","type":"cameraSpeed","defaultValue":"0"}]} />

- **X**: The horizontal position.  
- **Y**: The vertical position.  
- **Geschwindigkeit**: The movement speed.  

## Überlagerung: Einblenden
Show either a black or white window over the top of the current game screen. Can be used to obscure and then reveal parts of the scene background for example on the sample project logo screen.
<ScriptEventPreview title={"Überlagerung: Einblenden"} fields={[{"key":"color","label":"Fill Color","description":"The color to fill the overlay with, either black or white.","type":"overlayColor","defaultValue":"black"},{"type":"group","fields":[{"key":"x","label":"X","description":"The horizontal position.","type":"number","min":0,"max":20,"defaultValue":0,"width":"50%"},{"key":"y","label":"Y","description":"The vertical position.","type":"number","min":0,"max":18,"defaultValue":0,"width":"50%"}]}]} />

- **Fill Color**: The color to fill the overlay with, either black or white.  
- **X**: The horizontal position.  
- **Y**: The vertical position.  

