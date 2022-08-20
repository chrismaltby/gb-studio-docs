---
sidebar_position: 2
---

# The Player

## Start Position

The player starting position is indicated in the game world view by the <img src="/img/screenshots/player-start.png" style={{height:12}} /> icon.

Clicking in the background between scenes switches the sidebar back to the Project Editor where you'll have options to set the player starting scene, position, and direction.

You can also change the player start position by dragging the <img src="/img/screenshots/player-start.png" style={{height:12}} /> icon and can even drag between scenes.

## Default Sprite Sheet

Each scene type (_Top Down 2D_, _Platformer_ etc.) can have a different default player sprite sheet that will be used in any scenes of this type unless you override this for the specific scene.

You can edit the default player sprite sheets for each scene type from the [Settings View](/docs/settings).

## Scripting

Most actor script events can also be applied to the player. In addition you can use _Set Player Sprite Sheet_ event to change the graphics used for the player character mid-game. Changing the sprite sheet will only affect the current scene unless you choose to _Replace Default For Scene Type_ which will causes any other scenes of the same type to also use this player sprite (unless and override was provided).

When switching between scenes the player will always become visible at the scene start location regardless of previous visibility options. if you want the player to be hidden on a scene e.g when showing a title screen or cutscene add a _Hide Actor_ event to the scene's _On Init_ script.
