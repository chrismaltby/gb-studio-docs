---
sidebar_position: 2
---

# Scripts personalizados

Os _Scripts personalizados_ permitem que você crie procedimentos reutilizáveis no seu jogo que podem ser chamados a partir de qualquer um dos seus scripts.

<img src="/img/screenshots/custom-script-list.png" className="drop-shadow" width="200" />

Os seus _Scripts personalizados_ serão listados na seção _Scripts_ do _Navegador_ enquanto estiver na visualização da _Área do jogo_.

Clique no botão `+` para criar um novo _Script personalizado_ ou selecione um para editar na lista.

Depois de dar um nome ao seu _Script personalizado_, você pode começar a construir um script da mesma forma que faria para _Atores_, _Gatilhos_ e _Cenas_.

## Parâmetros

Sempre que você adicionar um evento que lê uma _Variável_, ele será adicionado à lista de parâmetros de entrada para o _Script personalizado_, onde você pode dar a essa entrada um nome fácil de lembrar. Os eventos que afetam _Atores_, por padrão, se aplicarão ao jogador, mas se você usar o seletor de ator, poderá configurar o evento para ler o valor do _Ator_ também a partir de um parâmetro de entrada.

Por exemplo, o script personalizado a seguir faz o `Ator A` girar em um círculo.

<img src="/img/screenshots/custom-script-dance.png" className="event-preview" />

## Passando por referência ou valor

Ao usar variáveis em um script personalizado, você tem a escolha de passar por referência (_Por ref._) ou passar por valor (_Por val._) clicando no botão de menu suspenso ao lado de cada variável na lista de parâmetros.

<img src="/img/screenshots/custom-script-by-ref.png" className="event-preview" />

- **Passar por referência** Permite que o script personalizado modifique o valor de um parâmetro de variável. Quaisquer alterações no valor da variável feitas de dentro do script também atualizarão o valor da variável fora do script. Use isso se quiser que o script personalizado consiga alterar o valor de uma variável que foi passada para ele.

- **Passar por valor** Copia o valor atual da variável no momento da chamada, para que quaisquer alterações no parâmetro de variável feitas de dentro do script não afetem a variável que foi passada para ele. Use isso se você quiser que o script personalizado **NÃO** consiga alterar a variável que foi passada para ele.

## Chamando um script personalizado

Depois de criar um _Script personalizado_, você pode chamá-lo a partir de qualquer outro script adicionando um evento _Chamar script_, que aparecerá da seguinte forma.

<img src="/img/screenshots/custom-script-call.png" className="event-preview" />

Primeiro, você deve escolher o script que deseja chamar. Se esse script tiver parâmetros de variável ou ator, você poderá escolher quais entradas usar.

Se você quiser editar o _Script personalizado_, pode retornar a ele usando a lista no _Navegador_ ou selecionando _Editar script personalizado_ no menu suspenso do evento.

<img src="/img/screenshots/custom-event-edit.png" className="event-preview" />
