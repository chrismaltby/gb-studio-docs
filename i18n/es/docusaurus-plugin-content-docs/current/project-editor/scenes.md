---
sidebar_position: 1
---

# Scenes

Para que resulte sencillo, una escena es una pantalla de un juego, donde puede haber varios [actors](/docs/project-editor/actors) y [triggers](/docs/project-editor/triggers). Un juego, normalmente, está compuesto por varias escenas interconectadas a través de triggers usando el evento _Change Scene_.

## Añadiendo una escena

Para añadir una escena haz clic en el _**+** button_ de la _Editor Tools_ y selecciona _Scene_ (también puedes crearla usando la letra **S** del teclado), y vuelve a hacer clic en cualquier espacio vacío del _Project Viewport_ donde quieres colocarla.

<img src="/es/img/screenshots/add-scene.gif" style={{ width: 300 }} />

Después de añadirla puede usar el _Editor Sidebar_ para darle un nombre y elegir un fondo de los recursos del proyecto. Para más información de como añadir fondos, dirígete a la sección [Backgrounds](/docs/assets/backgrounds) de la documentación.

## Scripting

Un script de _On Init_ de una escena se ejecuta en cuanto la escena se cargue. Selecciona la escena y haz clic en el botón _Add Event_ en el _Editor Sidebar_ para abrir el menú de eventos y empezar a programar el script.

Si cualquier actor en esa escena también tiene un script _On Init_, esos se ejecutarán primero.

Para más información, dirígete a la sección [Scripting](/docs/scripting) de la documentación.
