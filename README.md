[![Captura-de-tela-03-03-2022-21-21-12.png](https://i.postimg.cc/qq1XYt1K/Captura-de-tela-03-03-2022-21-21-12.png)](https://postimg.cc/Pv8wvqsf)
# ACESSIBILIDADE NA WEB - APEPERIA
******
![GitHub](https://img.shields.io/github/license/anthonibs/acessibilidade-web-front-end?color=red) ![Twitter Follow](https://img.shields.io/twitter/follow/anthonibs?style=social)

O objetivo desse projeto é realizar funcionalidades mais acessíveis para PCD, como muitas das vezes criamos nossa web sites e esquecemos das pessoas que tem alguma deficiência e não dá para navegar no site por falta de acessibilidade, o intuito desse projeto Acessibilidade na Web para que essas pessoas possam ser inclusas.

Curso: [Alura](https://www.alura.com.br/) -  Acessibilidade na Web 
********

 __Demonstração ao vivo__
 URL do site ao vivo: Clique [aqui](https://acessibilidade-na-web-apeperia.netlify.app/#).


## Funcionalidades para acessibilidade:

- NVDA
- Mailcheck.js
- Classe escondeVisualmente
- Atributo role
- Atributo readonly
- Atributo aria-labelledby


### Plataforma NVDA
[NVDA](https://www.nvaccess.org/) é uma plataforma para a leitura de tela, um programa em código aberto que vai “ler” o Windows para facilitar a inclusão digital de deficientes visuais. NVDA é um acrônimo para “NonVisual Desktop Access”, traduzido para o português, significa desktop de acesso não visual.

### Lib Mailchek
[Mailcheck.js](https://github.com/mailcheck/mailcheck): Biblioteca Javascript que sugere se o domínio que o usuário escreve está correto caso estiver errado, informa a escrita do domínio correto.

### Classes Escodender Visualmente
Classe esconde Visualmente: Para esconder os textos que não é para ser mostrado visualmente para os leitores de tela usamos uma classe chamada “escondeVisualmente” porque disto para o layout projetado pelo design e ser lido pelo programa que tela para pessoas com baixa visão, sem a repetição do conteúdo visualmente.

### Atributo role
Utilizamos o atributo “role” na tag <main> para alguns navegadores mais antigos possam prover mais acessibilidade para alguns elementos.

```sh
<main class="conteudo" role="main">
```

### Atributo readonly
O [readonly](https://www.w3schools.com/tags/att_readonly.asp) atributo pode ser definido para impedir que um usuário altere o valor até que algumas outras condições sejam atendidas (como marcar uma caixa de seleção etc.). Em seguida, um JavaScript pode remover o valor somente leitura e tornar o campo de entrada editável.

__Ex.:__ pode ser utilizado para buscar o endereço, digita o CEP e API integrada retorna com os valores.
```sh
<div class="contatoCampo">
    <label>Bairro: </label>
    <input type="text" class="contatoCampo-campoDesabilitado" readonly value="Vila Mariana">
</div>
```

### Atributo aria-labelledby
Para mais acessibilidade na navegação usamos o atributo [aria-labelledy](https://developer.mozilla.org/pt-BR/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute) que é usado para indicar os IDs de elementos que são os rótulos para o objeto. É usado para estabelecer uma relação entre widgets ou grupos e suas labels. Usuários de tecnologias assistivas como leitores de telas navegam tipicamente uma página através de TABs entre as áreas da tela.

```sh
<ol class="listaDeArtigos" aria-labelledby="lista-artigos">
    <li id="new0" class="listaDeArtigos-item" data-noticia="0">
        <article class="listaDeArtigos-artigo">
            <img src="assets/images/10-aplicativos-mais-baixados.png" class="listaDeArtigos-artigo-img" alt="">
            <h3 class="listaDeArtigos-artigo-titulo">Conheça os 10 aplicativos mais badalados do momento</h3>
            <p>Listamos nesta semana alguns aplicativos que estão se destacando no mundo inteiro e
                merecem a sua atenção. Agora, mostramos os 10 apps mais badalados do momento e por que eles
                estão ganhando destaque.                
                <a href="#" class="listaDeArtigos-artigo-link">Continuar lendo o post 1</a>
            </p>
        </article>
    </li>
</ol>
```

## Media queries
Todo o site é responsivo para Smartphones, Tablets e Desktops.

__Desktops__
[![Captura-de-tela-03-03-2022-21-38-00.jpg](https://i.postimg.cc/zXb3gbTc/Captura-de-tela-03-03-2022-21-38-00.jpg)](https://postimg.cc/1fS9xzCG)
********
__Table__
[![Screen-Recorder-Project13.gif](https://i.postimg.cc/7LDLdKdF/Screen-Recorder-Project13.gif)](https://postimg.cc/18CPNr9B)
*******
__Mobile__
[![Screen-Recorder-Project12-1.gif](https://i.postimg.cc/nLHH0CQZ/Screen-Recorder-Project12-1.gif)](https://postimg.cc/tsMQgR5m)
[![Captura-de-tela-03-03-2022-21-35-39.jpg](https://i.postimg.cc/nzWpF2Sc/Captura-de-tela-03-03-2022-21-35-39.jpg)](https://postimg.cc/7GSpX3yp)

## License

[MIT](https://github.com/anthonibs/acessibilidade-web-front-end/blob/main/LICENSE)