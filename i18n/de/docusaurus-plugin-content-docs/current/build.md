---
sidebar_position: 7
---

# Baue Dein Spiel

## Spielen

Durch Klicken des _Start_ Knopfs in der oberen rechten Ecke im _Projekteditor_ wird der Bauprozess des Spiels gestartet und nach Abschluss wird ein separates Fenster geöffnet wo das Spiel dann gespielt werden kann. Über [Tastaturkürzel](/docs/getting-started/keyboard-shortcuts) findet man Informationen zur Tastenbelegung und sonstige Hinweise wie das Spiel im _Spielfenster_ gespielt werden kann.

## Baustation

Man kommt in die Baustation indem man in der oberen _Projektnavigation_ auf _Ansicht_ geht und auf _Bauen und Ausführen_ klickt. Dort kann man das Protokoll des Projekt-Bauprozesses finden. Zu dieser Oberfläche gelangt man auch wenn man auf den _Start_ Knopf drückt während der Bauprozess noch im Gange ist. Diese Oberfläche listet auch aufgetretene Fehler während des Bauprozesses auf und gibt die nötigen Hinweise um diese zu beheben.

## Als ROM bauen

Durch Klicken des _Exportieren Als..._ Knopfs in der oberen rechten Ecke des Editors und anschließendes Auswählen der _ROM exportieren_ Option kann das Spiel gebaut werden. Diese Option erstellt eine ROM Datei innerhalb des Projektordners in einem Build-Unterverzeichnis unter `$PROJEKT_STAMMVERZEICHNIS/build/rom/game.gb`. Man kann diese ROM Datei dann mit jedem kompatiblen Emulator wie beispielsweise [OpenEMU](https://openemu.org/) oder [KiGB](http://kigb.emuunlim.com/downloads.htm) öffnen und spielen.

## Bauen und für das Web nutzen

Durch Klicken des _Exportieren Als..._ Knopfs in der oberen rechten Ecke des Editors und anschließendes Auswählen der _Web exportieren_ Option kann eine HTML5 web build Version des Spiels gebaut werden. Den erstellten Ordner findet man dann unter `$PROJEKT_STAMMVERZEICHNIS/build/web`. Man kann diesen Ordner dann anschließend auf jedem Webserver hochladen, auf die `index.html` Seite navigieren und das Spiel von dort aus starten. Falls die Seite durch ein Smartphone oder Tablet aufgerufen wird, dann wird auch eine Touchscreen-Steuerung bereitgestellt.

Falls man den `build/web` Ordner als ZIP-Datei verpackt, dann kann diese Datei direkt auf [Itch.io](https://itch.io) hochgeladen werden um das gebaute Spiel als HTML-Spieleanwendung zu veröffentlichen. In diesem Fall ist es empfohlen die Größe des Ansichtsfensters auf `480px` x `432px` zu setzen.

## Fehlerbehebung

Falls auf einem macOS Betriebssystem Schwierigkeiten bestehen das Spiel über den GB Studio Editor zu spielen oder zu bauen, dann müssen die Command Line Tools von Apple noch installiert werden. Dazu öffnet man `Applications/Terminal.app` und gibt den folgenden Befehl ein:

```
xcode-select --install
```

Für das Windows Betriebssystem sollte man nach Bedarf die GB Studio Anwendung zur Whitelist des Antivirenprogramms hinzufügen damit der Bauprozess ohne Probleme ausgeführt werden kann.
