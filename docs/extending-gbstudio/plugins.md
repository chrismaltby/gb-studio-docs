# Plugins

Plugins are a way to extend GB Studio and share reusable assets, create custom scripting events and even build engine modifications.

## Installing Plugins

To use plugins you must first create a `plugins` folder within your project in the same folder as your `.gbsproj` file. You can then place any plugins you have within this folder.

The structure should look something like this: 

<img src="/img/screenshots/plugins-file-structure.png" className="event-preview" />

You may need to close and reopen your project after adding plugins for the changes to appear.

## Asset Plugins

The simplest kind of plugin you can make for GB Studio is an asset plugin, these allow you to share sprites, backgrounds, fonts, sounds, anything that is normally placed in the `assets` folder.

To create an asset plugin first create a new folder within your `plugins` folder with the name you want to give your plugin (Above we used `assetPlugin` as the name). Within that folder you can create any of the normal project `asset` folders (such as `backgrounds`) and place files within it. These assets will appear as normal in your project but are now easier to package up and share between projects or with others.

[Download Example Asset Plugin](/assets/plugins/assetExamplePlugin.zip)

## Script Event Plugins

These plugins allow you to create new script events that will appear anywhere you use [Scripting Events](/docs/scripting).

To create a script event plugin first create a new folder within your `plugins` folder with the name you want to give your plugin (Such as `myPlugin`). Within that folder create an `events` folder, and within that you can place the Javascript definition of your events. See the [GB Studio source](https://github.com/chrismaltby/gb-studio/tree/develop/src/lib/events) for examples of how these files should be structured and how they generate [GBVM](/docs/scripting/gbvm) output. Note your event plugin Javascript filename MUST begin with `event` e.g. `eventMyFirstEvent.js`.

[Download Example Script Event Plugin](/assets/plugins/eventExamplePlugin.zip)

## Engine Plugins

An engine plugin allows similar functionality to [ejecting your engine](/docs/extending-gbstudio/engine-eject) but allows just changing single files or you can use it to add completely new files to the engine. 

Engine plugins contain an `engine` folder which follows the same structure as an ejected game engine. Below you can download an example plugin that adds a new game engine function that causes the screen to flash (only when Color mode is disabled) and also includes a script event plugin to allow calling the new function.

[Download Example Script Event Plugin](/assets/plugins/engineExamplePlugin.zip)
