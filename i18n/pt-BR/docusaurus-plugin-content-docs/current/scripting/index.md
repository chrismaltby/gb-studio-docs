---
sidebar_position: 6
---

# Eventos de script

Os eventos de script permitem que você controle partes do seu jogo com base nas interações do jogador. Eles podem ser usados para conectar cenas umas às outras, alterar variáveis, dar diálogos a personagens e muito mais.

Os scripts podem ser adicionados a cenas, atores ou gatilhos. Selecionar um desses objetos atualizará o _Editor de mundo_ para mostrar o script do objeto selecionado na _Barra lateral do editor_.

Para começar a construir um script, selecione um objeto e clique no botão _Adicionar evento_ na _Barra lateral do editor_ para abrir o menu de eventos. Selecione um evento para adicioná-lo ao script. O evento mais no topo é o primeiro evento a ser executado para aquele script.

## Adicionando eventos

Após clicar no botão _Adicionar evento_, um menu aparecerá para escolher o evento a ser adicionado. Se você começar a digitar, pode filtrar esta lista ou pode clicar pelo menu para encontrar o que está procurando. Clique em um evento ou pressione a tecla _Enter_ para adicionar o evento destacado ao seu script.

<img title="Novo projeto" src="/img/events/add-event-menu.png" width="300" className="event-preview" />

## Eventos favoritos

Você pode escolher vários eventos para serem favoritos, fazendo com que eles apareçam no topo do _Menu adicionar evento_. Para favoritar um evento, passe o mouse sobre o item de menu e clique no botão de _Estrela_ ou pressione a tecla `Tab`.

## Copiar e colar eventos

Para copiar um evento, clique no botão <img className="gbs-icon" title="Botão de seta para baixo" src="/img/screenshots/dropdown-button.png" width="22" /> ao lado de um evento. Todos os scripts têm esse mesmo botão para copiar/colar e opções adicionais. Clicar no botão em outro evento permite que você cole o evento da área de transferência antes ou depois do evento selecionado. Você também tem a opção de colar os valores do primeiro evento no segundo.

Você também pode passar o mouse sobre a barra de título de qualquer evento de script para executar esses atalhos.

**Copiar evento** - `Ctrl/Cmd` + `C`  
**Colar evento abaixo** - `Ctrl/Cmd` + `V`  
**Colar evento acima** - `Ctrl/Cmd` + `Shift` + `V`  
**Alternar desativação do evento** - `Ctrl/Cmd` + `/`  
**Agrupar eventos selecionados** - `Ctrl/Cmd` + `G`

Para selecionar vários eventos para copiar ao mesmo tempo, você pode clicar na caixa de seleção ao lado do botão <img className="gbs-icon" title="Botão de seta para baixo" src="/img/screenshots/dropdown-button.png" width="22" />. Você também pode segurar `Shift` e clicar no título de um evento para alternar a seleção.

## Tipos de scripts

Existem várias abas de script para escolher na _Barra lateral do editor_ dependendo de qual objeto você selecionou no momento.

### Scripts de cena

Esses scripts podem ser acessados na _Barra lateral do editor_ ao selecionar uma cena no seu projeto.

- **Ao iniciar:** Este script será executado uma vez no início da Cena. O script Ao iniciar da cena sempre é executado após o script Ao iniciar dos Atores na Cena.
- **Ao acertar o jogador:** Este script é executado quando o jogador é atingido por um ator pertencente a um grupo de colisão.

### Scripts de ator

Esses scripts podem ser acessados na _Barra lateral do editor_ ao clicar em um Ator no seu projeto.

- **Ao iniciar:** Este script será executado uma vez no início da Cena. Os Atores em uma Cena sempre executarão o seu script Ao iniciar antes do script Ao iniciar da sua Cena.
- **Ao interagir:** Posicionar o Jogador próximo a um Ator e pressionar o botão **A** fará com que o Jogador "interaja" com o Ator. Interagir com um Ator iniciará este script. Em cenas de Shoot 'Em Up, a interação pode ser feita adicionalmente ao colidir com o Ator.

  Este script costuma ser usado para diálogos, usando o evento "Texto: Exibir diálogo".

  Habilitar um grupo de colisão para um ator converterá este script para _Ao acertar: Jogador_, que busca pela colisão do Jogador em vez de interação do Jogador. Este comportamento é idêntico a _Ao interagir_ em cenas de Shoot 'Em Up.

- **Ao acertar:** Este script é executado quando o Ator é atingido pelo Jogador ou por um Projétil pertencente a um grupo de colisão.

- **Ao atualizar:** Este script é executado uma vez a cada quadro e só pode ser adicionado a Atores não-jogadores.

### Scripts de gatilho

Esses scripts podem ser acessados na _Barra lateral do editor_ ao clicar em um Gatilho no seu projeto.

- **Ao entrar:** Este script é executado quando o jogador colide com o gatilho.

- **Ao sair:** Este script é executado quando um jogador que estava colidindo anteriormente sai do gatilho.
