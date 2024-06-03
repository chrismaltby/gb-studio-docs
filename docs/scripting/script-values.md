---
sidebar_position: 4
---

import ScriptEventPreview, {FakeValue} from '@site/src/components/ScriptEventPreview';

# Script Values

Many script events now support using **Script Values** as inputs. These allow you combine number values, variables, mathmatical operations and functions to create complex values.

<div className="drop-shadow margin-bottom"><img src="/img/screenshots/script-values-edit-v4.gif" width="320" className="clip-bottom" /></div>

You can use Script Values in your scripts anywhere that you see a button to left of an input field (as shown below) by clicking the button to open the menu.

<div style={{maxWidth: 300}}>
    <FakeValue>0</FakeValue>
</div>

## Math Expressions

Script Values are very similar to [Math Expressions](/docs/scripting/math-expressions) with a more visual interface, the same math functions are available for both value types. Anywhere you can use Script Values you can also use the menu to change to using Math Expressions instead, allowing you type your expressions. You're also able to combine Script Values and Math Expressions if needed.

## Drag and Drop

By dragging the Script Value buttons you quickly move values between different parts of your script.

<div className="drop-shadow margin-bottom"><img src="/img/screenshots/script-values-dnd-v4.gif" width="320" className="clip-bottom" /></div>

If you need to move values between different scripts, opening the menu and selecting "Copy Value" will allow you to select "Paste Value" when opening the menu from another script.
