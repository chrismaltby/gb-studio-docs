---
sidebar_position: 6
---

# Skryptowanie

Polecenia skryptowe pozwalają na kontrolowanie części gry na podstawie interakcji od gracza. Mogą być używane do łączenia scen, zmiany zmiennych, dodawania dialogów dla postaci i więcej.

Skrypty można dodawać do scen, aktorów lub wyzwalaczy. Wybierając jeden z tych obiektów, _Edytor Świata_ zaktualizuje się, aby wyświetlić skrypt wybranego obiektu w _Panelu Edytora_.

Aby rozpocząć budowanie skryptu, wybierz obiekt i kliknij przycisk _Dodaj polecenie_ w _Panelu Edytora_, aby otworzyć menu poleceń. Wybierz polecenie, aby dodać je do skryptu. Najwyższe polecenie jest pierwszym, które zostanie uruchomione w tym skrypcie.

## Dodawanie poleceń

Po kliknięciu przycisku _Dodaj polecenie_, pojawi się menu umożliwiające wybór polecenia do dodania. Jeśli zaczniesz pisać, możesz filtrować tę listę lub kliknąć przez menu, aby znaleźć to, czego szukasz. Kliknij polecenie lub naciśnij klawisz _Enter_, aby dodać zaznaczone polecenie do swojego skryptu.

<img title="New Project" src="/img/events/add-event-menu.png" width="300" className="event-preview" />

## Ulubione polecenia

Możesz wybrać kilka poleceń jako ulubione, co spowoduje, że będą one wyświetlane na górze menu od _Dodaj polecenie_. Aby oznaczyć polecenie jako ulubione, najedź na element menu i kliknij przycisk _Gwiazdka_ lub naciśnij klawisz _Tab_.

## Kopiowanie i wklejanie poleceń

Aby skopiować polecenie, kliknij strzałkę w dół obok polecenia. Wszystkie skrypty mają tę samą strzałkę w dół do kopiowania/wklejania. Kliknięcie strzałki w dół na innym poleceniu pozwala wkleić polecenie ze schowka przed lub za wybranym poleceniem. Masz również możliwość wklejenia wartości z pierwszego polecenia do drugiego.

Jako skrót do wklejania, możesz nacisnąć klawisz _Alt_, aby zamienić wszystkie przyciski _Dodaj polecenie_ na przyciski _Wklej polecenie_.

## Rodzaje skryptów

Istnieje wiele kart skryptów do wyboru w _Panelu Edytora_ w zależności od tego, który obiekt jest obecnie wybrany.

### Skrypty scen

Te skrypty można uzyskać w _Panelu Edytora_ poprzez wybór sceny w projekcie.

- **Skrypt (auto start):** Ten skrypt uruchomi się raz na początku Sceny. Skrypt (auto start) sceny jest zawsze uruchamiany po skrypcie (auto start) aktorów w Scenie.
- **Skrypt (dotknięcie):** Ten skrypt uruchamia się, gdy gracz zostaje trafiony przez aktora należącego do grupy kolizji.

### Skrypty aktorów

Te skrypty można uzyskać w Panelu Edytora klikając na Aktora w projekcie.

- **Skrypt (auto start):** Ten skrypt uruchomi się raz na początku Sceny. Aktorzy w Scenie zawsze uruchomią swój skrypt (auto start) przed skryptem (auto start) Sceny.
- **Skrypt (naciśnięcie):** Skrypt zostanie uruchomiony jeżeli gracz będzie przy aktorze, oraz naciśnie przycisk **A**. Spowoduje to, że gracz "wejdzie w interakcję" z Aktorem. Interakcja z Aktorem rozpocznie ten skrypt. W scenach typu strzelanki (SHMUP) interakcję można dodatkowo wykonać poprzez kolizję z Aktorem.

  Ten skrypt jest często używany do dialogów, używając polecenia "Tekst: Wiadomość".

  Włączenie grupy kolizji dla aktora spowoduje zmianę tego skryptu na _skrypt (dotknięcie): Gracz_, który szuka kolizji z graczem zamiast interakcji z graczem. To zachowanie jest identyczne do _skrypt (naciśnięcie)_ (interakcji) jak w scenach strzelankach (SHMUP).
  
- **Skrypt (dotknięcie):** Ten skrypt uruchamia się, gdy Aktor zostaje trafiony przez innego Aktora lub Pocisk należący do grupy kolizji.

- **Skrypt (równoległy):** Ten skrypt uruchamia się raz w każdej klatce i może być dodawany tylko do aktorów, którzy nie są graczem.

### Skrypty wyzwalaczy

Te skrypty można uzyskać w _Panelu Edytora_ klikając na Wyzwalacz w projekcie.

- **Skrypt (wejście):** Ten skrypt uruchamia się, gdy gracz koliduje z wyzwalaczem (gdy wejdzie na pole wyzwalacza).

- **Skrypt (opuszczenie):** Ten skrypt uruchamia się, gdy gracz, który wcześniej kolidował, opuszcza pole wyzwalacza.
