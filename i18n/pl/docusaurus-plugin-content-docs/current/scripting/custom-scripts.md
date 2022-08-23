---
sidebar_position: 2
---

# Własne zdarzenia

_Własne zdarzenia_ pozwalają tworzyć procedury wielokrotnego użytku w grze, które mogą być używane w dowolnym skrypcie.

Kliknięcie w tło między scenami spowoduje na bocznym pasku programu uruchomienie _edytora projektu_, który wyświetla listę _własnych zdarzeń_ znajdujących się w twoim projekcie, a także przycisk _dodaj własne zdarzenie_.

W pierwszej kolejności _własne zdarzenie_ musi zostać nazwane, a następnie można rozpocząć tworzenie skryptu w taki sam sposób jak w przypadku _aktorów_, _rozruchów_ i _scen_.

## Parametry

Ilekroć zostanie dodane zdarzenie, które odczytuje _zmienną_, to zostanie to dodane do listy parametrów wejściowych dla _własnego zdarzenia_, gdzie można nadać temu wejściu konkretną nazwę. Polecenia, które wpływają na _aktorów_, domyślnie będą dotyczyć gracza, ale jeżeli zostanie wybrany konkretny aktor przy pomocy selektora, to istnieje możliwość ustawienia tego zdarzenia by odczytywało wartość _aktora_ z parametru wejściowego.

Dla przykładu, poniższe własne zdarzenie sprawi by `Aktor A` kręcił się w kółko.

<img src="/pl/img/screenshots/custom-event-dance.png" className="event-preview" />

To _własne zdarzenie_ może zostać wykorzystane na _aktorach_, _rozruchach_, _scenach_ i będzie to wyglądać w następujący sposób.

<img src="/pl/img/events/custom-event.png" className="event-preview" />

Jeżeli kiedykolwiek zajdzie potrzeba edytowania _własnego zdarzenia_, to można do niego powrócić przy pomocy użyciu listy własnych zdarzeń, które wyświetlają się w _edytorze projektu_ lub też przez wybranie _edytuj własne zdarzenie_ z menu rozwijanego zdarzenia.

<img src="/pl/img/screenshots/custom-event-edit.png" className="event-preview" />
