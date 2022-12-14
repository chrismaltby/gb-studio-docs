---
sidebar_position: 2
#
# This file is autogenerated. DO NOT MODIFY DIRECTLY
#
---

import ScriptEventPreview from '@site/src/components/ScriptEventPreview';

# Farbe

## Falls Farbmodus verfügbar ist
Conditionally run part of the script if the game is being played on a device or emulator that supports color games.
<ScriptEventPreview title={"Falls Farbmodus verfügbar ist"} fields={[{"key":"true","label":"Wahr","description":"The script to run if the condition is true.","type":"events"},{"key":"__collapseElse","label":"Andernfalls","type":"collapsable","defaultValue":true,"conditions":[{"key":"__disableElse","ne":true}]},{"key":"false","label":"Falsch","description":"The script to run if the condition is false.","conditions":[{"key":"__collapseElse","ne":true},{"key":"__disableElse","ne":true}],"type":"events"}]} />

- **Wahr**: The script to run if the condition is true.  
- **Falsch**: The script to run if the condition is false.  

## Falls GBA-Modus verfügbar ist
Conditionally run part of the script if the game is being played on a device or emulator that supports GBA games.
<ScriptEventPreview title={"Falls GBA-Modus verfügbar ist"} fields={[{"key":"true","label":"Wahr","description":"The script to run if the condition is true.","type":"events"},{"key":"__collapseElse","label":"Andernfalls","type":"collapsable","defaultValue":true,"conditions":[{"key":"__disableElse","ne":true}]},{"key":"false","label":"Falsch","description":"The script to run if the condition is false.","conditions":[{"key":"__collapseElse","ne":true},{"key":"__disableElse","ne":true}],"type":"events"}]} />

- **Wahr**: The script to run if the condition is true.  
- **Falsch**: The script to run if the condition is false.  

## Falls Super-GB-Modus verfügbar ist
Conditionally run part of the script if the game is being played on a device or emulator that supports Super GB games.
<ScriptEventPreview title={"Falls Super-GB-Modus verfügbar ist"} fields={[{"key":"true","label":"Wahr","description":"The script to run if the condition is true.","type":"events"},{"key":"__collapseElse","label":"Andernfalls","type":"collapsable","defaultValue":true,"conditions":[{"key":"__disableElse","ne":true}]},{"key":"false","label":"Falsch","description":"The script to run if the condition is false.","conditions":[{"key":"__collapseElse","ne":true},{"key":"__disableElse","ne":true}],"type":"events"}]} />

- **Wahr**: The script to run if the condition is true.  
- **Falsch**: The script to run if the condition is false.  

## Palette: Hintergrundpalette festlegen
Replace some or all of the current scene's background palettes.
<ScriptEventPreview title={"Palette: Hintergrundpalette festlegen"} fields={[{"key":"palette0","label":"Paletten","description":"The new palettes to use.","type":"palette","defaultValue":"keep","paletteType":"background","paletteIndex":0,"canKeep":true},{"key":"palette1","type":"palette","defaultValue":"keep","paletteType":"background","paletteIndex":1,"canKeep":true},{"key":"palette2","type":"palette","defaultValue":"keep","paletteType":"background","paletteIndex":2,"canKeep":true},{"key":"palette3","type":"palette","defaultValue":"keep","paletteType":"background","paletteIndex":3,"canKeep":true},{"key":"palette4","type":"palette","defaultValue":"keep","paletteType":"background","paletteIndex":4,"canKeep":true},{"key":"palette5","type":"palette","defaultValue":"keep","paletteType":"background","paletteIndex":5,"canKeep":true},{"key":"palette6","type":"palette","defaultValue":"keep","paletteType":"background","paletteIndex":6,"canKeep":true},{"key":"palette7","type":"palette","defaultValue":"keep","paletteType":"background","paletteIndex":7,"canKeep":true}]} />

- **Paletten**: The new palettes to use.  

## Emote Palette einstellen
Replace the palette used for emotes (sprite palette #8).
<ScriptEventPreview title={"Emote Palette einstellen"} fields={[{"key":"palette","label":"Palette","description":"The new palette to use.","type":"palette","defaultValue":"","paletteType":"emote"}]} />

- **Palette**: The new palette to use.  

## Sprite Paletten einstellen
Replace some or all of the current scene's sprite palettes.
<ScriptEventPreview title={"Sprite Paletten einstellen"} fields={[{"key":"palette0","label":"Paletten","description":"The new palettes to use.","type":"palette","defaultValue":"keep","paletteType":"sprite","paletteIndex":0,"canKeep":true},{"key":"palette1","type":"palette","defaultValue":"keep","paletteType":"sprite","paletteIndex":1,"canKeep":true},{"key":"palette2","type":"palette","defaultValue":"keep","paletteType":"sprite","paletteIndex":2,"canKeep":true},{"key":"palette3","type":"palette","defaultValue":"keep","paletteType":"sprite","paletteIndex":3,"canKeep":true},{"key":"palette4","type":"palette","defaultValue":"keep","paletteType":"sprite","paletteIndex":4,"canKeep":true},{"key":"palette5","type":"palette","defaultValue":"keep","paletteType":"sprite","paletteIndex":5,"canKeep":true},{"key":"palette6","type":"palette","defaultValue":"keep","paletteType":"sprite","paletteIndex":6,"canKeep":true},{"key":"palette7","type":"palette","defaultValue":"keep","paletteType":"sprite","paletteIndex":7,"canKeep":true}]} />

- **Paletten**: The new palettes to use.  

## Palette: UI-Palette festlegen
Replace the palette used for the UI (background palette #8).
<ScriptEventPreview title={"Palette: UI-Palette festlegen"} fields={[{"key":"palette","label":"Palette","description":"The new palette to use.","type":"palette","defaultValue":"","paletteType":"ui"}]} />

- **Palette**: The new palette to use.  

