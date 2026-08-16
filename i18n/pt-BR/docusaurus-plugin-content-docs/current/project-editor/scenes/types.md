---
sidebar_position: 1
---

# Scene Types

A scene’s **Type** determines how the player is controlled and how interactions work while the game is running. Internally, GB Studio uses the selected type to configure the scene when it loads and to decide what gameplay logic runs each frame.

Scene types may also change which [Collision Tiles](/docs/project-editor/scenes/collisions) are supported and which [Actor Collision Flags](/docs/project-editor/actors#collision-groups) are available.

Using [plugins](/docs/extending-gbstudio/plugins), you can also add additional scene types or modify the inbuilt ones.

## Inbuilt Scene Types

GB Studio includes several inbuilt scene types designed for common genres.

### Top Down 2D

Use this for RPG-style overworlds and grid-based movement.

- The player moves on an **8px grid** (optionally **16px**, configurable in [Settings](/docs/settings)).
- **Actor interaction:** Stand next to an actor, face them, then press the `Interact` button (default `A`) to run the actor’s **On Interact** script.
- **Trigger interaction:** When the player steps onto a trigger, the trigger’s **On Enter** script runs. When the player steps off that trigger (onto a non-trigger tile), its **On Leave** script runs.

### Logo

Use this for title screens, splash screens, and other static displays.

The Logo scene type contains minimal gameplay logic (for example, it does not display a controllable player), but it allows more complex backgrounds than normal scenes.

Normally, because of [scene limits](/docs/project-editor/scenes/limits#background-and-sprite-tile-limits), a single scene background can contain up to **128 unique tiles** (or **256** in `Color Only`). A full screen is **20 tiles wide × 18 tiles high** (360 tiles), so detailed images can exceed the unique tile limit.

Logo scenes are designed to display these more complex images without needing to simplify your art to fit standard scene tile limits.

### Platformer

Use this for side-scrolling or vertical platforming levels.

Platformer scenes provide detailed control over player movement, including acceleration, velocity and gravity, and support optional features such as:

- Running
- Jumping / Double Jump
- Wall Jump
- Floating
- Dashing
- Ladders

Each feature can be enabled/disabled in settings so unused mechanics don’t affect your game's performance.

### Adventure

Use this for top-down view games with smooth, non-grid based, movement.

Adventure scenes are similar to Top Down 2D, but the player is not locked to a grid. Movement is more fine-grained (similar to Platformer), and you can optionally enable features such as Run, Dash, and pushing state.

- The player can move diagonally (or you can enforce **4-way movement**).
- You can restrict facing direction to **Horizontal Only**, which can also suit side-scrolling beat ’em up style games.

### Point and Click

Use this for cursor-driven interaction.

In Point and Click scenes, the player character is treated as a **cursor**. Pressing the `Interact` button will interact with [Triggers](/docs/project-editor/triggers) in the scene.

### Shoot ’Em Up

Use this for classic horizontal or vertical scrolling shooters.

- The scroll direction is determined by the **initial direction the player is facing** when they enter the scene.
- In the scene type settings, you can either:
  - Lock player movement to a single screen edge, or
  - Allow free movement across the full screen.
