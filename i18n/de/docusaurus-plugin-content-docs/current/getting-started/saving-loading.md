# Speichern und Laden

## Speichern

Um dein Projekt zu speichern wähle `Datei > Speichern` im Menü oder drücke Strg/Cmd + S. Wenn du versuchst ein ungespeichertes Projekt zu schließen warnt dich GB Studio und gibt dir eine Chance das Projekt vorher zu speichern. Auf macOS werden ungespeicherten Änderungen an dem Projekt durch einen Punkt im Fenster-Schließen Button representiert.

## Laden

Um dein Projekt zu laden verwende entweder den _Öffnen_ Button nach dem Starten von GB Studio oder wähle `Datei > Öffnen` im Menü und navigiere zu deinem Projekt Ordner und wähle die `.gbsproj` Datei aus.

## Versionierung

Der Projektordner Layout sowie die `.gbsproj` Datei sind dafür geeignet mit Versionierungssystemen wie [Git](https://git-scm.com/) zu funktionieren, wobei jede Änderung durch das Programm in einer neuen Zeile in der data Datei stattfindet, womit es einfach ist den Verlauf der Datenänderungen nachzuverfolgen. Wenn du dein Projekt versionieren möchtest, erstelle das Repository einfach im Projektordner.

Es wird empfohlen den `build` Ordner aus dem Repository mit Hilfe einer `.gitignore` Datei zu ignorieren.

## Sicherungen

Nach jedem Speichern wird der vorherige Projektzustand als Sicherung mit der Endung `.gbsproj.bak` abgespeichert. Falls du deinen vorherigen Projektzustand wiederherstellen möchtest, dann kannst du die Endung dieser Sicherungsdatei wieder in `.gbsproj` umbenennen und stattdessen diese Datei öffnen.
