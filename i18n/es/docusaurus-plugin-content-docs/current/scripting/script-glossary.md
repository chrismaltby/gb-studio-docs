---
sidebar_position: 1
---

# Event Glossary

## Actor

#### Actor Move To
Make the actor walk to a specified position in the scene.
<img src="/es/img/events/actor-move-v3.png" className="event-preview" />

#### Actor Move Relative
Make the actor walk to a position relative to their current position.
<img src="/es/img/events/actor-move-relative-v3.png" className="event-preview" />

#### Hide Actor
Hide the actor
<img src="/es/img/events/actor-hide-v3.png" className="event-preview" />

#### Hide All Sprites
Hide all sprites in scene.

Can be useful to create cutscenes where the player should not be visible by adding to a scene's starting script.
<img src="/es/img/events/sprites-hide-v3.png" className="event-preview" />

#### If Actor At Position
Conditionally execute part of the script if the specified actor is at a certain position in the scene.
<img src="/es/img/events/if-actor-at-position-v3.png" className="event-preview" />

#### If Actor Facing Direction
Conditionally execute part of the script if the specified actor is facing a certain direction.
<img src="/es/img/events/if-actor-facing-direction-v3.png" className="event-preview" />

#### If Actor Relative To Actor
Conditionally execute part of the script depending on how an actor is positioned relative to a second actor.
<img src="/es/img/events/if-actor-relative-v3.png" className="event-preview" />

#### Launch Projectile
Launch a projectile from an actor.
<img src="/es/img/events/launch-projectile-v3.png" className="event-preview" />

#### Push Actor Away From Player
Push an actor in the direction the player is currently facing.

By default pushes by one tile, but can optionally slide until a collision occurs. Useful for creating block puzzles.
<img src="/es/img/events/actor-push-v3.png" className="event-preview" />

#### Set Actor Animation Frame
Set the current animation frame of the specified actor.
<img src="/es/img/events/actor-set-anim-frame-v3.png" className="event-preview" />

#### Set Actor Animation Speed
Set the animation speed of the specified actor.
<img src="/es/img/events/actor-set-anim-speed-v3.png" className="event-preview" />

#### Set Actor Animation State
Sets the animation state of the specified actor, create animation states using the [Sprite Editor](/docs/assets/sprites/#animation-states).
<img src="/es/img/events/actor-set-anim-state-v3.png" className="event-preview" />

#### Set Actor Collisions Disable
Prevent collisions from affecting the selected actor.

If a scene actor is selected then the player will be able to walk through them, if the player is selected then you will be able to walk through all actors and collisions in the scene.
<img src="/es/img/events/actor-collisions-disable-v3.png" className="event-preview" />

#### Set Actor Collisions Enable
Reenable collisions on the selected actor.
<img src="/es/img/events/actor-collisions-enable-v3.png" className="event-preview" />

#### Set Actor Direction
Set the facing direction of the specified actor.
<img src="/es/img/events/actor-set-direction-v3.png" className="event-preview" />
<img src="/es/img/events/actor-set-direction-preview.png" className="event-preview" />

#### Set Actor Movement Speed
Set the movement speed of the specified actor.
<img src="/es/img/events/actor-set-move-speed-v3.png" className="event-preview" />

#### Set Actor Position
Set the position in the scene of the specified actor.
<img src="/es/img/events/actor-set-position-v3.png" className="event-preview" />

#### Set Actor Relative Position
Set the position in the scene of the specified actor relative to their current position.
<img src="/es/img/events/actor-set-position-relative-v3.png" className="event-preview" />

#### Set Actor Sprite Sheet
Change the actor sprite sheet from the scene default.

When dynamically changing an actor's sprite sheet memory will be reserved for that actor based on the largest sprite assigned.
<img src="/es/img/events/actor-set-spritesheet-v3.png" className="event-preview" />

#### Set Player Sprite Sheet
Change the player sprite sheet from the scene default.

You can optionally choose to persist the change between all scenes of the current type (as long as the other scene doesn't define a specific override).
<img src="/es/img/events/player-set-spritesheet-v3.png" className="event-preview" />

#### Show Actor
Unhide a previously hidden actor.
<img src="/es/img/events/actor-show-v3.png" className="event-preview" />

#### Show All Sprites
Show all sprites that were previously hidden.
<img src="/es/img/events/sprites-show-v3.png" className="event-preview" />

#### Show Emote Bubble
Display an emote bubble above the specified actor.

Emotes are created as `16px` x `16px` `.png` images in the `/assets/emotes` folder. See the [UI Elements](/docs/assets/ui-elements/#emotes) documentation for my information.
<img src="/es/img/events/actor-emote-v3.png" className="event-preview" />

#### Stop Actor's "On Update" Script
Causes the _On Update_ script for the specified actor to be immediately stopped, preventing it from looping again.

This is useful for adding to enemy actors while playing a destroy animation to stop them moving around or firing.
<img src="/es/img/events/actor-stop-update-v3.png" className="event-preview" />

#### Store Actor Direction In Variable
Store the current direction of an actor into a variable.
<img src="/es/img/events/actor-store-direction-v3.png" className="event-preview" />

#### Store Actor Position In Variables
Store the current position of an actor into two variables.
<img src="/es/img/events/actor-store-position-v3.png" className="event-preview" />


## Camera

#### Camera Move To
Move the camera to a specifed position in the scene.
<img src="/es/img/events/camera-move-to-v3.png" className="event-preview" />

#### Camera Lock To Player
Move the camera back to focusing on the player, locking into position when the player moves.

Optionally allows locking to follow player in only horizontal or vertical axis.
  <img src="/es/img/events/camera-lock-v3.png" className="event-preview" />

#### Camera Shake
Shake camera effect for up to 10 seconds.
<img src="/es/img/events/camera-shake-v3.png" className="event-preview" />

#### Fade Screen In
Fade the scene from a blank screen.
<img src="/es/img/events/fade-in-v3.png" className="event-preview" />

#### Fade Screen Out
Fade the scene to a blank screen.
<img src="/es/img/events/fade-out-v3.png" className="event-preview" />


## Color

#### If Device Supports Color
Conditionally execute part of the script if the game is being played on a device or emulator that supports color games.
<img src="/es/img/events/if-color-v3.png" className="event-preview" />

#### Set Background Palettes
Replace some or all of the current scene's background palettes.
<img src="/es/img/events/set-background-palettes-v3.png" className="event-preview" />

#### Set Sprite Palettes
Replace some or all of the current scene's sprite palettes.
<img src="/es/img/events/set-sprite-palettes-v3.png" className="event-preview" />

#### Set Emote Palette
Replace the palette used for emotes (sprite palette #8).
<img src="/es/img/events/set-emote-palette-v3.png" className="event-preview" />

#### Set UI Palette
Replace the palette used for the UI (background palette #8).
<img src="/es/img/events/set-ui-palette-v3.png" className="event-preview" />


## Control Flow

#### Call Script
Call one of your [Custom Scripts](/docs/scripting/custom-scripts/). Once you have chosen a script you will be able to hook up any parameters required.
<img src="/es/img/events/call-script-v3.png" className="event-preview" />

#### If Actor At Position
Conditionally execute part of the script if the specified actor is at a certain position in the scene.
<img src="/es/img/events/if-actor-at-position-v3.png" className="event-preview" />


#### If Actor Facing Direction
Conditionally execute part of the script if the specified actor is facing a certain direction.
<img src="/es/img/events/if-actor-facing-direction-v3.png" className="event-preview" />


#### If Actor Relative To Actor
Conditionally execute part of the script depending on how an actor is positioned relative to a second actor.
<img src="/es/img/events/if-actor-relative-v3.png" className="event-preview" />

#### If Device Supports Color
Conditionally execute part of the script if the game is being played on a device or emulator that supports color games.
<img src="/es/img/events/if-color-v3.png" className="event-preview" />

#### If Game Data Saved
Conditionally execute part of the script if game data has been saved into the selected slot.
<img src="/es/img/events/if-saved-v3.png" className="event-preview" />

#### If Joypad Input Held
Conditionally execute part of the script if the specified joypad input is currently pressed. Will not wait for user input and will only execute once, if you wish to run a script every time a button is pressed use [Attach Script To Button](/docs/scripting/script-glossary#attach-script-to-button) instead.
<img src="/es/img/events/if-joypad-held-v3.png" className="event-preview" />

#### If Math Expression
Conditionally execute part of the script if the specified math expression evaluates to true.

Expressions allow you to use many mathematical operations such as:
-  `+` add
-  `-` subtract
-  `*` multiply
-  `/` divide
- `==` Equal to
- `!=` Not equal to
- `>=` Greater than or equal to

You are also able to use the following functions
- `min(a, b)` return the minimum of two values a and b
- `max(a, b)` return the maximum of two values a and b
- `abs(a)` return the absolute value of a

You can use variables in expressions by typing `$` and searching for the variable's name.

<img src="/es/img/events/if-expression-v3.png" className="event-preview" />

#### If Variable Compare With Value
Conditionally execute part of the script if the specified variable matches a rule, such as "Equal To", "Greater Than" or "Less Than" against a value.
<img src="/es/img/events/if-variable-value-v3.png" className="event-preview" />

#### If Variable Compare With Variable
Conditionally execute part of the script if the specified variable matches a rule, such as "Equal To", "Greater Than" or "Less Than" against a second variable.
<img src="/es/img/events/if-variable-variable-v3.png" className="event-preview" />

#### If Variable Has Flag
Conditionally execute part of the script if the specified variable has the chosen flag set as true.
<img src="/es/img/events/if-flag-v3.png" className="event-preview" />

#### If Variable Is "False"
Conditionally execute part of the script if the specified variable is _false_.
<img src="/es/img/events/if-false-v3.png" className="event-preview" />

#### If Variable Is "True"
Conditionally execute part of the script if the specified variable is set to _true_.
<img src="/es/img/events/if-true-v3.png" className="event-preview" />

#### Loop
Execute part of the script in a loop forever. Remember to break out of the loop otherwise the player will become stuck at this point. You can use a _Stop Script_ or _Change Scene_ event to stop the loop.
<img src="/es/img/events/loop-v3.png" className="event-preview" />

#### Stop Script
Stops the current script from running.
<img src="/es/img/events/stop-script-v3.png" className="event-preview" />

#### Switch
Conditionally execute from multiple options depending on the value of the specified variable. First choose how many options you want to compare the variable against, then set the values to compare and what scripts to execute when the value is matched.
<img src="/es/img/events/switch-v3.png" className="event-preview" />



## Dialogue and Menus

#### Display Dialogue
Show a dialogue box at the bottom of the game screen.

When text is shown the dialogue box will slide up from the bottom of the screen and will slide down after it has been shown.
<img src="/es/img/events/display-dialogue-v3.png" className="event-preview" />
<img src="/es/img/events/display-dialogue-preview.png" className="event-preview" />
<br />

- Using the _+_ button you can create a dialogue sequence which will only close after the last message has been displayed.
- You can display the numerical value of any variables in a text box by typing `$` followed by the name of the variable and selecting the variable from the drop down list that appears.
- You can change the font used in a text field dynamically by typing `!f` and selecting from the menu.
- You can change the text speed dynamically by typing `!s` and selecting from the menu.
- You can optionally display an avatar image on the left hand side of the dialogue box by clicking _Add Avatar_ and selecting an image to use.

  Avatars are created as `16px` x `16px` `.png` images in the `/assets/avatars` folder. See the [UI Elements](/docs/assets/ui-elements/#avatars) documentation for my information.

#### Display Menu
Display a menu of multiple options and set the specified variable to the value of the chosen option.
Multiple layouts are provided, `Menu` (shown below) displays as a single column on the right hand side of the game screen and `Dialogue` displays a full width dialogue box with two columns. You can optionally set the `B` button to close the menu setting the variable to `0` and can also make the last menu item return `0` when selected.
<img src="/es/img/events/menu-v3.png" className="event-preview" />
<img src="/es/img/events/menu-preview.png" className="event-preview" />

#### Display Multiple Choice
Present two options to player allowing them to make a choice, will set the specified variable to _true_ if the first option is chosen and to _false_ if the second option is chosen.
<img src="/es/img/events/display-multiple-choice-v3.png" className="event-preview" />

#### Set Text Animation Speed
Set the speed that dialogue boxes appear and disappear and how fast text appears within the box.
<img src="/es/img/events/text-speed-v3.png" className="event-preview" />


## Engine Fields

#### Engine Field Update
Change the value of an [Engine Field](/docs/settings/#engine-settings).
<img src="/es/img/events/engine-field-update-v3.png" className="event-preview" />

#### Store Engine Field In Variable
Store the value of an [Engine Field](/docs/settings/#engine-settings) in a variable.
<img src="/es/img/events/engine-field-store-v3.png" className="event-preview" />


## Input

#### Attach Script To Button
Execute the specified script any time a joypad input button is pressed. If you attach scripts to a direction button or the _A_ button the scripts will override the default game actions.
<img src="/es/img/events/input-attach-v3.png" className="event-preview" />

#### If Joypad Input Held
Conditionally execute part of the script if the specified joypad input is currently pressed. Will not wait for user input and will only execute once, if you wish to run a script every time a button is pressed use [Attach Script To Button](/docs/scripting/script-glossary#attach-script-to-button) instead.
<img src="/es/img/events/if-joypad-held-v3.png" className="event-preview" />

#### Pause Script Until Input Pressed
Pauses the script until one of the specified joypad inputs are pressed.
<img src="/es/img/events/input-pause-v3.png" className="event-preview" />

#### Remove Button Script
Remove an attached script from a joypad input button restoring the default functionality of the button.
<img src="/es/img/events/input-remove-v3.png" className="event-preview" />

## Math

#### If Math Expression
Conditionally execute part of the script if the specified math expression evaluates to true.

Expressions allow you to use many mathematical operations such as:
-  `+` add
-  `-` subtract
-  `*` multiply
-  `/` divide
- `==` Equal to
- `!=` Not equal to
- `>=` Greater than or equal to

You are also able to use the following functions
- `min(a, b)` return the minimum of two values a and b
- `max(a, b)` return the maximum of two values a and b
- `abs(a)` return the absolute value of a

You can use variables in expressions by typing `$` and searching for the variable's name.

<img src="/es/img/events/if-expression-v3.png" className="event-preview" />

#### Evaluate Math Expression

Store the result of a math expression in a variable.
<img src="/es/img/events/expression-v3.png" className="event-preview" />

#### Math Functions
Allows you to perform various maths functions on a variable to add/subtract/multiply/divide/modulus a value/variable/random number.
<img src="/es/img/events/variable-math-v3.png" className="event-preview" />


## Music and Sound Effects

#### Play Music Track
Plays a music .mod file, optionally looping the file when finished. If you play a new song while another song is playing, the old song will stop automatically.
<img src="/es/img/events/music-play-v3.png" className="event-preview" />

#### Play Sound Effect
Play a sound effect, choose from playing a beep with a given pitch, a tone with a given frequency or cymbal crash. Using [Custom Scripts](/docs/scripting/custom-scripts) you can combine multiple effects into a single reusable event to make jingles.
<img src="/es/img/events/sound-effect-play-v3.png" className="event-preview" />

#### Stop Music
Stops any currently playing music. Put this before a Music: Play Track event to restart the same song from the beginning.
<img src="/es/img/events/music-stop-v3.png" className="event-preview" />

## Save Data

#### Game Data Save
Save the current game data into the selected slot.
<img src="/es/img/events/data-save-v3.png" className="event-preview" />

#### Game Data Load
Load the saved game data from the selected slot.
<img src="/es/img/events/data-load-v3.png" className="event-preview" />

#### Game Data Remove
Remove any previously saved game data in the selected slot.
<img src="/es/img/events/data-remove-v3.png" className="event-preview" />

#### If Game Data Saved
Conditionally execute part of the script if game data has been saved into the selected slot.
<img src="/es/img/events/if-saved-v3.png" className="event-preview" />

#### Store Variable From Game Data In Variable
Read a saved value from a selected save slot and store it in a variable.
<img src="/es/img/events/data-extract-v3.png" className="event-preview" />

## Scene

#### Change Scene
Transition to a new scene with player at a specified position and direction. A connection line will be drawn between the source of the event and the destination scene with a <img src="/es/img/screenshots/destination-end.png" style={{ height: 12 }}/> icon appearing at the destination position. It's possible to drag this icon around and between scenes to modify the event.
<img src="/es/img/events/scene-change-v3.png" className="event-preview" /><img src="/es/img/events/switch-scene-preview.png" className="event-preview" />

#### Store Current On Scene Stack
Store the current scene and player state on to the scene stack, this allows you to return to this exact location later using the _Scene Restore_ events. A common use of this event would be to include in a script just before a _Change Scene_ event to open a menu scene, in the menu scene you could wait for the player to press a close button and then use the _Restore Previous From Stack_ event to return to where the player opened the menu.
<img src="/es/img/events/scene-stack-push-v3.png" className="event-preview" />

#### Restore Previous From Scene Stack
Transition to the last stored scene from the scene stack using the specified fade speed. The previous scene will then be removed from the stack so the next time this event is used it will transition to the scene before that.
<img src="/es/img/events/scene-stack-pop-v3.png" className="event-preview" />

#### Restore First From Scene Stack
Transition to the very first scene stored on the stack, for instance if you had multiple levels of menu scenes you could use this to imediately return to the game scene. This event will cause the scene stack to become empty.
<img src="/es/img/events/scene-stack-pop-all-v3.png" className="event-preview" />

#### Remove All From Scene Stack
Remove all scenes from the scene stack without leaving the current scene.
<img src="/es/img/events/scene-stack-clear-v3.png" className="event-preview" />

## Screen

#### Fade Screen In
Fade the scene from a blank screen.
<img src="/es/img/events/fade-in-v3.png" className="event-preview" />

#### Fade Screen Out
Fade the scene to a blank screen.
<img src="/es/img/events/fade-out-v3.png" className="event-preview" />

#### Show Overlay
Show either a black or white window over the top of the current game screen. Can be used to obscure and then reveal parts of the scene background for example on the sample project logo screen.
<img src="/es/img/events/overlay-show-v3.png" className="event-preview" />

#### Overlay Move To
Moves the overlay to a new position on the screen.
<img src="/es/img/events/overlay-move-v3.png" className="event-preview" />

#### Hide Overlay
Hides the screen overlay.
<img src="/es/img/events/overlay-hide-v3.png" className="event-preview" />


## Timer

#### Wait
Pause script for up to 10 seconds.
<img src="/es/img/events/wait-v3.png" className="event-preview" />

#### Attach Timer Script
Execute the specified script repeatedly after a time interval. The script will keep running in the background until a _Remove Timer Script_ event is called or the scene is changed using a _Change Scene_ event.
<img src="/es/img/events/timer-start-v3.png" className="event-preview" />

#### Restart Timer
Reset the countdown timer back to zero. The script will call again after the time specified originally.
<img src="/es/img/events/timer-restart-v3.png" className="event-preview" />

#### Remove Timer Script
Remove the timer script so it will no longer be called.
<img src="/es/img/events/timer-remove-v3.png" className="event-preview" />


## Variables

Your game has 512 variables that can be shared across all the scripts in your game. Additionally every _Actor_, _Trigger_ and _Scene_ has 6 local variables that can only be accessed by that specific entity. Local variables are useful for keeping track of state specific to an entity such as how many times you have spoken to a character or if a treasure chest is open or closed.

#### Evaluate Math Expression

Store the result of a math expression in a variable.
<img src="/es/img/events/expression-v3.png" className="event-preview" />

#### If Variable Compare With Value
Conditionally execute part of the script if the specified variable matches a rule, such as "Equal To", "Greater Than" or "Less Than" against a value.
<img src="/es/img/events/if-variable-value-v3.png" className="event-preview" />

#### If Variable Compare With Variable
Conditionally execute part of the script if the specified variable matches a rule, such as "Equal To", "Greater Than" or "Less Than" against a second variable.
<img src="/es/img/events/if-variable-variable-v3.png" className="event-preview" />

#### Math Functions
Allows you to perform various maths functions on a variable to add/subtract/multiply/divide/modulus a value/variable/random number.
<img src="/es/img/events/variable-math-v3.png" className="event-preview" />

#### Store Actor Position In Variables
Store the current position of an actor into two variables.
<img src="/es/img/events/actor-store-position-v3.png" className="event-preview" />

#### Store Engine Field In Variable
Store the value of an [Engine Field](/docs/settings/#engine-settings) in a variable.
<img src="/es/img/events/engine-field-store-v3.png" className="event-preview" />

#### Store Variable From Game Data In Variable
Read a saved value from a selected save slot and store it in a variable.
<img src="/es/img/events/data-extract-v3.png" className="event-preview" />

#### Variable Increment By 1
Increase the value of the specified value by one, up to a maximum of _255_. If the value was previously _false_ it will now be _1_ (and also _true_), if it was previously _true_ it will now be _2_.
<img src="/es/img/events/variable-inc-v3.png" className="event-preview" />

#### Variable Decrement By 1
Decrease the value of the specified value by one, down to a minimum of _0_. If the value was previously _true_ it will now be _0_ (and also _false_).
<img src="/es/img/events/variable-dec-v3.png" className="event-preview" />

#### Variable Flags Set
  Set the value of a variable by enabling individual bits of the 8-bit number. Allows 8 true/false values to be stored within a single variable. Setting the flags will replace the previous value of the variable.
  <img src="/es/img/events/variable-flags-set-v3.png" className="event-preview" />

#### Variable Flags Add
  Set selected flags to true on a variable. All unselected flags will keep their previous value.
  <img src="/es/img/events/variable-flags-add-v3.png" className="event-preview" />

#### Variable Flags Clear
  Set selected flags to false on a variable. All unselected flags will keep their previous value.
  <img src="/es/img/events/variable-flags-clear-v3.png" className="event-preview" />

#### Variable Set To "True"
  Set the value of the specified variable to _true_.
  <img src="/es/img/events/variable-true-v3.png" className="event-preview" />


#### Variable Set To "False"
  Set the value of the specified variable to _false_.
  <img src="/es/img/events/variable-false-v3.png" className="event-preview" />


#### Variable Set To Value
Set the specified variable to a defined value.
<img src="/es/img/events/variable-value-v3.png" className="event-preview" />

#### Reset All Variables To "False"
Reset all variables used by your project back to _false_.
<img src="/es/img/events/variable-reset-v3.png" className="event-preview" />

## Miscellaneous

#### Comment
Allows you to leave notes within your scripts. Provides no functionality in-game. The text you type automatically gets set in the event title, so you can collapse the comment and still read its content.
<img src="/es/img/events/comment.png" className="event-preview" />

You can also use the event dropdown menu to disable and reenable any event.
Disabled events will be skipped when run in game.
<img src="/es/img/events/event-disable-menu.png" className="event-preview" />
<img src="/es/img/events/event-disabled.png" className="event-preview" />
