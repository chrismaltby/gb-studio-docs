---
sidebar_position: 1
---

# Scenes

A scene is a single screen of your game, it can contain multiple [actors](/docs/project-editor/actors) and [triggers](/docs/project-editor/triggers). A game is typically made-up of many scenes connected together with triggers using the _Change Scene_ event.

## Adding a Scene
Click the _**+** button_ in the _Editor Tools_ and select _Scene_ from the menu. Click on any empty space in the _Project Viewport_ to place the new scene.

<img src="/img/screenshots/add-scene.gif" style={{width:300}} />

You can use the _Editor Sidebar_ to give your scene a name and a background from your project's assets. See the documentation for [Backgrounds](/docs/assets/backgrounds) for more information on adding background images.

## Scene Properties
- **Name** - Names your scene. Useful for locating your scene with the search bar.
- **Type** - Lets you choose from the list of game modes such as _Top Down 2D_ or _Platformer_.
- **Background** - Lets you choose a background from the `assets/backgrounds` folder.
- **Background Palettes (Color Mode Only)** - The eight palettes that will be used when colorizing the scene.
- **Sprite Palettes (Color Mode Only)** - The eight palettes that will be used for sprites in your scene.
- **Player Sprite Sheet** - Used to set a custom player sprite for this scene. By default the scene will use the default player sprite for the selected scene _type_.

## Parallax Mode
Clicking the _Parallax Toggle Button_ to the right of the _Background Selector_ allows you to turn on parallax mode for the scene. When parallax mode is enabled you can split the background into up to three slices which can be modified to scroll at different speeds as the camera moves in game.

<img src="/img/screenshots/parallax.png" style={{width:550}} />

## Scripting
Scenes can contain an _On Init_ script that will be called as soon as the scene is loaded in game. You can use this to do things like playing music as the scene loads, configuring events to happen on button presses, initialise actors based on the values of variables, and much more.

You can also define scripts to call when the player collides with _Actors_ that have a _Collision Group_ set by clicking the _On Hit_ tab and choose a collision group.

To start building a script, select a scene, click the script type you want to edit and click the _Add Event button_ in the _Editor Sidebar_ to open the event menu. Select an event to add it to the script.

For more information see the documentation for [Scripting](/docs/scripting).

## Adding Collision to a Scene
Select the _Collision Tool_ from the _Editor Tools_. There are 6 collision types that can be added.

- **Solid** Stops colliding actors from entering the tile on any side.
- **Top/Bottom/Left/Right** Stops colliding actors from entering the tile from that specific side. This is useful for one-way collision and semi-solid platforms.
- **Ladder (Platformer only)** Allows moving up and down in _Platformer_ scenes.

Each tile can hold a maximum of 1 ladder and 3 collision sides. Adding 4 collision sides will replace the sides with a single solid block. Ladders will not replace existing collision when placed on top of another collision.

## Colorizing a Scene
Select the _Colorizer Tool_ from the _Editor Tools_. There are 8 palettes types that can be added to a scene with Color Mode enabled. Palettes can be adjusted in Settings. Note that the 8th palette in a scene will also be used for _Dialogue Windows_ and menus.

The palettes used in the _Colorizer Tool_ can be swapped out for existing palettes (such as the UI palette) by long-clicking on a palette.

For more information about the drawing mode used for the _Colorize Tool_ and the _Collision Tool_, see [Keyboard Shortcuts](/docs/getting-started/keyboard-shortcuts).

## Scene Limits
There are several limits that GB Studio has put in place to keep game performance consistent, and to minimize visual issues.

Each scene can have a maxmimum of 20 actors, and 30 triggers, and between 96 and 64 sprite tiles depending on the complexity of the background used. You can check this information by selecting a scene and looking for the gray bar under your scene that reads: ``A: 0/20 S: 0/96 T: 0/30``. The letters on this bar represent the following:
- ``A:`` represents the number of actors that the scene is using.
- ``S:`` represents the number of unique sprite tiles that each actor is using in their sprite sheet.
- ``T:`` represents the number of triggers that the scene is using.

### Actor Limits
Each scene can have a maximum of 20 actors. Ideally, there should never be more than 10 actors within a 20 x 18 tile boundary, equivalent to ``160px x 144px``. Clustering more than 10 actors together in a scene will cause some actors to become invisible in-game. GB Studio will warn you if it thinks this will be the case for a scene:

<img src ="https://user-images.githubusercontent.com/16776042/94731004-03c44100-035c-11eb-917f-c0589052e604.png" style={{width: 300}} />

You can address this message by moving or deleting actors so no more than 10 will be seen in a 20 x 18 tile boundary. You can use the [Eraser Tool](/docs/getting-started/keyboard-shortcuts/#Game-World) to delete actors. Actors will still become invisible if more than 10 actors move into the screenspace after the scene starts.

### Sprite Tile Limits
The exact number of sprite tiles available in a scene depends on the amount of tiles used in the selected background image as some memory is shared between sprite and background tiles. If the selected background uses less than 128 unique tiles, you can use 96 sprite tiles, each background tile above 128 takes away from sprite tiles available until a minimum of 64 tiles are available.

### Trigger Limits
Each scene can have a maximum of 30 triggers. You can use the [Eraser Tool](/docs/getting-started/keyboard-shortcuts/#Game-World) to delete triggers.
