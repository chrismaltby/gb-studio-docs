---
sidebar_position: 5
---

# Pré-fabricados

Os pré-fabricados são modelos reutilizáveis para [Atores](/docs/project-editor/actors) e [Gatilhos](/docs/project-editor/triggers).

Se você se pegar adicionando os mesmos inimigos, itens coletáveis, portas ou gatilhos de cinemática em várias cenas, os pré-fabricados permitem defini-los uma vez e reutilizá-los em qualquer lugar. Quando você edita o pré-fabricado posteriormente (por exemplo, para corrigir um erro de script ou atualizar um sprite), todas as instâncias daquele pré-fabricado são atualizadas automaticamente.

Você também pode substituir instâncias individuais quando precisar de pequenas diferenças entre atores e gatilhos em cada cena.

## Criando um pré-fabricado

Existem duas maneiras de criar um novo _Pré-fabricado_:

- Clique no **` + `** na barra de título do _Navegador de pré-fabricados_ e escolha "Ator" ou "Gatilho" no menu suspenso para criar um novo pré-fabricado em branco.
  <div className="drop-shadow margin-bottom"><img title="Adicionar pré-fabricado" src="/img/screenshots/prefab-add.png" width="270" className="clip-bottom" /></div>

- Selecione um Ator ou Gatilho existente e, usando o botão <img className="gbs-icon" title="Botão de seta para baixo" src="/img/screenshots/dropdown-button.png" width="22" />, escolha "Converter para pré-fabricado" para criar um pré-fabricado a partir de uma entidade existente. Isso também fará com que o Ator ou Gatilho existente seja vinculado a este Pré-fabricado.

  <div className="drop-shadow margin-bottom"><img title="Converter para pré-fabricado" src="/img/screenshots/prefab-convert.png" width="320" className="clip-bottom" /></div>

## Instanciando um pré-fabricado

Para criar uma **instância** de um pré-fabricado, clique no botão **` + `** ao lado do nome do pré-fabricado no _Navegador_ e, em seguida, clique na cena onde deseja adicionar a instância.

<div className="drop-shadow margin-bottom"><img title="Navegador de pré-fabricados" src="/img/screenshots/prefab-navigator.png" width="200" className="clip-bottom" /></div>

## Substituindo um pré-fabricado

Cada pré-fabricado posicionado é uma **instância**. Se você editar um evento de script dentro de uma instância, essas alterações se aplicam apenas a essa instância (elas não alterarão o pré-fabricado).

Os valores substituídos são destacados com um contorno azul.

<div className="drop-shadow margin-bottom"><img title="Substituir um pré-fabricado" src="/img/screenshots/prefab-override.png" width="320" className="clip-bottom" /></div>

Se você decidir que as alterações devem se tornar o novo padrão para todas as instâncias, abra o menu <img className="gbs-icon" title="Botão de seta para baixo" src="/img/screenshots/dropdown-button.png" width="22" /> e escolha **Aplicar alterações**. Você pode aplicar alterações para eventos editados individualmente ou aplicar todas as substituições de uma só vez.

O mesmo menu também permite **reverter** uma instância de volta aos padrões do pré-fabricado.

<div className="drop-shadow margin-bottom"><img title="Aplicar alterações do pré-fabricado" src="/img/screenshots/prefab-apply.png" width="320" className="clip-bottom" /></div>

## Descompactando um pré-fabricado

A descompactação remove o vínculo entre uma instância e o seu pré-fabricado. A instância se torna um Ator ou Gatilho normal que não receberá mais atualizações do pré-fabricado.

<div className="drop-shadow margin-bottom"><img title="Descompactar pré-fabricado" src="/img/screenshots/unpack-prefab.png" width="320" className="clip-bottom" /></div>

Isso é útil quando você deseja começar a partir de um pré-fabricado, mas depois personalizar bastante uma instância específica.

A descompactação afeta apenas a instância selecionada (o pré-fabricado em si e outras instâncias permanecem inalterados).
