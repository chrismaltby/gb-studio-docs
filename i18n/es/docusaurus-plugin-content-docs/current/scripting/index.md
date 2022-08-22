---
sidebar_position: 6
---

# Scripting Events

Scripting events allow you to control parts of your game based on interactions from the player. They can be used to connect scenes together, change variables, give dialogue to characters, and more.

Scripts can be added to scenes, actors, or triggers. Selecting one of these objects will update the _World Editor_ to show the script of the selected object in the _Editor Sidebar_.

To start building a script, select an object and click the _Add Event button_ in the _Editor Sidebar_ to open the event menu. Select an event to add it to the script. The topmost event is the first event to be run for that script.

## Adding Events

After clicking the _Add Event_ button, a menu will appear to choose the event to add. If you start typing you can filter this list or you can click through the menu find what you're looking for. Click an event or press the _Enter_ key to add the highlighted event to your script.

<img title="New Project" src="/img/events/add-event-menu.png" width="300" className="event-preview" />

## Favourite Events

You can choose a number of events to be favourites, causing them to appear at the top of the _Add Event Menu_. To favourite an event, hover over the menu item and click the _Star_ button or press the `Tab` key.

## Copy and Paste Events

To copy an event, click the down arrow next to an event. All scripts have this same down arrow for copying/pasting. Clicking the down arrow on another event allows you to paste the clipboard event either before or after the selected one. You also have the option to paste the values from the first event into the second.

As a shortcut for pasting, you can press the _Alt_ key to turn all _Add Event_ buttons into _Paste Event_ buttons.

## Types of Scripts

There are multiple script tabs to choose from the _Editor Sidebar_ depending on which object you have currently selected.

### Scene Scripts

These scripts can be accessed in the _Editor Sidebar_ by selecting a scene in your project.

- **On Init:** This script will run once at the beginning of the Scene. The Scene On Init script is always run after the On Init script for Actors in the Scene.
- **On Player Hit:** This script runs when the player is hit by an actor belonging to a collision group.

### Actor Scripts

These scripts can be accessed in the _Editor Sidebar_ by clicking an Actor in your project.

- **On Init:** This script will run once at the beginning of the Scene. Actors in a Scene will always run their On Init script before their Scene's On Init script.
- **On Interact:** Standing the Player next to an Actor and pressing the **A** button will cause the Player to "interact" with the Actor. Interacting with an Actor will begin this script. In Shoot 'Em Up scenes, interacting can additionally be done by colliding with the Actor.

  This script is often used for dialogue, using the "Text: Display Dialogue" event.

  Enabling a collision group for an actor will convert this script to _On Hit: Player_, which looks for Player collision rather than Player interaction. This behaviour is identical to _On Interact_ in Shoot 'Em Up scenes.

- **On Hit:** This script runs when the Actor is hit by another Actor or Projectile belonging to a collision group.

- **On Update:** This script is run once every frame, and can only be added to non-player Actors.

### Trigger Scripts

These scripts can be accessed in the _Editor Sidebar_ by clicking a Trigger in your project.

- **On Enter:** This script runs when the player collides with the trigger.

- **On Leave:** This script runs when a player that was previously colliding leaves the trigger.