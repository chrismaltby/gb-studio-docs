---
sidebar_position: 2
---

# Installation

Download your preferred version from the [Itch.io download page](https://chrismaltby.itch.io/gb-studio) or use [GitHub](https://github.com/chrismaltby/gb-studio/releases) for older releases.

Occasionally, beta releases can also be found on [Patreon](https://www.patreon.com/gbstudiodev).

## Windows

Two versions of GB Studio are available for Windows. The _Squirrel Installer_ version just requires you to unzip, double click and then wait a few seconds while the application installs to your `C:\` drive. Once installed a shortcut will be added to your desktop automatically and the application will start. The application will be installed to `%LocalAppData%\gb_studio`, if you need to install to a different location use the _Manual_ version.

The _Manual_ version is a zip containing the application files, you can unzip this to any location. Once unzipped double click `gb-studio.exe` to start.

## macOS

For macOS unzip the downloaded file and move `GB Studio.app` to your _Applications_ folder. Double click to start.

Two macOS versions are available: `Apple Silicon` and `Intel`. For optimal performance, please use the version that matches your Mac's processor. If you're unsure, try the Apple Silicon version first, as it will be significantly faster if your Mac supports it.

If you're having trouble building or running your game you may also need to install Apple's Command Line Tools by opening `Applications/Terminal.app` and entering the following command.

```
xcode-select --install
```

## Ubuntu / Debian-based Linux

For Debian-based Linux distros, download the .deb version and run the following commands (Tested on Ubuntu 18.10)

```
> sudo apt-get update
> sudo apt-get install build-essential
> sudo dpkg -i gb-studio_1.0.0_amd64.deb
> gb-studio
```

## Fedora / RPM-based Linux

For RPM-based Linux distros, download the .rpm version and run the following commands (Tested on Fedora 29)

```
> sudo yum install libXScrnSaver make lsb
> sudo rpm --ignoreos -i gb-studio-1.0.0.x86_64.rpm
> gb-studio
```

## Troubleshooting

If in Linux issues are seen with graphical glitches, or if gb-studio fails to start, try running GB Studio using this following command:

```
> gb-studio --disable-gpu-sandbox
```
