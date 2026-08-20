# Conjuntos de tiles

import { Swatch } from '@site/src/components/Swatch';

Os conjuntos de tiles são usados para fornecer tiles adicionais que podem ser usados pelas suas cenas usando os eventos [Substituir tile](/docs/scripting/script-glossary/scene#tiles) e para permitir a criação de transições de cena perfeitas usando [Conjuntos de tiles comuns](/docs/project-editor/scenes/#common-tilesets).

Você pode adicionar conjuntos de tiles ao seu jogo incluindo arquivos `.png` na pasta `assets/tilesets` do seu projeto.

## Requisitos de cor

Os PNGs de conjuntos de tiles devem conter apenas as quatro cores a seguir:

<Swatch color="#071821" description="Mais escuro" />
<Swatch color="#306850" />
<Swatch color="#86c06c" />
<Swatch color="#e0f8cf" description="Mais claro" />

Baixe as amostras de paleta do GB Studio para:  
[Adobe Photoshop](/assets/swatches/gb-studio-photoshop.aco)  
[Aseprite](/assets/swatches/gb-studio-aseprite.aseprite)  
[Piskel](/assets/swatches/gb-studio-piskel-background-palette.gpl)  

Cores que não forem de um dos códigos hexadecimais acima serão correspondidas à cor mais próxima. Ao contrário dos sprites, a cor `#65ff00` não pode ser usada em conjuntos de tiles.
