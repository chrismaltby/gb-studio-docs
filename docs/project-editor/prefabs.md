---
sidebar_position: 5
---

# Prefabs

Prefabs are reusable templates for [Actors](/docs/project-editor/actors) and [Triggers](/docs/project-editor/triggers).

If you find yourself adding the same enemies, pickups, doors, or cutscene triggers across multiple scenes, prefabs let you define them once and reuse them everywhere. When you edit the prefab later (for example to fix a script bug or update a sprite), all instances of that prefab update automatically.

You can also override individual instances when you need small differences between actors and triggers in each scene.

## Creating a Prefab

There are two ways to create a new _Prefab_:

- Click the **` + `** in the _Prefab Navigator_ title bar and choose either "Actor" or "Trigger" from the dropdown menu to create a new blank prefab.
  <div className="drop-shadow margin-bottom"><img title="Add Prefab" src="/img/screenshots/prefab-add.png" width="270" className="clip-bottom" /></div>

- Select an existing Actor or Trigger and using the <img className="gbs-icon" title="Down Arrow Button" src="/img/screenshots/dropdown-button.png" width="22" /> button choose "Convert to Prefab" to create a prefab from an existing entity. This will also cause the existing Actor or Trigger to be linked with this Prefab.

  <div className="drop-shadow margin-bottom"><img title="Convert to Prefab" src="/img/screenshots/prefab-convert.png" width="320" className="clip-bottom" /></div>

## Instantiating a Prefab

To create an **instance** of a prefab, click the **` + `** button next to the prefab's name in the _Navigator_ then click on scene where you want to add the instance.

<div className="drop-shadow margin-bottom"><img title="Prefab Navigator" src="/img/screenshots/prefab-navigator.png" width="200" className="clip-bottom" /></div>

## Overriding a Prefab

Each placed prefab is an **instance**. If you edit a script event inside an instance, those changes apply to that instance only (they won’t change the prefab).

Overridden values are highlighted with a blue outline.

<div className="drop-shadow margin-bottom"><img title="Override a Prefab" src="/img/screenshots/prefab-override.png" width="320" className="clip-bottom" /></div>

If you decide the changes should become the new default for every instance, open the <img className="gbs-icon" title="Down Arrow Button" src="/img/screenshots/dropdown-button.png" width="22" /> menu and choose **Apply Changes**. You can apply changes for individual edited events, or apply all overrides at once.

The same menu also lets you **revert** an instance back to the prefab defaults.

<div className="drop-shadow margin-bottom"><img title="Apply Prefab Changes" src="/img/screenshots/prefab-apply.png" width="320" className="clip-bottom" /></div>

## Unpacking a Prefab

Unpacking removes the link between an instance and its prefab. The instance becomes a normal Actor or Trigger that won't receive further updates from the prefab.

<div className="drop-shadow margin-bottom"><img title="Unpack Prefab" src="/img/screenshots/unpack-prefab.png" width="320" className="clip-bottom" /></div>

This is useful when you want to start from a prefab but then heavily customize a specific instance.

Unpacking only affects the selected instance (the prefab itself, and other instances, are unchanged).
