---
sidebar_position: 1
---

# Navigator

The Navigator is the sidebar on the left which allows quickly navigating through your project.

<img title="Navigator" src="/img/screenshots/navigator-v4.png" width="246" className="drop-shadow" />

## Context Menu

By right clicking on items in the Navigator you can open a context menu. The scene context menu shown below allows you to set color labels, set the scene as the starting scene for your project, rename and delete the scene.

<img title="Navigator" src="/img/screenshots/navigator-context-menu-v4.png" width="528" className="drop-shadow margin-bottom" />

## Folders

If your scenes, scripts, palettes or assets contain `/` or `\` characters in their names these will be treated as folders in the Navigator allowing you to organise your project.

e.g. Naming a scene `caves/Underground` as shown below:

<img title="Navigator Folders Rename" src="/img/screenshots/navigator-folders-rename-v4.png" width="246" className="drop-shadow margin-bottom" />

will cause it to appear in the navigator as `Underground` with a folder named `caves`:

<img title="Navigator Folders" src="/img/screenshots/navigator-folders-v4.png" width="246" className="drop-shadow margin-bottom" />

:::warning
When renaming assets like Backgrounds into folders using the Navigator, the physical files in your project (`.png` etc.) will also be moved to the newly specified folder structure. It's important to save your project after making changes like this as moving those files without saving could cause the application to be unable to locate assets when you next load your project.

It is recommended that you use a [version control system](/docs/getting-started/saving-loading#version-control) allowing you to revert mistakes.
:::

## Keyboard Shortcuts 

**Move selection up** - `Arrow Up`  
**Move selection down** - `Arrow Down`  
**Open folder** - `Arrow Right`  
**Close folder** - `Arrow Left`  
**Rename** - `Enter`  
**Select multiple items** (Scenes only) - `Shift` while clicking
