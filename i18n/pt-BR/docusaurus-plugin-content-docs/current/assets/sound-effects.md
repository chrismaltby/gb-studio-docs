import ScriptEventPreview from '@site/src/components/ScriptEventPreview';

# Sound Effects

Sound effects can be added to your game using the [Play Sound Effect](/docs/scripting/script-glossary/music-sound-effects#play-sound-effect) event in your _Actor_, _Trigger_ or _Scene_ scripts.

You can choose from playing a beep with a given pitch, a tone with a given frequency or cymbal crash.

<ScriptEventPreview title={"Play Sound Effect"} fields={[{"key":"type","type":"soundEffect","label":"Sound Effect","description":"The sound effect to play. Can choose from files within `/assets/sounds` or from preset sounds like `Beep`, `Pitch` and `Tone`.","defaultValue":"beep","flexBasis":"60%"},{"key":"priority","label":"Priority","description":"The priority of the effect, high, medium or low. If two sound effects are playing at the same time then higher priority sound effects will take precedence.","type":"priority","options":[["low","Low"],["medium","Medium"],["high","High"]],"defaultValue":"medium","flexBasis":"15%"},{"key":"pitch","type":"number","label":"Pitch","description":"The pitch of the sound effect (Beep effect only).","conditions":[{"key":"type","eq":"beep"}],"min":1,"max":8,"step":1,"defaultValue":4},{"key":"frequency","type":"number","label":"Frequency in hz","description":"The frequency of the sound effect in hz (Tone effect only).","conditions":[{"key":"type","eq":"tone"}],"min":0,"max":20000,"step":1,"defaultValue":200},{"key":"duration","type":"number","label":"Duration","description":"The length of time to play the sound effect.","unitsField":"units","unitsDefault":"time","conditions":[{"key":"type","in":["beep","crash","tone"]}],"min":0,"max":4.25,"step":0.01,"defaultValue":0.5},{"key":"wait","type":"checkbox","label":"Wait until finished","description":"Set if script should pause until sound effect has finished playing.","conditions":[{"key":"type","in":["beep","crash","tone"]}],"defaultValue":true,"flexBasis":"100%"}]} />

You can also place the following file types into `assets/sounds` which then become available:

- **.wav** WAV audio file, preferably very short in length (3.64 seconds is about the limit!) and 8-bit mono (though GB Studio will attempt to convert files not in this format).
- **.vgm** VGM audio file (Game Boy format only).
- **.sav** FX HAMMER sound effects.
