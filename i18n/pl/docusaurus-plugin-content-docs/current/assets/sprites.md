---
sidebar_position: 1
---

# Obiekty (sprites)

Sprites are the graphics used by playable or interactive characters in your scenes. Add sprites to your game by including `.png` files in your project's `assets/sprites` folder.

## Simple Sprites

The easiest way to create a new sprite in GB Studio is to use simple sprites. A simple sprite consists of one or more `16px` x `16px` frames laid out horizontally in file. A sprite with a single frame will be `16px` x `16px` while a sprite with three frames will be `48px` x `16px`.

### Static sprites

For sprites that only need a single frame (e.g. static items such as signposts) create your `.png` as a `16px` x `16px` image containing just the one frame required.

<img src="/pl/img/sprites/cat.png" className="HelpSprite" />

### Animated sprites

If you want to have sprites that play short animations you can make a `.png` with between 2 frames at `32px` x `16px` and 25 frames at `400px` x `16px`. Using these sprites on an actor will enable you to select which frame you want to display by default and will allow an animation to be played at a specified speed.

<img src="/pl/img/sprites/fire.png" className="HelpSprite" />

### Actor

To make sprites that can face in four directions turning towards the player, create a `48px` x `16px` `.png` containing the three frames forward facing, upwards facing and right facing. The left facing sprite is automatically generated by flipping the right facing sprite horizontally so does not need to be created.

<img src="/pl/img/sprites/npc001.png" className="HelpSprite" />

### Animated Actor

To make sprites that have animated movement, or that can be used as a player character, create a `96px` x `16px` `.png` containing six frames, two forward facing, two upwards facing and two right facing animation frames.

As there are limits to how many sprites tiles can be loaded into a single scene don't use animated sprites unless you know your NPCs will need animated movement.

<img src="/pl/img/sprites/player.png" className="HelpSprite" />

## Sprite Editor

When you want to progress to making more complex sprites you can use the _Sprite Editor_ by clicking the _Project View Button_ and selecting _Sprites_.

<img title="Sprite Editor" src="/pl/img/screenshots/sprite-editor-v3.png" width="752" />

### Composition of a Sprite

A sprite consists of:
-  Multiple _Animation States_, by default only a single animation state is created for a sprite, you can make a new one by clicking the `+` button in the _Animation Navigator_.
    - Each animation state consists of multiple animation frames, viewable in the _Frames Navigator_, click the `+` button to create a new frame, and click a frame to view it in the _Frame Canvas_ for editing.
- A _Tile Palette_, this is the `.png` file from your assets folder. Click into the tiles palette to select a tile, you can then draw it by clicking into the _Frame Canvas_.
- A _Canvas Size_ this is the width and height of your _Frame Canvas_, set this from the _Editor Sidebar_ to the size you want your sprite to be.
- A _Collision Bounding Box_ this is the width, height and position of an invisible box used for collision detection within the game engine, set this to fit as closely as possible around the collidable area of your sprite.

### Animation Settings

In the _Editor Sidebar_ you can choose from a list of sprite types, setting this will determine the number of animations available for your sprite and what names they have in the _Animation Navigator_. For example while you can use any sprite type for a _Platformer_ scene player, it's recommended to set the type to be _Platformer Player_ as this will allow you to configure the `Jump` and `Climbing` animations.

Some sprite types also allow you to "Flip 'Right' to Create 'Left' Facing Frames", this lets you create both the left and right sprite animations from a single animation that gets flipped automatically saving you from creating these animations manually.

### Animation States

Using the `+` button in the _Animation Navigator_ you can create new _Animation States_, these let you create custom animations that can be triggered from scripts.

Once you've created a new _Animation States_ you can name it by typing in the _State Name_ input in the _Editor Sidebar_ or by selecting an existing sprite name. The list of sprite names is global for your project and it's recommended to keep the number of unique names low as each one you add increases the amount of memory required for all sprites in your game, e.g rather than having two sprites with states `Explode` and `Squash`, consider making a single state used by both called `Destroy`.

To switch which animation state an actor should use in your game you can use a `Set Actor Animation State` event. This allows you to choose an actor and which animation state you should switch to. Make sure that the spritesheet you're using has animations defined for the state you've chosen in the event!

### Frame Canvas

Once you have selected an _Animation_ and _Frame_ to edit you can use the _Tile Palette_ and _Frame Canvas_ to create an animation frame.

Start by clicking on the tile you wish to use in the _Tile Palette_.
- You can select multiple tiles by clicking and dragging in the _Tile Palette_
- By default the _Tile Palette_ snaps to an `8px` grid, this is to increase the chance of tile reuse as each unique tile you use in your sprite takes away from limits when used in scenes. If you know what you're doing and want to disable this grid you can turn on `Precision Mode` by clicking the button in the top right of the _Tile Palette_ or by holding `Alt` while making your selection.

Once you have a tile selection click into the _Frame Canvas_ to draw the tiles into your frame. You can then move tiles around in the _Frame Canvas_ by dragging them and if you have tile selection you can move frames to the front or back and flip them horizontally or vertically by using the _Editor Sidebar_.

### Onion Skin

Using the _Onion Skin_ button you can toggle the _Onion Skin_ feature. This displays a semi-transparent version of the previous frame behind the _Frame Canvas_ allowing you to more easily make decisions about the flow of the animation. 

### Deleting Tiles and Frames

To delete a tile or frame, select it in either the _Frame Canvas_ or _Frames Navigator_ and press `Backspace` on your keyboard. Alternatively to can make your selection then click the dropdown button arrow in the top right of the _Editor Sidebar_ to access a menu where deleting is available.

## Image Requirements

Sprite `.png`s must only contain the following four colors:

<div><div className="Swatch" style={{background:"#071821"}}></div><div className="SwatchLabel">#071821</div></div>
<div><div className="Swatch" style={{background:"#86c06c"}}></div><div className="SwatchLabel">#86c06c</div></div>
<div><div className="Swatch" style={{background:"#e0f8cf"}}></div><div className="SwatchLabel">#e0f8cf</div></div>
<div><div className="Swatch" style={{background:"#65ff00"}}></div><div className="SwatchLabel">#65ff00</div></div>

<div className="InfoBox">
Download the GB Studio Palette Swatches for:<br />
<a href="/assets/swatches/gb-studio-photoshop.aco">Adobe Photoshop</a><br />
<a href="/assets/swatches/gb-studio-aseprite.aseprite">Aseprite</a>
</div>

The color `#65ff00` is used to represent a transparent background in game and will be invisible in-game and in the _World Editor_.

Colors that are not one of the above hex codes will be matched to the nearest color. Unlike backgrounds, the color `#306850` can not be used in sprites.
