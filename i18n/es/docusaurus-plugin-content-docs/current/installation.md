---
sidebar_position: 2
---

# Installation

Descarga la versión que más se adecue a tus necesidades desde [Itch.io download page](https://chrismaltby.itch.io/gb-studio).

## Windows

Existen dos versiones de GB Studio para Windows. La versión _Squirrel Installer_, que solo tienes que descomprimir y se instalará en la unidad C:\. Una vez instalado se creará un acceso directo en el escritorio. La aplicación se instala en `%LocalAppData%\gb_studio`, pero si necesitas tenerlo en algún otro lugar usa la versión _Manual_.

La versión _Manual_ es la aplicación comprimida en un fichero que puedes descomprimir en cualquier lugar. Una vez descomprimido el fichero haz clic en `gb-studio.exe` para ejecutarlo.

## macOS

En macOS descomprime el fichero descargado y mueve `GB Studio.app` al directorio _Applications_. Haz doble clic para ejecutarlo.

Si tienes algún problema al compilar o ejecutar cualquier juego necesitas instalar Apple's Command Line Tools. Abre `Applications/Terminal.app` e introduce lo siguiente:

```
xcode-select --install
```

## Ubuntu / Linux basados en Debian

Para distribuciones de Linux basadas en Debian, descarga la versión .deb y ejecuta los siguientes comandos (Probado en Ubuntu 18.10):

```
> sudo apt-get update
> sudo apt-get install build-essential
> sudo dpkg -i gb-studio_1.0.0_amd64.deb
> gb-studio
```

## Fedora / Linux basados en RPM

Para distribuciones de Linux basadas en RPM, descarga la version .rpm y ejecuta los siguientes comandos (Probado en Fedora 29)

```
> sudo yum install libXScrnSaver make lsb
> sudo rpm --ignoreos -i gb-studio-1.0.0.x86_64.rpm
> gb-studio
```
