---
sidebar_position: 2
---

# Skrypty własne

_Skrypty własne_ pozwalają na tworzenie wielokrotnego użytku procedur w grze, które można wywoływać z dowolnego skryptu.

<img src="/img/screenshots/custom-script-list.png" className="drop-shadow" width="200" />

Twoje _Skrypty własne_ będą wyświetlane w sekcji (_Skrypty własne_) w _Nawigatorze_ podczas pracy w trybie _Świat gry_.

Kliknij przycisk `+`, aby utworzyć nowy _Skrypt własny_ lub wybierz jeden z listy do edycji.

Po nadaniu nazwy _Skryptowi własnemu_ możesz zacząć budować skrypt w taki sam sposób, jak dla _Aktorów_, _Wyzwalaczy_ i _Scen_.


## Parametry

Za każdym razem, gdy dodasz polecenie, które odczytuje _Zmienną_, zostanie ono dodane do listy parametrów wejściowych dla _Skryptu własnego_, gdzie możesz nadać temu wejściu zapamiętywalną nazwę. Polecenia, które dotyczą _Aktorów_, domyślnie będą dotyczyć gracza, ale jeśli użyjesz selektora aktorów, będzie możliwe ustawienie polecenia by odczytywało wartość _Aktora_ z parametru wejściowego.

Na przykład, poniższy skrypt własny sprawia, że `Aktor A` kręci się w kółko.

<img src="/img/screenshots/custom-script-dance.png" className="event-preview" />

## Przekazywanie przez Referencję lub Wartość

Podczas używania zmiennych w skrypcie własnym, masz możliwość przekazywania przez referencję (_Ref._) lub przez wartość (_War._) poprzez kliknięcie przycisku rozwijanego obok każdej zmiennej na liście parametrów.


<img src="/img/screenshots/custom-script-by-ref.png" className="event-preview" />

- **Przekazywanie przez Referencję** pozwala skryptowi własnemu modyfikować wartość zmiennej parametru. Wszelkie zmiany wartości zmiennej wewnątrz skryptu będą również aktualizować wartość zmiennej na zewnątrz skryptu. Użyj tego, jeśli chcesz, aby własny skrypt mógł zmienić wartość zmiennej, która została przekazana.

- **Przekazywanie przez Wartość** kopiuje bieżącą wartość zmiennej w momencie wywołania, tak aby wszelkie zmiany zmiennej parametru wewnątrz skryptu nie wpływały na zmienną, która została przekazana. Użyj tego, jeśli chcesz, aby skrypt własny **NIE** mógł zmienić zmiennej, która została przekazana.

## Wywołanie skryptu własnego

Po utworzeniu _skryptu własnego_ możesz wywołać go z dowolnego miejsca innego skryptu, dodając polecenie _Skrypt: wywołaj skrypt własny_, które będzie wyglądać następująco.

Once you have created a _Custom Script_ you can call it from any other script by adding a _Call Script_ event which will appear as follows.

<img src="/img/screenshots/custom-script-call.png" className="event-preview" />

Najpierw musisz wybrać skrypt, który chcesz wywołać, a jeśli ten skrypt ma jakieś zmienne lub parametry aktorów, możesz następnie wybrać, które wejścia mają być użyte.

Jeśli zajdzie potrzeba edytowania _Skryptu własnego_, można wrócić do niego za pomocą listy w _Nawigatorze_ lub wybrać _Edytuj Skrypt Własny_ z menu rozwijanego zdarzeń

<img src="/img/screenshots/custom-event-edit.png" className="event-preview" />
