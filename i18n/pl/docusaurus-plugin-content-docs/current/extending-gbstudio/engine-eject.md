---
sidebar_position: 8
---

# Wysunięcie silnika

Wysunięcie silnika kopiuje [silnik gry GBVM](https://github.com/chrismaltby/gbvm), który używa GB Studio, do folderu w twoim projekcie o nazwie `assets/engine`. Możesz edytować te pliki źródłowe według własnego uznania, używając IDE, aby mieć większą kontrolę nad tym, jak tworzona jest twoja gra w GB Studio. Ta funkcja jest zalecana tylko dla programistów zaznajomionych z GBDK.

Aby użyć wysunięcia silnika, kliknij na manu _Gra_ w menu programu GB Srudio i przejdź do _Zaawansowane_, aby wyświetlić opcję _Wysuń silnik_.

Po kliknięciu _Wysuń_ twój projekt zyska nowy folder o nazwie `/engine` z podfolderami `/include` i `/src`.

## Przywracanie plików

Aby przywrócić dowolne plik GBDK do domyślnego stanu GB Studio, należy usunąć go z folderu `assets/engine`. Usunięcie całego folderu `assets/engine` spowoduje przywrócenie wszystkich kodów GBDK do domyślnych ustawień GB Studio. Możesz również to zrobić, ponownie naciskając _Wysuń silnik_, co nadpisze twój folder `assets/engine` domyślnymi plikami GB Studio.

## Błędy kompilacji

Jeśli w folderze `/engine` znajdują się uszkodzone lub niekompatybilne pliki, GB Studio nie będzie w stanie zbudować twojej gry. Komunikaty o błędach można znaleźć w [Dzienniku kompilacji](/docs/debugger#build-log).

Komunikat o błędzie często wyjaśnia, które pliki mają problemy i wskazuje numer linii, w której problem został znaleziony. Na przykład ten błąd pokazuje, że linia 77 w `src/core/actor.c` używa zmiennej, która nie została jeszcze zdefiniowana:

```
Compiling: src/core/actor.c
src/core/actor.c:77: error 20: Undefined identifier 'emote_offsets'
src/core/actor.c:77: error 22: Array or pointer required for '[]' operation 
src/core/actor.c:77: error 47: indirections to different types assignment   
```

Te błędy nie będą spowodowane brakującymi plikami. GB Studio odnosi się do swojego domyślnego silnika w miejsce wszelkich brakujących plików `assets/engine`. Naprawienie lub usunięcie plików, które spowodowały błąd, pozwoli na ponowne zbudowanie i uruchomienie gry.
