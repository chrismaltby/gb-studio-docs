---
sidebar_position: 2
---

# Instalacja


Pobierz preferowaną wersję z [Itch.io - sekcja Download](https://chrismaltby.itch.io/gb-studio).
lub [GitHub](https://github.com/chrismaltby/gb-studio/releases) dla starszych wersji.

Od czasu do czasu wersje beta można znaleźć także na [Patreon](https://www.patreon.com/gbstudiodev).


## Windows

Dostępne są dwie wersje GB Studio dla systemu Windows. 

Wersja _Squirrel Installer_ wymaga tylko rozpakowania, podwójnego kliknięcia i odczekania kilku sekund, aż aplikacja zainstaluje się na dysku `C:\`. Po zakończeniu instalacji na pulpicie automatycznie zostanie utworzony skrót do aplikacji, która również automatycznie się uruchomi. Aplikacja zostanie zainstalowana w `%LocalAppData%\gb_studio`. Jeśli potrzebujesz zainstalować ją w innym miejscu, użyj wersji _Manual_.

Wersja _Manual_ to plik zip zawierający pliki aplikacji, który można rozpakować w dowolnym miejscu. Po rozpakowaniu wystarczy podwójnie kliknąć `gb-studio.exe`, aby uruchomić program.


## macOS

Dla systemu macOS należy rozpakować pobrany plik i przenieść `GB Studio.app` do folderu aplikacji (_Applications_). Podwójne kliknięcie uruchomi program.

Dostępne są dwie wersje programu dla macOS: `Apple Silicon` i `Intel`. Dla optymalnej wydajności użyj wersji odpowiedniej dla procesora twojego Maca. W razie wątpliwości, można w pierwszej kolejności wypróbować wersji Apple Silicon, ponieważ będzie znacznie szybsza, jeśli twój Mac obsługuje ten procesor.

Jeśli masz problemy z kompilacją lub uruchomieniem gry, może być konieczne zainstalowanie narzędzi wiersza poleceń Apple (_Apple's Command Line Tools_). Otwórz `Applications/Terminal.app` i wprowadź następujące polecenie:

```
xcode-select --install
```

## Ubuntu / Debian-based Linux

Dla dystrybucji Linuksa opartych na Debianie, pobierz wersję .deb i uruchom następujące polecenia (testowane na Ubuntu 18.10):

```
> sudo apt-get update
> sudo apt-get install build-essential
> sudo dpkg -i gb-studio_1.0.0_amd64.deb
> gb-studio
```

## Fedora / RPM-based Linux

Dla dystrybucji Linuksa opartych na RPM, pobierz wersję .rpm i uruchom następujące polecenia (testowane na Fedora 29):

```
> sudo yum install libXScrnSaver make lsb
> sudo rpm --ignoreos -i gb-studio-1.0.0.x86_64.rpm
> gb-studio
```



## Rozwiązywanie problemów

Jeśli w systemie Linux pojawiają się problemy graficzne lub GB Studio nie uruchamia się, spróbuj uruchomić program przy użyciu następującego polecenia:

```
> gb-studio --disable-gpu-sandbox
```
