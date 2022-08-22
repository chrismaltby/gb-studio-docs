---
sidebar_position: 2
---

# Der Spieler

## Startposition

Die Startposition des Spielercharakters ist in der Spielwelt als <img src="/img/screenshots/player-start.png" style={{height:12}} /> Symbol angegeben.

Durch das Drücken auf die graue Großfläche zwischen den Szenen, wechselt die Seitenleiste zum Projekteditor. Darin kann man die Startposition des Spielercharakters und die Blickrichtung festlegen. Zusätzlich kann man das [Sprite-Sheet](/docs/assets/sprites) für den Spielercharakter wählen.

Man kann auch die Startposition des Spielercharakters direkt anpassen indem man das <img src="/img/screenshots/player-start.png" style={{height:12}} /> Symbol anklickt und es dann zur gewünschten Szene und Position zieht.

## Skript Ereignisse

Die meisten Darstellerereignisse können auch auf den Spielercharakter angewendet werden. Darüber hinaus existiert ein _Spieler: Setze Spieler Sprite-Sheet_ Ereignis um das Aussehen des Spielers nachträglich zu ändern. Dieser Wechsel bleibt auch nach einem Szenenwechsel bestehen, daher sollte man daran denken das Aussehen wieder durch das gleiche Ereignis zurückzuändern falls das erwünscht sein sollte.

Bei einem Szenenwechsel wird der Spielercharakter immer an seiner gesetzten Position zu Beginn der Szene dargestellt, obgleich er in der vorherigen Szene sichtbar war oder nicht. Falls erwünscht ist, dass der Spielercharakter zu Beginn der Szene nicht dargestellt werden sollte (beispielsweise um das Titelmenü anzuzeigen oder eine Zwischensequenz einzuläuten), dann empfielt es sich den Spielercharakter mittels _Darsteller: Ausblenden_ Ereignis im Szenenstartskript (also der _On Init_ Skript) auszublenden.
