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

  Some types, when selected, will show a <img className="gbs-icon" title="Settings Button" src="/img/screenshots/settings-button.png" width="22" /> button allowing you quick access to the scene type's [Settings](/docs/settings).

- **Background** - Lets you choose a [background](/docs/assets/backgrounds) image from the `assets/backgrounds` folder. Optionally allows extracting the color palettes automatically for color .png images.

- **Monochome Palettes** - The background palette (BGP) and two sprite palettes (OBP0 and OBP1) which are used when running a game without color.

- **Background Palettes (Color Modes Only)** - The eight palettes that will be used when coloring the scene.

- **Sprite Palettes (Color Modes Only)** - The eight palettes that will be used for sprites in your scene.

- **Player Sprite Sheet** - Used to set a custom player sprite for this scene. By default the scene will use the default player sprite for the selected scene _type_.

## Parallax Mode

When a scene is wider than 20 tiles (160px), parallax mode becomes available. You can enable it by clicking the <img className="gbs-icon" title="Parallax Toggle Button" src="/img/screenshots/parallax-button.png" width="22" /> button to the right of the _Background Selector_.

When parallax mode is enabled you can split the background into up to three slices which can be modified to scroll at different speeds as the camera moves in game.

<img src="/img/screenshots/parallax-v420.jpg" style={{width:550}} />

## Camera Bounds

When a scene is wider than 20 tiles (160px) or taller than 18 tiles (144px), the ability to limit the camera bounds of a scene becomes available. You can enable it by clicking the <img className="gbs-icon" title="Camera Bounds Toggle Button" src="/img/screenshots/camera-bounds-button.png" width="22" /> button to the right of the Background Selector.

<img className="margin-bottom" src="/img/screenshots/camera-bounds-v420.jpg" style={{width:550}} />

When enabled this lets you set the minimum and maximum area that will be viewable by the camera in your scene. It's also possible to set these values dynamically using a [Set Camera Bounds](/docs/scripting/script-glossary/camera#set-camera-bounds) event.

<div className="drop-shadow margin-bottom"><img src="/img/screenshots/camera-bounds-preview.jpg" width="320" className="clip-bottom" /></div>

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
