# UI Elements

import { Swatch } from '@site/src/components/Swatch';

Los proyectos contienen ficheros en el directorio assets/ui with con nombres específicos que se usan en el juego. Editarlos te permite cambiar la fuente del juego, los marcos de los cuadros de diálogos, etc.

Si eliminas cualquier fichero de ese directorio sera reemplazado por el recurso por defecto de nuevo la próxima vez que compiles el juego.

## ascii.png

Fichero donde se encuentra la fuente del juego.

<img src="/es/img/ui/ascii.png" class="HelpSprite" style={{ width:384, height:"auto"}} />

## frame.png

Fichero donde se encuentra la imagen que el juego usa para los cuadros de dialogo. Se utiliza la tecnica [9-slice scaling](https://en.wikipedia.org/wiki/9-slice_scaling) para redimensionar la imagen y que se adapte a los diálogos.

<img src="/es/img/ui/frame.png" class="HelpSprite" style={{ width:72, height:"auto"}} />

## cursor.png

Fichero donde se encuentra el cursor cuando utilizar el evento Text: Display Multiple Choice.

<img src="/es/img/ui/cursor.png" class="HelpSprite" style={{ width:24, height:"auto"}} />

## emotes.png

Fichero donde se encuentras las emociones que pueden expresar los actores. Cada emoción tiene un tamaño de '16px' x '16px'.

<img src="/es/img/ui/emotes.png" class="HelpSprite" style={{ width:384, height:"auto"}} />

## Requerimentos

Con excepción de 'emotes.png', el cual sigue el estándar de los requerimientos de los sprites, los ficheros de UI son solo de cuatro colores:

<Swatch color="#071821" />
<Swatch color="#306850" />
<Swatch color="#86c06c" />
<Swatch color="#e0f8cf" />

Descarga la paleta de cuatro colores para:  
[Adobe Photoshop](/assets/swatches/gb-studio-photoshop.aco)  
[Aseprite](/assets/swatches/gb-studio-aseprite.aseprite)  
