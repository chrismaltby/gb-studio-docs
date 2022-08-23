# Saving and Loading

## Guardar un proyecto

Para guardar un proyecto selecciona `File > Save` desde el menú o pulsa Ctrl/Cmd + S. Si intentas cerrar un proyecto sin haber guardado los últimos cambios, GB Studio te avisará y podrás guardarlos antes de cerrarlo. En macOS cualquier cambio que no hayas guardado será representado por un punto en el botón de cerrar de la ventana.

## Recargar un proyecto

Para recargar un proyecto puedes seleccionar _Open_ en la ventana _New Project_ o seleccionar `File > Open` desde el menú y buscar el fichero `.gbsproj` del proyecto.

## Versiones de control

El directorio del proyecto y el fichero `.gbsproj` están diseñados para funcionar con sistemas de control de versionescomo [Git](https://git-scm.com/). Con cada cambio se añade una nueva línea de datos y los cambios quedan registrados. Si quieres usar una versión de control en tu proyecto tienes que crear un repositorio en la raíz.

Es recomendable ignorar el directorio `build` usando un fichero `.gitignore` o similar.

## Copias de seguridad

Cada vez que guardas tu proyecto la versión anterior se guardará con la extensión `.gbsproj.bak`. Solo con renombrar este fichero volverás a la versión anterior.
