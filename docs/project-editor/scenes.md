---
sidebar_position: 1
---

# Scenes

A scene is a single screen of your game, it can contain multiple [actors](/docs/project-editor/actors) and [triggers](/docs/project-editor/triggers). A game is typically made-up of many scenes connected together with triggers using the [Change Scene](/docs/scripting/script-glossary/scene#change-scene) event.

## Adding a Scene

Click the **` + `** button in the _Editor Tools_ and select _Scene_ from the menu. Click on any empty space in the _Project Viewport_ to place the new scene.

<div className="drop-shadow margin-bottom"><img src="/img/screenshots/add-scene-v4.gif" width="320" className="clip-bottom" /></div>

You can use the _Editor Sidebar_ to give your scene a name and a background from your project's assets. See the documentation for [Backgrounds](/docs/assets/backgrounds) for more information on adding background images.

## Scene Properties

- **Name** - Names your scene. Useful for locating your scene with the search bar and [scene navigator](/docs/project-editor/navigator).

:::tip
Using `/` characters in your scene's name will cause it to appear within folders in the scene navigator (e.g. `ui/title screen` will appear as `title screen` within the `ui` folder)
:::

- **Type** - Lets you choose from the list of game modes such as _Top Down 2D_ or _Platformer_. This option changes how the scene plays while in game. Using [plugins](/docs/extending-gbstudio/plugins) it's possible to add additional scene types here and modify the inbuilt types.

- **Background** - Lets you choose a [background](/docs/assets/backgrounds) image from the `assets/backgrounds` folder. Optionally allows extracting the color palettes automatically for color .png images.

- **Background Palettes (Color Modes Only)** - The eight palettes that will be used when colorizing the scene.

- **Sprite Palettes (Color Modes Only)** - The eight palettes that will be used for sprites in your scene.

- **Player Sprite Sheet** - Used to set a custom player sprite for this scene. By default the scene will use the default player sprite for the selected scene _type_.

## Parallax Mode
Clicking the _Parallax Toggle Button_ to the right of the _Background Selector_ allows you to turn on parallax mode for the scene. When parallax mode is enabled you can split the background into up to three slices which can be modified to scroll at different speeds as the camera moves in game.

<img src="/img/screenshots/parallax-v4.png" style={{width:550}} />

## Common Tilesets

:::warning
This is an advanced technique that may require an understanding of how graphics memory is located and loaded in your game.
:::

When using the [Change Scene](/docs/scripting/script-glossary/scene#change-scene) event with _Fade Speed_ set to `Instant` you'll often see _"glitchy"_ graphics as you move to the next scene. This is because there is slight delay loading tile data and for a small period of time the scene will show the previous scene's tile data using the new scene's layout. To confirm this you can use the [VRAM panel](/docs/debugger) in the Debugger.

To help fix this problem you can specify a [tileset](/docs/assets/tilesets) that is shared between the two scenes. Tilesets are images from the `assets/tilesets` folder. When two scenes share a common tileset, the common tiles will always be loaded in the same locations in memory allowing more seamless transitions.

e.g. these two scenes have the same common tileset
<img src="/img/screenshots/common-tilesets.png" className="drop-shadow margin-bottom" />

which allows instantly switching between them
<div className="drop-shadow margin-bottom"><img src="/img/screenshots/common-tileset-example.gif" width="320" className="clip-bottom" /></div>

The assets used in this example are:

- [assets/backgrounds/east.png](/assets/examples/common-tilesets/east.png)
- [assets/backgrounds/west.png](/assets/examples/common-tilesets/west.png)
- [assets/tilesets/town.png](/assets/examples/common-tilesets/town.png)

:::note
Notice how the tileset image doesn't need to only contain unique tiles (although it can if you'd prefer), when running your game only the unique tiles found in the image will be loaded.
:::

## Scripting

Scenes can contain an _On Init_ script that will be called as soon as the scene is loaded in game. You can use this to do things like playing music as the scene loads, configuring events to happen on button presses, initialise actors based on the values of variables, and much more.

You can also define scripts to call when the player collides with _Actors_ that have a _Collision Group_ set by clicking the _On Hit_ tab and choose a collision group.

To start building a script, select a scene, click the script type you want to edit and click the _Add Event button_ in the _Editor Sidebar_ to open the event menu. Select an event to add it to the script.

For more information see the documentation for [Scripting](/docs/scripting).

## Adding Collision to a Scene

Select the _Collision Tool_ from the _Editor Tools_. There are 6 default collision types that can be added.

- **Solid** Stops colliding actors from entering the tile on any side.
- **Top/Bottom/Left/Right** Stops colliding actors from entering the tile from that specific side. This is useful for one-way collision and semi-solid platforms.
- **Ladder (Platformer only)** Allows moving up and down in _Platformer_ scenes.

Each tile can hold a maximum of 1 ladder and 3 collision sides. Adding 4 collision sides will replace the sides with a single solid block. Ladders will not replace existing collision when placed on top of another collision.

Additionally there is a dropdown menu allowing you view additional tiles:

- **Slope Tiles** - These tiles can be used to add slopes to your scene (Platformer only), you might find it easier to use the [Slope Brush](#drawing-slopes) instead rather than placing these tiles manually
- **Extra Tiles** - These tiles are currently unused by GB Studio and may be given a purpose at some point in the future, you may place them now and [modify your game engine](/docs/extending-gbstudio/engine-eject) to use them but this may prevent you from moving your project to newer GB Studio versions.

## Drawing Slopes

The Slope Brush is a quick way to add slope collisions to your scenes (Platformer only). With the brush selected click on the starting tile and drag to one tile __after__ where you want the slope to be placed. When placing a shallow slope you can hold `Shift` while dragging to offset the slope vertically.

It's also possible to use this tool to draw horizontal and vertical collisions by holding `Ctrl` while dragging. When dragging left to right you will create a Top collision, right to left creates a Bottom collision, top to bottom creates a Left collision and bottom to top creates a Right collision. Holding `Ctrl + Shift` will flip the collision direction (Top will become Bottom etc).

<div className="drop-shadow"><img src="/img/screenshots/slopes.gif" width="320" className="clip-bottom" /></div>

## Colorizing a Scene

Select the _Colorizer Tool_ from the _Editor Tools_. There are 8 palettes types that can be added to a scene with Color Mode enabled. Palettes can be adjusted in Settings. Note that the 8th palette in a scene will also be used for _Dialogue Windows_ and menus.

The palettes used in the _Colorizer Tool_ can be swapped out for existing palettes (such as the UI palette) by long-clicking on a palette.

For more information about the drawing mode used for the _Colorize Tool_ and the _Collision Tool_, see [Keyboard Shortcuts](/docs/getting-started/keyboard-shortcuts).

## Automatic Color

If your image is already a color `.png` file you can try switching to using `Automatic` Background Palettes using the _Editor Sidebar_.

<div className="drop-shadow margin-bottom"><img src="/img/screenshots/auto-color.gif" width="320" className="clip-bottom" /></div>

:::info
You will need to be careful to follow the same requirements about unique colors per scene and tile when using Automatic Background Palettes if you want your images to display correctly. For example, using more than 7 unique color palettes will cause palette 8 to be overwritten meaning dialogue and menu windows may not appear correctly for that scene.

When using Automatic Background Palettes, Monochrome tiles are also created automatically. If you want to support both Color and Monochrome devices you may want to provide a [Monochrome Override](/docs/assets/backgrounds#monochrome-overrides) image to give more control how the background appears on Monochrome devices.
:::

## Tile Priority
When colorizing a scene you can use the `<!>` button to set priority tiles, these tiles will appear in front of actors (on GB Color games only) allowing you to create depth in your scenes. Note that the first color in the tile's palette will be transparent and drawn behind the actors.

<img src="/img/screenshots/tile-priority.png" width="320" className="drop-shadow" />

## Magic Brush

The Magic Brush is available when adding collisions or colorizing a scene and can be used to paint every tile in the scene that matches the one you clicked instantly.
<div className="drop-shadow"><img src="/img/screenshots/magic-brush.gif" width="320" className="clip-bottom" /></div>

## Scene Limits

There are several limits that GB Studio has put in place to keep game performance consistent, and to minimize visual issues.

Each scene can have a maxmimum of 20 actors, and 30 triggers, and between 192 and 64 sprite tiles depending on project settings and the complexity of the background used. You can check this information by selecting a scene and looking for the gray bar under your scene that reads: ``A: 0/20 S: 0/96 T: 0/30``. The letters on this bar represent the following:
- ``A:`` represents the number of actors that the scene is using.
- ``S:`` represents the number of unique sprite tiles that each actor is using in their sprite sheet.
- ``T:`` represents the number of triggers that the scene is using.

### Actor Limits

Each scene can have a maximum of 20 actors. Ideally, there should never be more than 10 actors within a 20 x 18 tile boundary, equivalent to ``160px x 144px``. Clustering more than 10 actors together in a scene will cause some actors to become invisible in-game. GB Studio will warn you if it thinks this will be the case for a scene:

<img title="Actor limits" src="/img/screenshots/actor-limits.png" width="320" className="drop-shadow margin-bottom" />

You can address this message by moving or deleting actors so no more than 10 will be seen in a 20 x 18 tile boundary. You can use the [Eraser Tool](/docs/getting-started/keyboard-shortcuts/#Game-World) to delete actors. Actors will still become invisible if more than 10 actors move into the screenspace after the scene starts.

### Trigger Limits

Each scene can have a maximum of 30 triggers. You can use the [Eraser Tool](/docs/getting-started/keyboard-shortcuts/#Game-World) to delete triggers.

### Backround and Sprite Tile Limits

The memory limits for background and sprite tiles depend on whether your game's color mode is set to `Color Only`. In `Color Only` mode, approximately twice the amount of memory is available for tile data, but the game will not run on non-color devices. You can set the color mode from the [Settings](/docs/settings) section.

You can use the [VRAM panel](/docs/debugger) in the Debugger to get a visual representation of how tiles are being used in each scene in your game.

#### "Monochrome" and "Color + Monochrome" Games

When your game's color mode is set to either `Monochrome` or `Color + Monochrome` the following limits will be used:

- **64 Tiles** reserved for Sprites
- **128 Tiles** reserved for Background
- **64 Tiles** reserved for UI
- **64 Tiles** shared between Sprites and Background. The more complex your background is, the less tiles will be available for use by sprites. Note that as sprites use 8x16 sized tiles this shared area is shown as 32 sprite tiles.

If your background uses 128 tiles or fewer, you can use up to 96 sprite tiles (64 reserved + 32 shared). However, if your background uses all 192 tiles, you will only be able to use 64 sprite tiles.

<img src="/img/screenshots/tile-allocation.png" width="650"  />

#### "Color Only" Games

When your game's color mode is set to either `Color Only`, the following increased limits will be used:

- **128 Tiles** reserved for Sprites
- **256 Tiles** reserved for Background
- **128 Tiles** reserved for UI
- **128 Tiles** shared between Sprites and Background. The more complex your background is, the less tiles will be available for use by sprites. Note that as sprites use 8x16 sized tiles this shared area is shown as 64 sprite tiles.

If your background uses 256 tiles or fewer, you can use up to 192 sprite tiles (128 reserved + 64 shared). However, if your background uses all 384 tiles, you will only be able to use 128 sprite tiles.

<img src="/img/screenshots/tile-allocation-color.png" width="650"  />
