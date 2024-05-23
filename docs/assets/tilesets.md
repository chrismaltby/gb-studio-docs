# Tilesets

import { Swatch } from '@site/src/components/Swatch';

Tilesets are used to provide additional tiles that can be used by your scenes using the [Replace Tile](/docs/scripting/script-glossary/scene#tiles) events and to allow creating seamless scene transitions by using [Common Tilesets](/docs/project-editor/scenes#common-tilesets).

You can add tilesets to your game by including `.png` files in your project's `assets/tilesets` folder.

## Color Requirements

Tileset PNGs must only contain the following four colors:

<Swatch color="#071821" />
<Swatch color="#306850" />
<Swatch color="#86c06c" />
<Swatch color="#e0f8cf" />

Download the GB Studio Palette Swatches for:  
[Adobe Photoshop](/assets/swatches/gb-studio-photoshop.aco)  
[Aseprite](/assets/swatches/gb-studio-aseprite.aseprite)  
[Piskel](/assets/swatches/gb-studio-piskel-background-palette.gpl)  

Colors that are not one of the above hex codes will be matched to the nearest color. Unlike sprites, the color `#65ff00` can not be used in tilesets.
