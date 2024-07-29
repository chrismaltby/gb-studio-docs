# Tilesets (zestaw tafli)

import { Swatch } from '@site/src/components/Swatch';

Tilesets są używane do dostarczania dodatkowych tafli, które mogą być używane przez twoje sceny za pomocą polecenia [Scena: zmień taflę](/docs/scripting/script-glossary/scene#tiles) oraz do umożliwienia tworzenia płynnych przejść między scenami, korzystając z [Wspólnych tilesetów](/docs/project-editor/scenes#common-tilesets).

Można dodać tileset do swojej gry, umieszczając pliki `.png` w folderze `assets/tilesets` swojego projektu.


## Wymagania dotyczące kolorów

Pliki PNG tilesetu mogą zawierać tylko następujące cztery kolory:

<Swatch color="#071821" />
<Swatch color="#306850" />
<Swatch color="#86c06c" />
<Swatch color="#e0f8cf" />

Pobierz palety GB Studio dla programów:
- [Adobe Photoshop](/assets/swatches/gb-studio-photoshop.aco)  
- [Aseprite](/assets/swatches/gb-studio-aseprite.aseprite)  
- [Piskel](/assets/swatches/gb-studio-piskel-background-palette.gpl)  

Kolory inne niż powyższe kody hex zostaną dopasowane do najbliższego koloru. <br/>
W przeciwieństwie do sprite'ów, kolor `#65ff00` nie może być używany w tilesetach.
