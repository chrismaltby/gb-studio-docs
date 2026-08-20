# Plugins

Plugins são uma maneira de ampliar o GB Studio e compartilhar ativos reutilizáveis, criar eventos de script personalizados e até mesmo criar modificações no motor.

## O Gerenciador de plugins

O GB Studio inclui um _Gerenciador de plugins_ integrado para navegar, instalar e atualizar plugins do [Repositório oficial de plugins do GB Studio](https://github.com/gb-studio-dev/gb-studio-plugins/).

<img title="Gerenciador de plugins" src="/img/screenshots/plugin-manager.png" width="500"/>

Para abri-lo, vá para o menu do aplicativo **Plugins → Gerenciador de plugins**.

<img title="Menu de plugins" src="/img/screenshots/plugin-menu.jpg" className="drop-shadow margin-bottom" width="382"/>

### Instalando um plugin

1. Pesquise o plugin desejado.
2. Selecione-o na lista.
3. Clique em **Adicionar ao projeto**.

### Enviar um plugin

Se você deseja adicionar o seu próprio plugin ao repositório oficial, você pode seguir [estas instruções](https://github.com/gb-studio-dev/gb-studio-plugins#submitting-plugins) para enviar um pull request.

## Instalando plugins manualmente

Alguns plugins podem não estar disponíveis no gerenciador de plugins integrado e, em vez disso, precisarão ser baixados e instalados manualmente.

Para instalar plugins manualmente, você deve primeiro criar uma pasta `plugins` dentro do seu projeto, na mesma pasta do seu arquivo `.gbsproj`. Você pode então colocar quaisquer plugins que tiver dentro desta pasta.

A estrutura deve se parecer com isso:

<img src="/img/screenshots/plugins-file-structure.png" className="event-preview" />

Você pode precisar fechar e reabrir o seu projeto após adicionar plugins para que as alterações apareçam.

## Plugins de ativos

O tipo mais simples de plugin que você pode criar para o GB Studio é um plugin de ativos, eles permitem que você compartilhe sprites, imagens de fundo, fontes, sons, qualquer coisa que normalmente é colocada na pasta `assets`.

Para criar um plugin de ativos, primeiro crie uma nova pasta dentro da sua pasta `plugins` com o nome que você deseja dar ao seu plugin (Acima nós usamos `assetPlugin` como o nome). Dentro dessa pasta você pode criar qualquer uma das pastas `asset` normais do projeto (como `backgrounds`) e colocar arquivos dentro dela. Esses ativos aparecerão normalmente no seu projeto, mas agora são mais fáceis de empacotar e compartilhar entre projetos ou com outras pessoas.

[Baixar exemplo de plugin de ativos](/assets/plugins/assetExamplePlugin.zip)

## Plugins de eventos de script

Esses plugins permitem que você crie novos eventos de script que aparecerão em qualquer lugar em que você usar [Eventos de script](/docs/scripting).

Para criar um plugin de eventos de script, primeiro crie uma nova pasta dentro da sua pasta `plugins` com o nome que deseja dar ao seu plugin (como `myPlugin`). Dentro dessa pasta crie uma pasta `events`, e dentro dela você pode colocar a definição em Javascript dos seus eventos. Veja o [código-fonte do GB Studio](https://github.com/chrismaltby/gb-studio/tree/develop/src/lib/events) para obter exemplos de como esses arquivos devem ser estruturados e como eles geram a saída [GBVM](/docs/scripting/gbvm). Observe que o nome do arquivo Javascript do seu plugin de evento DEVE começar com `event`, ex.: `eventMyFirstEvent.js`.

[Baixar exemplo de plugin de eventos de script](/assets/plugins/eventExamplePlugin.zip)

## Plugins de motor

Um plugin de motor permite uma funcionalidade semelhante a [ejetar o seu motor](/docs/extending-gbstudio/engine-eject), mas permite alterar apenas arquivos únicos ou você pode usá-lo para adicionar arquivos completamente novos ao motor.

Os plugins de motor contêm uma pasta `engine` que segue a mesma estrutura de um motor de jogo ejetado. Abaixo, você pode baixar um exemplo de plugin que adiciona uma nova função ao motor de jogo que faz a tela piscar (apenas quando o Modo de cores está desabilitado) e também inclui um plugin de eventos de script para permitir a chamada da nova função.

:::info
O seu plugin de motor precisa especificar qual versão do motor do GB Studio é compatível. Você pode fazer isso certificando-se de incluir `engine/engine.json` no seu plugin com pelo menos a versão do motor compatível incluída `{"version": "4.0.0-e0"}`
:::

[Baixar exemplo de plugin de motor](/assets/plugins/engineExamplePlugin.zip)

### Campos do motor

Os plugins de motor podem definir campos adicionais que aparecerão nas suas [Configurações do motor](/docs/settings#engine-settings).

Ao definir o seguinte campo e adicionar a variável `max_jump_height` à sua versão do arquivo `platform.c` no plugin, você pode expor variáveis para atualização a partir das configurações ou de scripts usando eventos de [Campo do motor](/docs/scripting/script-glossary/engine-fields).

```
{
  "version": "4.2.0-e34",
  "fields": [
    {
      "key": "max_jump_height",
      "label": "Max Jump Height",
      "group": "GAMETYPE_PLATFORMER",
      "type": "slider",
      "cType": "WORD",
      "defaultValue": 16,
      "min": 0,
      "max": 64
    }
  ]
}
```

Para ver como os campos do motor podem ser usados dentro do seu plugin, você pode revisar o arquivo integrado [engine.json](https://github.com/chrismaltby/gb-studio/blob/develop/appData/engine/engine.json).

### Tipos de cena adicionais

Os plugins de motor também podem definir [tipos de cena](/docs/project-editor/scenes/types) adicionais.

```
{
  "version": "4.2.0-e34",
  "sceneTypes": [
    {
      "key": "battle",
      "label": "Battle",
      "files": ["include/states/battle.h", "src/states/battle.c"],
      "extraActorCollisionFlags": [
        {
          "key": "solid",
          "label": "FIELD_IS_SOLID",
          "description": "FIELD_IS_SOLID_DESC",
          "setFlag": "solid"
        }
      ],
      "collisionTiles": [
        {
          "key": "solid",
          "color": "#FA2828FF",
          "mask": 15,
          "flag": 15,
          "name": "FIELD_SOLID",
          "icon": "FFFFFFFFFFFFFFFF"
        }
      ]
    }
  ]
}
```

Cada tipo de cena contém o seguinte na sua entrada `engine.json`:

- **key** Um ID exclusivo para este tipo de cena.
- **label** O nome legível por humanos que aparecerá no GB Studio para este tipo de cena.
- **files** Os arquivos do motor necessários para o seu tipo de cena.
- **extraActorCollisionFlags** (opcional) Uma lista de marcadores de colisão que aparecerão para cada ator colocado nesta cena no editor de [grupos de colisão](/docs/project-editor/actors#collision-groups).
- **collisionTiles** (opcional) Uma lista de tiles de colisão que aparecerão ao [editar colisões](/docs/project-editor/scenes/collisions) para cenas usando este tipo de cena. O campo "icon" consiste em dados de pixel codificados em uma string hexadecimal. Você pode usar a ferramenta [GB Studio Collision Tile Generator](https://chrismaltby.github.io/gbs-collision-tile-generator/) para gerá-los.

Ao adicionar tipos de cena adicionais, você também precisará definir duas funções no seu motor personalizado:

```
void SCENEKEY_init(void) BANKED { }
```

e

```
void SCENEKEY_update(void) BANKED { }
```

Neste caso, essas funções se chamariam `battle_init` e `battle_update`.

A função `init` será chamada uma vez à medida que a cena for carregada e a função `update` será chamada a cada quadro, permitindo que você crie modos de jogo personalizados.

Se a sua cena personalizada define variáveis globais, adicione prefixos a elas para evitar possíveis conflitos de nomenclatura com futuras atualizações do motor.  
Por exemplo, use `UBYTE battle_hp` em vez de `UBYTE hp`.

:::info

Embora os plugins possam substituir os tipos de cena integrados, isso não é recomendado. Substituir os tipos de cena principais pode dificultar para os usuários atualizarem para versões futuras do GB Studio sem conflitos.

Dê preferência a criar novos tipos de cena sempre que possível ou a contribuir com melhorias para os [tipos de cena integrados](https://github.com/chrismaltby/gbvm/tree/main/src/states).

:::

[Baixar exemplo de plugin de tipo de cena](/assets/plugins/sceneTypeExamplePlugin.zip)
