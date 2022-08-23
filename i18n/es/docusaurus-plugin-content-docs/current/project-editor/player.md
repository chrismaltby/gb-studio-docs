---
sidebar_position: 2
---

# The Player

## Posición inicial

La posición inicial del jugador se indica en el Montaje de Escenas con el siguiente icono: <img src="/es/img/screenshots/player-start.png" style={{ height: 12 }} />.

Haciendo click en el espacio entre escenas, la barra lateral vuelve al Project Editor donde tendrás opciones para configurar la escena donde comienza el jugador, su posición, la dirección donde mira y la [spritesheet](/docs/assets/sprites).

También puedes cambiar la posición inicial del jugador arrastrando el icono <img src="/es/img/screenshots/player-start.png" style={{ height: 12 }} /> incluso entre escenas.

## Scripting

La mayoría de los scripts de actores son iguales que los del jugador. Pero además puedes usar _Set Player Sprite Sheet_ para cambiar los gráficos del jugador en medio del juego. Ese cambio permanecerá si cambias de escena, así que recuerda volverlo a cambiar si lo has hecho para algo determinado.

Cuando cambias entre escenas el jugador siempre se volveré visible en la posición de inicio que tenga configurada. Si quieres ocultar un jugador, por ejemplo si estás programando una escena del título del juego, añade _Player Hide_ en la sección _On Init_ de la escena.
