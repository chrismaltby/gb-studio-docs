# Backgrounds

import { Swatch } from '@site/src/components/Swatch';

Each of your scenes requires a background image that defines how that scene should look.

You can add backgrounds to your game by including `.png` files in your project's `assets/backgrounds` folder.

## Color Requirements

### Manual Palettes

When a scene is using [manual palettes](/docs/project-editor/scenes#automatic-color), background PNGs must only contain the following four colors:

<Swatch color="#071821" />
<Swatch color="#306850" />
<Swatch color="#86c06c" />
<Swatch color="#e0f8cf" />

Download the GB Studio Palette Swatches for:  
[Adobe Photoshop](/assets/swatches/gb-studio-photoshop.aco)  
[Aseprite](/assets/swatches/gb-studio-aseprite.aseprite)  
[Piskel](/assets/swatches/gb-studio-piskel-background-palette.gpl)  

Colors that are not one of the above hex codes will be matched to the nearest color. Unlike sprites, the color `#65ff00` can not be used in backgrounds.

### Automatic Palettes

When a scene is using [automatic palettes](/docs/project-editor/scenes#automatic-color), you may provide color images as long as they obey the following rules:

- Each `8px`x `8px` tile may use only 4 colors.
- The scene can only contain a maximum of 8 unique 4-color palettes.

Monochrome tile data will be created automatically from your color image, if you intend to support monochome devices you may need to provide a [monochrome override image](/docs/assets/backgrounds#monochrome-overrides)

## Size Requirements

- Backgrounds are divided into `8px`x `8px` tilesets so the total image size must be a multiple of `8px` in both width and height.
- A background has a minimum size of `160px` x `144px` (the GB screen size)
- Both the width and height of a background must be less than or equal to `2040px`.
- The width of the image multiplied by the height must be less than or equal to `1,048,320`. For example an image with the width `2016px` will have a max height of `520px` (because `2016 * 520 = 1048320`)

## Tile Requirements

#### "Monochrome" and "Color + Monochrome" Games

In most scene types, for games using `Monochrome` or `Color + Monochrome` color modes, a background image can contain no more than **192** unique `8px` x `8px` tiles at once due to memory limits. This means that even using the smallest background size possible you must repeat about half of your tiles. Where possible repeat tiles between images as they will be grouped together saving on total game size. It is recommended to use a tile map editor such as [Tiled](https://www.mapeditor.org/) to ensure your backgrounds conform to the pixel grid.

The exception to this is scenes with their _Scene Type_ set as _Logo_, these scenes can use a `160px` x `144px` sized image with no limits on unique tiles but note that in _Logo_ scenes you are unable to use _Actors_ or display a _Player_.

#### "Color Only" Games

When using the `Color Only` color mode background tile limits are doubled, allowing up to **384** unique `8px` x `8px` tiles per scene.

## Monochrome Overrides

When using [automatic palettes](/docs/project-editor/scenes#automatic-color), monochrome tile data is automatically generated from your color image. However, the generated shades may not perfectly match your intentions. For `Color Only` mode, this won't be an issue. If you plan to support monochrome devices, you can provide a second image as a monochrome override by naming it the same as your color image with a `.mono.png` file extension.

For example, when using automatic palettes on the following image without an override:

<img src="/assets/examples/mono-override/parallax.png" style={{width:550}} />
`assets/backgrounds/parallax.png`  

The scene will look like this on monochrome devices:
<img src="/assets/examples/mono-override/parallax_broken.png" style={{width:550}} class="margin-bottom"/>

By providing the following override image the scene will look as you expect on both color and monochrome devices:

<img src="/assets/examples/mono-override/parallax.mono.png" style={{width:550}} />
`assets/backgrounds/parallax.mono.png`  


- [assets/backgrounds/parallax.png](/assets/examples/mono-override/parallax.png)
- [assets/backgrounds/parallax.mono.png](/assets/examples/mono-override/parallax.mono.png)
