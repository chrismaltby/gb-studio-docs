---
sidebar_position: 2
---

# Einrichtung

Downloade die aktuelle Version der Software über die [Itch.io Downloadseite](https://chrismaltby.itch.io/gb-studio).

## Windows

Zwei Versionen des GB Studios sind für Windows Betriebssysteme verfügbar. Die _Squirrel Installer_ Version benötigt nur das Entpacken der archivierten Datei und einen Doppelklick der Anwendung um GB Studio auf das C:\ Laufweg zu installieren. Im Anschluss wird automatisch eine Desktopverknüpfung erstellt und GB Studio öffnet sich ebenfalls. Der genaue Verzeichnispfad der Installation findet sich in `%LocalAppData%\gb_studio`. Falls ein anderer Verzeichnispfad für die Installation erwünscht ist, dann empfielt sich die _Manual_ Version.

Die _Manual_ Version ist eine archivierte Datei mit allen benötigten Anwendungsdateien. Diese Datei kann überall entpackt werden. Die ausführbare Datei `gb-studio.exe` dient zum Starten der GB Studio Anwendung.

## macOS

Für macOS Betriebssysteme entpackt man lediglich die archivierte Datei und verschiebt die `GB Studio.app` Datei in den _Applications_ Ordner. Ein Doppelklick startet die GB Studio Anwendung.

Falls auf einem macOS Betriebssystem Schwierigkeiten bestehen das Spiel über den GB Studio Editor zu spielen oder zu bauen, dann müssen die Command Line Tools von Apple noch installiert werden. Dazu öffnet man `Applications/Terminal.app` und gibt den folgenden Befehl ein:

```
xcode-select --install
```

## Ubuntu / Debian-basierte Linux

Für Debian-basierte Linux Distributionen muss die .deb Version heruntergeladen und folgende Befehle ausgeführt werden (getestet auf Ubunt 18.10):

```
> sudo apt-get update
> sudo apt-get install build-essential
> sudo dpkg -i gb-studio_1.0.0_amd64.deb
> gb-studio
```

## Fedora / RPM-basierte Linux

Für RPM-basierte Linux Distributionen muss die .rpm Version heruntergeladen und folgende Befehle ausgeführt werden (getestet auf Fedore 29):

```
> sudo yum install libXScrnSaver make lsb
> sudo rpm --ignoreos -i gb-studio-1.0.0.x86_64.rpm
> gb-studio
```
