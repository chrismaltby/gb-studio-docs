# MOD Music

GBT Player is a _legacy driver_. By default, new projects use the built-in [Music Editor](https://www.gbstudio.dev/docs/assets/music/music-huge).

You can enable GBT Player by setting _Music Format_ in the _Settings View_ to MOD (GBT Player).

## Requirements

Add music to your game by including .mod files in your project's `assets/music` folder. These files should be made for use with GBT Player. You can browse the [GB Studio Community Assets](https://github.com/DeerTears/GB-Studio-Community-Assets) to find free, GBT-compatible music under the MIT licence.

You can use software such as [**OpenMPT**](https://openmpt.org/) (for Windows or Linux using Wine), [**MilkyTracker**](https://milkytracker.titandemo.org/) (for Windows, Mac and Linux), [**ProTracker**](https://16-bits.org/pt.php), and [**BassoonTracker**](https://www.stef.be/bassoontracker/) (browser-based) to name a few.

## Resources

It is recommended you read through your tracker's documentation:
- [OpenMPT's Documentation](https://wiki.openmpt.org/Tutorial:_Getting_Started)
- [MilkyTracker's Documentation](https://milkytracker.org/docs/MilkyTracker.html#shortcuts)
- [BassoonTracker's Documentation](https://www.stef.be/bassoontracker/docs/#about)

Lastly, the [GB Studio Discord](https://discord.gg/v9xAJCJ) also has a dedicated #music-help channel.

## Getting Started

1. Create a blank GB Studio project
2. Find the file `assets/music/template.mod` and open it with your tracker of choice.
   - **You must edit this file to get an accurate representation of the instruments you can use.**
3. Use the instrument list shown later in this document to pick the sounds you want. Changing the samples in your tracker will not affect how they sound in-game.
4. Add a `Play Music Track` event to your game and select your song from the dropdown.
5. Either click the Play button by the song name for an in-editor preview, or play the game for an in-game preview.

Because the .mod file format is not exclusively designed for gameboy, you should test your song in-game or in the Music preview window to catch audible differences between your tracker playback and GBT Player's output.

## GBT Player's Channel Limitations

.mod files have 4 channels. Loading a copy of template.mod (included in every new project) will ensure this is set-up correctly.

| Channel #     | Sound type | Note Range<sup>1</sup> | Instruments | Effects               |
| ------------- | ---------- | ---------------------- | ----------- | --------------------- |
| Channel 1 & 2 | Pulse	     | C3 to B8               | 1-4         | 0, C, E8, EC, B, D, F |
| Channel 3     | Waveform   | C3 to B8               | 8-15        | 0, C, E8, EC <sup>**2**</sup> |
| Channel 4     | Noise      | Only C5                | 16-31       | C, E8, EC, B, D, F    |

*<sup>1</sup> This range is for One-Indexed Trackers (C1 is the lowest-possible note). This is comparable to OpenMPT in default settings.*
*Trackers that are Zero-Indexed by default (C0 is the lowest-possible note) should interpret these Note Ranges a full octave down. This is comparable to MilkyTracker in default settings.*

Using default settings on OpenMPT and MilkyTracker, C3 to B8 in OpenMPT sounds the same as C2 to B7 in MilkyTracker.

*<sup>2</sup> Effects B, D, and F can be also used on Channel 3 if the same row isn't being used to set a note/instrument.*

## Instruments

The nicknames and descriptions next to these instruments are not official for GBT Player, they are intended to help differentiate the instruments at a glance.

The pulse channels 1 and 2 have four instrument options:

1. 25% pulse
2. 50% pulse (square wave)
3. 75% pulse (inverted 25% pulse)
4. 12.5% pulse

Instruments 5 through 7 are intentionally left blank.

Channel 3, the wave channel, has 8 instrument options:

8. Buzzy
9. Ringy
10. (A) Sync Saw
11. (B) Ring Saw
12. (C) Octave Pulse + Triangle
13. (D) Sawtooth
14. (E) Square
15. (F) Sine

Instruments 16 to 23 use periodic noise at various pitches, while instruments 24 to 32 use pseudorandom noise at various pitches.

Periodic Noise:

16. (10hx) "stutter" - A square plus a pulse at random pulse widths
17. (11hx) "rumble" - The same waveform but faster
18. (12hx) "engine" - The same waveform but even faster
19. (13hx) "low tone" - Sounds like D5
20. (14hx) "undertone" - Sounds like E5 + 50cents
21. (15hx) "middletone" - Sounds like B5 + 50cents
22. (16hx) "overtone" - Sounds like D6 + 50cents
23. (17hx) "high tone" - Sounds like D7

Pseudorandom Noise:

24. (18hx) "earthquake" - A square with a thin pulse at random pulse widths
25. (19hx) "spaceship" - The same as 24 but faster
26. (1Ahx) "ocean" - etc.
27. (1Bhx) "scratch" - etc.
28. (1Chx) "glitch" - A fairly clean white-noise sample, unrelated to other instruments
29. (1Dhx) "volcano" - A pulse with rapidly changing pulse width
30. (1Ehx) "scream" - The same as 29 but faster
31. (1Fhx) "static" - etc.

## Effects

### Song effects

| Effect | Name | Description | Usable by |
| ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -- |
| **Bxx** | Jump | Jump to a specific pattern in the song. | 1, 2, 3<sup>1</sup>, 4
| **Dxx** | Pattern break | Jumps to the next pattern early, starting the pattern at row `xx`. This is the only way to shorten a pattern's length. | 1, 2, 3<sup>1</sup>, 4 |
| **Fxx** | Set speed | Sets the song speed to `xx`, from 0x1 (fast) to 0x1F (slow). This is the intended alternative to adjusting song tempo. `xx` represents the number of ticks per row. See [Speed Table](#speed-table) for more info. | 1, 2, 3<sup>1</sup>, 4 |

<sup>1</sup> Cannot be used by Channel 3 on rows where Channel 3 is playing a new note.

### Channel effects

Persists on the channel until the effect is set again. See [Effect Persistence](#effect-persistence) for more info.

| Effect | Name | Description | Usable by |
| ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -- |
| **9ve** | Volume Envelope | Sets the note's starting volume at `v` (0-F), and adds a volume fade envelope. Fade direction and speed is set by `e`. 1-7 decreases volume over time, with 1 being fast. 9-F increases volume over time, with 9 being fast. 8 removes the envelope. Using `9ve` after `Cxx` overrides `Cxx`. | 1, 2, 4 |
| **Cxx** | Volume | Sets the channel volume to `xx`. See [Cxx Volume Limitations](#cxx-volume-limitations) for more info. Using `Cxx` after `9ve` overrides the `v` value, but keeps `e` the same.| 1, 2, 3, 4 |
| **E8x** | Pan | Sets the panning to one of three values. `0-3` = 100% Left, `4-B` = Centre, `C-F` = 100% Right. | 1, 2, 3, 4 |

### Note effects

Affects a note individually.

| Effect | Name | Description | Usable by |
| ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -- |
| **0xy** | Arpeggio | Rapidly cycles between 3 notes. `x` and `y` represent the # of semitones above the starting note. | 1, 2, 3, 4 |
| **1xx**| Pitch slide up | Slides the pitch up by `xx` ticks. Putting `100` after a previous `1xx` setting uses the same value as the previous setting. | 1, 2, 3 |
| **2xx**| Pitch slide down | Slides the pitch down by `xx` ticks. Putting `200` after a previous 2xx setting uses the same value as the previous setting. | 1, 2, 3 |
| **ECx** | Note cut | Cuts the note after `x` frames. Must be below the `Fxx` speed to be heard. | 1, 2, 3, 4 |

## Effect Persistence

Once set, a channel effect will persist on that channel's notes until the same effect is set again.

In most trackers, if a note is played without a volume command, the note's volume is reset to the maximum. When a .mod file is converted by GBT Player, notes without a volume effect will play at the same volume as the previous `Cxx` effect.

**Example:**

```
ModPlug Tracker MOD
|C-502...C40|
|...........|
|...........|
|...........|
|........C00|
|...........|
|E-502......|
```

In any .mod tracker, the E-5 note will resume at full volume after the C00 effect.

In-game, you will not hear the E-5 note. This is because the C00 persists until another Cxx effect is set. To make this note heard in-game, the volume must be set again:

```
ModPlug Tracker MOD
|C-502...C40|
|...........|
|...........|
|...........|
|........C00|
|...........|
|E-502...C40|
```

You can use `EC0` as an alternative to `C00` to cut notes and preserve the last volume effect.

## Cxx Volume Limitations

`Cxx` sets the volume of a channel until `Cxx` effect or `9ve` is used.

The Gameboy has 16 unique volume settings for Channels 1, 2 and 4. Although .mod files allow for volumes between 0 and 40hx, GBT Player will round-down these values effects to multiples of 4 to maintain compatibility. Here are the valid volume values for each of the channels:

### Cxx Settings for Channels 1, 2 and 4:

`00, 04, 08, 0C, 10, 14, 18, 1C, 20, 24, 28, 2C, 30, 34, 38, 3C`

Any `Cxx` value that's not a multiple of 4 will be rounded-down to one of the above numbers.

**Example:** Entering `C01`, `C02` and `C03` will sound the same as entering `C00`.

**Example:** Entering `C40` will sound the same as entering `C3C`.

### Unique Volume Settings for Channel 3:

Channel 3 is an exception, with only 4 unique volume settings:

`00, 10, 20, 40`

GBT Player will round `Cxx` effects on Channel 3 toward the nearest number listed above.

**Example:** Entering `C30` will round the volume up to `C40`.

### Speed Table

This table assumes the -speed flag is not set in the _Music_ window for each song.

| Fxx Value (in most .mod trackers) | BPM (in any . mod trackers) | BPM (in game) |
| --------------------------------- | --------------------------- | ------------- |
| **F01<sup>1</sup>**    | 750 BPM          | 900 BPM       |
| **F02<sup>1</sup>**    | 375 BPM          | 450 BPM       |
| **F03<sup>1</sup>**    | 250 BPM          | 300 BPM       |
| **F04<sup>1</sup>**    | 187.5 BPM        | 225 BPM       |
| F05                    | 150 BPM          | 150 BPM       |
| F06                    | 125 BPM          | 128.57 BPM    |
| F07                    | 107.14 BPM       | 112.50 BPM    |
| F08                    | 93.75 BPM        | 100 BPM       |
| F09                    | 83.33 BPM        | 90 BPM        |
| F0A                    | 75 BPM           | 81.82 BPM     |
