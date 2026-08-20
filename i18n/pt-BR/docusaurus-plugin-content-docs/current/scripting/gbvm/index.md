---
sidebar_position: 6
---

import ScriptEventPreview from '@site/src/components/ScriptEventPreview';

# GBVM

O motor do jogo do GB Studio é executado em uma máquina virtual baseada em pilha chamada [motor de jogo GBVM](https://github.com/chrismaltby/gbvm). Você pode acessar a máquina virtual diretamente usando um evento [Script GBVM](/docs/scripting/script-glossary/miscellaneous#gbvm-script) no seu jogo.

<ScriptEventPreview title={"GBVM Script"} fields={[{"key":"script","label":"Script","description":"A valid GBVM Script to execute.","type":"code","flexBasis":"100%", "defaultValue": "VM_PUSH_CONST           0       ; Y coord\nVM_PUSH_CONST           0       ; X coord\nVM_PUSH_CONST           128\nVM_LOAD_TILESET         .ARG0, ___bank_bg_cave, _bg_cave\nVM_OVERLAY_SET_MAP      .ARG0, .ARG1, .ARG2, ___bank_bg_cave, _bg_cave\nVM_POP                  3"},{"key":"references","type":"references","label":"References","description":"A list of the assets and entities used in your GBVM script. Use this to let GB Studio know that a file is needed by your script, preventing it from being excluded in the final build."}]} />

## Aprendendo sobre GBVM

Se você quiser saber mais sobre GBVM e como usá-lo, confira o guia de introdução do GB Studio Central, [Learning GBVM](https://gbstudiocentral.com/tips/learning-gbvm/).
