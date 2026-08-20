# Música MOD

O GBT Player é um _driver legado_. Por padrão, novos projetos usam o [Editor de música](https://www.gbstudio.dev/docs/assets/music/music-huge) integrado.

Você pode habilitar o GBT Player definindo o _Formato de música_ na _Visualização de configurações_ como MOD (GBT Player).

## Requisitos

Adicione música ao seu jogo incluindo arquivos .mod na pasta `assets/music` do seu projeto. Esses arquivos devem ser feitos para uso com o GBT Player. Você pode navegar pelos [Ativos da comunidade do GB Studio](https://github.com/DeerTears/GB-Studio-Community-Assets) para encontrar músicas gratuitas e compatíveis com GBT sob a licença MIT.

Você pode usar softwares como [**OpenMPT**](https://openmpt.org/) (para Windows ou Linux usando Wine), [**MilkyTracker**](https://milkytracker.titandemo.org/) (para Windows, Mac e Linux), [**ProTracker**](https://16-bits.org/pt.php) e [**BassoonTracker**](https://www.stef.be/bassoontracker/) (baseado em navegador), para citar alguns.

## Recursos

É recomendável que você leia a documentação do seu tracker:
- [Documentação do OpenMPT](https://wiki.openmpt.org/Tutorial:_Getting_Started)
- [Documentação do MilkyTracker](https://milkytracker.org/docs/MilkyTracker.html#shortcuts)
- [Documentação do BassoonTracker](https://www.stef.be/bassoontracker/docs/#about)

Por fim, o [Discord do GB Studio](https://discord.gg/v9xAJCJ) também tem um canal dedicado #music-help.

## Primeiros passos

1. Crie um projeto em branco no GB Studio
2. Encontre o arquivo `assets/music/template.mod` e abra-o com o tracker de sua escolha.
   - **Você deve editar este arquivo para obter uma representação precisa dos instrumentos que você pode usar.**
3. Use a lista de instrumentos mostrada mais adiante neste documento para escolher os sons que você deseja. Mudar os samples no seu tracker não afetará como eles soam no jogo.
4. Adicione um evento `Reproduzir faixa de música` ao seu jogo e selecione a sua música no menu suspenso.
5. Clique no botão Reproduzir ao lado do nome da música para uma pré-visualização no editor, ou jogue o jogo para uma pré-visualização no jogo.

Como o formato de arquivo .mod não é projetado exclusivamente para o Game Boy, você deve testar a sua música no jogo ou na janela de pré-visualização de Música para detectar diferenças audíveis entre a reprodução do seu tracker e a saída do GBT Player.

## Limitações de canal do GBT Player

Arquivos .mod têm 4 canais. Carregar uma cópia do template.mod (incluído em todo projeto novo) garantirá que isso esteja configurado corretamente.

| Canal #       | Tipo de som | Alcance da nota<sup>1</sup> | Instrumentos | Efeitos               |
| ------------- | ----------- | --------------------------- | ------------ | --------------------- |
| Canal 1 e 2   | Pulso       | C3 a B8                     | 1-4          | 0, C, E8, EC, B, D, F |
| Canal 3       | Forma de onda | C3 a B8                   | 8-15         | 0, C, E8, EC <sup>**2**</sup> |
| Canal 4       | Ruído       | Apenas C5                   | 16-31        | C, E8, EC, B, D, F    |

*<sup>1</sup> Este alcance é para Trackers indexados em Um (onde C1 é a nota mais baixa possível). Isso é comparável ao OpenMPT em suas configurações padrão.*
*Trackers que são indexados em Zero por padrão (onde C0 é a nota mais baixa possível) devem interpretar esses Alcances de nota uma oitava inteira abaixo. Isso é comparável ao MilkyTracker em suas configurações padrão.*

Usando as configurações padrão no OpenMPT e MilkyTracker, C3 a B8 no OpenMPT soa o mesmo que C2 a B7 no MilkyTracker.

*<sup>2</sup> Os efeitos B, D e F também podem ser usados no Canal 3 se a mesma linha não estiver sendo usada para definir uma nota/instrumento.*

## Instrumentos

Os apelidos e descrições ao lado desses instrumentos não são oficiais para o GBT Player, eles têm a intenção de ajudar a diferenciar os instrumentos de relance.

Os canais de pulso 1 e 2 têm quatro opções de instrumento:

1. Pulso de 25%
2. Pulso de 50% (onda quadrada)
3. Pulso de 75% (pulso de 25% invertido)
4. Pulso de 12.5%

Os instrumentos 5 a 7 são deixados em branco intencionalmente.

O Canal 3, o canal de onda, tem 8 opções de instrumento:

8. Buzzy
9. Ringy
10. (A) Sync Saw
11. (B) Ring Saw
12. (C) Pulso de oitava + Triângulo
13. (D) Sawtooth
14. (E) Quadrada
15. (F) Senoidal

Os instrumentos 16 a 23 usam ruído periódico em várias tonalidades, enquanto os instrumentos 24 a 32 usam ruído pseudoaleatório em várias tonalidades.

Ruído periódico:

16. (10hx) "stutter" - Um quadrado mais um pulso com larguras de pulso aleatórias
17. (11hx) "rumble" - A mesma forma de onda, mas mais rápida
18. (12hx) "engine" - A mesma forma de onda, mas ainda mais rápida
19. (13hx) "low tone" - Soa como D5
20. (14hx) "undertone" - Soa como E5 + 50 cents
21. (15hx) "middletone" - Soa como B5 + 50 cents
22. (16hx) "overtone" - Soa como D6 + 50 cents
23. (17hx) "high tone" - Soa como D7

Ruído pseudoaleatório:

24. (18hx) "earthquake" - Um quadrado com um pulso fino com larguras de pulso aleatórias
25. (19hx) "spaceship" - O mesmo que o 24, mas mais rápido
26. (1Ahx) "ocean" - etc.
27. (1Bhx) "scratch" - etc.
28. (1Chx) "glitch" - Um sample de ruído branco razoavelmente limpo, sem relação com os outros instrumentos
29. (1Dhx) "volcano" - Um pulso com largura de pulso mudando rapidamente
30. (1Ehx) "scream" - O mesmo que o 29, mas mais rápido
31. (1Fhx) "static" - etc.

## Efeitos

### Efeitos de música

| Efeito | Nome | Descrição | Utilizável por |
| ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -- |
| **Bxx** | Salto | Pula para um padrão específico na música. | 1, 2, 3<sup>1</sup>, 4 |
| **Dxx** | Quebra de padrão | Pula para o próximo padrão antecipadamente, iniciando o padrão na linha `xx`. Esta é a única maneira de encurtar a duração de um padrão. | 1, 2, 3<sup>1</sup>, 4 |
| **Fxx** | Definir velocidade | Define a velocidade da música para `xx`, de 0x1 (rápido) a 0x1F (lento). Esta é a alternativa pretendida para o ajuste do ritmo da música. `xx` representa o número de ticks por linha. Veja a [Tabela de velocidades](#speed-table) para obter mais informações. | 1, 2, 3<sup>1</sup>, 4 |

<sup>1</sup> Não pode ser usado pelo Canal 3 em linhas onde o Canal 3 está tocando uma nova nota.

### Efeitos de canal

Persiste no canal até que o efeito seja definido novamente. Veja [Persistência de efeito](#effect-persistence) para obter mais informações.

| Efeito | Nome | Descrição | Utilizável por |
| ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -- |
| **9ve** | Envelope de volume | Define o volume inicial da nota em `v` (0-F) e adiciona um envelope de alteração de volume (fade). A direção e a velocidade da transição são definidas por `e`. 1-7 diminui o volume ao longo do tempo, sendo 1 o mais rápido. 9-F aumenta o volume ao longo do tempo, sendo 9 o mais rápido. 8 remove o envelope. O uso de `9ve` após `Cxx` substitui o `Cxx`. | 1, 2, 4 |
| **Cxx** | Volume | Define o volume do canal para `xx`. Veja [Limitações de volume de Cxx](#cxx-volume-limitations) para obter mais informações. O uso de `Cxx` após `9ve` substitui o valor de `v`, mas mantém `e` igual.| 1, 2, 3, 4 |
| **E8x** | Panorama | Define o panorama para um dos três valores. `0-3` = 100% Esquerda, `4-B` = Centro, `C-F` = 100% Direita. | 1, 2, 3, 4 |

### Efeitos de nota

Afeta uma nota individualmente.

| Efeito | Nome | Descrição | Utilizável por |
| ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -- |
| **0xy** | Arpejo | Alterna rapidamente entre 3 notas. `x` e `y` representam o nº de semitons acima da nota inicial. | 1, 2, 3, 4 |
| **1xx**| Deslizamento de tom para cima | Desliza o tom para cima em `xx` ticks. Colocar `100` após uma configuração `1xx` anterior usa o mesmo valor da configuração anterior. | 1, 2, 3 |
| **2xx**| Deslizamento de tom para baixo | Desliza o tom para baixo em `xx` ticks. Colocar `200` após uma configuração 2xx anterior usa o mesmo valor da configuração anterior. | 1, 2, 3 |
| **ECx** | Corte da nota | Corta a nota após `x` quadros. Deve estar abaixo da velocidade de `Fxx` para ser ouvido. | 1, 2, 3, 4 |

## Persistência de efeito

Uma vez definido, um efeito de canal persistirá nas notas daquele canal até que o mesmo efeito seja definido novamente.

Na maioria dos trackers, se uma nota for tocada sem um comando de volume, o volume da nota é redefinido para o máximo. Quando um arquivo .mod é convertido pelo GBT Player, as notas sem um efeito de volume tocarão no mesmo volume que o efeito `Cxx` anterior.

**Exemplo:**

```
ModPlug Tracker MOD
|C-502...C40|
|...........|
|...........|
|...........|
|........C00|
|...........|
|E-502......|
```

Em qualquer tracker .mod, a nota E-5 retornará no volume máximo após o efeito C00.

No jogo, você não ouvirá a nota E-5. Isso ocorre porque o C00 persiste até que outro efeito Cxx seja definido. Para fazer essa nota ser ouvida no jogo, o volume deve ser definido novamente:

```
ModPlug Tracker MOD
|C-502...C40|
|...........|
|...........|
|...........|
|........C00|
|...........|
|E-502...C40|
```

Você pode usar `EC0` como uma alternativa para `C00` para cortar as notas e preservar o último efeito de volume.

## Limitações de volume de Cxx

O `Cxx` define o volume de um canal até que o efeito `Cxx` ou `9ve` seja usado.

O Game Boy tem 16 configurações de volume exclusivas para os Canais 1, 2 e 4. Embora os arquivos .mod permitam volumes entre 0 e 40hx, o GBT Player arredondará para baixo esses valores de efeitos para múltiplos de 4 para manter a compatibilidade. Aqui estão os valores de volume válidos para cada um dos canais:

### Configurações de Cxx para Canais 1, 2 e 4:

`00, 04, 08, 0C, 10, 14, 18, 1C, 20, 24, 28, 2C, 30, 34, 38, 3C`

Qualquer valor de `Cxx` que não seja um múltiplo de 4 será arredondado para baixo para um dos números acima.

**Exemplo:** Inserir `C01`, `C02` e `C03` soará o mesmo que inserir `C00`.

**Exemplo:** Inserir `C40` soará o mesmo que inserir `C3C`.

### Configurações de volume únicas para o Canal 3:

O Canal 3 é uma exceção, com apenas 4 configurações de volume únicas:

`00, 10, 20, 40`

O GBT Player arredondará os efeitos `Cxx` no Canal 3 para o número mais próximo listado acima.

**Exemplo:** Inserir `C30` arredondará o volume para cima, para `C40`.

### Tabela de velocidades

Esta tabela pressupõe que o marcador -speed não está definido na janela _Música_ para cada música.

| Valor Fxx (na maioria dos trackers .mod) | BPM (em qualquer tracker .mod) | BPM (no jogo) |
| --------------------------------- | --------------------------- | ------------- |
| **F01<sup>1</sup>**    | 750 BPM          | 900 BPM       |
| **F02<sup>1</sup>**    | 375 BPM          | 450 BPM       |
| **F03<sup>1</sup>**    | 250 BPM          | 300 BPM       |
| **F04<sup>1</sup>**    | 187.5 BPM        | 225 BPM       |
| F05                    | 150 BPM          | 150 BPM       |
| F06                    | 125 BPM          | 128.57 BPM    |
| F07                    | 107.14 BPM       | 112.50 BPM    |
| F08                    | 93.75 BPM        | 100 BPM       |
| F09                    | 83.33 BPM        | 90 BPM        |
| F0A                    | 75 BPM           | 81.82 BPM     |
