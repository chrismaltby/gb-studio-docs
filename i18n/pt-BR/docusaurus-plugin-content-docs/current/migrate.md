---
sidebar_position: 10
---

# Guia de migração

## GB Studio 3 para 4

### Música

O GB Studio 3.2.1 e versões anteriores tinham um problema em que as durações dos instrumentos de onda estavam sendo salvas de uma maneira incompatível com o hUGETracker. Da versão 4.0.0 em diante, esse problema foi corrigido, mas arquivos `.uge` criados com versões mais antigas do GB Studio podem não soar corretamente se você tiver definido valores de duração nos seus instrumentos de onda.

Se você descobrir que a sua música é afetada por este problema, você pode usar esta ferramenta de migração para corrigir os seus arquivos.

https://chrismaltby.github.io/gbs-uge-migrator/

### Plugins

Se o seu projeto usa algum [plugin](/docs/extending-gbstudio/plugins), é possível que você precise baixar versões mais recentes para ter compatibilidade com o GB Studio 4.

Se usar [plugins de motor](/docs/extending-gbstudio/plugins#engine-plugins), agora é um requisito que o plugin contenha um arquivo `engine.json` declarando com qual versão do motor ele deve funcionar. Os autores de plugins precisarão criar um arquivo `PLUGIN/engine/engine.json` contendo pelo menos o seguinte:
```
{"version": "4.0.0-e0"}
```
Substituindo `4.0.0-e0` pela versão do motor compatível com o plugin.

## GB Studio 2 para 3

O GB Studio 3.0 introduz uma série de mudanças em relação às versões anteriores em um esforço para melhorar e preparar o motor de jogo e o formato do projeto para o futuro. Embora tentemos o nosso melhor para automatizar o máximo possível da migração, há algumas instâncias em que não foi possível fazer isso desta vez e você pode precisar fazer algumas alterações no seu projeto se quiser migrar de versões anteriores do GB Studio.

### Atores

- Os atores agora sempre serão animados enquanto estiverem parados (permitindo animações em repouso), o que pode causar problemas quando você deseja avançar pelas animações manualmente (como caixas de seleção nas cenas de menu do jogo de exemplo do GB Studio 2.0). Se você desejar controlar uma animação manualmente como antes, defina a velocidade da animação do ator para “Nenhuma”. Você também deve considerar o uso do novo [Editor de sprites](/docs/assets/sprites#sprite-editor) e dos [Estados de animação](/docs/assets/sprites#animation-states), pois você pode alcançar objetivos semelhantes com muito mais flexibilidade.

- Se você tiver muitos atores em uma cena que usam eventos `Definir folha de sprite do ator`, poderá perceber que o contador de tiles do seu sprite ficou muito alto. Isso ocorre porque no GB Studio 3.0 adotamos uma abordagem diferente sobre como lidar com essa situação: anteriormente, todas as folhas de sprite roteirizadas precisavam ser carregadas na memória à medida que a cena era inicializada, limitando quantos sprites únicos podiam ser usados em uma única cena; em vez disso, agora nós reservamos memória para cada ator que usa folhas de sprite roteirizadas, mas você pode aplicar quantas folhas de sprite desejar a um único ator. A solução recomendada é substituir a troca de folhas de sprite pelo uso dos [Estados de animação](/docs/assets/sprites#animation-states). Para ver um exemplo de uma cena afetada por isso, compare a cena "Space Battle" do Projeto de Exemplo do GBC no GB Studio 2 com a versão no GB Studio 3, onde as animações de explosão da nave agora fazem parte das animações de sprite do inimigo em vez de uma folha de sprite separada.

- Se você estiver migrando do GB Studio 2, poderá notar que o limite de atores por cena agora está reduzido para 20 atores por cena; isso pode aumentar em versões futuras. Dependendo de como você estava usando os atores, pode ser capaz de usar sprites maiores para alcançar o mesmo efeito.

### Sprites

- O sprite padrão do jogador agora é definido por tipo de cena (_Visão superior 2D_, _Plataforma_, etc.), então não há mais necessidade de mudar para um sprite de jogador diferente manualmente no script inicial da cena, a menos que você deseje fazer isso condicionalmente. Ao migrar um projeto que usa vários tipos de cena, você precisará definir o sprite padrão do jogador para cada tipo de cena na [Visualização de configurações](/docs/settings#scene-types).

- As caixas de colisão agora podem ser configuradas por sprite. Anteriormente, todos os atores tinham uma caixa de colisão de `16px` x `16px` e o jogador tinha uma caixa de colisão de `8px` x `16px`. Ao migrar o seu projeto, definimos a folha de sprite que você configurou como padrão do jogador para usar uma caixa de colisão de `8px` x `16px` a fim de manter a compatibilidade com as versões anteriores, mas se você tiver alterado o sprite do jogador por meio de scripts, poderá também precisar definir as caixas de colisão nesses sprites manualmente usando o [Editor de sprites](/docs/assets/sprites#sprite-editor).

- Os sprites de jogador de plataforma agora têm uma animação de pulo e escalada personalizada que você precisará configurar. Para usá-las, vá para o [Editor de sprites](/docs/assets/sprites#sprite-editor), selecione o seu sprite de jogador de plataforma e, na barra lateral direita, defina o tipo de animação para “Jogador de plataforma”, o que adiciona mais algumas animações que você pode definir para o sprite. Veja [Configurações de animação](/docs/assets/sprites#animation-settings) para obter mais informações.

### Cenas

- Os tiles de escada agora ajustam o sprite do jogador ao centro do tile durante a escalada. Se você estiver usando escadas no seu jogo, certifique-se de testá-las, pois você pode precisar reposicionar os tiles de colisão para corresponder ao novo alinhamento.

### Salvar / Carregar

- Ao carregar um jogo salvo, o motor do jogo agora continua quaisquer scripts que estavam sendo executados anteriormente. Isso significa que se você incluiu uma mensagem como "Agora é seguro desligar o seu sistema." imediatamente após o salvamento, ela também será exibida ao carregar esse jogo. O evento de salvar dados agora inclui um callback _Ao salvar_. Ele só será chamado quando você salvar, e não quando carregar o jogo de volta. Se antes você exibia uma mensagem após salvar, provavelmente precisará movê-la para o script _Ao salvar_. Veja os pontos de salvamento nos projetos de exemplo mais recentes para saber como implementar isso.
