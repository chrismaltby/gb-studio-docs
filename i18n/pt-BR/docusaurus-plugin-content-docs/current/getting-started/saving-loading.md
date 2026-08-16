# Salvando e carregando

## Salvando

Para salvar o seu projeto, selecione `Arquivo > Salvar` no menu ou pressione `Ctrl/Cmd` + `S`. Se você tentar fechar um projeto com alterações não salvas, o GB Studio avisará você, dando a chance de salvar o seu projeto primeiro. No macOS, quaisquer alterações não salvas no seu projeto serão representadas por um ponto no botão de fechar a janela.

## Carregando

Para carregar o seu projeto novamente, use o botão _Abrir_ na janela _Novo projeto_ ou selecione `Arquivo > Abrir` no menu e navegue até a pasta do seu projeto e selecione o arquivo `.gbsproj`.

Você também pode retornar à janela de projetos recentes selecionando `Arquivo > Mudar de projeto` no menu.

## Controle de versão

O layout da pasta do projeto e o arquivo `.gbsproj` foram projetados para funcionar bem com sistemas de controle de versão, como o [Git](https://git-scm.com/), onde cada alteração feita pelo aplicativo ocorre em uma nova linha no arquivo de dados, permitindo que o histórico seja rastreado facilmente. Se quiser usar o controle de versão no seu projeto, você pode simplesmente criar o repositório na pasta raiz do projeto.

É recomendável ignorar a pasta `build` do seu repositório usando um arquivo `.gitignore` ou semelhante.

## Backups

Toda vez que você salva o seu projeto, a versão anterior é salva na pasta do seu projeto com a extensão `.gbsproj.bak`. Se você quiser reverter para a versão anterior no seu projeto, você pode renomear este arquivo para ter a extensão `.gbsproj` e abrir este arquivo.
