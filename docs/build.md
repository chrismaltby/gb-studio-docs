---
sidebar_position: 7
---

# Building Your Game

## Play

Clicking the _Play button_ in the top right of the _Project Editor_ window will start a build of your game and once complete will open a new window where you can play your game. See [Keyboard Shortcuts](/docs/getting-started/keyboard-shortcuts) for details on how to play your game in the _Play Window_.

## Build as ROM

Clicking the _Export button_ and selecting _Export ROM_ will build your game and create a ROM file in your project's build folder as `$PROJECT_ROOT/build/rom/game.gb`. You can play this ROM file in any compatible emulator such as [OpenEMU](https://openemu.org/) or [KiGB](http://kigb.emuunlim.com/downloads.htm).

## Build and deploy for Web

Clicking the _Export button_ and selecting _Export Web_ will build your game and create a HTML5 web build in the folder `$PROJECT_ROOT/build/web`. You can upload this folder to any web server and navigate to the `index.html` file to play your game in a web browser. If you use a mobile or tablet web browser the game will also include touch controls.

If you zip the `build/web` folder you can upload it to [Itch.io](https://itch.io) as a HTML game. In this case the recommended viewport size to use is `480px` x `432px`.

## Build for Pocket

Clicking the _Export button_ and selecting _Export Pocket_ will build your game as a `.pocket` file for use on [Analogue Pocket](https://www.analogue.co/pocket) devices.

To play your `.pocket` game:

- Create a folder at the root of a MicroSD card called `GB Studio`.
- Copy the `.pocket` file into the `GB Studio` folder
- Insert the MicroSD card into your Pocket device.
- From the Pocket menu choose `Tools` / `GB Studio` / `Play Creations` and select your file from the list.

## Troubleshooting

On macOS if you're having trouble building or running your game you may also need to install Apple's Command Line Tools by opening `Applications/Terminal.app` and entering the following command.

```
xcode-select --install
```

On Windows you may need to whitelist the application in your Anti Virus software to perform a build.
