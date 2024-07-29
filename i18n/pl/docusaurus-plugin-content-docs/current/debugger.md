---
sidebar_position: 8
---

# Debugger

Panel **Debugger** umożliwia przeglądanie aktualnego stanu gry w czasie rzeczywistym, pomagając w identyfikowaniu i rozwiązywaniu problemów podczas tworzenia skryptów w twojej grze.
Dostęp do Debuggera moża uzyskać poprzez otwarcie panelu na dole widoku _Świat Gry_ lub wybierając opcję z menu `Gra > Uruchom z debugowaniem`.
<img title="Debugger" src="/img/screenshots/debugger-v4.png" width="1458" />

## Podgląd VRAM

Panel **VRAM** wyświetla bieżącą pamięć wideo używaną przez grafikę w uruchomionej grze.
Dzięki temu, można uzyskać wizualny podgląd ile dodatkowych obiektów (Sprites) I tafli dla tła jest dostępnych w bieżącej scenie oraz pomoże w debugowaniu problemów, gdy został przekroczony limt unikalnych tafli na scenie.
 
Poniżej podglądu tafli, panel pokazuje również 8 palet dla tła i 8 palet dla obiektów (spritów) używanych w bieżącej scenie w grach kolorowych.

:::Notatka
Warto zauważyć, że jeżeli nie używasz trybu [tylko kolor](/docs/settings#color-options), to tylko połowa VRAM będzie dostępna dla twojego projektu.
:::

##  Aktualny stan

Panel **Aktualny stan** informuje, która scena jest aktualnie uruchomiona w grze I ile [Skryptowy wątków](/docs/debugger#active-script-threads) jest aktywnych.

Naciśnięcie w nazwę sceny spowoduje przeniesienie do tej sceny w widoku _Świat gry_.

## Punkty przerwania

Panel **Punkty przerwania** składa się z kilku ustawień globalnych i listy bieżących punktów przerwania zdarzeń włączonych w twoim projekcie. Punkty przerwania umożliwiają zatrzymanie działającej gry, co pozwala zobaczyć, które zdarzenia skrótów były aktualnie uruchomione i sprawdzić bieżące wartości zmiennych w grze.
- **Wstrzymaj przy zmianie skryptu** włączenie tej opcji spowoduje, że debugger zatrzyma się za każdym razem, gdy zostanie uruchomiony nowy skrypt, np. Gdy wchodzisz w interakcję z aktorem/wyzwalaczem lub wczytuje się nowa scena.
- **Wstrzymaj przy zmianie obserwowanej zmiennej** włączenie tej opcji spowoduje, że debugger zatrzyma się za każdym razem, gdy dowolny skrypt zmodyfikuje jedną z twoich [obserwowanych zmiennych](/docs/debugger#variable-values).

### Ustawienie punktu przerwania

W celu ustawienia punktu przerwania na zdarzeniu, należy wybrać dowolne zdarzenie, a następnie przy pomocy rozwijanego menu (strzałka w dół) należy wybrać opcję **Ustaw punkt przerwania**, tak jak to zostało ukazane poniżej:

<img title="Setting a breakpoint" src="/img/screenshots/set-breakpoint-v4.png" width="418" className="drop-shadow margin-bottom" />

Oznaczając w ten sposób zdarzenie, można zauważyć, że została przydzielona do zdarzenia czerwona ikonka oznaczająca punkt przerwania, oraz, że zdarzenie zostało dopisane do listy w panelu **Punkty przerwania**. 
Aby usunąć punkt przerwania, wystarczy powtórzyć ten proces, lub można też nacisnąć przycisk **` x `** kiedy zostanie wyświetlony wpis w panelu **Punkty przerwania**.

## Wartości zmiennych

Panel **Zmienne** pozwala na przeglądanie aktualnych wartości zmiennych używanych w grze. Istnieje możliwość wpisania nowych wartości, które zostaną **natychmiast zaktualizowane** w uruchomionej grze.

### Obserwowanie zmiennych

Istnieje możliwość obserwowania wybranych zmiennych, wystarczy najechać kursorem myszy na wybrany element listy I nacisnąć przycisk gwiazdki **` ★ `**, który pojawi się po prawej stronie. Obserwowanie zmiennych pozwala na korzystanie z ustawienia punktów przerwania opcji [Wstrzymaj przy zmianie obserwowanej zmiennej](/docs/debugger#breakpoints).

<img title="Watching variables" src="/img/screenshots/watching-variables-v4.png" width="332" className="drop-shadow margin-bottom" />

## Aktywne wątki skryptów

Kiedy gra jest wstrzymana, można nawigować przez obecne uruchomione skrypty. Można wstrzymać grę, klikając w przycisk **` ⏸ `** w prawym górnym rogu debuggera, przyciskiem `F8` lub poprzez wyzwalacz [punktu przerwania](/docs/debugger#breakpoints).

### Widok skryptu

W prawym górnym rogu panelu **Aktywne wątki skryptów** znajdują się zakładki umożliwiające przełączanie między widokiem edytora zdarzeń (domyślnie), a widokiem wygenerowanego [skryptu GBVM](/docs/scripting/gbvm). 
Widok edytora umożliwia modyfikację skryptu, w tym dodawać i usuwać zdarzenia. 

Jednak należy pamiętać, że wszelkie zmiany wprowadzone tutaj nie wejdą w życie, dopóki nie zostanie skompilowany ponownie uruchomiony projekt.

### Stepowanie przez projekt

Podczas wstrzymania gry, istnieje możliwość użycia _przycisków stepowania_ lub [skrótów klawiaturowych](/docs/debugger#keyboard-shortcuts), by powoli przechodzić przez grę I śledzić postęp uruchomionych skryptów.
<img title="Stepping Through Your Game" src="/img/screenshots/debugger-step-controls-v4.png" width="296" className="margin-bottom" />

- **Wstrzymaj/Wznów (Pause/Play)** Przełącza między trybem odtwarzania gry, a wstrzymania jej.
- **Krok (Step)** Uruchamia grę, aż do rozpoczęcia następnego zdarzenia skryptu, umożliwiając śledzenie logiki skryptów.
- **Krok do przodu o jedną klatkę (Step Frame)** Uruchamia grę, aż do rozpoczęcia następnej klatki animacji. Jest to przydatne do zrozumienia, co się dzieje  w każdej klatce podczas zdarzeń, które wymagają czasu, takich jak np. [Aktor: przesuń // przejdź do](/docs/scripting/script-glossary/actor#actor-move-to).

### Skróty klawiaturowe

Kiedy debugger jest włączony, można korzystać z następujących skrótów klawiaturowych zarówno w  _oknie projektu_ jak i _oknie gry_:

**Wstrzymaj/Wznów (Pause/Resume)** - `F8`  
**Krok do przodu o jedną instrukcję (Step)** - `F9`  
**Krok do przodu o jedną klatkę (Step Frame)** - `F10`

## Dziennik kompilacji (log)

**Dziennik kompilacji (log)** pozwala zobaczyć aktualny postęp podczas kompilowania gry. Zawiera również listę wszelkich ostrzeżeń, takich jak problem z złożonością scen lub niekompatybilnością z wtyczkami.
Można uzyskać dostęp do dziennika kompilacji, klikając przycisk `Dziennik kompilacji (log)` w prawym górnym rogu panelu Debuggera. 

Aby zamknąć dziennik kompilacji, można kliknąć ten sam przycisk ponownie.

Dziennik kompilacji zostanie otwarty automatycznie, jeżeli project zawiera ostrzeżenia. W zależności od preferencji użytkownika, opcję tę można wyłączyć w [ustawieniach projektu](/docs/settings#build-options).

<img title="Build Log" src="/img/screenshots/build-log-v4.png" width="864" className="drop-shadow margin-bottom" />
