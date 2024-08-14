---
sidebar_position: 6
---

import ScriptEventPreview from '@site/src/components/ScriptEventPreview';

# GBVM

Silnik gry GB Studio działa na wirtualnej maszynie opartej na stosie, zwanej [GBVM game engine](https://github.com/chrismaltby/gbvm). Możesz uzyskać bezpośredni dostęp do wirtualnej maszyny, używając polecenia [Skrypt GBVM](/docs/scripting/script-glossary/miscellaneous#gbvm-script) w swojej grze.

<ScriptEventPreview title={"GBVM Script"} fields={[{"key":"script","label":"Script","description":"A valid GBVM Script to execute.","type":"code","flexBasis":"100%", "defaultValue": "VM_PUSH_CONST           0       ; Y coord\nVM_PUSH_CONST           0       ; X coord\nVM_PUSH_CONST           128\nVM_LOAD_TILESET         .ARG0, ___bank_bg_cave, _bg_cave\nVM_OVERLAY_SET_MAP      .ARG0, .ARG1, .ARG2, ___bank_bg_cave, _bg_cave\nVM_POP                  3"},{"key":"references","type":"references","label":"References","description":"A list of the assets and entities used in your GBVM script. Use this to let GB Studio know that a file is needed by your script, preventing it from being excluded in the final build."}]} />

## Nauka GBVM

Jeśli chcesz dowiedzieć się więcej o GBVM i jak go używać, sprawdź przewodnik wprowadzający do Nauki GBVM na GB Studio Central. Przejdź do przewodnika [Nauka GBVM](https://gbstudiocentral.com/tips/learning-gbvm/).
