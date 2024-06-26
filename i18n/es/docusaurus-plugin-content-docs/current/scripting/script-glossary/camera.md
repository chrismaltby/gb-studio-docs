---
sidebar_position: 2
#
# This file is autogenerated. DO NOT MODIFY DIRECTLY
#
---

import ScriptEventPreview from '@site/src/components/ScriptEventPreview';

# Camara

### Bloquear camara en el jugador
Mueve la cámara nuevamente para centrarla en el jugador, bloqueándola en su posición cuando el jugador se mueve. Opcionalmente permite bloquear para seguir al jugador solo en el eje horizontal o vertical.
<ScriptEventPreview title={"Bloquear camara en el jugador"} fields={[{"key":"speed","width":"50%","label":"Velocidad","description":"La velocidad de movimiento, use 'Instantáneo' para moverse inmediatamente a la nueva ubicación.","type":"moveSpeed","defaultValue":0,"allowNone":true,"noneLabel":"Instantáneo"},{"key":"axis","width":"50%","label":"Bloquear eje","description":"Establece si el eje horizontal, el eje vertical o ambos deben bloquearse.","type":"togglebuttons","options":[["x","H","Horizontal"],["y","V","Vertical"]],"allowMultiple":true,"allowNone":false,"defaultValue":["x","y"]}]} />

- **Velocidad**: La velocidad de movimiento, use 'Instantáneo' para moverse inmediatamente a la nueva ubicación.  
- **Bloquear eje**: Establece si el eje horizontal, el eje vertical o ambos deben bloquearse.  

### Mover cámara a
Mueve la cámara a una nueva posición.
<ScriptEventPreview title={"Mover cámara a"} fields={[{"type":"group","fields":[{"key":"x","label":"X","description":"La posición horizontal.","type":"value","min":0,"max":2047,"width":"50%","unitsField":"units","unitsDefault":"tiles","unitsAllowed":["tiles","pixels"],"defaultValue":{"type":"number","value":0}},{"key":"y","label":"Y","description":"La posición vertical.","type":"value","min":0,"max":2047,"width":"50%","unitsField":"units","unitsDefault":"tiles","unitsAllowed":["tiles","pixels"],"defaultValue":{"type":"number","value":0}}]},{"key":"speed","label":"Velocidad","description":"La velocidad de movimiento, use 'Instantáneo' para moverse inmediatamente a la nueva ubicación.","type":"moveSpeed","defaultValue":0,"allowNone":true,"noneLabel":"Instantáneo"}]} />

- **X**: La posición horizontal.  
- **Y**: La posición vertical.  
- **Velocidad**: La velocidad de movimiento, use 'Instantáneo' para moverse inmediatamente a la nueva ubicación.  

### Vibración de la cámara
Agita la cámara durante un período de tiempo.
<ScriptEventPreview title={"Vibración de la cámara"} fields={[{"type":"group","fields":[{"key":"time","type":"number","label":"Duración","description":"El tiempo que se debe agitar la cámara en segundos o fotogramas.","min":0,"max":60,"step":0.1,"defaultValue":0.5,"unitsField":"units","unitsDefault":"time","unitsAllowed":["time","frames"],"conditions":[{"key":"units","ne":"frames"}]},{"key":"frames","label":"Duración","description":"El tiempo que se debe agitar la cámara en segundos o fotogramas.","type":"number","min":0,"max":3600,"width":"50%","defaultValue":30,"unitsField":"units","unitsDefault":"time","unitsAllowed":["time","frames"],"conditions":[{"key":"units","eq":"frames"}]},{"key":"shakeDirection","label":"Tipo de movimiento","description":"Elige si la cámara debe temblar sólo en el eje horizontal o vertical o si debe temblar en ambas direcciones.","hideLabel":true,"type":"moveType","defaultValue":"horizontal","flexBasis":30,"flexGrow":0,"alignBottom":true}]},{"key":"magnitude","label":"Magnitud","description":"La cantidad de movimiento de la cámara durante un movimiento de la cámara.","type":"value","min":1,"max":255,"defaultValue":{"type":"number","value":5}}]} />

- **Duración**: El tiempo que se debe agitar la cámara en segundos o fotogramas.  
- **Tipo de movimiento**: Elige si la cámara debe temblar sólo en el eje horizontal o vertical o si debe temblar en ambas direcciones.  
- **Magnitud**: La cantidad de movimiento de la cámara durante un movimiento de la cámara.  

### Establecer posición de la cámara
Mueve la cámara a una nueva posición.
<ScriptEventPreview title={"Establecer posición de la cámara"} fields={[{"type":"group","fields":[{"key":"x","label":"X","description":"La posición horizontal.","type":"value","min":0,"max":2047,"width":"50%","unitsField":"units","unitsDefault":"tiles","unitsAllowed":["tiles","pixels"],"defaultValue":{"type":"number","value":0}},{"key":"y","label":"Y","description":"La posición vertical.","type":"value","min":0,"max":2047,"width":"50%","unitsField":"units","unitsDefault":"tiles","unitsAllowed":["tiles","pixels"],"defaultValue":{"type":"number","value":0}}]}]} />

- **X**: La posición horizontal.  
- **Y**: La posición vertical.  

## Screen
### Aparición gradual de la pantalla
Desvanece la escena de una pantalla en blanco.
<ScriptEventPreview title={"Aparición gradual de la pantalla"} fields={[{"key":"speed","label":"Velocidad","description":"La velocidad de la animación de desvanecimiento.","type":"fadeSpeed","defaultValue":"2"}]} />

- **Velocidad**: La velocidad de la animación de desvanecimiento.  

### Desvanecer pantalla
Difuminar la escena a una pantalla en blanco.
<ScriptEventPreview title={"Desvanecer pantalla"} fields={[{"key":"speed","label":"Velocidad","description":"La velocidad de la animación de desvanecimiento.","type":"fadeSpeed","defaultValue":"2"}]} />

- **Velocidad**: La velocidad de la animación de desvanecimiento.  

