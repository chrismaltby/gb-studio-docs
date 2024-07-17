import ScriptEventPreview from '@site/src/components/ScriptEventPreview';

# Muzyka

Muzyka może być odtwarzana w grze za pomocą zdarzenia [Muzyka: odegraj utwór](/docs/scripting/#music-events) w skryptach *Aktora*, *Wyzwalacza* lub *Sceny*.

<ScriptEventPreview title={"Play Music Track"} fields={[{"key":"musicId","type":"music","defaultValue":"LAST_MUSIC"}]} />

Muzykę można dodać do gry, umieszczając pliki `.uge` lub `.mod` w folderze `assets/music` projektu.

Projekt może obsługiwać tylko jeden typ plików muzycznych, opcję tę można skonfigurować wybierając w projekcie menu Podgląd [Ustawienia](/docs/settings/#music-driver) wybierając format muzyki MOD lub UGE.

Pliki `.uge` mogą być tworzone i edytowane za pomocą _Edytora muzyki_.

Więcej informacji znajduje się w dokumentacji w dziale [Edytor muzyczny](/docs/assets/music/music-huge).


Pliki `.mod` są tworzone i edytowane za pomocą zewnętrznego oprogramowania Tracker. Można wybrać domyślną aplikację do otwierania tego rodzaju zasobów, wystarczy w programie GB Studio przejść do menu Edycja _Preferencje_ i w oknie preferencji ustawić domyślne aplikacje.

Więcej informacji znajduje się w dokumentacji w dziale [Pliki MOD](/docs/assets/music/music-gbt).
