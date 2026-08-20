---
sidebar_position: 2
---

# Instalação

Baixe sua versão preferida na [página de download do Itch.io](https://chrismaltby.itch.io/gb-studio) ou use o [GitHub](https://github.com/chrismaltby/gb-studio/releases) para versões mais antigas.

Ocasionalmente, versões beta também podem ser encontradas no [Patreon](https://www.patreon.com/gbstudiodev).

## Windows

Duas versões do GB Studio estão disponíveis para Windows. A versão _Squirrel Installer_ exige apenas que você descompacte, clique duas vezes e aguarde alguns segundos enquanto o aplicativo é instalado na sua unidade `C:\`. Após a instalação, um atalho será adicionado à sua área de trabalho automaticamente e o aplicativo será iniciado. O aplicativo será instalado em `%LocalAppData%\gb_studio`, se você precisar instalar em um local diferente, use a versão _Manual_.

A versão _Manual_ é um arquivo zip contendo os arquivos do aplicativo, que você pode descompactar em qualquer local. Após descompactar, clique duas vezes em `gb-studio.exe` para iniciar.

## macOS

Para macOS, descompacte o arquivo baixado e mova o `GB Studio.app` para a sua pasta _Aplicativos_. Clique duas vezes para iniciar.

Duas versões para macOS estão disponíveis: `Apple Silicon` e `Intel`. Para um desempenho ideal, use a versão que corresponde ao processador do seu Mac. Se não tiver certeza, experimente a versão Apple Silicon primeiro, pois ela será significativamente mais rápida se o seu Mac a suportar.

Se você estiver tendo problemas para compilar ou executar seu jogo, também pode ser necessário instalar o Command Line Tools da Apple. Para isso, abra `Aplicativos/Terminal.app` e insira o seguinte comando.

```
xcode-select --install
```

## Linux baseado em Ubuntu / Debian

Para distribuições Linux baseadas em Debian, baixe a versão .deb e execute os seguintes comandos (testado no Ubuntu 18.10)

```
> sudo apt-get update
> sudo apt-get install build-essential
> sudo dpkg -i gb-studio_1.0.0_amd64.deb
> gb-studio
```

## Linux baseado em Fedora / RPM

Para distribuições Linux baseadas em RPM, baixe a versão .rpm e execute os seguintes comandos (testado no Fedora 29)

```
> sudo yum install libXScrnSaver make lsb
> sudo rpm --ignoreos -i gb-studio-1.0.0.x86_64.rpm
> gb-studio
```

## Solução de problemas

Se no Linux ocorrerem problemas com falhas gráficas, ou se o gb-studio não iniciar, tente executar o GB Studio usando o seguinte comando:

```
> gb-studio --disable-gpu-sandbox
```
