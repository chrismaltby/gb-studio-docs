---
sidebar_position: 3
---

# Darsteller

Darsteller sind Charaktere und Objekte innerhalb der Szene mit denen der Spielcharakter interagieren kann.

## Darsteller hinzufügen

Um einen Darsteller zur Szene hinzuzufügen, klickt man auf den _**+** Knopf_ in der oberen linken Ecke der _Editor Werkzeugleiste_ und dann auf _Darsteller_ (alternativ auch mit der **A** Taste). Danach kann man den Darsteller in einer beliebigen Szene an einer beliebigen Position platzieren.

<img src="/de/img/screenshots/add-actor.gif" style={{ width: 300 }} />

Die _Editor Seitenleiste_ wechselt anschließend zu den Darsteller Einstellungen wo man unter anderem den Darstellernamen angeben, die Darstellerposition festlegen (alternativ auch via Drag & Drop möglich), das Aussehen des Darstellers durch Angabe eines [Sprite-Sheet](/docs/assets/sprites) einstellen, die Blickrichtung des Darstellers angeben, die Bewegungsgeschwindigkeit bestimmen und ein Ereignisskript entwerfen kann. Letzteres wird immer dann ausgeführt wenn der Spielcharakter mit diesem Darsteller interagiert.

## Bewegungsart

Es gibt verschiedene auswählbare Bewegungsarten in Bezug auf das Verhalten des Darstellers wenn dieser mit dem Spielcharakter interagiert oder das Bewegungsverhalten des Darstellers innerhalb der Szene.

- **Statisch** - Der Darsteller wird nur als ein einzelnes Frame eines festgelegten Sprite-Sheets dargestellt.  
  Falls das Sprite-Sheet mehrere Frames beinhaltet, dann erscheint eine Option mit welcher man das Frame auswählen kann das dargestellet werden soll. Ebenfalls ist es möglich den dargestellten Frame mithilfe des _Darsteller: Animationsframe Festlegen_ Ereignisses nachträglich zu verändern. Zusätzlich ist es möglich den Darsteller zyklisch in einem festgelegten Tepo animieren zu lassen. Dieses Tempo lässt sich durch das _Darsteller: Animationsframe Festlegen_ Ereignis einstellen.\
  \
  Der Darsteller wird auch bei Spielerinteraktion immer in dieselbe voreingestellte Blickrichtung schauen (außer natürlich man ändert dies nachträglich mit einem Ereignis). Dieses Verhalten ist nützlich, wenn der Darsteller stationär wirken soll wie beispielsweise Wegweiser, Schatztruhen, Blumen, usw.

- **Gesichtsinteraktion** - Der Darsteller wird anfangs in die voreingestellte Blickrichtung schauen, jedoch wird der Darsteller bei einer Interaktion durch den Spielercharakter in dessen Richtung schauen ehe der Darstellerskript ausgeführt wird. Dieses Verhalten ist für simple Charaktere erwünschenswert um diese lebhaft und ansprechbar wirken zu lassen.

- **Zufällige Drehung** - Der Darsteller wird anfangs in die voreingestellte Blickrichtung schauen, jedoch wird der Darsteller daraufhin in bestimmten Zeitintervallen die Blickrichtung ändern. Dieses Verhalten ist nützlich um den Darsteller so wirken zu lassen, als würde dieser sich in seinem Umfeld umschauen.

- **Zufällige Bewegung** - Der Darsteller wird in bestimmten Zeitintervallen sich in eine zufällige Richtung bewegen und auch in dieser Richtung schauen. Dieses Verhalten ist nützlich um den Darsteller so wirken zu lassen, als würde dieser nach etwas suchen. Jedoch kann dieses Verhalten dafür sorgen, dass der Darsteller Wege versperrt und im schlimmsten Fall den Spielercharakter in bestimmten Bereichen "einsperrt". Somit sollte man darauf achten diese Bewegungsart nicht in engen Szenen mit wenig Bewegungsfreiraum zu verwenden.

_Hinweis:_ Fall der Darsteller einen statischen Sprite-Sheet verwendet (also ein Sprite-Sheet mit einem einzigen Frame á la `16px` x `16px`) dann wird automatisch die Bewegungsart statisch verwendet und die Einstellung für die anfängliche Blickrichtung wird ausgeblendet.

## Frame Einschränkungen

Aufgrund von Hardware Einschränkungen können pro Szene nur bis zu **25 unterschiedliche Frames** für alle Darsteller zugewiesen werden. Falls nötig sollten Darsteller entweder als statisch eingestellt werden oder gänzlich auf Frameanimationen verzichten um die Anzahl verwendeter Frames zu minimieren. Eine weitere Möglichkeit um die Anzahl verwendeter Frames effizient zu halten ist es mehreren Darsteller den gleichen Sprite-Sheet zuzuteilen. Ein bereits verwendetes Sprite-Sheet in der gleichen Szene wiederzuverwenden zählt nicht zu dieser Frame Einschränkung dazu.

## Skript Ereignisse

Darsteller besitzen zwei unterschiedliche Skriptarten, _On Interact/Interaktion_ und _On Init/Szenenstart_, welche auf unterschiedlicher Weise ausgelöst werden. Diese zwei Skripte können hin- und hergeschalten werden indem man in der _Editor Seitenleiste_ die jeweilige Skriptart anklickt während der Darsteller ausgewählt wurde.

Der _On Interact/Interaktion_ Skript wird immer dann ausgeführt wenn der Spielercharakter den Darsteller aus nächster Nähe mithilfe des _A_ Knopfs anspricht.

Der _On Init/Szenenstart_ Skript wird immer dann ausgeführt sobald die Szene geladen wird. Dieser Skript hat Vorrang gegenüber dem Szenenstartskript der Szene.

Falls der Darsteller ausgewählt ist, kann man durch den _Ereignis hinzufügen_ Knopf in der _Editor Seitenleiste_ ein Ereignismenü öffnen und das jeweilige Skript zusammenstellen.

Weitere Informationen findet man in der Dokumentation für [Skript Ereignisse](/docs/category/event-glossary).
