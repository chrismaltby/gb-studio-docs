---
sidebar_position: 3
title: Master Course — English
description: Project-driven GB Studio training from first launch to advanced engine work.
---

# GB Studio Master Course — English

This course is a guided learning companion to the GB Studio reference documentation. The reference documentation remains the source of truth; this course focuses on *how to learn, practice, combine, debug, and ship* the features described there.

Each chapter follows the same rhythm: understand the mental model, build something small, inspect the result, deliberately break one part, debug it, and finish with a mastery check. Keep a throwaway practice project beside your real project so experiments stay cheap.

## 1. Install GB Studio and prove the edit → build → run loop

### Mental model

GB Studio is an editor plus a build pipeline. What you see in the editor is project data; what the player runs is generated output. Learning becomes much faster when you stop treating “Build” as a final step and use it as a constant feedback loop.

### Workshop

1. Install the build that matches your operating system and CPU.
2. Create or open a known-good sample project.
3. Run the project before changing anything. This proves the toolchain works.
4. Change one visible thing: a line of dialogue, an actor position, or a palette.
5. Run again and confirm only the intended behavior changed.
6. Locate the project folder, `.gbsproj`, assets, and `build` output.
7. Export a ROM and a web build so you understand that previewing and shipping are related but separate workflows.

### Common failure modes

- Debugging project logic before confirming the sample project builds.
- Mixing multiple GB Studio versions in one project without noting the change.
- Treating generated `build` output as source material.

### Mastery check

You should be able to explain where the editable project lives, where generated output lives, and how to reproduce one visible change from edit to running game.

References: [Installation](/docs/installation), [Building Your Game](/docs/build).

## 2. Project anatomy, saving, recovery, and Git

A GB Studio project is more than the `.gbsproj` file. Art, audio, fonts, plugins, optional engine overrides, and project data work together. Keep the project root as the unit you back up and version.

### Workshop

1. Save the project and find the `.gbsproj.bak` backup.
2. Copy the project to a disposable folder and practice recovery from the backup.
3. Initialize Git at the project root.
4. Ignore generated `build` output.
5. Make a small edit, inspect the diff, commit it, then revert it.
6. Learn to make small commits that describe intent rather than “big update”.

### Why this matters

The project format is deliberately friendly to version control. Git gives you a history of *decisions*, not just files. That becomes essential when a scene change, plugin update, or engine experiment causes a regression days later.

References: [Saving and Loading](/docs/getting-started/saving-loading).

## 3. Learn the editor as a system

The editor becomes much easier once you divide it into responsibilities: the Navigator finds things, the Game World arranges things, the sidebar edits the selected thing, Project Views switch asset domains, and scripts define behavior.

### Practice drill

Without using the mouse more than necessary, practice these actions until they feel automatic: select mode, add actor, add trigger, add scene, erase, collisions, player start position, pan, zoom, scene search, run, save, and export ROM. Then repeat with keyboard shortcuts.

Do not memorize every shortcut at once. Memorize the five actions you repeat most, then add more when friction appears.

References: [Project Editor](/docs/project-editor), [Keyboard Shortcuts](/docs/getting-started/keyboard-shortcuts), [Navigator](/docs/project-editor/navigator).

## 4. Scene types: choose behavior before scripting around it

Scene Type is not a cosmetic label. It selects a gameplay foundation and affects movement, collisions, interaction, and available settings.

### Built-in mental map

- **Top Down 2D:** grid-oriented RPG/overworld movement.
- **Adventure:** smoother top-down movement, optional run/dash behavior.
- **Platformer:** gravity, velocity, jumping, ladders, wall/double jump and related mechanics.
- **Point and Click:** cursor-like player interacting with triggers.
- **Shoot ’Em Up:** scrolling shooter behavior.
- **Logo:** static display optimized for complex full-screen art.

### Workshop

Create one tiny scene of each type. Use the same background where possible. Run each before adding custom logic. Write down what changed *without scripts*. This separates engine-provided behavior from your own behavior.

### Design rule

Do not rebuild a built-in mechanic with dozens of events until you have tested whether scene settings already provide it. Fewer custom systems mean fewer states to debug.

References: [Scene Types](/docs/project-editor/scenes/types), [Settings](/docs/settings).

## 5. Backgrounds, tiles, camera bounds, parallax, and common tilesets

Game Boy graphics are tile-based, so “image size” and “unique visual information” are different constraints. A large image can be efficient if it reuses tiles; a small image can be expensive if nearly every 8×8 region is unique.

### Workshop: build an efficient scrolling area

1. Create a background whose dimensions are multiples of 8 pixels.
2. Keep a visible repeated pattern so you can reason about tile reuse.
3. Import it into a scene wider than one screen.
4. Enable camera bounds and deliberately restrict part of the map.
5. If the composition allows it, enable parallax and split the background into slices.
6. Build a neighboring scene that shares a common tileset.
7. Compare a normal fade transition with an instant transition using common tiles.
8. Open the debugger’s VRAM view and observe how art choices appear as memory pressure.

### Hardware habits

- Design on an 8×8 grid.
- Reuse visual motifs intentionally.
- Measure unique tiles instead of guessing.
- Use Logo scenes for full-screen art when normal scene limits are the wrong tool.
- Use common tilesets to stabilize tile placement across instant transitions.

References: [Scenes](/docs/project-editor/scenes), [Backgrounds](/docs/assets/backgrounds), [Scene Limits](/docs/project-editor/scenes/limits), [Debugger](/docs/debugger).

## 6. Collisions, the player, and movement

Collisions are a map of where movement is allowed; actor collision flags are properties of moving entities. Keep those concepts separate.

### Workshop

1. Paint solid collision around a small room.
2. Replace one wall section with directional collision and test both approach directions.
3. Create a Platformer scene and draw a slope with the slope brush.
4. Add ladder collision and test climbing.
5. Use the Magic Brush to apply the same collision to repeated visual tiles.
6. Move the player start position and facing direction.
7. Change the default player sprite for the scene type, then override it in one scene.
8. Change controls and verify both Play Window and exported web behavior.

### Debugging rule

When movement is wrong, first identify whether the cause is scene type, engine setting, collision tile, actor collision flag, script, or player configuration. Changing all six at once destroys evidence.

References: [Collisions](/docs/project-editor/scenes/collisions), [The Player](/docs/project-editor/player), [Settings](/docs/settings).

## 7. Actors, triggers, and responsibility boundaries

Use **actors** for characters and objects that have identity, visuals, position, animation, and interaction. Use **triggers** for invisible spatial regions that should run logic when the player enters or leaves.

### Workshop: a locked door

1. Add a door actor and a trigger in front of it.
2. Give the door a clear name.
3. Add a variable `has_key`.
4. Put the “can the door open?” decision in one place only.
5. If false, show feedback. If true, change scene or move the door.
6. Test entering the trigger from every direction.
7. Add a collision group to an enemy and verify On Hit separately from On Interact.

### Architecture lesson

A common beginner problem is duplicating the same state check in the actor, trigger, scene On Init, and destination scene. Choose one canonical owner for the decision, then let other scripts call or observe it.

References: [Actors](/docs/project-editor/actors), [Triggers](/docs/project-editor/triggers), [Scripting](/docs/scripting).

## 8. Sprites and animation systems

Sprites are built from reusable tiles organized into frames and animation states. Efficient animation comes from reusing tiles and choosing a correct origin/collision box, not merely drawing fewer frames.

### Workshop

1. Import a simple 16×16 static sprite.
2. Import or build an animated actor sprite.
3. Open the Sprite Editor and identify animation states, frames, tile palette, canvas origin, and collision box.
4. Create a new animation state such as `Hurt` or `Destroy`.
5. Trigger that state from a script.
6. Use onion skinning to refine motion.
7. Compare normal tile selection with Precision Mode and inspect tile usage.

### Expert habit

Keep global animation-state names reusable. A small vocabulary such as `Idle`, `Active`, `Hurt`, `Destroy` is easier on memory and team conventions than dozens of one-off names.

References: [Sprites](/docs/assets/sprites), [Scene Limits](/docs/project-editor/scenes/limits).

## 9. Color modes, palettes, automatic color, and priority

Choose color mode as a product decision: compatibility versus available graphics memory.

### Workshop

1. Duplicate a small test scene.
2. Run it in Monochrome, Color + Monochrome, and Color Only.
3. Create a custom four-color palette.
4. Paint tiles with manual palettes.
5. Test Automatic Background Palettes on a compliant color image.
6. Extract palettes from an image and inspect the generated setup.
7. Add a monochrome override and compare the result.
8. Mark one tile as priority so it renders in front of actors on color hardware.
9. Inspect palette 8 usage because dialogue/UI relies on it.

### Failure mode to remember

Automatic color does not remove hardware limits. Per-tile color limits and unique palette limits still matter. A visually correct PNG on a modern screen can still be invalid for the target hardware.

References: [Color](/docs/project-editor/scenes/color), [Palettes](/docs/assets/palettes), [Backgrounds](/docs/assets/backgrounds), [Settings](/docs/settings).

## 10. Music, sound effects, UI, and fonts

Audio and UI are feedback systems. Their job is to make state changes legible.

### Workshop

1. Add a UGE music track and play it from Scene On Init.
2. Add a short sound effect and assign priorities deliberately.
3. Test whether a script should wait for the sound to finish or continue immediately.
4. Customize the dialogue frame and cursor.
5. Add a custom font pair (`.png` + `.json`).
6. Create one custom character mapping.
7. Test a variable-width font using the documented magenta edge convention.
8. If targeting Super GB, enable the mode and inspect the generated border asset.

References: [Music](/docs/assets/music), [Sound Effects](/docs/assets/sound-effects), [Settings](/docs/settings).

## 11. Scripting fundamentals and execution order

Scripts are event sequences attached to entry points. The hardest bugs often come from misunderstanding *when* a script runs, not what an individual event does.

### Core entry points

- Scene On Init.
- Scene On Player Hit.
- Actor On Init.
- Actor On Interact / On Hit.
- Actor On Update.
- Trigger On Enter / On Leave.

### Workshop

Create a scene where an actor On Init changes a variable, Scene On Init reads it, a trigger changes it again, and an actor interaction displays it. Step through the behavior with debugging enabled. This creates a concrete mental timeline.

Avoid heavy work in frequently repeated entry points such as On Update until you have measured the need.

References: [Scripting](/docs/scripting), [Debugger](/docs/debugger).

## 12. Variables, Script Values, and math expressions

Treat variables as your game’s memory. Use names that describe meaning (`quest_stage`, `coins`, `door_open`) rather than implementation (`temp2`, `flag7`) unless the variable is truly temporary.

### Workshop: health and score

1. Create `health`, `max_health`, and `score`.
2. Use Script Values to subtract damage without duplicating events.
3. Clamp health using `min`/`max` logic.
4. Use an If Math Expression to test death.
5. Add random score variation with `rnd()` in a throwaway example.
6. Display a fixed-width score in dialogue.
7. Watch variables in the debugger and change one live to test a branch.

### Boolean reasoning

Use `&&` when all requirements must be true, `||` when any is enough, and `!` to invert a condition. Put parentheses around combined conditions even when precedence seems obvious; future readers should not need to remember operator precedence to review game logic.

References: [Script Values](/docs/scripting/script-values), [Math Expressions](/docs/scripting/math-expressions), [Dialogue Variables](/docs/scripting/dialogue-variables).

## 13. Control flow: If, Switch, Loop, Loop For, Loop While

Control flow turns state into behavior.

### Choosing a structure

- **If:** one binary decision.
- **Switch:** many explicit states of one variable.
- **Loop For:** bounded repetition with a counter.
- **Loop While:** repeat while a condition stays true.
- **Loop:** intentionally indefinite behavior that must have a clear exit path.

### Workshop

Build a three-stage quest variable (`0 = not started`, `1 = active`, `2 = complete`) and use Switch for dialogue. Then build a bounded Loop For example that moves or updates something a known number of times. Finally, create a Loop While in a disposable project and deliberately forget the exit so you experience why infinite loops are dangerous; then fix it.

References: [Event Glossary](/docs/category/event-glossary), [Math Expressions](/docs/scripting/math-expressions).

## 14. Dialogue, menus, variables, and formatting

Dynamic dialogue should read state rather than duplicate dozens of almost-identical text boxes.

### Workshop

1. Display player state through a variable token.
2. Format a score with fixed width.
3. Display a character from a numeric code in an experiment.
4. Change text speed mid-dialogue.
5. Change font mid-dialogue.
6. Use Wait and Cursor commands to control pacing/layout.
7. Build a small choice menu and write its result to a variable.
8. Re-open the same NPC and prove the dialogue changes based on quest state.

References: [Dialogue Variables](/docs/scripting/dialogue-variables), [Event Glossary](/docs/category/event-glossary).

## 15. Custom Scripts and Prefabs

Custom Scripts reuse *behavior*. Prefabs reuse *entities plus configuration and scripts*. Use both to eliminate copy/paste maintenance.

### Workshop: reusable pickup

1. Build one working pickup actor.
2. Convert repeated behavior into a Custom Script.
3. Pass the reward amount as a parameter.
4. Compare passing a variable By Value versus By Reference.
5. Convert the actor to a Prefab.
6. Place several instances.
7. Override one instance’s reward.
8. Fix a bug in the prefab and observe instances update.
9. Apply an instance change back to the prefab, then practice reverting and unpacking.

### Rule of thumb

If a fix must be copied to more than one place, stop and ask whether you are missing a reusable abstraction.

References: [Custom Scripts](/docs/scripting/custom-scripts), [Prefabs](/docs/project-editor/prefabs).

## 16. State architecture: quests, inventory, and persistence

A robust game has one canonical state and many views of that state. Scenes should reconstruct themselves from state when loaded rather than relying on fragile “what happened last time this scene was open?” assumptions.

### Workshop: quest lifecycle

Create `quest_stage`, `has_key`, and `reward_claimed`. On Scene Init, configure actors from those variables. On interaction, change only the canonical variable(s). Reload the scene and verify the world reconstructs correctly. Save, close, reload, and test the same transitions.

### Invariants

Write rules that must always be true, for example: `reward_claimed == 1` implies `quest_stage == 2`. Use the debugger to test impossible combinations deliberately and decide how the game should recover.

References: [Scripting](/docs/scripting), [Debugger](/docs/debugger), [Event Glossary](/docs/category/event-glossary).

## 17. Debugger: stop guessing

The debugger turns bugs into observable state.

### Workshop

1. Run With Debugging.
2. Open Current State and identify active script threads.
3. Watch a quest variable.
4. Enable Pause On Watched Variable Change.
5. Set a breakpoint on the event that changes it.
6. Step event-by-event, then frame-by-frame.
7. Edit a variable live to force a normally rare branch.
8. Open the generated GBVM view for one active script.
9. Read the Build Log and separate warnings from errors.

### Debugging method

Reproduce → observe → form one hypothesis → change one thing → reproduce again. “Random edits until it works” creates accidental fixes you cannot maintain.

References: [Debugger](/docs/debugger).

## 18. VRAM and scene limits

Hardware constraints are design inputs, not late-stage punishments.

A scene can contain up to 20 actors and 30 triggers, but on-screen sprite and tile budgets are tighter. Background complexity consumes memory that could otherwise be available to sprites. Color Only increases available tile memory but changes device compatibility.

### Workshop

1. Build a deliberately heavy scene.
2. Add actors until warnings appear.
3. Inspect the scene usage bar.
4. Open VRAM Preview.
5. Simplify the background through tile reuse and measure the difference.
6. Simplify one sprite animation and measure again.
7. Compare the same test in Color + Monochrome and Color Only.
8. Document which art change produced the largest measurable saving.

References: [Scene Limits](/docs/project-editor/scenes/limits), [Debugger](/docs/debugger), [Settings](/docs/settings).

## 19. Builds, exports, and release testing

Preview builds are for iteration; exported artifacts are what players receive. Test the artifact you actually distribute.

### Release drill

1. Use Run From Here while developing a large project.
2. Export ROM and test in at least one independent emulator.
3. Export Web and test `build/web` in a browser.
4. Zip the web build exactly as you would upload it.
5. If targeting Analogue Pocket, export `.pocket` and validate the expected folder workflow.
6. Enable debugging files when an external emulator/debugger benefits from them.
7. Record GB Studio version, project commit, target, and artifact hash for a reproducible release.

References: [Building Your Game](/docs/build), [Settings](/docs/settings).

## 20. Plugins: extend without permanently forking the engine

Plugins are the preferred extension boundary for reusable assets, custom script events, engine modifications, engine fields, and additional scene types.

### Learning ladder

1. Install a plugin through Plugin Manager.
2. Manually install a plugin in a disposable project and inspect the folder layout.
3. Build an asset plugin.
4. Read an example Script Event plugin and identify how JavaScript generates GBVM output.
5. Inspect an Engine plugin and its `engine.json` version field.
6. Add a simple engine field in a practice plugin.
7. Read the documented structure of a custom scene type: key, label, engine files, actor collision flags, collision tiles, init and update functions.

### Compatibility habit

Declare supported engine versions and avoid overriding core scene types when a new scene type or smaller extension would work. Extensions that respect boundaries survive upgrades better.

References: [Plugins](/docs/extending-gbstudio/plugins).

## 21. GBVM and Engine Eject

Think in an abstraction ladder:

1. Built-in editor feature.
2. Scripting event.
3. Custom Script / Prefab.
4. Plugin.
5. GBVM Script.
6. Engine plugin.
7. Engine Eject.

Move down only when the layer above cannot express the requirement cleanly.

### GBVM lab

Open the debugger’s generated GBVM for a script you already understand. Map the visual events to VM operations. Then create a tiny GBVM Script experiment based on documented operations. Explicitly list asset/entity references so the build system knows what must remain included.

### Engine Eject lab

In a disposable Git branch, eject the engine, change one harmless constant or behavior, build, observe the result, then delete the changed engine file to verify GB Studio falls back to its default. Intentionally create one compile error, read the file/line diagnostic in Build Log, then revert.

Engine Eject is powerful precisely because it removes guardrails. Prefer plugins when the change can be isolated and reused.

References: [GBVM](/docs/scripting/gbvm), [Engine Eject](/docs/extending-gbstudio/engine-eject), [Plugins](/docs/extending-gbstudio/plugins).

## 22. Capstone: Lost Cartridge

Build a short top-down adventure that proves the systems work together.

### Requirements

- Title scene and playable town.
- At least three connected scenes.
- One NPC that starts a quest.
- One key/item pickup implemented with reusable logic.
- One locked route.
- Quest stage persisted as canonical state.
- Dynamic dialogue that changes by stage.
- Music plus at least two sound effects.
- One custom sprite animation state.
- One Prefab used in multiple places.
- Breakpoints and watched variables used during testing.
- ROM and Web exports tested independently.

### Acceptance tests

Write tests before polishing: fresh game can start quest; item cannot be claimed twice; locked route rejects player without key; save/reload preserves correct stage; returning to scenes reconstructs correct actors; final reward cannot duplicate; exported ROM and web build match editor behavior.

## 23. Capstone: a polished short platformer

Create one short level where *feel* matters more than content quantity.

### Requirements

- Platformer scene settings tuned intentionally.
- Solid, directional, slope, and ladder collision used where appropriate.
- Run/jump behavior tested at edges and ceilings.
- Player animation states for core movement.
- Hazard with clear feedback.
- Checkpoint or restart logic.
- At least one moving or interactive actor.
- VRAM inspection and one measured optimization pass.
- Frame stepping used to debug a movement/collision issue.

Document the final movement settings and why you chose them. This turns “feels good” into a reproducible technical decision.

## 24. Professional workflow and upstream contribution

A professional GB Studio project is understandable by someone who did not create it.

### Team conventions

- Name scenes, actors, variables, scripts, prefabs, and assets consistently.
- Keep state ownership explicit.
- Prefer reusable abstractions over copy/paste.
- Keep commits small and purpose-focused.
- Record GB Studio and plugin versions.
- Treat warnings as data to investigate, not decoration to ignore.
- Test exported artifacts, not only Play Window.
- Write reproduction steps for bugs.
- For open-source contributions, match the project’s existing code/docs style and keep unrelated changes out of the PR.

### Final mastery check

You are ready to leave the course when you can answer these without guessing: Where does this state live? What entry point changes it? What is the smallest reproducible test? What hardware budget does this scene consume? Can another contributor understand the change from the diff and documentation? Can the shipped artifact be reproduced from the repository?

## Appendix A — fast diagnostic map

| Symptom | First places to inspect |
| --- | --- |
| Actor disappears | on-screen actor count, sprite tile pressure, VRAM Preview |
| Background glitches after instant scene change | unique tiles, common tileset, VRAM loading |
| Dialogue/menu colors look wrong | palette 8, automatic palette count, scene color setup |
| Player cannot move | scene type, collision map, engine settings, controls |
| Interaction never runs | actor facing/range, script tab, collision group, scene type |
| Trigger repeats unexpectedly | On Enter/On Leave geometry and state guard |
| Project worked before a plugin update | plugin version, engine compatibility, Build Log |
| Build fails after Engine Eject | changed engine file, compiler file/line diagnostic |
| Quest resets on revisit | canonical variable state and Scene On Init reconstruction |
| Web works differently from editor | test exported web artifact and custom HTML/header/input settings |

## Appendix B — release checklist

- Project opens in the intended GB Studio version.
- Working tree is clean or every local change is understood.
- Required plugins and versions are documented.
- No unintended build warnings remain.
- Key variables are tested from fresh and saved states.
- Heavy scenes were checked in VRAM Preview.
- ROM artifact was tested independently.
- Web artifact was tested independently when shipped.
- Save/load path was tested if the game persists state.
- Credits/licenses for external assets are recorded.
- Release commit/tag identifies exactly what was shipped.

The goal of this course is not to memorize every GB Studio feature. It is to build a reliable method: choose the right abstraction, keep state explicit, measure hardware constraints, debug with evidence, and ship reproducible builds.
