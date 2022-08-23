---
sidebar_position: 2
---

# Custom Scripts

_Custom Events_ te permite crear funciones reutilizables en tu juego que puedes usar en cualquier script.

Haciendo clic entre escenas podrás ver en el _Project Editor_ la lista de cualquier _Custom Events_ de tu proyecto y un botón de _Create Custom Event_.

Cuando hayas dado un nombre a tu _Custom Event_ puedes empezar a programarlo como cualquier _Actor_, _Trigger_ o _Scene_.

## Parámetros

Cuando crees un evento que lea una _Variable_, se agregará a la lista de parámetros de entrada del _Custom Event_, donde podrás renombralo si necesitas darle un nombre mejor. Los eventos que afectan a _Actors_, por defecto, se aplicarán al jugador, pero si usa el selector de actores, también podrá configurar el evento para leer el valor _Actor_ de un parámetro de entrada.

Por ejemplo, el siguiente evento hace que el `Actor A` rote en círculo.

<img src="/es/img/screenshots/custom-event-dance.png" className="event-preview" />

Entonces, puede usarse con el script de un _Actor_, un _Trigger_ y un _Scene_ que aparecerá como se muestra.

<img src="/es/img/events/custom-event.png" className="event-preview" />

Si quieres editar el _Custom Event_, puede volver a él utilizando la lista en el _Project Editor_ o seleccionando _Edit Custom Event_ en el menú desplegable del evento.

<img src="/es/img/screenshots/custom-event-edit.png" className="event-preview" />
