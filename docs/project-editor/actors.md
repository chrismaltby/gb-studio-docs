---
sidebar_position: 3
---

# Actors

Actors are the characters and objects in your scene that you can interact with.

## Adding an Actor
To add an actor to a scene click the **` + `** button in the _Editor Tools_ and select _Actor_ from the menu (alternatively press the **A** key), then click on the scene and position where you wish to place the actor.

<img src="/img/screenshots/add-actor.gif" style={{width:300}} />

## Actor Properties
- **Name** - Names your actor. Giving your actors a *name* helps organize them in your project. An actor's name will be visible in any drop-down menu that asks you to pick an actor, such as the [Hide Actor](/docs/scripting/script-glossary/actor#hide-actor) event.
- **Position** - Sets the X and Y position where the actor will be positioned in a scene. You can also change this by dragging the actor around the the _Game World_.
- **Pin to Screen** - Using the _Pin Button_ next to the actor position you can choose to pin the actor to the screen which cause it to not move as the game screen scrolls.
- **Sprite Sheet** - Choose which sprite graphics should be used to display the actor.
- **Movement Speed** - Choose how fast the actor should move when scripting events are used.
- **Animation Speed** - Choose how fast the actor animations should play.
- **Collision Group** - Choose if scripts should play automatically when colliding with this actor.

### Pin to Screen
When an actor is pinned it will appear in a fixed location as your game camera moves. The pinned actor will not move without a script, and does not create collisions with other actors in your scene.

Enabling this property will temporarily change your scene to be blacked-out, with a ``160px x 144px`` boundary in the top-left corner showing part of your original scene. Use your mouse to drag the actor to where you want it to be pinned to the screen.

Select a different actor, the scene, or the project to return the blacked-out view of your scene to normal.

### Collision Groups
Actors can be given a collision group in the _Editor Sidebar_. When enabled, the option to run scripts based on collisions will appear in the _Editor Sidebar_. To learn more about On Hit scripts, see the documentation for [Scripting](/docs/scripting).

## Scripting
Actors can contain multiple scripts that will be called at different points in your game.

- **On Interact:** This is called if the player stands in front of this actor and presses the _Interact_ button.
- **On Hit:** (only if collision group is set) This is called when this actor collides with either the player or a projectile with a specified collision group
- **On Init:** Called as soon as the scene is loaded in game.
- **On Update:** Repeatedly called while the actor is on screen, and once the script finishes it will repeat. You can use this to create movement scripts

To start building a script, select an actor, click the script type you want to edit and click the _Add Event button_ in the _Editor Sidebar_ to open the event menu. Select an event to add it to the script.

For more information see the documentation for [Scripting](/docs/scripting).

## Limits
There are limits to how actors and their sprites can be used in GB Studio. These limits are to make sure your game appears as intended, as well as to keep your actor logic running smoothly. The exact limits depend on the complexity of the background image used in your scene, see [Scenes](/docs/project-editor/scenes/#actor-limits) for more information.
