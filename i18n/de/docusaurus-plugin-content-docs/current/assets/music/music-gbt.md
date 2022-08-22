---
title: "GBT Player"
draft: false
next: "/docs/sound-effects"
nextTitle: "Sound Effects"
---

If you have your _Music Driver_ in the _Settings View_ set to [GBT Player](https://github.com/AntonioND/gbt-player) (the default in GB Studio 2 and below) you will need to provide music as `.mod` files.


## Requirements

Add music to your game by including .mod files in your project's `assets/music` folder. GBT Player is a driver that takes .mod files and converts them to instructions for the Gameboy. GBT Player interprets .mod files differently than the Amiga computers that the .mod format was originally designed for, so every .mod file that GBT Player reads should be composed/arranged to be used with GBT Player.

As an alternative to composing, there is a way to import .midi files to OpenMPT for playback in GBT Player. More information can be found under [Frequently Asked Questions](https://www.gbstudio.dev/docs/music/#frequently-asked-questions). You can also browse the [GB Studio Community Assets](https://github.com/DeerTears/GB-Studio-Community-Assets) to find free, GBT-compatible music under the MIT licence.

To compose GBT-compatible .mod files, you can use software such as [**OpenMPT**](https://openmpt.org/) (for Windows or Linux using Wine), [**MilkyTracker**](https://milkytracker.titandemo.org/) (for Windows, Mac and Linux), [**ProTracker**](https://16-bits.org/pt.php), and [**BassoonTracker**](https://www.stef.be/bassoontracker/) (browser-based) to name a few. Any software that loads and exports .mod files can write files that are compatible with GBT Player.

## Resources

It is recomended you read through your tracker's documentation to learn about your tracker:
- [OpenMPT's Documentation](https://wiki.openmpt.org/Tutorial:_Getting_Started)
- [MilkyTracker's Documentation](https://milkytracker.org/docs/MilkyTracker.html#shortcuts)
- [BassoonTracker's Documentation](https://www.stef.be/bassoontracker/docs/#about)

Lastly, the [GB Studio Discord](https://discord.gg/v9xAJCJ) also has a dedicated #music-help channel and a #tutorials channel in case you get stuck.

## Getting Started

1. Create a blank GB Studio project, find the file `assets/music/template.mod` and open it with your tracker of choice.
   - **You must edit this file to get an accurate representation of the instruments you can use.**
   - MilkyTracker users should save this file as an `.XM` file. Saving a .mod file in MilkyTracker will corrupt it. Export your song as a .mod file every time you want to test your song in-game.
2. Use the instrument list shown later in this document to pick the sounds you want. Changing the samples in your tracker will not affect how they sound in-game.

When done, add your .mod files to the `assets/music` folder of your project. **Test your song in-game often to keep track of any audible in-game differences.**

Here is a quick rundown of how a tracker works:

```
C-5 01 v64 ...
--- -- --- ---
 |   |  |   |
 |   |  |   +-- Effect column (Volume changes, arpeggios, panning, etc.)
 |   |  +------ Volume value, this is irrelevant in .MOD. (Most examples here omit this
 |   |          and instead display three dots in its place)
 |   +--------- Instrument
 +------------- Note and octave (A C note in the 5th octave. The dash can be a #, which signifies a sharp note e.g. C#, D#)
```

This is what comprises of a channel's row. Rows can be empty, or can only be partially filled (with just an effect, for example). There's 4 of those columns in total.

Any part in this documentation where you see data that starts with `ModPlug Tracker MOD`, you can copy that entire block into OpenMPT as-is. Any data copied from OpenMPT looks like that when you paste it into any text application.

## GBT Player's Channel Limitations

.MOD files need to use 4 channels. Loading a copy of template.mod before composing will ensure this is set-up correctly.


| Channel #     | Sound type | Note Range<sup>1</sup> | Instruments | Effects               |
| ------------- | ---------- | ---------------------- | ----------- | --------------------- |
| Channel 1 & 2 | Pulse	     | C3 to B8               | 1-4         | 0, C, E8, EC, B, D, F |
| Channel 3     | Waveform   | C3 to B8               | 8-15        | 0, C, E8, EC <sup>**2**</sup> |
| Channel 4     | Noise      | Only C5                | 16-31       | C, E8, EC, B, D, F    |

*<sup>1</sup> This range is for One-Indexed Trackers (C1 is the lowest-possible note). This is comparable to OpenMPT in default settings.*
*Trackers that are Zero-Indexed by default (C0 is the lowest-possible note) should interpret these Note Ranges a full octave down. This is comparable to MilkyTracker in default settings.*

Using default settings on OpenMPT and MilkyTracker, C3 to B8 in OpenMPT sounds the same as C2 to B7 in MilkyTracker.

*<sup>2</sup> Effects B, D, and F can be also used on Channel 3 if the same row isn't being used to set a note/instrument.*

## Volume Limitations

Currently, volume can only be adjusted by using the `Cxx` effect for each channel.

The Gameboy has 16 unique volume settings for Channels 1, 2 and 4. GBT Player will floor (round-down) the values in a `Cxx` volume effect to multiples of 4.

### Unique Volume Settings for Channels 1, 2 and 4:
`00, 04, 08, 0C, 10, 14, 18, 1C, 20, 24, 28, 2C, 30, 34, 38, 3C`

Any number that's not a multiple of 4 will be rounded-down to one of the above numbers.

**Example:** Entering `C01`, `C02` and `C03` will sound the same as entering `C00`.

**Example:** Entering `C40` will sound the same as entering `C3C`.

Channel 3 is the exception to this with only 4 unique volume settings.

### Unique Volume Settings for Channel 3:
`00, 10, 20, 40`

GBT Player will round `Cxx` effects on Channel 3 to the nearest number listed above.

**Example:** Entering `C30` will round the volume up to `C40`.

## Volume Persistence

In most trackers, if a note is played without a volume command, the note's volume is reset to the maximum. When a .mod file is converted by GBT Player, notes without a volume effect will play at the same volume as the previous `Cxx` effect that the channel read. For example, take this scenario:

```
ModPlug Tracker MOD
|C-502...C40|
|...........|
|...........|
|...........|
|........C..|
|...........|
|E-502......|
```

In the tracker, the E-5 note will resume at full volume after the C00 effect. 

In-game, you will not hear the E-5 note. This is because the C00 persists until another `Cxx` effect is set. To make the tracker playback sound identical to the in-game playback, the following must be done:

```
ModPlug Tracker MOD
|C-502...C40|
|...........|
|...........|
|...........|
|........C..|
|...........|
|E-502...C40|
```

Additionally, Channel 3 requires that the instrument and note is set during a volume change for the volume change to have any effect. (Except for `C00`.) For example:

```
ModPlug Tracker MOD
|C-511...C40|
|...........|
|...........|
|...........|
|........C20|
|...........|
|G-511...C40|

```

You will not hear any volume change from the C20 in-game. Add a note and instrument on `C20` to register the volume change.

```
ModPlug Tracker MOD
|C-511...C40|
|...........|
|...........|
|...........|
|C-511...C20|
|...........|
|G-511...C40|
```

## Instruments
*All numbers listed here are in base-10 unless otherwise noted.*

The pulse channels 1 and 2 have four instrument options:

1. 25% pulse
2. 50% pulse (square wave)
3. 75% pulse (inverted 25% pulse)
4. 12.5% pulse

Instruments 5 through 7 are intentionally left blank.

Channel 3, the wave channel, has 8 instrument options:

8. Buzzy (Source code calls this "random :P")
9. Ringy (useful for SFX)
10. (A) Sync Saw
11. (B) Ring Saw
12. (C) Octave Pulse + Triangle
13. (D) Sawtooth
14. (E) Square
15. (F) Sine

As of GB Studio 1.2.1, GBT Player uses 16 instruments to access pre-determined noise settings - instruments 16 to 32.

Instruments 16 to 23 use Periodic (looped) Noise at various pitches, while instruments 24 to 32 use Pseudorandom noise at various pitches.

The nicknames and descriptions next to these instruments are not official for GBT Player, they are intended to help identify these noise presets at a glance.

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

As of GB Studio 1.2.1 there are no GBT Player-readable instruments beyond 31. (1Fhx)

## Effects

There are two types of effects: Note-effects and Command-effects.

The only restrictions on effects is the Command-effects with Channel 3. It can use them when it's not trying to play a note/set the instrument on the same row.

**Note-effects** (uses bit 3) - All channels can use these effects freely

| Effect  | Name		  | Notes on effect usage																						|
| ------- | ------------- | ----------------------------------------------------------------------------------------------------------- |
| **0xy** |   Arpeggio    | Rapidly cycles between 3 notes. `x` and `y` both represent the # of semitones above the note the arpeggio effect is attached to. |
| **Cxx** |    Volume     | Sets the volume to `xx`. See **Volume Limitations** for more info.											|
| **E8x** |      Pan      | Sets the panning to `x`. `0-3` = Left, `4-B` = Centre, `C-F` = Right.									|
| **ECx** |   Note cut    | Cuts the note after `x` frames. Must be below the `Fxx` speed for the cut to be heard. `EC0` will reset the duty cycle instead of cutting the note. |

**Command-effects** (uses bit 4) - Channel 3 can use these effects if it's not trying to play a note/instrument on the same row.

| Effect  | Name		  | Notes on effect usage																						|
| ------- | ------------- | ----------------------------------------------------------------------------------------------------------- |
| **Bxx** |     Jump      | Jump to a specific position in the song, `xx`.               |
| **Dxx** | Pattern break | Jumps to the next pattern early, where `xx` is the row it should jump to in the next pattern. Using this on the last pattern will break the song by reading garbage data beyond the song. |
| **Fxx** |   Set speed   | Sets the song speed to `xx`. Valid values are `01` to `1F`. The value represents how many frames should the song wait before moving on to another row. Setting BPM speed has no effect upon conversion. |

For Channel 3 only, the instrument data is too large to allow the 4th bit of a Command effect to occur while it's trying to play a note/set the instrument. Command-effects will ignore new notes on Channel 3 to compensate.

### Speed Table

| Fxx Value (in tracker) | BPM (in tracker) | BPM (in game) |
| ---------------------- | ---------------- | ------------- |
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

This is not a full table, it's just the top few speeds. It's here to highlight some of the speed discrepancies, albeit small to not be very noticeable, with the exception of the values marked with 1.

You might notice that the value of the F effect, when converted to decimal, is just the speed divisor. For instance, F03 divides the BPM by 3 (`750 / 3 = 250`, or `900 / 3 = 300`).

Because of how GB Studio is set up, a 60hz F05 effect, which would result in 180 BPM in-game, is impossible here.

*While not in GB Studio, GBT has a flag called `-speed` that will handle BPM differently, which would require F96 effects for every speed, as it won't handle any internal conversions to get the speed closer. This is the reason why F01 to F04 require F96 in both modes, there's no equivalent for it in tracker speed.*

**1. Values marked with 1 require an additional F96 effect for the song to sound closer in speed when converted, or setting the song BPM to 150.** This F96 effect can be removed once you're done with your song, there won't be any difference as GBT ignores this -- It's only here to set the BPM to something closer to the in-game version.

## Tricks and Tips

### **1. High Speed**

By using F01 to F04, you can achieve much higher granularity when it comes to changing volumes and creating sounds of sorts. This means that with a high enough speed, you can create more varied bodies for sounds, with sort-of envelopes, or elaborate effects (like 1 channel echos, which I'll cover here in a moment).

This trick means you're going from drums that sound flimsy and primitive to something more impressive.

Here's an example of a Snare Drum, at speed F02, that might sound good for you.

```
ModPlug Tracker MOD
|C-526...C40
|C-527...C28
|........C20
|........C18
|........C10
|........C08
|........C04
|........C..
(this is on the noise channel)
```

If this is longer than what you need, simply crop it starting from the bottom.

You can also use this for tones and stuff, like short staccato notes or flutes that fade in.

**If you do this, keep in mind the GB Sound hardware has an annoying bug that resets the phase of each waveform on a volume set, meaning you can get scratchy noise in a few emulators and also the real GB.**

### **2. One channel echoes**

This works on most speeds. This is useful for when you need a melody on top of some sort of echoing ostinato, or phrase, or whatever. 

To illustrate it, I'm going to try illustrating it like this, instead of a tracker layout:

```
A _ B _ C _ E _ G _ E _ C _ B _ 
Without 1ch Echo

    +-----+ +-----+ +-----+
A _ B a C b E c G e E g C e B c 
+-----+ +-----+ +-----+ +-----+
     
With 1ch Echo (lowercase notes are the echoes)
```

Notice how each lowercase letter takes the form of it's 3 step behind louder cousin? That's how the trick works. By having shorter notes that, on each step, has another quieter note that's way behind, you get a cool echoing effect.

I can't explain it very well via text, so I recommend you check out this video by **explod2a03** covering how this trick works with a better example and actual audio: https://www.youtube.com/watch?v=6GI9gngTn_Y

The best way to do this in a tracker is to use a channel you're not using temporarily, copy your note sequence to it, delay it by 3 (or however many you need) rows, then right clicking on the selection and clicking "Amplify...", and setting the amplitude to something lower than 50%.

After that, you should have both channels "alternate". Select the entirety of the channel with the echoes (from top to bottom), go to the channel you want to merge the echoes with, right click, go to "Paste special", then click "Mix paste" (This should have a shortcut, might want to learn it as it can be fairly useful).

### 3. Quick volume envelopes

Are you in a hurry? No problem, this simple trick will create linear envelopes:

1. Select two volume / C values of two separate notes (within the same channel), and everything in between
2. Right click and hover over "Interpolate"
3. Click on "Effect column"
4. You're done!

You might wonder how's it going to sound in-game; well, it'll sound as close as possible. The volumes it can't play it'll just clamp it to the nearest ones it can play.

## Frequently Asked Questions

**Q: Can I use mp3/wav files?**

A: No, but you can use .midi files. If you're looking for an easy way to add music to your game, you can ask the #collaborations channel of the GB Studio Discord or browse the [GB Studio Community Assets.](https://github.com/DeerTears/GB-Studio-Community-Assets)

This has limited success, and there are easier options to get music in your game, such as the 

**Q: How do I convert a .midi file to .mod?**

A: OpenMPT can open MIDI files and save the result to .mod Some resources on how to do this include a [video tutorial](https://www.youtube.com/watch?v=4AxZqK9_jKE) as well as Kazy's write-up article pinned in the #music-help section of the GB Studio discord.

**Q: Can I use this .mod file I found online?**

A: It won't sound as intended, but it can be made to sound good-enough with some adjustments. Any `===` notes need to be replaced with the `EC1` effect. All instrument restrictions should apply, and no melodic instruments should be using Channel 4. You may also need to transpose the notes of a channel to account for differently-tuned samples, which you can learn more about in your tracker's documentation.

**Q: How do I stop a note from playing?**

A: `EC1` will mute a channel's note, `C00` will mute the channel until it recieves another `Cxx` effect.

**Q: What do I do if my song sounds completely giltched-out?**

A: It's probably corrupted. It can likely be saved by using OpenMPT and saving it as a different filetype. If you're using **MilkyTracker**, don't press "Save" on a .mod file, always work in a .xm file instead.

**Q: Why is my song speed is faster in-game than it is in the tracker?**

A: If you're using an `Fxx` effect with a value lower than `F05`, add `F96` to the first row of your song. This will not impact your in-game playback speed.

**Q: Can I play back voice clips/sound effects?**

A: Not on GBT Player. Pokemon Yellow's method is unique, and LSDj does not leave much processing power for games to be played while it's running.

**Q: Can I use a different tool to write my music?**

A: If the tool can natively export to .mod, try it!

**Q: Why is my song playing glitched sounds when it tries to loop?**

A: `D00` is a problematic effect, try using `Bxx` instead. If you're already using `Bxx`, make sure the `xx` number does not go above the number of pattern-slots in your song. A song's first pattern is always in slot 00.

**Q: Why do some notes in OpenMPT appear red and sound higher/lower than they're supposed to sound?**

A: Go over to the "General" tab that's under the New File, Open and Save buttons. Click the big button next to the "Name" field that says "MOD (ProTracker), 4 channels". Once there, disable both **ProTracker 1/2 Mode (MOD)** and **Amiga Frequency Limits.** This is a thing because the format here is meant to be used with the Amiga line of computers (that's where it was made), which has frequency limits.

**Q: Why does my song start out with garbage noise?**

A: If your song doesn't start using the first two channels, add a note to their first row with a `C00` effect on each.

**Q: Can I play sound effects?**

A: Yes, with limitations. View the next page of the documentation for more information. Playing sound effects will not interrupt the song being played by GBT Player.

## Tips

- **Make sure you save frequently and also back-up your files.** This is important in anything that you do and it's worth mentioning here.
- [**If you're stuck, please ask for help in the Discord server, in `#music-help`.**](https://discord.gg/v9xAJCJ) There's usually a few handful of people who are willing to help out at most times.
- **Frequently try out your music in your game.** Things don't sound 1:1, and the built in preview just plays the .mod file rather than building the music and previewing that.
- **Keep it simple!** Don't jump into this, trying to emulate what several artists have done with LSDj or whatever other tools, you'll just get stuck.
- **Don't be afraid of failure.** I get this is kind of an unfitting tip, but it's important. Your first song won't be good, and that's okay. You'll fail, sure, but you'll also gain knowledge on what you might've done wrong, or how you want to go on about with your next endeavor.
- **OpenMPT has a manual to help you get started.** [Here's a link](https://wiki.openmpt.org/Tutorial:_Getting_Started), give it a read if you're stuck (or just ask for help)
- [**Give the GBT Player documentation a read.**](https://github.com/AntonioND/gbt-player) 
