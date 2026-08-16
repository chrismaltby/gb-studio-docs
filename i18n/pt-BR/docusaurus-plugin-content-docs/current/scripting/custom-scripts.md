---
sidebar_position: 2
---

# Custom Scripts

_Custom Scripts_ allow you to create reusable procedures in your game that can be called from any of your scripts.

<img src="/img/screenshots/custom-script-list.png" className="drop-shadow" width="200" />

Your _Custom Scripts_ will be listed in the _Scripts_ section of the _Navigator_ while on the _Game World View_.

Click the `+` button to create a new _Custom Script_ or select one to edit from the list.

Once you've given your _Custom Script_ a name you can start building a script in the same way you would for _Actors_, _Triggers_ and _Scenes_.

## Parameters

Whenever you add an event that reads a _Variable_ it will get added to the list of input parameters for the _Custom Script_, where you are able to give that input a memorable name. Events that affect _Actors_ will, by default, apply to the player but if you use the actor selector you will be able to set the event to read the _Actor_ value from an input parameter also.

For example the following custom script makes `Actor A` rotate in a circle.

<img src="/img/screenshots/custom-script-dance.png" className="event-preview" />

## Passing by Reference or Value

When using variables in a custom script you have the choice to pass by reference (_By Ref_) or to pass by value (_By Val_) by clicking the drop down button next to each variable in the parameters list.

<img src="/img/screenshots/custom-script-by-ref.png" className="event-preview" />

- **Pass By Reference** Allows the custom script to modify the value of a variable parameter. Any changes to the variable's value from inside the script will also update the variable's value outside of the script. Use this if you want the custom script to be able to change the value of a variable that was passed in.

- **Pass By Value** Copies the current value of the variable at call time so that any changes to the variable parameter from within the script will not affect the variable that was passed in. Use this if you want the custom script to **NOT** be able to change the variable that was passed in.

## Calling a Custom Script

Once you have created a _Custom Script_ you can call it from any other script by adding a _Call Script_ event which will appear as follows.

<img src="/img/screenshots/custom-script-call.png" className="event-preview" />

You first must choose the script which you wish to call, if that script has any variable or actor parameters you can then choose which inputs to use.

If you ever want to edit the _Custom Script_ you can return to it using the list on the _Navigator_ or by selecting _Edit Custom Script_ from the event dropdown menu.

<img src="/img/screenshots/custom-event-edit.png" className="event-preview" />
