# Tła

import { Swatch } from '@site/src/components/Swatch';

Każda ze scen wymaga obrazu tła, który definiuje, jak powinna wyglądać ta scena.

Można dodać tła do swojej gry, umieszczając pliki `.png` w folderze `assets/backgrounds` w swoim projekcie.

## Wymagania dotyczące kolorów

### Palety manualne

Gdy scena korzysta z [Palet manualnych](/docs/project-editor/scenes#automatic-color), obrazy tła w formacie PNG mogą zawierać tylko cztery poniższe kolory:

<Swatch color="#071821" />
<Swatch color="#306850" />
<Swatch color="#86c06c" />
<Swatch color="#e0f8cf" />

Pobierz palety GB Studio dla programów:  
[Adobe Photoshop](/assets/swatches/gb-studio-photoshop.aco)  
[Aseprite](/assets/swatches/gb-studio-aseprite.aseprite)  
[Piskel](/assets/swatches/gb-studio-piskel-background-palette.gpl)  

Kolory, które nie są jednym z powyższych kodów hex, będą dopasowane do najbliższego koloru. W przeciwieństwie do obiektów (sprit'ów), kolor `#65ff00` nie może być używany w tłach.


### Palety automatyczne

Gdy scena korzysta z [palet automatycznych](/docs/project-editor/scenes#automatic-color), możena dostarczać obrazy kolorowe, o ile spełniają one następujące zasady:

- Każda tafla o wymiarach `8px` x `8px` może używać tylko 4 kolorów.
- Scena może zawierać maksymalnie 8 unikalnych palet 4-kolorowych.

Dane monochromatyczne tafli zostaną automatycznie utworzone z Twojego obrazu kolorowego. Jeśli zamierzasz wspierać urządzenia monochromatyczne, może być konieczne dostarczenie [Monochromatycznego zamiennika](/docs/assets/backgrounds#monochrome-overrides).


## Wymagania dotyczące rozmiaru

- Tła są podzielone na zestawy tafli `8px` x `8px`, więc całkowity rozmiar obrazu musi być wielokrotnością `8px` zarówno w szerokości, jak i wyskowości.
- Minimalny rozmiar tła wynosi `160px` x `144px` (rozmiar ekranu GB)
- Zarówno szerokość, jak i wysokość tła muszą być mniejsze lub równe `2040px`.
- Szerokość obrazu pomnożona przez wysokość musi być mniejsza lub równa  `1,048,320`. Przykład, obraz o szerokości `2016px` będzie miał maksymalną wysokość `520px` (ponieważ `2016 * 520 = 1048320`)

## Wymagania dotyczące tafli

#### Gry "Monochromatyczne" i "Kolor + Monochromatyczne"

W większości typów scen, dla gier korzystających z trybów kolorów `Monochromatyczny` lub `Kolor + Monochromatyczny`, obraz tła może zawierać nie więcej niż **192** unikalnych tafli `8px` x `8px` naraz z powodu ograniczeń pamięci. Oznacza to, że nawet przy najmniejszym możliwym rozmiarze tła należy powtarzać około połowę swoich tafli. Tam, gdzie to możliwe, powtarzaj tafle między obrazami, aby były grupowane razem, co zaoszczędzi miejsce na grze. Zalecane jest użycie edytora map tafli, takiego jak [Tiled](https://www.mapeditor.org/), aby upewnić się, że Twoje tła są zgodne z siatką pikseli.

Wyjątkiem są sceny z ustawionym _rodzajem_ jako _Logo_. Te sceny mogą używać obrazu o wymiarach `160px` x `144px` bez ograniczeń dotyczących unikalnych tafli, ale należy pamiętać, że w scenach _Logo_ nie można używać _Aktorów_ ani wyświetlać _Gracza_.


#### Gry "Tylko kolor"

Podczas korzystania z trybu kolorów `Tylko kolor`, limit tafli tła jest podwojony, co pozwala na użycie do **384** unikalnych tafli `8px` x `8px` na scenę.


## Monochromatyczny zamiennik

Podczas korzystania z [palet automatycznych](/docs/project-editor/scenes#automatic-color), dane monochromatyczne tafli są automatycznie generowane z Twojego obrazu kolorowego. Jednak generowane odcienie mogą nie do końca odpowiadać Twoim zamierzeniom. W trybie `Tylko kolor` nie będzie to problemem. Jeśli planujesz wspierać urządzenia monochromatyczne, możesz dostarczyć drugi obraz jako monochromatyczny zamiennik, nadając mu taką samą nazwę jak obrazowi kolorowemu, ale z rozszerzeniem `.mono.png`.

Na przykład, podczas korzystania z automatycznych palet na poniższym obrazie bez zamiennika:

<img src="/assets/examples/mono-override/parallax.png" style={{width:550}} />
`assets/backgrounds/parallax.png`  

Scena będzie wyglądała następująco na urządzeniach monochromatycznych:
<img src="/assets/examples/mono-override/parallax_broken.png" style={{width:550}} class="margin-bottom"/>

Dostarczając poniższy obraz zamiennik, scena będzie wyglądać tak, jak oczekujesz, zarówno na urządzeniach kolorowych, jak i monochromatycznych:

<img src="/assets/examples/mono-override/parallax.mono.png" style={{width:550}} />
`assets/backgrounds/parallax.mono.png`  


- [assets/backgrounds/parallax.png](/assets/examples/mono-override/parallax.png)
- [assets/backgrounds/parallax.mono.png](/assets/examples/mono-override/parallax.mono.png)
