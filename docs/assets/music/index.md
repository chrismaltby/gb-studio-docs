import ScriptEventPreview from '@site/src/components/ScriptEventPreview';

# Music

Music can be played in your game using the [Play Music Track](/docs/scripting/#music-events) event in your *Actor*, *Trigger*, or *Scene* scripts.

<ScriptEventPreview title={"Play Music Track"} fields={[{"key":"musicId","type":"music","defaultValue":"LAST_MUSIC"}]} />

You can add music to your game by including `.uge` or `.mod` files in your project's `assets/music` folder.

A project can only support one type of music files, this can be configured on the [Settings View](/docs/settings/#music-driver) by selecting either MOD or UGE as the Music Format.

`.uge` files can be created and edited with the _Music Editor_. 

See the [Music Editor](/docs/assets/music/music-huge) documentation for more information.

`.mod` files are created and edited using an external Tracker software. You can select the default application to open when clicking asset edit buttons in the _GB Studio Preferences_ window.

See the [MOD files](/docs/assets/music/music-gbt) documentation for more information.