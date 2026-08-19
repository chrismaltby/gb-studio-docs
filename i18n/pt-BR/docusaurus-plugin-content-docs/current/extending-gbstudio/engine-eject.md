---
sidebar_position: 8
---

# Ejeção do motor

A ejeção do motor copia o [motor de jogo GBVM](https://github.com/chrismaltby/gbvm) que o GB Studio usa para dentro de uma pasta no seu projeto, chamada `assets/engine`. Você pode editar esses arquivos de código-fonte ao seu gosto usando uma IDE para ter mais controle sobre como o seu jogo do GB Studio é compilado. Este recurso é recomendado apenas para desenvolvedores familiarizados com o GBDK.

Para usar a ejeção do motor, clique em _Jogo_ no topo da janela do GB Studio e navegue até a aba _Avançado_ para exibir o botão _Ejetar motor_.

Após clicar em _Ejetar_, o seu projeto ganhará uma nova pasta chamada `/engine` com as subpastas `/include` e `/src`.

## Revertendo arquivos

Para reverter qualquer arquivo GBDK de volta ao padrão do GB Studio, exclua-o da pasta `assets/engine`. Excluir toda a pasta `assets/engine` garante que todo o código GBDK reverta para os padrões do GB Studio. Você também pode fazer isso pressionando _Ejetar motor_ novamente, o que substituirá a sua pasta `assets/engine` pelos padrões do GB Studio.

## Erros de compilação

Se você tiver arquivos corrompidos ou incompatíveis na pasta `/engine`, o GB Studio não conseguirá compilar o seu jogo. As mensagens de erro podem ser encontradas no [Registro de compilação](/docs/debugger#build-log).

A mensagem de erro geralmente explicará quais arquivos têm problemas e apontará o número da linha onde o problema foi encontrado. Por exemplo, este erro está mostrando que a linha 77 de `src/core/actor.c` está usando uma variável que ainda não foi definida:

```
Compiling: src/core/actor.c
src/core/actor.c:77: error 20: Undefined identifier 'emote_offsets'
src/core/actor.c:77: error 22: Array or pointer required for '[]' operation 
src/core/actor.c:77: error 47: indirections to different types assignment   
```

Esses erros não serão causados por arquivos ausentes. O GB Studio recorre ao seu motor padrão no lugar de qualquer arquivo ausente em `assets/engine`. Corrigir ou remover os arquivos que causaram o erro permitirá que o seu jogo seja compilado e executado novamente.
