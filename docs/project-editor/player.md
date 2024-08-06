---
sidebar_position: 2
---

# The Player

## Start Position

The player starting position is indicated in the game world view by the <img src="/img/screenshots/player-start.png" style={{height:12}} /> icon.

Clicking in the background between scenes switches the sidebar back to the Project Editor where you'll have options to set the player starting scene, position, and direction.

You can also change the player start position by dragging the <img src="/img/screenshots/player-start.png" style={{height:12}} /> icon and can even drag between scenes.

:::tip
Another way to set the player start position is by right clicking on the scene and selecting which direction you want the player to face from the dropdown menu.

<div className="drop-shadow"><img src="/img/screenshots/set-starting-pos.gif" width="320" className="clip-bottom" /></div>
:::

## Default Sprite Sheet

Each scene type (_Top Down 2D_, _Platformer_ etc.) can have a different default player sprite sheet that will be used in any scenes of this type unless you override this for the specific scene.

You can edit the default player sprite sheets for each scene type from the [Settings View](/docs/settings).

## Scripting

Most actor script events can also be applied to the player. In addition you can use [Set Player Sprite Sheet](/docs/scripting/script-glossary/actor#set-player-sprite-sheet) event to change the graphics used for the player character mid-game. Changing the player sprite sheet will only affect the current scene.

When switching between scenes the player will always become visible at the scene start location regardless of previous visibility options. if you want the player to be hidden on a scene e.g when showing a title screen or cutscene add a [Hide Actor](/docs/scripting/script-glossary/actor#hide-actor) event to the scene's _On Init_ script.
