---
sidebar_position: 4
---

import ScriptEventPreview from '@site/src/components/ScriptEventPreview';

# GBVM

GB Studio's game engine runs on a stack based virtual machine called [GBVM game engine](https://github.com/chrismaltby/gbvm). You can access the virtual machine directly by using a [GBVM Script event](/docs/scripting/script-glossary/miscellaneous#gbvm-script) in you game.

<ScriptEventPreview title={"GBVM Script"} fields={[{"key":"script","type":"code","flexBasis":"100%", "defaultValue": "VM_PUSH_CONST           0       ; Y coord\nVM_PUSH_CONST           0       ; X coord\nVM_PUSH_CONST           128\nVM_LOAD_TILESET         .ARG0, ___bank_bg_cave, _bg_cave\nVM_OVERLAY_SET_MAP      .ARG0, .ARG1, .ARG2, ___bank_bg_cave, _bg_cave\nVM_POP                  3"},{"key":"references","type":"references","label":"References"}]} />

