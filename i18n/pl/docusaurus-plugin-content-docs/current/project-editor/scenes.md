---
sidebar_position: 1
---

# Sceny

Scena to pojedynczy ekran Twojej gry, który może zawierać wiele [aktorów](/docs/project-editor/actors) i [wyzwalaczy](/docs/project-editor/triggers). Gra zazwyczaj składa się z wielu scen połączonych ze sobą za pomocą wyzwalaczy używających zdarzenia i poleceń jak [Scena: zmień scenę (teleport)](/docs/scripting/script-glossary/scene#change-scene).


## Dodawanie sceny

Kliknij przycisk **` + `** w _Narzędziach Edytora_ i wybierz _Scena_ z menu. Kliknij na dowolne puste miejsce w _Widoku Projektu_, aby umieścić nową scenę.

<div className="drop-shadow margin-bottom"><img src="/img/screenshots/add-scene-v4.gif" width="320" className="clip-bottom" /></div>

W _Pasku bocznym Edytora_ możesz nadać swojej scenie nazwę oraz tło z zasobów Twojego projektu. Zobacz dokumentację dotyczącą [Tła](/docs/assets/backgrounds), aby uzyskać więcej informacji na temat dodawania obrazów tła.

## Właściwości sceny

- **Nazwa** -  Nadaje nazwę scenie. Przydatne do zlokalizowania sceny za pomocą paska wyszukiwania i [nawigatora scen](/docs/project-editor/navigator).

:::tip
Użycie znaków `/` w nazwie sceny spowoduje, że pojawi się ona w folderach w nawigatorze scen (np. `ui/ekran tytułowy` pojawi się jako `ekran tytułowy` w folderze `ui`)
:::

- **Rodzaj** - Umożliwia wybór z listy trybów gry, takich jak _Widok z góry (2D RPG)_ lub _Platformowa_. Ta opcja zmienia sposób, w jaki scena działa w grze. Korzystając z [wtyczek](/docs/extending-gbstudio/plugins), można tutaj dodać dodatkowe typy scen i modyfikować wbudowane typy.

- **Tło** - Umożliwia wybór obrazu [tła](/docs/assets/backgrounds) z folderu `assets/backgrounds`. Opcjonalnie pozwala na automatyczne wyodrębnienie palet kolorów dla kolorowych obrazów `.png`.

- **Palety tła (tylko dla trybu kolorów)** - Osiem palet używanych do kolorowania wybranej sceny.

- **Palety obiektów (tylko dla trybu kolorów)** - Osiem palet używanych dla obiektów na wybranej scenie.

- **Grafika gracza** - Służy do ustawienia niestandardowej grafiki gracza dla tej sceny. Domyślnie scena użyje domyślnej grafiki gracza dla wybranego _rodzaju sceny_.


## Panorama (Tryb Praralaksy)
Kliknięcie przycisku _Przełącz Paralaksę_ po prawej stronie _Selektora Tła_ pozwala włączyć tryb paralaksy dla sceny. Po włączeniu trybu paralaksy można podzielić tło na trzy warstwy, które można modyfikować, aby przewijały się z różnymi prędkościami w miarę poruszania się kamery w grze.

<img src="/img/screenshots/parallax-v4.png" style={{width:550}} />

## Wspólne tafle

:::warning
To zaawansowana technika, która może wymagać zrozumienia, jak pamięć graficzna jest alokowana i ładowana w grze.
:::

Korzystając ze polecenia [Scena: zmień scenę (teleport)](/docs/scripting/script-glossary/scene#change-scene) z _szybkością przejścia_ ustawioną na `Natychmiast`, często zobaczysz _"błędne"_ grafiki podczas przechodzenia do następnej sceny. Dzieje się tak, ponieważ istnieje niewielkie opóźnienie w ładowaniu danych tafli i przez krótki czas scena pokazuje dane tafli poprzedniej sceny z nowym układem sceny. Aby to potwierdzić, możesz użyć [panelu VRAM](/docs/debugger) w Debuggerze.

Aby pomóc rozwiązać ten problem, możesz określić zestaw tafli - [tileset](/docs/assets/tilesets) wspólny dla obu scen. Zestawy tafli to obrazy z folderu `assets/tilesets`. Gdy dwie sceny dzielą wspólny zestaw tafli, wspólne tafle będą zawsze ładowane w tych samych miejscach w pamięci, co pozwala na płynniejsze przejścia.

Np. te dwie sceny mają ten sam wspólny zestaw tafli:
<img src="/img/screenshots/common-tilesets.png" className="drop-shadow margin-bottom" />

co pozwala na natychmiastowe przełączanie między nimi:
<div className="drop-shadow margin-bottom"><img src="/img/screenshots/common-tileset-example.gif" width="320" className="clip-bottom" /></div>

Zasoby użyte w tym przykładzie to:

- [assets/backgrounds/east.png](/assets/examples/common-tilesets/east.png)
- [assets/backgrounds/west.png](/assets/examples/common-tilesets/west.png)
- [assets/tilesets/town.png](/assets/examples/common-tilesets/town.png)

:::note
Zwróć uwagę, że obraz zestawu tafli nie musi zawierać tylko unikale tafle (chociaż może, jeśli tak wolisz), podczas uruchamiania gry ładowane będą tylko unikalne tafle znalezione na obrazie.
:::

## Skryptowanie

Sceny mogą zawierać _skrypt (auto start)_, który zostanie uruchomiony natychmiast po załadowaniu sceny w grze. Możesz go użyć do takich rzeczy, jak odtwarzanie muzyki podczas ładowania sceny, konfigurowanie zdarzeń, które mają się uruchomić po naciśnięciu przycisków, inicjowanie aktorów na podstawie wartości zmiennych i wiele więcej.

Możesz również zdefiniować skrypty, które będą uruchamiane, gdy gracz zderzy się z _Aktorami_, którzy mają ustawioną _Grupę Kolizji_, klikając zakładkę _skrypt (dotknięcie)_ i wybierając grupę kolizji.

Aby rozpocząć budowanie skryptu, wybierz scenę, kliknij typ skryptu, który chcesz edytować, i kliknij przycisk _Dodaj polecenie_ w _Pasku bocznym Edytora_, aby otworzyć menu poleceń. Wybierz polecenie, aby dodać je do skryptu.

Więcej informacji znajdziesz w dokumentacji dotyczącej [Skryptowania](/docs/scripting).

## Dodawanie Kolizji do Sceny

Wybierz _Narzędzie Kolizji_ z _Narzędzi Edytora_. Istnieje 6 domyślnych typów kolizji, które można dodać.

- **Solidna** Zatrzymuje kolidujące aktory przed wejściem na tafle z każdej strony.
- **Górna/Dolna/Lewa/Prawa** Zatrzymuje kolidujące aktory przed wejściem na tafle z określonej strony. Jest to przydatne do kolizji jednostronnych i pół-solidnych platform.
- **Drabina (tylko dla platformówek)** Pozwala na poruszanie się w górę i w dół w scenach rodzaju _Platformowa_.

Każda tafla może zawierać maksymalnie 1 drabinę i 3 boki kolizji. Dodanie 4 boków kolizji zastąpi je jednym solidnym blokiem. Drabiny nie zastępują istniejącej kolizji, gdy są umieszczane na innej kolizji.

Dodatkowo dostępne jest menu rozwijane, które pozwala na wyświetlenie dodatkowych tafli:

- **Tafle pochyłe** - Te tafle mogą być używane do dodawania pochyłości do sceny (tylko platformówki), może być łatwiej używać [pędzla pochyłości](#drawing-slopes) zamiast umieszczać te tafle ręcznie.
- **Tafle dodatkowe** - Te tafle są obecnie nieużywane przez GB Studio i mogą być użyte w przyszłości, możesz je teraz umieścić i [zmodyfikować silnik gry](/docs/extending-gbstudio/engine-eject), aby je używać, ale to może uniemożliwić przeniesienie projektu do nowszych wersji GB Studio.


## Rysowanie Pochyłości

Pędzel Pochyłości to szybki sposób na dodanie kolizji pochyłości do Twoich scen (tylko platformówki). Z zaznaczonym pędzlem kliknij na początkową taflę i przeciągnij do jednego tafla __po__ miejscu, gdzie chcesz umieścić pochyłość. Przy umieszczaniu łagodnej pochyłości możesz przytrzymać `Shift`, aby przesunąć pochyłość w pionie.

Można także użyć tego narzędzia do rysowania poziomych i pionowych kolizji, przytrzymując `Ctrl` podczas przeciągania. Przeciąganie z lewej do prawej stworzy kolizję górną, z prawej do lewej stworzy kolizję dolną, z góry na dół stworzy kolizję lewą, a z dołu do góry stworzy kolizję prawą. Przytrzymanie `Ctrl + Shift` odwróci kierunek kolizji (górna stanie się dolną itp.).

<div className="drop-shadow"><img src="/img/screenshots/slopes.gif" width="320" className="clip-bottom" /></div>

## Kolorowanie sceny

Wybierz _Tryb koloryzacji_ z _Narzędzi Edytora_. Istnieje 8 typów palet, które można dodać do sceny z włączonym Trybem Kolorów. Palety można dostosować w Ustawieniach. Należy pamiętać, że paleta nr 8 w scenie będzie również używana dla _Okien Dialogowych_ i menu.

Palety używane w _trybie koloryzacji_ można wymienić na istniejące palety (takie jak paleta UI) poprzez długie kliknięcie na paletę.

Więcej informacji na temat trybu rysowania używanego przez _tryb koloryzacji_ i _tryb kolizji_ znajdziesz w dziale [Klawiatura - skróty klawiszy](/docs/getting-started/keyboard-shortcuts).

## Kolor automatyczny

Jeśli Twój obraz jest już kolorowym plikiem `.png`, możesz spróbować przełączyć się na używanie `Automatycznych` Palet Tła za pomocą _Paska bocznego Edytora_.

<div className="drop-shadow margin-bottom"><img src="/img/screenshots/auto-color.gif" width="320" className="clip-bottom" /></div>

:::info
Należy uważać, aby przestrzegać tych samych wymagań dotyczących unikalnych kolorów na scenę i tafli, jeśli chcesz, aby obrazy wyświetlały się poprawnie. Na przykład użycie więcej niż 7 unikalnych palet kolorów spowoduje nadpisanie palety 8, co może spowodować, że okna dialogowe i menu nie będą wyświetlane poprawnie dla tej sceny.

Kiedy używasz Automatycznych Palet Tła, tafle monochromatyczne są również tworzone automatycznie. Jeśli chcesz obsługiwać zarówno kolorowe, jak i monochromatyczne urządzenia, możesz dostarczyć [Monochromatyczny zamiennik](/docs/assets/backgrounds#monochrome-overrides), aby uzyskać większą kontrolę nad wyglądem tła na urządzeniach monochromatycznych.
:::

## Pierwszeństwo tafli
Podczas kolorowania sceny możesz użyć przycisku `<!>`, aby ustawić tafle priorytetowe, które będą się pojawiać przed aktorami (tylko w grach na GB Color), co pozwoli na tworzenie głębi w scenach. Należy pamiętać, że pierwszy kolor w palecie tafli będzie przezroczysty i rysowany za aktorami.

<img src="/img/screenshots/tile-priority.png" width="320" className="drop-shadow" />

## Magiczny pędzel

Magiczny pędzel jest dostępny podczas dodawania kolizji lub kolorowania sceny i może być używany do malowania każdej tafli w scenie, która natychmiast dopasowuje się do klikniętej tafli.

<div className="drop-shadow"><img src="/img/screenshots/magic-brush.gif" width="320" className="clip-bottom" /></div>

## Limity sceny

GB Studio ma kilka limitów, które zostały wprowadzone, aby utrzymać wydajność gry na stałym poziomie i zminimalizować problemy wizualne.

Każda scena może mieć maksymalnie 20 aktorów, 30 wyzwalaczy oraz od 192 do 64 tafli sprite'ów, w zależności od ustawień projektu i złożoności używanego tła. Możesz sprawdzić te informacje, wybierając scenę i szukając szarego paska pod Twoją sceną, który wygląda tak: ``A: 0/20 S: 0/96 T: 0/30``. Litery na tym pasku reprezentują następujące wartości:
- ``A:`` oznacza liczbę aktorów używanych przez scenę.
- ``S:`` oznacza liczbę unikalnych tafli sprite'ów używanych przez każdego aktora w ich arkuszu sprite'ów.
- ``T:`` oznacza liczbę wyzwalaczy używanych przez scenę.

### Limity aktorów

Każda scena może mieć maksymalnie 20 aktorów. Idealnie, nie powinno być więcej niż 10 aktorów w obrębie 20 x 18 tafli, co odpowiada za ``160px x 144px``. Zgrupowanie więcej niż 10 aktorów w jednej scenie spowoduje, że niektórzy aktorzy staną się niewidoczni w grze. GB Studio ostrzeże Cię, jeśli uzna, że w przypadku sceny tak się stanie:

<img title="Actor limits" src="/img/screenshots/actor-limits.png" width="320" className="drop-shadow margin-bottom" />

Możesz rozwiązać ten problem, przesuwając lub usuwając aktorów, aby nie było ich więcej niż 10 w obrębie 20 x 18 tafli. Możesz użyć [trybu usuwania (gumka)](/docs/getting-started/keyboard-shortcuts/#Game-World), aby usunąć aktorów. Aktorzy nadal staną się niewidoczni, jeśli więcej niż 10 aktorów wejdzie w przestrzeń ekranu po rozpoczęciu sceny.

### Limity wyzwalaczy

Każda scena może mieć maksymalnie 30 wyzwalaczy. Możesz użyć [trybu usuwania (gumka)](/docs/getting-started/keyboard-shortcuts/#Game-World), aby usunąć wyzwalacze.

### Limity tła oraz tafli sprite

Limity pamięci dla tafli tła i sprite'ów zależą od tego, czy tryb kolorów Twojej gry jest ustawiony na `Tylko kolor`. W trybie `Tylko Kolor` dostępna jest około dwa razy większa ilość pamięci dla danych tafli, ale gra nie będzie działać na urządzeniach niekolorowych. Możesz ustawić tryb kolorów w sekcji [Ustawienia](/docs/settings).

Możesz użyć [panelu VRAM](/docs/debugger) w Debuggerze, aby uzyskać wizualną reprezentację tego, jak tafle są używane w każdej scenie Twojej gry.

#### Gry "Monochromatyczne" i "Kolor + Monochromatyczne"

Gdy tryb kolorów Twojej gry jest ustawiony na `Monochromatyczny` lub `Kolor + Monochromatyczny`, obowiązują następujące limity:
- **64 tafli** zarezerwowane dla Sprite'ów
- **128 tafli** zarezerwowane dla tła
- **64 tafli** zarezerwowane dla UI
- **64 tafli** dzielone między Sprite'y a Tło. Im bardziej złożone jest Twoje tło, tym mniej tafli będzie dostępnych dla obiektów (sprite'ów). Należy pamiętać, że obiekty (sprite'y) używają tafli o rozmiarze 8x16, więc ten obszar współdzielony jest pokazany jako 32 tafli sprite'ów.

Jeśli Twoje tło używa 128 tafli lub mniej, możesz użyć do 96 tafli dla obiektów sprite'ów (64 zarezerwowane + 32 współdzielone). Jednak jeśli Twoje tło używa wszystkich 192 tafli, to tylko 64 tafli będzie dostępnych dla obiektów sprite'ów.

<img src="/img/screenshots/tile-allocation.png" width="650"  />

#### Gry "Tylko kolor"

Gdy tryb kolorów Twojej gry jest ustawiony na `Tylko kolor`, obowiązują następujące zwiększone limity:

- **128 tafli** zarezerwowane dla Sprite'ów
- **256 tafli** zarezerwowane dla tła
- **128 tafli** zarezerwowane dla UI
- **128 tafli** dzielone między obiekty (Sprite'y), a Tło. Im bardziej złożone jest Twoje tło, tym mniej tafli będzie dostępnych dla obiektów (sprite'ów). Należy pamiętać, że obiekty (sprite'y) używają tafli o rozmiarze 8x16, więc ten obszar współdzielony jest pokazany jako 64 tafli sprite'ów.

Jeśli Twoje tło używa 256 tafli lub mniej, możesz użyć do 192 tafli dla obiektów sprite'ów (128 zarezerwowane + 64 współdzielone). Jednak jeśli Twoje tło używa wszystkich 384 tafli, to tylko 128 tafli będzie dostępnych dla obiektów sprite'ów.

<img src="/img/screenshots/tile-allocation-color.png" width="650"  />
