---
sidebar_position: 10
---

# Migration Guide

## GB Studio 3 to 4

### Music

GB Studio 3.2.1 and below had an issue where wave instrument lengths were being saved in a way that was incompatible with hUGETracker. From 4.0.0 onwards this issue has been fixed but `.uge` files created with older GB Studio versions may not sound correct if you have set length values on your wave instruments.

If you find that your music is affected by this issue you can use this migrator tool to fix your files.

https://chrismaltby.github.io/gbs-uge-migrator/

### Plugins

If your project uses any [plugins](/docs/extending-gbstudio/plugins) then it's possible you may need to download newer versions for compatibility with GB Studio 4.

If using [engine plugins](/docs/extending-gbstudio/plugins#engine-plugins) it is now a requirement that the plugin contain an `engine.json` file stating which engine version it is intended to work with. Plugin authors will need to create a file `PLUGIN/engine/engine.json` containing at least the following:
```
{"version": "4.0.0-e0"}
```
Replacing `4.0.0-e0` with the engine version the plugin supports.

## GB Studio 2 to 3

GB Studio 3.0 introduces a number of changes to previous versions in an effort to improve and future proof the game engine and project format. While we try our best to automate as much of the migration as possible there are a few instances where it was not possible to do that this time and you may need to make some changes to your project if you wish to migrate from previous GB Studio versions.

### Actors

- Actors will now always animate while stationary (allowing idle animations), which may cause issues when you want to step through animations manually (like checkboxes in the GB Studio 2.0 sample game menu scenes), if you wish to control an animation manually as before, set the Actor’s animation speed to “None”. You should also consider using the new [Sprite Editor](/docs/assets/sprites/#sprite-editor) and [Animation States](/docs/assets/sprites/#animation-states) as you can accomplish similar goals with a lot more flexibility.

- If you have many actors in a scene that use `Actor Set Sprite Sheet` events you may find your sprite tile counter has become too high. This is because in GB Studio 3.0 we made a different tradeoff in how to handle this situation, previously all scripted sprite sheets needed to be loaded into memory as the scene initialised limiting how many unique sprites could be used in a single scene, instead we now reserve memory for every actor that uses scripted sprite sheets but you can apply as many sprite sheets as you want to a single actor. The recommended solution is to replace switching sprite sheets with using [Animation States](/docs/assets/sprites/#animation-states) instead. For an example of a scene affected by this compare the scene "Space Battle" from the GBC Sample Project in GB Studio 2 with the version in GB Studio 3, where ship explosion animations are now part of the enemy sprite animations rather than a separate sprite sheet.

- If you are migrating from GB Studio 2 you may notice the per scene actor limits is now reduced to 20 actors per scene, this may increase in future releases. Depending on how you were using actors you may be able to use larger sprites to achieve the same effect.

### Sprites

- The default player sprite is now set per scene type (_Top Down 2D_, _Platformer_, etc), so there is no need to switch to a different player sprite manually anymore in the scene init script, unless you wish to do so conditionally. When migrating a project using multiple scene types you will need to set the default player sprite for each scene type from the [Settings View](/docs/settings/#default-player-sprites).

- Collision bounding boxes can now be configured per sprite. Previously all actors had a collision box of `16px` x `16px` and the player had a collision box of `8px` x `16px`. When migrating your project we set the spritesheet you set as the player default to use a `8px` x `16px` collision box to maintain compatibility with previous versions but if you ever changed the player sprite though scripts you may also need to set the collision boxes on these sprites manually using the [Sprite Editor](/docs/assets/sprites/#sprite-editor).

- Platformer player sprites now have a custom jump and climb animation which you will need to configure. To use these go into the [Sprite Editor](/docs/assets/sprites/#sprite-editor), select your platform player sprite, and in the right hand sidebar set the animation type to “Platform Player” which adds a few more animations you can define for the sprite, see [Animation Settings](/docs/assets/sprites/#animation-settings) for more information.

### Scenes

- Ladder tiles now snap the player sprite to the center of the tile while climbing. If you are using ladders in your game, make sure to test them as you may need to reposition the collision tiles to match the new alignment.

### Save / Load

- When loading a saved game, the game engine now continues any scripts that were previously running. This means that if you included a message such as “It is now safe to turn off your system.” immediately after the save, it will also be shown when loading that game. The save data event now includes an _On Save_ callback. This will only be called when you save, and not when you load the game back. If you were previously displaying a message after saving, you will likely need to move it into the _On Save_ script. See the save points in the latest example projects for how to implement this.
