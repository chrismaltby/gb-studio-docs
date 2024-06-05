---
sidebar_position: 3
---

import ScriptEventPreview, {FakeValue} from '@site/src/components/ScriptEventPreview';

# Dialogue Variables

Script events that allow displaying text such as [Display Dialogue](/docs/scripting/script-glossary/dialogue-menus) also allow to you to display the value of variables.

Typing `$` followed by a variable's name will allow you to search through variables to display in your text. Once a variable has been added you can click it to open a menu allowing you to change the variable.

<div className="drop-shadow margin-bottom"><img src="/img/screenshots/dialogue-variables.gif" width="320" className="clip-bottom" /></div>

## Formatting Variables

It is possible to add prefixes to dialogue variables allowing them to be used differently within your text.

- **Fixed Length**: Adding `%D` followed by a number between `1` and `9` before a variable causes it to be displayed as a fixed length value with leading zeros. e.g. `%D5$Variable` would display as `00042`.
- **Character Code**: Adding `%c` before a variable causes it to be displayed as an ASCII character code. e.g. `%c$Variable` when the variable is `65` will display as `A`.
- **Text Speed**: Adding `%t` before a variable causes it be used to set the text speed from that point onwards in the dialogue.
- **Font**: Adding `%f` before a variable causes the font to change to an index based on the variable's value. The index of each font in your game is determined by the order the fonts appear in `script_engine_init.s` which you can find by selecting `Game > Advanced > Export Project Data` from the application menu.

## Text Commands

Typing `!` followed by one of the commands below allows you to alter how the dialogue is displayed from that point onwards, allowing you to use multiple fonts and speeds in a single dialogue event.

- `!Font` Allows you to choose a font to switch to mid dialogue.
- `!Speed` Allows you to choose from the different text speeds.
- `!Instant` Allows you to set the text to appear instantly.
- `!Cursor` Allows you to move the text cursor to a new position. Click the `P(0,0)` or `M(+1,+1)` token to open a popup allowing you to change the position to move to.
