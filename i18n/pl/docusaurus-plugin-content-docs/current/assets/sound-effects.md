import ScriptEventPreview from '@site/src/components/ScriptEventPreview';

# Dźwięk
Efekty dźwiękowe można dodać do swojej gry, używając polecenia [Dźwięk: odegraj SE](/docs/scripting/script-glossary/music-sound-effects#play-sound-effect) w skryptach _Aktor_, _Wyzwalacz_ lub _Scena_.

Można wybierać spośród odtwarzania dźwięku o określonej wysokości tonu, tonu o określonej częstotliwości lub dźwięku cymbałów.

<ScriptEventPreview title={"Play Sound Effect"} fields={[{"key":"type","type":"soundEffect","label":"Sound Effect","description":"The sound effect to play. Can choose from files within `/assets/sounds` or from preset sounds like `Beep`, `Pitch` and `Tone`.","defaultValue":"beep","flexBasis":"60%"},{"key":"priority","label":"Priority","description":"The priority of the effect, high, medium or low. If two sound effects are playing at the same time then higher priority sound effects will take precedence.","type":"priority","options":[["low","Low"],["medium","Medium"],["high","High"]],"defaultValue":"medium","flexBasis":"15%"},{"key":"pitch","type":"number","label":"Pitch","description":"The pitch of the sound effect (Beep effect only).","conditions":[{"key":"type","eq":"beep"}],"min":1,"max":8,"step":1,"defaultValue":4},{"key":"frequency","type":"number","label":"Frequency in hz","description":"The frequency of the sound effect in hz (Tone effect only).","conditions":[{"key":"type","eq":"tone"}],"min":0,"max":20000,"step":1,"defaultValue":200},{"key":"duration","type":"number","label":"Duration","description":"The length of time to play the sound effect.","unitsField":"units","unitsDefault":"time","conditions":[{"key":"type","in":["beep","crash","tone"]}],"min":0,"max":4.25,"step":0.01,"defaultValue":0.5},{"key":"wait","type":"checkbox","label":"Wait until finished","description":"Set if script should pause until sound effect has finished playing.","conditions":[{"key":"type","in":["beep","crash","tone"]}],"defaultValue":true,"flexBasis":"100%"}]} />


Można również umieścić następujące typy plików w `assets/sounds`, które będą dostępne:

- **.wav** Plik audio WAV, najlepiej bardzo krótki (kilka sekund maksymalnie) i w formacie 8-bit mono (choć GB Studio spróbuje konwertować pliki niezgodne z tym formatem).
- **.vgm** Plik audio VGM (tylko format Game Boy).
- **.sav** Efekty dźwiękowe FX HAMMER.
