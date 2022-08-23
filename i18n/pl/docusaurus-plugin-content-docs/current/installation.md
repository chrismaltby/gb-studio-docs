---
sidebar_position: 2
---

# Instalacja

Najnowszą wersję programu można znaleźć na [na stronie Itch.io w sekcji Download](https://chrismaltby.itch.io/gb-studio).
## Windows

Dostępne są dwa pakiety instalacyjne programu GB Studio dla systemu Windows.

(1) Wersja _Squirrel Installer_ zawiera prosty instalator. Wystarczy plik rozpakować, uruchomić aplikację i poczekać chwilkę aż instalator zainstaluje aplikacje na twój komputer (na dysk C:\ ). Kiedy instalacja dobiegnie końca, instalator automatycznie utworzy do programu skrót na pulpicie i program GB Studio zostanie uruchomiony.
Program zostanie zainstalowany do `%LocalAppData%\gb_studio`, jeżeli potrzebujesz zainstalować program w innym miejscu, to zaleca się użyć wersji manualnej. 

(2) Wersja _Manual_ to jest skompresowany plik zip, który posiada wszystkie pliki potrzebne dla programu. Plik zip należy rozpakować w dowolnym miejscu, a następnie wystarczy uruchomić plik `gb-studio.exe`, aby rozpocząć pracę w programie.

## macOS

Dla systemy macOS należy rozpakować pobrany plik, a następnie przenieść `GB Studio.app` do folderu aplikacji (_Applications_). 

Jeżeli wystąpią problemy podczas kompilacji lub uruchomienia twojej gry, być może zajdzie potrzeba zainstalowania Narzędzia wiersza poleceń Apple (_Apple's Command Line Tools_). W tym celu należy otworzyć `Aplikacje / Terminal.app`  (_`Applications/Terminal.app`_) i wprowadzając następujące polecenie.
```
xcode-select --install
```

## Ubuntu / Linuksy oparte na Debianie

W przypadku dystrybucji Linuksa opartych na Debianie, pobierz wersję .deb i uruchom następujące polecenia (Testowane na Ubuntu 18.10).

```
> sudo apt-get update
> sudo apt-get install build-essential
> sudo dpkg -i gb-studio_1.0.0_amd64.deb
> gb-studio
```

## Fedora / Linuksy oparte na RPM

W przypadku dystrybucji Linuksa opartych na RPM, pobierz wersję .rpm i uruchom następujące polecenia (Testowane na Fedorze 29).

```
> sudo yum install libXScrnSaver make lsb
> sudo rpm --ignoreos -i gb-studio-1.0.0.x86_64.rpm
> gb-studio
```
