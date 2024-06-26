---
sidebar_position: 2
#
# This file is autogenerated. DO NOT MODIFY DIRECTLY
#
---

import ScriptEventPreview from '@site/src/components/ScriptEventPreview';

# Sonstiges

### Kommentar
Allows you to leave notes within your scripts. Provides no functionality in-game. The text you type automatically gets set in the event title, so you can collapse the comment and still read its content.
<ScriptEventPreview title={"Kommentar"} fields={[{"key":"text","type":"textarea","maxPerLine":50,"placeholder":"Text...","multiple":false,"defaultValue":""}]} />


### Ereignisgruppe
Ermöglicht es, Teile des Skripts aus organisatorischen Gründen zusammenzufassen.
<ScriptEventPreview title={"Ereignisgruppe"} fields={[{"key":"true","type":"events"}]} />


### GBVM Skript
Ein GBVM Skript ausführen.

**Referenzen**  
[/docs/scripting/gbvm/](/docs/scripting/gbvm/)  
[/docs/scripting/gbvm/gbvm-operations](/docs/scripting/gbvm/gbvm-operations)  
<ScriptEventPreview title={"GBVM Skript"} fields={[{"key":"script","label":"Skript","description":"Ein gültiges GBVM-Skript zur Ausführung.","type":"code","flexBasis":"100%"},{"key":"references","type":"references","label":"Referenzen","description":"Eine Liste der im GBVM-Skript verwendeten Assets und Entities. Dadurch teilt man GB Studio mit, dass das Skripts eine Datei benötigt, um zu verhindern, dass es während der Erstellung ausgeschlossen wird."}]} />

- **Skript**: Ein gültiges GBVM-Skript zur Ausführung.  
- **Referenzen**: Eine Liste der im GBVM-Skript verwendeten Assets und Entities. Dadurch teilt man GB Studio mit, dass das Skripts eine Datei benötigt, um zu verhindern, dass es während der Erstellung ausgeschlossen wird.  

### Script Lock
Pause other scripts and scene updates until this script has finished or is unlocked.
<ScriptEventPreview title={"Script Lock"} fields={[{"label":"Pause other scripts and scene updates until this script has finished or is unlocked."}]} />


### Script Unlock
If locked, unlock this script so other scripts can run and the scene can update.
<ScriptEventPreview title={"Script Unlock"} fields={[{"label":"If locked, unlock this script so other scripts can run and the scene can update."}]} />


## Multiplayer
### Link: Schließen
<ScriptEventPreview title={"Link: Schließen"} fields={[{"label":"Schließe die derzeitige Link-Verbindung."}]} />


### Link: Hosten
<ScriptEventPreview title={"Link: Hosten"} fields={[{"label":"Link-Verbindung hosten."}]} />


### Link: Beitreten
<ScriptEventPreview title={"Link: Beitreten"} fields={[{"label":"Link-Verbindung beitreten."}]} />


### Link: Übertragen
<ScriptEventPreview title={"Link: Übertragen"} fields={[{"key":"sendVariable","label":"Variable senden","type":"variable","defaultValue":"LAST_VARIABLE"},{"key":"receiveVariable","label":"Variable empfangen","type":"variable","defaultValue":"LAST_VARIABLE"},{"key":"size","label":"Paketgröße","type":"number","defaultValue":1}]} />

- **Variable senden**  
- **Variable empfangen**  
- **Paketgröße**  

