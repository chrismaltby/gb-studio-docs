# UI Elemente

Das Spielprojekt besitzt eine Reihe von Bilddateien im Unterverzeichnis `assets/ui` mit fest vorgeschriebenen Dateinamen. Diese Bilddateien sind essentiell für die Definierung der Oberflächengestaltung des Spiels. Durch die Bearbeitung dieser Bilddateien kann man unter anderem die ausgegebene Schriftart, das Design der Textbox und das Aussehen des UI Zeigers bearbeiten.
Your project contains a number of files in `assets/ui` with fixed file names that define parts of your game's user interface. Editing these files allows you to change the default font, set the window frame and modify the selection cursor.

Falls eines der Bilddateien versehentlich gelöscht werden, so werden die Originaldateien beim nächsten Bauprozess des Spiels automatisch wiederhergestellt. Somit braucht man sich keine Sorgen machen, dass das vehemente Ändern von Dateien zu unwiderruflichen Folgen führen könnte.

## ascii.png

Die Bearbeitung dieser Datei verändert die im Spiel angezeigte Schriftart wenn Darsteller miteinander reden.

<img src="/de/img/ui/ascii.png" class="HelpSprite" style={{width:384, height:"auto"}} />

## frame.png

Die Spielengine nutzt in Bezug auf dieser Bilddatei die [9-Scheiben Skalierung](https://en.wikipedia.org/wiki/9-slice_scaling) um die Textbox zu zeichnen. Die Bearbeitung dieser Datei verändert das Design dieser Textbox.

<img src="/de/img/ui/frame.png" class="HelpSprite" style={{width:72, height:"auto"}} />

## cursor.png

Diese Bilddatei wird verwendet um den Zeiger darzustellen wenn im Spiel zwischen mehreren Optionen gewählt werden muss.

<img src="/de/img/ui/cursor.png" class="HelpSprite" style={{width:24, height:"auto"}} />

## emotes.png

Diese Bilddatei wird verwendet um die Emotionsblasen über den Darstellern zu zeichnen falls das Ereignis _Darsteller: Emotions-Blase_ ausgewählt wurde. Jedes der Blasen besitzt eine quadratische Größe von `16px` x `16px` und die Blasen repräsentieren von links nach rechts: _Shock/Ausrufezeichen_, _Question/Fragezeichen_, _Love/Herz_, _Pause/Dreipunkt_, _Anger/Zorn_, _Sweat/Schweißperle_, _Music/Musiknote_ and _Sleep/Schlaf_.

<img src="/de/img/ui/emotes.png" class="HelpSprite" style={{width:384, height:"auto"}} />

## Voraussetzungen

Mit Ausnahme der `emotes.png` Bilddatei, welches den üblichen Sprite-Voraussetzungen unterliegt, dürfen die restlichen Bilddateien nur die folgenden vier Farben beinhalten:

<div><div class="Swatch" style={{ background: "#071821" }}></div><div class="SwatchLabel">#071821</div></div>
<div><div class="Swatch" style={{ background: "#306850" }}></div><div class="SwatchLabel">#306850</div></div>
<div><div class="Swatch" style={{ background: "#86c06c" }}></div><div class="SwatchLabel">#86c06c</div></div>
<div><div class="Swatch" style={{ background: "#e0f8cf" }}></div><div class="SwatchLabel">#e0f8cf</div></div>

<div class="InfoBox">
Downloade die GB Studio Palette Swatches für folgende Software:<br />
<a href="/assets/swatches/gb-studio-photoshop.aco">Adobe Photoshop</a><br />
<a href="/assets/swatches/gb-studio-aseprite.aseprite">Aseprite</a>
</div>
