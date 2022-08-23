---
sidebar_position: 7
---

# Building Your Game

## Ejecutar

Al hacer clic en _Play button_ en la parte superior derecha del _Project Editor_ comenzará a compilarse tu juego y se abrirá en una nueva ventana. Para más información de como jugar a tu juego, dirígete a la sección [Keyboard Shortcuts](/docs/getting-started/keyboard-shortcuts).

## Compilar desde Terminal

Al hacer clic en _Project View Button_ y seleccionar _Build & Run_ te llevará al _Build Terminal_ donde puodrás ver un log de la compilación del proyecto. También puedes ver esta pantalla haciendo clic en el botón _Play_ button mientras se compila. En esta pantalla podrás ver si hay algún error y así poder corregirlo.

## Compilar como ROM

Al hacer clic en _Export button_ y _Export ROM_ se compilará tu juego y crearás un fichero ROM en el directorio de tu proyecto `$PROJECT_ROOT/build/rom/game.gb`. Puedes ejecutar ese fichero ROM en cualquier emulador como puede ser [OpenEMU](https://openemu.org/) o [KiGB](http://kigb.emuunlim.com/downloads.htm).

## Compilar para Web

Al hacer clic en _Export button_ y _Export Web_ se compilará tu juego y creará una pequeña web en formato HTML5 en el directorio de tu proyecto `$PROJECT_ROOT/build/web`. Puedes subir este directorio a un servidor web y cargar el fichero `index.html` para ejecutar tu juego en cualquier navegador web. Si usas un teléfono o una tablet el juego incluirá controles táctiles.

Si comprimes el directorio `build/web` puedes subirlo a [Itch.io](https://itch.io) como juego HTML. En ese caso recomendamos configurar el tamaño de visualización en `480px` x `432px`.

## Problemas y soluciones

En macOS, si tienes problemas al compilar o al ejecutar el juego tendrás que instalar Apple's Command Line Tools. Abre `Applications/Terminal.app` y escribe el siguiente comando:

```
xcode-select --install
```

En Windows debes incluir la aplicación en la lista blanca de tu Antivirus.
