# Zapisywanie i wczytanie

## Zapisywanie

Aby zapisać projekt, wybierz z menu opcję `Plik> Zapisz` lub przy pomocy skrótu z klawiatury Ctrl / Cmd + S. Jeśli spróbujesz zamknąć projekt z niezapisanymi zmianami, to program powiadomi Cię o tym. GB Studio wyświetli odpowiedni komunikat, dzięki któremu będzie można najpierw zapisać projekt, a dopiero później będzie można wyjść z programu. W systemie macOS wszelkie niezapisane zmiany w projekcie będą reprezentowane przez kropkę na przycisku zamykania okna.

## Wczytanie (ponowne otwarcie projektu)

Aby wczytać projekt nad którym się już pracowało to należy użyć przycisku _Otwórz_ w początkowym oknie _Nowy projekt_, lub można też otworzyć projekt z menu głównego programu `Plik> Otwórz`, a następnie należy przejść do folderu projektu i wybrać plik `.gbsproj`. 

## Kontrola wersji

Układ folderu projektu jak i plik `.gbsproj` zostały zaprojektowane w taki sposób aby współpracowały z systemami kontrolnymi wersji, takimi jak [Git](https://git-scm.com/). Systemu kontrolne wersji umożliwiają łatwe śledzenie historii przy każdej zmianie wprowadzanej przez aplikację w nowej linii w pliku danych. Jeśli chcesz użyć kontroli wersji w swoim projekcie, możesz po prostu utworzyć repozytorium w folderze głównym projektu. 

Zaleca się zignorowanie folderu kompilacji (folderu `build`) z repozytorium za pomocą pliku `.gitignore` lub podobnego.

## Kopia zapasowa

Za każdym razem, gdy zapisujesz projekt, poprzednia wersja jest zapisywana w folderze projektu z rozszerzeniem `.gbsproj.bak`. Jeśli kiedykolwiek zajdzie potrzeba przywrócenia poprzedniej wersji projektu, to wystarczy zmienić nazwę tego pliku, aby mieć rozszerzenie `.gbsproj`, a następnie otworzyć ten plik.
