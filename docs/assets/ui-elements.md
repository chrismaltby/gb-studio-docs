# UI Elements

import { Swatch } from '@site/src/components/Swatch';

Your project contains a number of files in `assets/ui` with fixed file names that define parts of your game's user interface. Editing these files allows you to change the default font, set the window frame and modify the selection cursor.

If you remove any of the files in the ui folder they will be replaced with the default assets the next time you build your game allowing you to revert any unwanted changes.

## frame.png

The game engine uses [9-slice scaling](https://en.wikipedia.org/wiki/9-slice_scaling) of this image to create the frame around text boxes. Editing this image will allow you to change the frame design or set it to a solid color.

<img src="/img/ui/frame.png" class="HelpSprite" style={{width:72, height:"auto"}} />

## cursor.png

This image is used as a selection cursor when showing multiple choice options in your game.

<img src="/img/ui/cursor.png" class="HelpSprite" style={{width:24, height:"auto"}} />

## Requirements

UI PNGs must only contain the following four colors:

<Swatch color="#071821" />
<Swatch color="#306850" />
<Swatch color="#86c06c" />
<Swatch color="#e0f8cf" />

Download the GB Studio Palette Swatches for:  
[Adobe Photoshop](/assets/swatches/gb-studio-photoshop.aco)  
[Aseprite](/assets/swatches/gb-studio-aseprite.aseprite)  

## Fonts

Fonts are stored in `assets/fonts`, see [Settings](/docs/settings/#ui-elements--fonts) for more information.

## Emotes

Emotes are stored in `assets/emotes` and must be defined as `16px x 16px` sized `.png` files following the same color requirements used for creating spritesheets. You can display an emote by using the `Show Emote Bubble` event in a script.

## Avatars

Avatars are stored in `assets/avatars` and must be defined as `16px x 16px` sized `.png` files following the same color requirements used for creating spritesheets. You can display an avatar in a `Display Text` event by clicking `Add Avatar` within the event.