---
sidebar_position: 7
---

# Compilando o seu jogo

## Jogar

Clicar no _Botão de jogar_ no canto superior direito da janela do _Editor de projetos_ iniciará uma compilação do seu jogo e, assim que estiver concluída, abrirá uma nova janela onde você poderá jogá-lo. Veja [Atalhos de teclado](/docs/getting-started/keyboard-shortcuts) para obter detalhes sobre como jogar na _Janela de jogo_.

## Executar daqui

Ao clicar com o botão direito do mouse em uma cena na _Visualização do projeto_ ou no _Navegador de cenas_, você pode acessar o menu de contexto da cena, que contém a opção de _Executar daqui_.

<div className="drop-shadow margin-bottom"><img src="/img/screenshots/run-from-here.jpg" width="320" className="clip-bottom" /></div>

Isso permite que você pré-visualize rapidamente uma cena específica do seu jogo sem precisar editar a [Posição inicial](/docs/project-editor/player#start-position) do jogador. Se você selecionar a opção _Incluir apenas seleção_, ao compilar o seu jogo, apenas as cenas que você selecionou no momento serão incluídas na pré-visualização do jogo compilado, permitindo compilações mais rápidas ao testar jogos grandes.

## Compilar como ROM

Clicar no _Botão de exportar_ e selecionar _Exportar ROM_ compilará o seu jogo e criará um arquivo ROM na pasta de compilação do seu projeto como `$PROJECT_ROOT/build/rom/game.gb`. Você pode jogar este arquivo ROM em qualquer emulador compatível, como o [OpenEMU](https://openemu.org/) ou o [KiGB](http://kigb.emuunlim.com/downloads.htm).

## Compilar e implantar para a Web

Clicar no _Botão de exportar_ e selecionar _Exportar para Web_ compilará o seu jogo e criará uma compilação da web HTML5 na pasta `$PROJECT_ROOT/build/web`. Você pode fazer o upload desta pasta para qualquer servidor web e navegar até o arquivo `index.html` para jogar o seu jogo em um navegador web. Se você usar um navegador web de celular ou tablet, o jogo também incluirá controles de toque.

Se você compactara pasta `build/web`, poderá fazer o upload dela para o [Itch.io](https://itch.io) como um jogo HTML. Neste caso, o tamanho recomendado do viewport a ser usado é `480px` x `432px`.

## Compilar para Pocket

Clicar no _Botão de exportar_ e selecionar _Exportar Pocket_ compilará o seu jogo como um arquivo `.pocket` para uso em dispositivos [Analogue Pocket](https://www.analogue.co/pocket).

Para jogar o seu jogo `.pocket`:

- Crie uma pasta na raiz de um cartão MicroSD chamada `GB Studio`.
- Copie o arquivo `.pocket` para a pasta `GB Studio`
- Insira o cartão MicroSD no seu dispositivo Pocket.
- No menu do Pocket, escolha `Tools` / `GB Studio` / `Play Creations` e selecione o seu arquivo na lista.

## Solução de problemas

No macOS, se você estiver tendo problemas para compilar ou executar o seu jogo, também pode ser necessário instalar as Command Line Tools da Apple abrindo `Applications/Terminal.app` e inserindo o comando a seguir.

```
xcode-select --install
```

No Windows, você pode precisar colocar o aplicativo na lista de permissões do seu software antivírus para executar uma compilação.
