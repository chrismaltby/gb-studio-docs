import ScriptEventPreview from '@site/src/components/ScriptEventPreview';

# Música

A música pode ser reproduzida no seu jogo usando o evento [Reproduzir faixa de música](/docs/scripting/script-glossary/music-sound-effects#play-music-track) nos seus scripts de *Ator*, *Gatilho* ou *Cena*.

<ScriptEventPreview title={"Play Music Track"} fields={[{"key":"musicId","type":"music","defaultValue":"LAST_MUSIC"}]} />

Você pode adicionar música ao seu jogo incluindo arquivos `.uge` ou `.mod` na pasta `assets/music` do seu projeto.

Um projeto só pode suportar um tipo de arquivo de música, isso pode ser configurado na [Visualização de configurações](/docs/settings#music-format) selecionando MOD ou UGE como o Formato de música.

Arquivos `.uge` podem ser criados e editados com o _Editor de música_. 

Veja a documentação do [Editor de música](/docs/assets/music/music-huge) para obter mais informações.

Arquivos `.mod` são criados e editados usando um software de Tracker externo. Você pode selecionar o aplicativo padrão a ser aberto ao clicar nos botões de edição de ativos na janela de _Preferências do GB Studio_.

Veja a documentação de [Arquivos MOD](/docs/assets/music/music-gbt) para obter mais informações.
