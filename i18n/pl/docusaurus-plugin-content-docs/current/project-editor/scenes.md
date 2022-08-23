---
sidebar_position: 1
---

# Sceny

Scena to pojedynczy ekran twojej gry (można powiedzieć plansza, albo mapa wyświetlana na ekranie), która może składać się z wielu [aktorów](/docs/project-editor/actors) jak i [rozruchów](/docs/project-editor/triggers). W zasadzie, gra składa się z układu wielu scen, które są ze sobą połączone przy pomocy _rozruchów_ zawierającymi polecenia zdarzenia _zmień scenę (teleport)_.

## Dodanie nowej sceny

Aby dodać nową scenę do układu scen, to należy nacisnąć przycisk _ ** + **_ w _narzędziach_ a następnie wybranie opcji _Scena_ z menu (można posłużyć się skrótem z klawiatury, przycisk ** S **). W dowolne puste miejsce na _obszarze roboczym projektu_ (_Project Viewport_), należy kliknąć aby nowa scena została wyświetlona.

<img src="/pl/img/screenshots/add-scene.gif" style={{ width:300 }} />

W momencie kiedy nowa scena została dodana, na _bocznym pasku_ (_Editor Sidebar_) można zmodyfikować informacje, takie jak nazwa, albo jakie tło z projektu ma zostać zastosowane dla wybranej sceny. Więcej informacji na temat dodawania obrazów tła można znaleźć w dokumentacji w temacie [tła](/docs/assets/backgrounds).

## Skryptowanie

Sceny posiadają zdarzenia _skrypt (auto start)_, które mogą zostać użyte do uruchamiania zdarzeń, gdy tylko scena zostanie wyświetlona na ekranie. Po wybraniu sceny, na _bocznym pasku_ wystarczy zaznaczyć zakładkę _skrypt (auto start)_, a następnie wybrać przycisk _Dodaj polecenie_, aby otworzyć menu zdarzeń i rozpocząć tworzenie skryptu.  

Jeżeli jakiekolwiek zdarzenie (Aktor) posiada wprowadzony skrypt _skrypt (auto start)_, to program sugeruje się zasadą: Aktorzy posiadają pierwszeństwo uruchomienia auto start. Gdy skrypt Aktorów dobiegnie końca, wtenczas program uruchomi skrypt auto start od sceny. 

Po więcej informacji zajrzyj do dokumentacji, działu [Skryptowanie (polecenia zdarzenia)](/docs/scripting).
