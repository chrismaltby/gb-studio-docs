---
sidebar_position: 3
---

# Aktorzy

Aktorami w programie nazywa się postacie jak i obiekty, które mogą być naniesione na scenę i z którymi gracz może wchodzić w interakcje.

## Dodanie aktora

Aby dodać aktora na scenę, to należy nacisnąć przycisk _**+**_ na pasku _narzędzi_, a następnie wybrać pozycję _aktor_ (lub przy pomocy skróty z klawiatury, nacisnąć klawisz **A**). Po tym, wystarczy wskazać scenę i miejsce dla aktora.
<img src="/pl/img/screenshots/add-actor.gif" style={{ width: 300 }} />

_Boczny pasek_ programu wyświetla ustawienia dla wybranego obiektu. Jeżeli aktor zostanie zaznaczony to _boczny pasek_ programy wyświetli ustawienia dla wybranego aktora. Przy pomocy ustawień można aktorowi nadać nazwę, zmienić jego położenie (co również można osiągnąć przy pomocy przeciągnięcia i upuszczenia), wybrać grafikę z arkusza [obiektów](/docs/assets/sprites), początkowy kierunek, rodzaj ruchu oraz skrypt - odtwarzane polecenia, gdy gracz wejdzie w interakcję z wybranym zdarzeniem.

## Rodzaj ruchu

Istnieje kilka różnych rodzajów ruchów do wyboru. Rodzaj ruchu należy wybrać w zależności od tego jak dane zdarzenie (aktor) ma się zachowywać, gdy gracz chodzi po scenie i wchodzi w interakcję z zdarzeniem.

- **Brak** - Zdarzenie (aktor) wyświetli pojedynczą klatkę z arkusza graficznego.  
  Jeżeli arkusz obiektów zawiera więcej niż jedną klatkę, to użytkownik będzie miał możliwość wyboru, którą klatkę program ma wyświetlić. Istnieje możliwość późniejszej modyfikacji za pomocą polecenia _Aktor: klatka animacji_. Arkusz obiektów z wieloma klatkami umożliwia także animację aktora poprzez cykliczne odtwarzanie każdej klatki z określoną prędkością, którą można modyfikować za pomocą polecenia _Aktor: szybkość animacji_.\
  \
  Zdarzenie będzie zwrócone tylko w początkowym, ustalonym kierunku (chyba, że kierunek zostanie później zmodyfikowany za pomocą skryptu). Jeżeli gracz wejdzie w interakcję z tym zdarzeniem, to ono nie zmieni kierunku. Opcja ta jest przydatna dla np. Tabliczek albo innych nieruchomych przedmiotów.

- **Obrót twarzą** - Zdarzenie jest ustawione w początkowym kierunku, natomiast w momencie gdy gracz wejdzie w interakcję z aktorem, zdarzenie obróci się w stronę gracza, przed odtworzeniem skryptu. Funkcja ta sprawdza się dla prostych postaci (np. NPC), które mają być bardziej wrażliwe na działania gracza. 

- **Losowy obrót** - Zdarzenie jest ustawione w początkowym kierunku, ale w ustalonych odstępach czasu zdarzenie owy kierunek zmienia wykonując obrót (oczywiście w losowym kierunku). Funkcja ta sprawdza się postaci, które rozglądają się po otoczeniu.

- **Losowy krok** - Zdarzenie losowo zmienia kierunek i porusza się po scenie w ustalonych odstępach czasu. Funkcja ta jest przydatna dla postaci, które przeszukują dany obszar. Uwaga: aktorzy, którzy posiadają _losowy krok_ są w stanie zablokować ruch gracza, zatem nie zaleca się stosowania tego rodzaju ruchu w ciasnych miejscach, gdzie gracz może utknąć, czekając, aż aktor zejdzie z drogi.

_Uwaga_ Jeżeli dla zdarzenie zastosowano brak ruchu (czyli z arkusza obiektów będzie używało tylko jedną klatkę animacji), wówczas jedynym dostępnym rodzajem ruchu będzie jedna statyczna klatka i nie zostaną wyświetlone ustawienia do wyboru rodzaju ruchu i kierunku początkowego. 

## Limit klatek

Ze względu na ograniczenia sprzętowe, aktorom w każdej scenie można przypisać **tylko 25 unikatowych klatek** animacji. Gdzie tylko jest możliwe, zaleca się stosowanie braku ruchu lub nie animowanych obiektów, aby zmniejszyć liczbę używanych klatek. Innym sposobem na zmniejszenie liczby klatek jest ponowne użycie tego samego obiektu dla wielu aktorów na scenie. Ponowne użycie tej samej grafiki z arkusza obiektów nie będzie wliczane do całkowitej liczby klatek sceny.

## Skryptowanie

Dla każdego aktora istnieje możliwość zdefiniowania dwóch skryptów do wykonania: 
_Skrypt (naciśnięcie przycisku)_ oraz _Skrypt (auto start)_. Program umożliwia przełączenie między skryptami przy pomocy zakładki. Kiedy aktor jest zaznaczony i na bocznym pasku zostanie wyświetlone ustawienia aktora, to wystarczy zaznaczyć jedną z dostępnych zakładek skryptu (_skrypt (naciśnięcie przycisku)_ lub _skrypt (auto start)_).

Skrypt typu _Skrypt (naciśnięcie przycisku)_ zostanie uruchomiony w momencie, gdy gracz będzie obok danego zdarzenia i zostanie naciśnięty przycisk _A_.

Skrypt typu _Skrypt (auto start)_ zostanie uruchomiony automatycznie jak tylko scena zostanie wczytana. Skrypty _skrypt (auto start)_ aktorów posiadają pierwszeństwo niżeli skrypty _skrypt (auto start)_ sceny.

Kiedy zdarzenie jest zaznaczone to na _bocznym pasku_ zostają wyświetlone ustawienia dla tego zdarzenia. Wystarczy wybrać przycisk _Dodaj polecenie_, aby otworzyć menu z dostępną listą poleceń, za pomocą których można stworzyć własny skrypt dla zdarzenia.

Więcej informacji na temat skryptowania można znaleźć w temacie [Skryptowanie (polecenia zdarzenia)](/docs/scripting).
