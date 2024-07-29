# Zapisywanie i wczytywanie

## Zapisywanie

Aby zapisać projekt, wybierz z menu głównego programu opcję `Plik > Zapisz` lub naciśnij skrót klawiaturowy `Ctrl/Cmd` + `S`. Jeśli spróbujesz zamknąć projekt z niezapisanymi zmianami, GB Studio wyświetli ostrzeżenie, dając możliwość zapisania projektu przed zamknięciem. W systemie macOS wszelkie niezapisane zmiany w projekcie będą reprezentowane przez kropkę na przycisku zamykania okna.

## Wczytywanie

Aby ponownie wczytać projekt, użyj przycisku _Otwórz_ w oknie _Nowego projektu_ lub wybierz `Plik > Otwórz` z menu głównego programu i przejdź do folderu projektu, a następnie wybierz plik `.gbsproj`.

Możesz również powrócić do okna _Ostatnie_, wybierając `Plik > Przelącz projekt` z menu glównego programu.

## Kontrola wersji

Układ folderu projektu i pliku `.gbsproj` zostały zaprojektowane w taki sposób, aby dobrze współpracowały z systemami kontroli wersji, takimi jak [Git](https://git-scm.com/). Każda zmiana wprowadzana przez aplikację jest zapisywana w nowej linii w pliku danych, co umożliwia łatwe śledzenie historii. Jeśli chcesz użyć kontroli wersji w swoim projekcie, utwórz repozytorium w folderze głównym projektu.

Zaleca się ignorowanie folderu `build` w repozytorium za pomocą pliku `.gitignore` lub podobnego.

## Kopie zapasowe

Za każdym razem, gdy zapisujesz projekt, poprzednia wersja jest zapisywana w folderze projektu z rozszerzeniem `.gbsproj.bak`. Jeśli kiedykolwiek zajdzie potrzeba przywrócenia poprzedniej wersji projektu, zmień nazwę tego pliku na `.gbsproj` i otwórz ten plik.
