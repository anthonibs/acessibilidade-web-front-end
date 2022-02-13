// VARIÁVEIS
const BTNS = document.querySelectorAll('.listaDeArtigos-slider-item')
let noticias = document.querySelectorAll('.listaDeArtigos-item')

let new0 = document.getElementById('new0')

new0.style.display = 'block'

// Criando indicador de slider atual
// cria identificado para pessoas com baixa visão para saberem qual numeração da noticia
let indicadorSliderAtual= document.createElement('span')
indicadorSliderAtual.classList.add('escondeVisualmente')
indicadorSliderAtual.id = 'escondeVisualmente'
indicadorSliderAtual.textContent = '(Slide atual)'

// Percorre todos os botoes controladores
BTNS.forEach(function (btn) {
  btn.addEventListener('click', function(noticia) {

    noticias.forEach(function(noticia) {
      noticia.style.display = 'none'

      if (this.getAttribute('data-sliderItem') === noticia.getAttribute('data-noticia')) {
        noticia.style.display = 'block'
      }
    }.bind(this))
    
    document.querySelector('.escondeVisualmente').remove()
    this.append(indicadorSliderAtual)
  
    // Remove classe 'ativo' dos outros botoes
    BTNS.forEach(function (btnRemoveClass) {
      btnRemoveClass.classList.remove('listaDeArtigos-slider-item--ativo')
    })

    this.classList.add('listaDeArtigos-slider-item--ativo')
  })
})