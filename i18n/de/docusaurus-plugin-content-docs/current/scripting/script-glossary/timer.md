---
sidebar_position: 2
#
# This file is autogenerated. DO NOT MODIFY DIRECTLY
#
---

import ScriptEventPreview from '@site/src/components/ScriptEventPreview';

# Timer

## Timer: Timer-Skript einstellen
Run the specified script repeatedly after a time interval. The script will keep running in the background until a Remove Timer Script event is called or the scene is changed using a Change Scene event.
<ScriptEventPreview title={"Timer: Timer-Skript einstellen"} fields={[{"type":"group","fields":[{"key":"duration","type":"number","label":"Time Interval","description":"The length of time to wait before running the script each time.","min":0,"max":60,"step":0.1,"defaultValue":0.5,"unitsField":"units","unitsDefault":"time","unitsAllowed":["time","frames"],"conditions":[{"key":"units","ne":"frames"}]},{"key":"frames","label":"Time Interval","description":"The length of time to wait before running the script each time.","type":"number","min":0,"max":3600,"step":16,"width":"50%","defaultValue":30,"unitsField":"units","unitsDefault":"time","unitsAllowed":["time","frames"],"conditions":[{"key":"units","eq":"frames"}]}]},{"key":"__scriptTabs","type":"tabs","defaultValue":"end","values":{"end":"Auf Tick"}},{"key":"script","label":"Auf Tick","description":"The script to run when the timer is triggered.","type":"events","allowedContexts":["global","entity"],"conditions":[{"key":"__scriptTabs","in":[null,"end"]}]}]} />

- **Time Interval**: The length of time to wait before running the script each time.  
- **Auf Tick**: The script to run when the timer is triggered.  

## Untätig
Pause the script for a single frame.
<ScriptEventPreview title={"Untätig"} fields={[{"label":"Warte bis zum nächsten Frame"}]} />


## Timer: Timer-Skript deaktivieren
Remove the timer script so it will no longer be called.
<ScriptEventPreview title={"Timer: Timer-Skript deaktivieren"} fields={[{"label":"Timer-Skript deaktivieren"}]} />


## Timer: Timer neu starten
Reset the countdown timer back to zero. The script will call again after the time specified originally.
<ScriptEventPreview title={"Timer: Timer neu starten"} fields={[{"label":"Countdown-Timer neustarten"}]} />


## Warten
Pause the script for a period of time.
<ScriptEventPreview title={"Warten"} fields={[{"type":"group","fields":[{"key":"time","type":"number","label":"Duration","description":"The length of time to pause the script for in seconds or frames.","min":0,"max":60,"step":0.1,"defaultValue":0.5,"unitsField":"units","unitsDefault":"time","unitsAllowed":["time","frames"],"conditions":[{"key":"units","ne":"frames"}]},{"key":"frames","label":"Duration","description":"The length of time to pause the script for in seconds or frames.","type":"number","min":0,"max":3600,"width":"50%","defaultValue":30,"unitsField":"units","unitsDefault":"time","unitsAllowed":["time","frames"],"conditions":[{"key":"units","eq":"frames"}]}]}]} />

- **Duration**: The length of time to pause the script for in seconds or frames.  

