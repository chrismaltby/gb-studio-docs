import ScriptEventPreview from '@site/src/components/ScriptEventPreview';

# Efeitos sonoros

Efeitos sonoros podem ser adicionados ao seu jogo usando o evento [Tocar efeito sonoro](/docs/scripting/script-glossary/music-sound-effects#play-sound-effect) nos seus scripts de _Ator_, _Gatilho_ ou _Cena_.

Você pode escolher entre reproduzir um bip com uma tonalidade específica, um tom com uma frequência específica ou um ruído.

<ScriptEventPreview title={"Play Sound Effect"} fields={[{"key":"type","type":"soundEffect","label":"Sound Effect","description":"The sound effect to play. Can choose from files within `/assets/sounds` or from preset sounds like `Beep`, `Pitch` and `Tone`.","defaultValue":"beep","flexBasis":"60%"},{"key":"priority","label":"Priority","description":"The priority of the effect, high, medium or low. If two sound effects are playing at the same time then higher priority sound effects will take precedence.","type":"priority","options":[["low","Low"],["medium","Medium"],["high","High"]],"defaultValue":"medium","flexBasis":"15%"},{"key":"pitch","type":"number","label":"Pitch","description":"The pitch of the sound effect (Beep effect only).","conditions":[{"key":"type","eq":"beep"}],"min":1,"max":8,"step":1,"defaultValue":4},{"key":"frequency","type":"number","label":"Frequency in hz","description":"The frequency of the sound effect in hz (Tone effect only).","conditions":[{"key":"type","eq":"tone"}],"min":0,"max":20000,"step":1,"defaultValue":200},{"key":"duration","type":"number","label":"Duration","description":"The length of time to play the sound effect.","unitsField":"units","unitsDefault":"time","conditions":[{"key":"type","in":["beep","crash","tone"]}],"min":0,"max":4.25,"step":0.01,"defaultValue":0.5},{"key":"wait","type":"checkbox","label":"Wait until finished","description":"Set if script should pause until sound effect has finished playing.","conditions":[{"key":"type","in":["beep","crash","tone"]}],"defaultValue":true,"flexBasis":"100%"}]} />

Você também pode colocar os seguintes tipos de arquivo em `assets/sounds`, que se tornarão disponíveis:

- **.wav** Arquivo de áudio WAV, de preferência com duração muito curta (3,64 segundos é aproximadamente o limite!) e mono de 8 bits (embora o GB Studio tente converter arquivos que não estejam neste formato).
- **.vgm** Arquivo de áudio VGM (formato exclusivo para Game Boy).
- **.sav** Efeitos sonoros do FX HAMMER.
