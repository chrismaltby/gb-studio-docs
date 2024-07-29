---
sidebar_position: 1
---

import { Swatch } from '@site/src/components/Swatch';

# Obiekty (Sprites)

Obiekty, czy też po prostu Sprites to grafiki używane przez grywalne lub interaktywne postacie w twoich scenach. Dodaj sprite do swojej gry, umieszczając pliki `.png` w folderze `assets/sprites` w projekcie.

Ponieważ istnieją ograniczenia co do liczby klatek sprite, które można załadować do jednej sceny, pamiętaj, aby sprawdzić limity klatek we wszystkich scenach, gdy dodajesz nowe sprite. Zobacz [Limit scen](/docs/project-editor/scenes/#scene-limits) po więcej informacji.


## Obiekty proste (Simple Sprites)

Prosty sprite ma jedną lub więcej klatek o rozmiarze `16px` x `16px` rozmieszczonych poziomo w pliku graficznym. Sprite z jedną klatką będzie miał rozmiar `16px` x `16px`, natomiast sprite z trzema klatkami będzie miał rozmiar `48px` x `16px`.

### Obiekt statyczny (Static sprites)

Dla sprite, które potrzebują tylko jednej klatki (np. statyczne przedmioty, takie jak tabliczki), utwórz plik `.png` o rozmiarze `16px` x `16px`, zawierający tylko jedną wymaganą klatkę.

<img src="/img/sprites/cat.png" className="HelpSprite" />

### Obiekty animowane (Animated sprites)

Jeśli chcesz mieć sprite odtwarzające krótkie animacje, możesz stworzyć plik `.png` z od 2 klatek o rozmiarze `32px` x `16px` do 25 klatek o rozmiarze `400px` x `16px`. Użycie tych sprite na aktorze pozwoli ci wybrać, którą klatkę chcesz wyświetlać domyślnie, a także odtwarzać pełną animację z określoną prędkością.

<img src="/img/sprites/fire.png" className="HelpSprite" />

### Aktor

Aby stworzyć statyczny sprite, który zmienia się w zależności od kierunku aktora, utwórz plik `.png` o rozmiarze `48px` x `16px`, zawierający trzy klatki: jedną skierowaną do przodu, jedną skierowaną do góry i jedną skierowaną w prawo. Sprite skierowany w lewo jest automatycznie generowany przez odwrócenie klatki skierowanej w prawo poziomo.

<img src="/img/sprites/npc001.png" className="HelpSprite" />

### Aktor animowany

Aby stworzyć sprite, które mają animowany ruch lub mogą być używane jako postać gracza, utwórz plik `.png` o rozmiarze `96px` x `16px`, zawierający sześć klatek: dwie skierowane do przodu, dwie skierowane do góry i dwie skierowane w prawo.

<img src="/img/sprites/player.png" className="HelpSprite" />

## Edytor obiektów (Edytor Sprite)

Kiedy chcesz przejść do tworzenia bardziej skomplikowanych obiektów, możesz użyć _Edytora obiektów_ wybierając z menu programu _Podgląd_ i wybierając _Obiekty_.


<img title="Sprite Editor" src="/img/screenshots/sprite-editor-v3.png" width="752" />

### Kompozycja Sprite

Sprite składa się z:
- Wielu _Stanów Animacji_, domyślnie dla sprite tworzony jest tylko jeden stan animacji, możesz stworzyć nowy klikając przycisk `+` w _Nawigatorze Animacji_.
	- Każdy stan animacji składa się z wielu klatek animacji, widocznych w _Nawigatorze Klatek_, kliknij przycisk `+`, aby stworzyć nową klatkę, i kliknij klatkę, aby wyświetlić ją w _Płótnie Klatek_ do edycji.
- _Paleta tafli_, jest to plik `.png` z twojego folderu zasobów. Kliknij w paletę, aby wybrać tafle, następnie możesz nią narysować klikając w _Płótnie Klatek_.
- _Rozmiaru Płótna_, jest to szerokość i wysokość twojego _Płótna Klatek_, na _Pasku Bocznym Edytora_ znajdują się informacje o rozmiarze, możesz je zmienić na rozmiar, który chcesz, aby miał twój sprite.
- _Ramki Kolizji_, jest to szerokość, wysokość i pozycja niewidzialnej ramki używanej do wykrywania kolizji w silniku gry, ustaw to, aby pasowało jak najbliżej wokół obszaru kolizji twojego obiektu.

### Ustawienia animacji

W _Pasku Bocznym Edytora_ możesz wybierać z listy rodzaj animacji, ustawienie to określi liczbę animacji dostępnych dla twojego sprite oraz jakie nazwy mają one w _Nawigatorze Animacji_. Na przykład, chociaż możesz używać dowolnego rodzaju sprite dla gracza w scenie typu _Platformowa_, to jednak zaleca się ustawienie typu na _Gracz Platformowy_, ponieważ pozwoli to skonfigurować dodatkowe animacje jak `Skok` i `Wspinaczka`.

Niektóre typy sprite pozwalają także na "Odbicie klatek 'Prawej strony' aby stworzyć klatki 'Lewej strony'", co pozwala na stworzenie zarówno animacji sprite skierowanych w lewo, jak i w prawo z pojedynczej animacji, która jest automatycznie odwracana, oszczędzając ci konieczność ręcznego tworzenia tych animacji.


### Stany animajci

Korzystając z przycisku `+` w _Nawigatorze Animacji_ możesz stworzyć nowe _Stany Animacji_. Pozwalają one tworzyć niestandardowe animacje, które mogą być wyzwalane ze skryptów.

Po utworzeniu nowego _Stanu Animacji_ możesz nadać mu nazwę, wpisując ją w polu _Nazwa Stanu_ w _Pasku Bocznym Edytora_ lub wybierając istniejącą nazwę sprite.

Lista nazw sprite jest globalna dla twojego projektu i zaleca się utrzymanie liczby unikalnych nazw na niskim poziomie. Każda dodana nazwa zwiększa ilość pamięci wymaganej dla wszystkich sprite w twojej grze. Na przykład, zamiast mieć dwa unikalne sprite o nazwach `Eksplozja` i `Zgniecenie`, rozważ stworzenie jednego stanu używanego przez oba o nazwie `Zniszczenie`.

Aby zmienić, jaki stan animacji aktor powinien używać w twojej grze, możesz użyć polecenia `Aktor: ustaw stan animacji`. Pozwala to wybrać aktora i stan animacji, na który powinien się przełączyć. Upewnij się, że arkusz sprite, którego używasz, ma zdefiniowane animacje dla stanu, który wybrałeś w zdarzeniu!


### Płótno klatek

Po wybraniu _Animacji_ i _Klatki_ do edycji, możesz użyć _Palety tafli_ i _Płótna klatek_, aby stworzyć klatkę animacji.

Zacznij od kliknięcia tafli, której chcesz użyć z _Palety tafli_.
- Możesz wybrać wiele tafli, klikając i przeciągając w _Palecie tafli_
- Domyślnie _Paleta tafli_ przyciąga do siatki `8px`, aby zwiększyć szansę na ponowne użycie tafli, ponieważ każda unikalna tafla użyta w twoim sprite zmniejsza limity, gdy jest używana w scenach. Jeśli wiesz, co robisz i chcesz wyłączyć tę siatkę, to możesz włączyć `Tryb precyzyji`, klikając przycisk w prawym górnym rogu _Palety tafli_ (ikonka jakby celownik) lub przytrzymując `Alt` podczas dokonywania wyboru.

Po wybraniu tafli kliknij w _Płótno klatek_, aby narysować taflę w swojej klatce. Następnie możesz przesuwać tafle po _Płótnie klatek_ przeciągając je, a jeśli masz wybór tafli, możesz przenosić klatki do przodu lub tyłu oraz odwracać je poziomo lub pionowo, używając _Paska Bocznyego Edytora_.

### Skóra cebulowa

Używając przycisku _Skóra cebulowa_ możesz przełączać funkcję _skóry cebulowej_. Wyświetla ona półprzezroczystą wersję poprzedniej klatki za _Płótnem klatek_, co pozwala łatwiej podejmować decyzje dotyczące płynności animacji.


### Usuwanie tafli i klatek 

Aby usunąć taflę lub klatkę, należy zaznaczyć ją w _Płótnie klatek_ lub _Nawigatorze klatek_, a następnie  wystarczy nacisnąć klawisz `Backspace` na klawiaturze. Alternatywnie, możesz dokonać wyboru, a następnie kliknąć strzałkę rozwijaną w prawym górnym rogu _Paska Bocznego Edytora_, aby uzyskać dostęp do menu, w którym dostępna jest opcja usunięcia.


## Wymagania dotyczące obrazów

Sprite, składają się z plików `.png` i muszą zawierać tylko następujące kolory:

<Swatch color="#071821" />
<Swatch color="#86c06c" />
<Swatch color="#e0f8cf" />
<Swatch color="#65ff00" />

Pobierz próbki palety GB Studio dla: 
- [Adobe Photoshop](/assets/swatches/gb-studio-photoshop.aco)  
- [Aseprite](/assets/swatches/gb-studio-aseprite.aseprite)  
- [Piskel](/assets/swatches/gb-studio-piskel-sprites-palette.gpl)  

Kolor `#65ff00` jest używany do reprezentowania przezroczystego tła w grze i będzie niewidoczny w grze oraz w dziale programu - _Świat gry_.

Kolory, które nie są jednym z powyższych kodów hex, zostaną dopasowane do najbliższego koloru. W przeciwieństwie do tła, kolor `#306850` nie może być używany w sprite.
