---
sidebar_position: 8
---

# Engine Eject

Engine Eject copies the [GBVM game engine](https://github.com/chrismaltby/gbvm) that GB Studio uses into a folder in your project, named `assets/engine`. You can edit these source files to your liking using an IDE to have more control over how your GB Studio game is built. This feature is only recomended for developers familiar with GBDK.

To use Engine Eject, click on _Game_ at the top of the GB Studio window and navigate to the _Advanced_ tab to show the _Engine Eject_ button.

After clicking _Eject_ your project will gain a new folder named `/engine ` with the subfolders `/include` and `/src`.

## Reverting Files

To revert any GBDK file back to its GB Studio default, delete it from the `assets/engine` folder. Deleting the whole `assets/engine` folder ensures that all GBDK code reverts back to the GB Studio defaults. You can also do this by pressing _Engine Eject_ again, which will overwrite your `assets/engine` folder with the GB Studio defaults.

## Compile Errors

If you have bugged or incompatible files in the `/engine` folder, GB Studio will not be able to build your game. Error messages can be found in the _Build & Run_ window.

The error message will often explain which files have problems and point you to the line number where the problem was found, for example this error is showing that line 77 of `src/core/actor.c` is using a variable that has not yet been defined:

```
Compiling: src/core/actor.c
src/core/actor.c:77: error 20: Undefined identifier 'emote_offsets'
src/core/actor.c:77: error 22: Array or pointer required for '[]' operation 
src/core/actor.c:77: error 47: indirections to different types assignment   
```

These errors will not be caused by missing files. GB Studio refers to its default engine in place of any missing `assets/engine` files. Fixing or removing the files that caused the error will allow your game to build and run again.
