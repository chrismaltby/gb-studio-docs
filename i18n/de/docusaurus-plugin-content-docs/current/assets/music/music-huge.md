# hUGE Driver

GB Studio 3.0 adds support for `.uge` files on top of the existing `.mod` files from previous versions. A project can only support one type of music files, this can be configured on the [Settings View](/docs/settings/#music-driver) by selecting either GBT Player (for .mod files) or hUGEDriver (for .uge files) as the Music Driver.

## Getting Started

To compose .uge files you can use
[hUGETracker](https://nickfa.ro/index.php/HUGETracker) or
new music tracker included in GB Studio 3.0. The tracker can be accessed
in the Music section of the app. It'll display any .uge files in your
project\'s assets/music folder. And it also allows you to create new
songs by pressing the + button on top of the file list.

Each song uses 4 channels: Duty 1, Duty 2, Wave and Noise. Each channel
can use 15 [instruments](#instruments) with a note pitch
range from C3 to B8.

## Editing a song

The music editor is divided in three parts:

-   **Left sidebar**: Contains the list of songs and instruments for the selected song

-   **Middle panel**: The music editor itself. Has two views: Piano Roll and Tracker.

-   **Right sidebar**: Allows to edit the song title, artist name and tempo (measured in ticks per row) and also shows the instrument editor if there's any selected in the left sidebar.

### Piano Roll

In Piano Roll mode you use the cursor to add notes to a grid. The time
is represented in the horizontal axis (columns) while the note pitch is
represented on the vertical axis (rows).

You can only add notes to one channel at a time, selectable on the top
right toolbar. The channels can be muted with the sound icon for each
channel. The channels that aren't selected can be previewed by clicking the
eye icon.

<img title="Piano Roll" src="/img/screenshots/music-editor-piano.png" width="1241" />

To input a note, select the pen tool in the toolbar and click on a cell.
The note will use the selected instrument in the toolbar.

To remove a note, select the eraser tool in the toolbar and click on an
existing note. You can also right click on an existing note to remove
it.

**Note:** It's not possible to add effects in Piano Roll mode.

The song can be previewed at any time by pressing the play button.

The song can be saved by pressing the save button or Ctrl/Cmd + S.

### Tracker

In Tracker mode you use the keyboard to add notes. The song advances
from top to bottom, with each row representing a position of the song.
There's one column for each channel, and each is divided in 3 cells:
Note, Instrument and Effect.

<img title="Tracker" src="/img/screenshots/music-editor-tracker.png" width="1241" />

The song grid can be navigated with the cursor keys. Keys from Q to /
are used to input the values in the note column of each channel. The
base octave (used for the Q key) can be selected in the dropdown menu.

<img title="Tracker" src="/img/screenshots/music-editor-keys.png" width="360" class="drop-shadow" />


The numeric keys are used to input the value in the instrument column. A
default [instrument](#instruments) can be selected in the
toolbar and be used automatically when adding a new note.

The numeric keys, and keys A through F are used to input values in the
[effect](#effects) column.

The song can be previewed at any time by pressing the play button.

The song can be saved by pressing the save button or Ctrl/Cmd + S.

## Patterns

A pattern in the GB Studio music editor is unique group notes in each 4
channels. Patterns can be repeated or arranged to form the full song
using the pattern editor.

<img title="Patterns" src="/img/screenshots/music-editor-patterns.png" width="710" class="drop-shadow" />

The dropdown menu on each cell allows you to select one of the existing
patterns or assign an empty one to the current position.

The plus button allows you to add a new pattern to the song.

**Note:** any unused pattern will be removed from the song on save.

## Instruments

>Borrowing from the descriptions on the [hUGETracker
manual](https://nickfa.ro/images/HUGETrackerManual.pdf)

Selecting an instrument in the left sidebar will open the instrument
editor on the right sidebar.

Changes in the instrument can be previewed at any time by pressing the
"Test Instrument (C5)" button, which will play the C5 note for a few
seconds with the selected instrument.

Other than the instrument name, each instrument has its own set of
fields that can be edited.

### Duty Instruments

**Length:** When enabled, the note will be cut off immediately at a
specific length. If not enabled the note will play until a new note
starts.

**Initial volume**: Sets the starting volume for the envelope. If
there's no sweep change set this will be the volume for the note.

**Sweep Change:** Defines how steep the volume change will be. The
higher or lower the value, the quicker the note will fade in or out.

**Sweep time:** Selects the "sweep time" for the note to take. The
greater the value, the slower the sweep.

**Sweep direction:** Selects the direction of sweep for the note to
take. Up portamentos the note up, down portamentos it down.

**Sweep size:** Selects the magnitude of sweep for the note to take per
"tick" as specified by sweep time.

**Duty:** Selects the timbre of note to play. Each one sounds different,
and they are useful when you don't want both of the duty channels to
clash with one another.

### Wave Instruments

**Length:** When enabled, the note will be cut off immediately at a
specific length. If not enabled the note will play until a new note
starts.

**Wave volume**: Specifies at what volume a wave instrument shall play
unless overridden by a volume effect command. There are only 3 possible
values here, as the wave channel's volume interface is more limited than
the other channels.

**Waveform**: Selects which waveform should play as part of this
instrument. The selected waveform can be edited by drawing on the
waveform preview.

### Noise Instruments

**Length:** When enabled, the note will be cut off immediately at a
specific length. If not enabled the note will play until a new note
starts.

**Shift clock mask and Dividing ratio:** Two components of the noise
generation algorithm. Tweak them to obtain different results.

**7-bit counter:** When checked, the instrument will sound more like a
musical tone rather than noise.

**Noise Macro:** Like an arpeggio effect, set up to 8 pitch changes +-32
from the noise frequency, advancing every frame, great for kick drums or
fast sweeping noise. Must be shorter than your current song tempo.

## Effects

>Borrowing from the descriptions on the [hUGETracker
manual](https://nickfa.ro/images/HUGETrackerManual.pdf)

| Effect | Name               | Description                             |
| ------ | ------------------ | --------------------------------------- |
| 0xy    | Arpeggio           | On every tick, switch between the       |
|        |                    | playing note, note + x, and note + y,   |
|        |                    | where `x` and `y` are values in         |
|        |                    | semitones. Can be used to create        |
|        |                    | "chords" or a strum effect.             |
| 1xx    | Portamento Up      | Slide the pitch up by `xx` units        |
|        |                    | every tick.                             |
| 2xx    | Portamento Down    | Slide the pitch down by `xx` units      |
|        |                    | every tick.                             |
| 3xx    | Tone Portamento    | Slide the pitch towards the specified   |
|        |                    | note value by                           |
|        |                    |                                         |
|        |                    | `xx` units every tick. Stops when it    |
|        |                    | reaches the                             |
|        |                    |                                         |
|        |                    | specified note value. **This effect     |
|        |                    | cannot be used in**                     |
|        |                    |                                         |
|        |                    | **a cell with an instrument value.**    |
| 4xy    | Vibrato            | Rapidly switch between the specified    |
|        |                    | note value and note + y, at the rate of |
|        |                    | `x`, where `y` is a value in units.     |
|        |                    | Valid values for `x` are 0, 1, 3, 7,    |
|        |                    | and F. This is similar to arpeggio,     |
|        |                    | except you can control the frequency,   |
|        |                    | and the amount is specified in units    |
|        |                    | rather than semitones.                  |
| 5xx    | Set Master Volume  | Sets the master volume control of the   |
|        |                    | Gameboy for the left and right          |
|        |                    | speakers. Use the effect editor to      |
|        |                    | create one of these effects. Note that  |
|        |                    | a volume of zero is not completely      |
|        |                    | silent.                                 |
| 6xx    | Call Routine       | Call a user-defined routine. Routines   |
|        |                    | can be created by using the "Set Music  |
|        |                    | Routine" event.                         |
| 7xx    | Note Delay         | Wait `xx` ticks before playing the      |
|        |                    | note in this cell.                      |
| 8xx    | Set Panning        | Sets which channels play on which       |
|        |                    | speakers. Use                           |
|        |                    |                                         |
|        |                    | the effect editor to create one of      |
|        |                    | these effects.                          |
|        |                    |                                         |
|        |                    | Can also be used as a mute for a        |
|        |                    | channel by setting it to output on      |
|        |                    | neither left nor right.                 |
| 9xx    | Set Duty Cycle     | Select duty cycle for either channel 1  |
|        |                    | or channel 2. If this effect appears on |
|        |                    | the noise or wave channels, it will     |
|        |                    | affect channel 2. Valid values for xx   |
|        |                    | are 00, 40, 80, C0. Under the hood, the |
|        |                    | `xx` value is loaded directly into      |
|        |                    | ch1 or ch2's length register, so you    |
|        |                    | could theoretically achieve other       |
|        |                    | effects than just duty cycle changing.  |
| Axy    | Volume Slide       | Slide the note's volume up by `x`       |
|        |                    | units, and then down by `y` units.      |
|        |                    | This effect actually retriggers the     |
|        |                    | note on each tick, which might not be   |
|        |                    | noticeable for instruments without      |
|        |                    | length/envelope, but could potentially  |
|        |                    | sound bad if those are present.         |
|        |                    | Recommended to use either instrument    |
|        |                    | envelopes, or the `C` command instead   |
|        |                    | if you can. **This effect does not work |
|        |                    | in the same cell as a                   |
|        |                    | note/instrument!**                      |
| Bxx    | Position Jump      | Jump to a specific position in the song |
|        |                    | `xx`.                                   |
| Cxx    | Set Volume         | Set the volume of the channel to        |
|        |                    | `xx`. Must be accompanied by a note     |
|        |                    | and instrument to work (except on       |
|        |                    | channel 3). Valid values range from     |
|        |                    | 00-0F.                                  |
| Dxx    | Pattern Break      | Jump to the next pattern early, and     |
|        |                    | start on row `xx`.                      |
| Exx    | Note Cut           | Cut the note short after `xx` ticks.    |
| Fxx    | Set Speed          | Set the number of ticks per row to      |
|        |                    | `xx`. Can be used in an alternating     |
|        |                    | fashion to create a swing beat.         |
