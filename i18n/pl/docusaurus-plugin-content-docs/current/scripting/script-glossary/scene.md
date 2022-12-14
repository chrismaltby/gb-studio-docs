---
sidebar_position: 2
#
# This file is autogenerated. DO NOT MODIFY DIRECTLY
#
---

import ScriptEventPreview from '@site/src/components/ScriptEventPreview';

# Scena

## Scena: zmień scenę (teleport)
Przejście do nowej sceny z graczem w określonej pozycji i kierunku. Pomiędzy źródłem zdarzenia a sceną docelową zostanie narysowana linia połączenia z ikoną pojawiającą się w miejscu docelowym. Możliwe jest przeciąganie tej ikony dookoła i pomiędzy scenami, aby zmodyfikować wydarzenie.
<ScriptEventPreview title={"Scena: zmień scenę (teleport)"} fields={[{"key":"sceneId","label":"Scena","description":"Wybierz scenę do przejścia.","type":"scene","defaultValue":"LAST_SCENE"},{"type":"group","fields":[{"key":"x","label":"X","description":"Początkowa pozycja pozioma gracza w nowej scenie.","type":"number","min":0,"max":255,"defaultValue":0,"width":"50%"},{"key":"y","label":"Y","description":"Początkowa pozycja pionowa gracza w nowej scenie","type":"number","min":0,"max":255,"defaultValue":0,"width":"50%"}]},{"key":"direction","label":"Kierunek","description":"Początkowy kierunek gracza.","type":"direction","width":"50%","defaultValue":""},{"key":"fadeSpeed","label":"Szybkość przejścia","description":"Ustawienie szybkości przejścia.","type":"fadeSpeed","defaultValue":"2","width":"50%"}]} />

- **Scena**: Wybierz scenę do przejścia.  
- **X**: Początkowa pozycja pozioma gracza w nowej scenie.  
- **Y**: Początkowa pozycja pionowa gracza w nowej scenie  
- **Kierunek**: Początkowy kierunek gracza.  
- **Szybkość przejścia**: Ustawienie szybkości przejścia.  

## Scena: wyczyść stan pamięci
Usunięcie wszystkich scen z pamięci stosu scen bez opuszczania bieżącej sceny.
<ScriptEventPreview title={"Scena: wyczyść stan pamięci"} fields={[{"label":"Wyczyszczenie pamięci z zapamiętanych układów scen."}]} />


## Scena: wczytaj pierwszą z pamięci
Przejście do pierwszej sceny przechowywanej na stosie, na przykład jeśli masz wiele poziomów scen menu, możesz użyć tego, aby natychmiast powrócić do sceny gry. To zdarzenie spowoduje, że stos scen stanie się pusty.
<ScriptEventPreview title={"Scena: wczytaj pierwszą z pamięci"} fields={[{"label":"Wczytanie układu scen z pamięci."},{"type":"break"},{"key":"fadeSpeed","label":"Szybkość przejścia","description":"Ustawienie szybkości przejścia.","type":"fadeSpeed","defaultValue":"2","width":"50%"}]} />

- **Szybkość przejścia**: Ustawienie szybkości przejścia.  

## Scena: wczytaj scenę z pamięci
Przejście do ostatniej zapisanej sceny ze stosu scen przy użyciu określonej szybkości zanikania. Poprzednia scena zostanie następnie usunięta ze stosu, więc następnym razem, gdy to zdarzenie zostanie użyte, przejdzie do sceny wcześniejszej.
<ScriptEventPreview title={"Scena: wczytaj scenę z pamięci"} fields={[{"label":"Wczytanie ostatniego układu sceny."},{"type":"break"},{"key":"fadeSpeed","label":"Szybkość przejścia","description":"Ustawienie szybkości przejścia.","type":"fadeSpeed","defaultValue":"2","width":"50%"}]} />

- **Szybkość przejścia**: Ustawienie szybkości przejścia.  

## Scena: zapisz scenę do pamięci
Zapisz bieżącą scenę i stan gracza do stosu sceny, pozwoli to na późniejszy powrót do tej dokładnej lokalizacji później przy pomocy poleceń przywracania sceny. Typowym zastosowaniem tego polecenia jest umieszczenie go przed polecniem 'Zmień scenę', gdzie następuje przejście na scenę menu. W scenie menu, można ustawić skrypt, który czeka na naciśnięcie przycisku, który ma zamknąć menu, a następnie należy użyć polecenia 'wczytaj scenę z pamięci'. Dzięki temu, gracz zostanie przeniesiony do dokładnego miejsca, przed otwarciem menu.
<ScriptEventPreview title={"Scena: zapisz scenę do pamięci"} fields={[{"label":"Zapisanie układu sceny do pamięci"}]} />


