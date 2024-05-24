---
sidebar_position: 8
---

# Debugger

The debugger pane enables you to examine the current state of your game in real-time, assisting you in identifying and resolving issues as you develop your game scripts.

You can access the debugger by clicking to open the pane at the bottom of the _Game World_ view or by selecting `Game > Run With Debugging` from the menu.

<img title="Debugger" src="/img/screenshots/debugger-v4.png" width="1458" />

## VRAM Preview

The **VRAM** pane shows the current video memory used by graphics in your running game.

You can use this pane to get a visual preview of how many additional sprite and background tiles are available in the current scene and to help debug issues when you have used too many unique tiles in the scene.

Below the tiles preview, the pane also shows the 8 background and 8 sprite tile palettes being used for the current scene in color games.

:::info
Note that unless you are using [Color Only](/docs/settings#color-options) mode then only half of the VRAM is available to your game.
:::

## Current State

The **Current State** pane tells you which scene is currently running in the game and how many [script threads](/docs/debugger#active-script-threads) are active.

If you click on the current scene's name you will be navigated to that scene in the _Game World_ view.

## Breakpoints

The **Breakpoints** pane consists of some global settings and a list of the current event breakpoints enabled for your project. Breakpoints allow you to pause the running game, allowing you to see what script events were currently running and to view the current value of your game's variables.

- **Pause On Script Change** Enabling this setting will cause the debugger to pause whenever a new script is started e.g when you interact with an actor/trigger or load a new scene.

- **Pause On Watched Variable Change** Enabling this setting will cause the debugger to pause whenever any script modifies one of your [watched variables](/docs/debugger#variable-values).

### Setting Breakpoints

To set a breakpoint on an event you can use the dropdown button and select "Set Breakpoint" as shown below:

<img title="Setting a breakpoint" src="/img/screenshots/set-breakpoint-v4.png" width="418" className="drop-shadow margin-bottom" />

To remove the breakpoint you can either repeat this process, or you can click the **` x `** button that will appear when hovering over the entry in the **Breakpoints** pane.

## Variable Values

The **Variables** pane allows you to see the current value of the variables used within your game. You can also type in new values which will be **live updated** in your running game.

### Watching Variables

You can watch variables by hovering over the list item and clicking the **` ★ `** button that appears on the right. Watching variables allows you to make use of the [Pause On Watched Variable Change](/docs/debugger#breakpoints) breakpoints setting.

<img title="Watching variables" src="/img/screenshots/watching-variables-v4.png" width="332" className="drop-shadow margin-bottom" />

## Active Script Threads

## Build Log
