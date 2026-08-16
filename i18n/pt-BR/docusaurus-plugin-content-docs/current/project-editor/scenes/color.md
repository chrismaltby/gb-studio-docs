# Color

## Coloring a Scene

Select the _Color Tool_ from the _Editor Tools_. There are 8 palettes types that can be added to a scene with Color Mode enabled. Palettes can be adjusted in Settings. Note that the 8th palette in a scene will also be used for _Dialogue Windows_ and menus.

The palettes used in the _Color Tool_ can be swapped out for existing palettes (such as the UI palette) by long-clicking on a palette.

For more information about the drawing mode used for the _Color Tool_ and the _Collision Tool_, see [Keyboard Shortcuts](/docs/getting-started/keyboard-shortcuts).

## Automatic Color

If your image is already a color `.png` file you can try switching to using `Automatic` Background Palettes using the _Editor Sidebar_.

<div className="drop-shadow margin-bottom"><img src="/img/screenshots/auto-color.gif" width="320" className="clip-bottom" /></div>

:::info
You will need to be careful to follow the same requirements about unique colors per scene and tile when using Automatic Background Palettes if you want your images to display correctly. For example, using more than 7 unique color palettes will cause palette 8 to be overwritten meaning dialogue and menu windows may not appear correctly for that scene.

When using Automatic Background Palettes, Monochrome tiles are also created automatically. If you want to support both Color and Monochrome devices you may want to provide a [Monochrome Override](/docs/assets/backgrounds#monochrome-overrides) image to give more control how the background appears on Monochrome devices.
:::

## Extract Palettes

The Background Palettes type field also includes the ability to _Extract Palettes_ from a color background image.

<div className="drop-shadow margin-bottom"><img src="/img/screenshots/extract-palettes.jpg" width="320" className="clip-bottom" /></div>

Selecting this option will read the currently selected color background image and create the palettes needed, paint the tiles in your scene and will also create a [Monochrome Override](/docs/assets/backgrounds#monochrome-overrides) image for your background.

## Tile Priority

When coloring a scene you can use the `<!>` button to set priority tiles, these tiles will appear in front of actors (on GB Color games only) allowing you to create depth in your scenes. Note that the first color in the tile's palette will be transparent and drawn behind the actors.

<img src="/img/screenshots/tile-priority.png" width="320" className="drop-shadow" />

## Magic Brush

The Magic Brush is available when adding collisions or coloring a scene and can be used to paint every tile in the scene that matches the one you clicked instantly.

<div className="drop-shadow"><img src="/img/screenshots/magic-brush.gif" width="320" className="clip-bottom" /></div>
