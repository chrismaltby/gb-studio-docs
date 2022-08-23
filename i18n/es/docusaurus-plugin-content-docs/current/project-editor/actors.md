---
sidebar_position: 3
---

# Actors

Los actores son los personajes y los objetos con los que puedes interactuar en las escenas.

## Añadiendo un actor

Para añadir un actor a una escena haz clic en _**+** button_ en _Editor Tools_ y selecciona _Actor_ en el menú (de forma alternativa puedes pulsar la tecla **A**). Después haz clic en la escena y posiciona al actor en el lugar que quieras.

<img src="/es/img/screenshots/add-actor.gif" style={{ width: 300 }} />

El _Editor Sidebar_ cambiará para mostrar la configuración del actor, y lo primero que deberías hacer es darle un nombre para tenerlo mejor identificado. También puedes volver a colocar al actor con coordenadas (aunque puedes arrastrar y soltar con el ratón), cambiar la [sprite sheet](/docs/assets/sprites), la dirección inicial donde mira, el tipo de movimiento o crear un script que se ejecutará cuando el jugador interactúe con el actor.

## Tipo de movimiento

Existen diferentes tipos de movimiento, y usar uno u otro dependerá de cómo quieres que se comporte el actor mientras el jugador camina por la escena e interactúa con ella.

- **Estático** - El actor será un frame del spritesheet.  
  Si la spritesheet contiene más de un frame podrás seleccionar cual mostrar, y este puede ser modificado después usando el evento _Actor: Set Animation Frame_. Las spritesheets con múltiples frames también tienen la habilidad de animar al actor haciendo ciclos entre todos los frames a una determinada velocidad, y esa velocidad puede ser modificada con el evento _Actor: Set Animation Speed_ .\
  \
  El actor solo mirará en la dirección inicial (a menos que la dirección se modifique más tarde usando un script). Si el jugador interactúa con este actor, no cambiará de dirección. Es útil para postes, señales u otros objetos que no se tendrán que mover.

- **Interacción cara a cara** - El actor mirará en la dirección inicial pero cuando el jugador interactúe con el actor se girará para mirarlo antes de ejecutarse scripts del jugador. Es útil para que los personajes tengan más interacción con las acciones del jugador.

- **Rotación aleatoria** - El actor mirará en la dirección inicial pero cambiará de dirección cada poco tiempo. Es útil para personajes que están mirando a su alrededor.

- **Movimiento aleatorio** - El actor cambiará de dirección y se moverá por la escena de forma aleatoria. Es útil para personajes que están buscando algo. Los actores pueden bloquear el movimiento del jugador, así que hay que tener cuidado porque puede bloquearlo.

_Note_ Si el actor usa una spritesheet estática (por ejempo con un solo frame) solo tendrá la opción de elegir el tipo de movimiento estático Y no tendrás opción de escoger ningún otro tipo de movimiento.

## Límites de Frames

Debido a las limitaciones de hardware solo se permiten **25 frames únicos** para actores en cada escena. Hasta donde sea posible es mejor no usar animaciones o spritesheet estáticas para ahorrar frames. Otra manera de ahorrar frames es reutilizar los mismos sprites con diferentes actores, ya que no se sumará en el total de frames.

## Scripting

Los actores cuentan con dos tipos de scripts, _On Interact_ y _On Init_. Puedes elegir que tipo de script estás editando usando las pestañas en el _Editor Sidebar_ cuando seleccionas el actor.

El script _On Interact_ se ejecutará cuando el jugador pulse el botón _A_ mirando en la dirección de un actor.

El script _On Init_ se ejecutará tan pronto como se carge la escena, y se ejecutarán antes que cualquier evento en el script _On Init_ de la escena.
.

Cuando seleccionas el actor, haz clic en _Add Event button_ desde la _Editor Sidebar_ para abrir el menú de eventos y emepezar a programar un script.

Para más información, dirígete a la sección [Scripting](/docs/scripting) de la documentación.
