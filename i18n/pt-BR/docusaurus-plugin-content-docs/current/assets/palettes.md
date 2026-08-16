import { Swatch } from '@site/src/components/Swatch';

# Palettes

Using the _Palette Editor_ you can configure the colors available in your [Color + Monochrome](/docs/settings#color-options) or [Color Only](/docs/settings#color-options) game.

<img title="Palette Editor" src="/img/screenshots/palette-editor-v420.jpg" width="752" />

To use the palettes you must assign them to your [Scene](/docs/project-editor/scenes/) and then paint the chosen background of your scene with the [Color Tool](/docs/project-editor/scenes/color).

## Editing a Palette

To create a new palette, click the _Add Palette_ button at the top of the _Navigator_.

To rename a palette, click the _Rename Palette_ button next to the palette name, or right click the palette in the _Navigator_ and choose _Rename_.

When a palette is selected, you'll see its four colors. The colors in a palette replace the monochrome colors in your game mapping from the Lightest to Darkest.

<div className="margin-bottom">
    <Swatch color="#e0f8cf" description="Lightest" />
    <Swatch color="#86c06c" />
    <Swatch color="#306850" />
    <Swatch color="#071821" description="Darkest" />
</div>

Click a color to edit it using either **RGB** (red, green, blue) or **HSB** (hue, saturation, brightness) values. You can also paste a **Hex Value** into the _Hex Color_ input.

:::info
Because the GBC can't display the full range of colors shown on modern monitors, GB Studio will automatically convert your hex value to the closest color that can be displayed on real hardware.
:::
