// Variáveis
let conteudoForaDiaLog = document.queryCommandValue('#conteudoForaDialog')
let btnAbreDialog = document.querySelector("#abreDialog")
let dialog = document.querySelector('.dialogNewsletter')
let dialogBody = document.querySelector('.dialogNewsletter-body')
let dialogOverlay = document.querySelector('.dialogNewsletter-overlay')

btnAbreDialog.style.display = "block"

// Quando abrir a dialog...
btnAbreDialog.addEventListener('click', function() {
  dialog.classList.add('dialogNewsletter--aberto')
  document.querySelector('.dialogNewsletter-label').focus()
  // conteudoForaDiaLog.inert = true
  conteudoForaDialog.setAttribute("inert", true)
  document.querySelector('.conteudo-dialog').classList.add("blur-modal")
});

function fechandoDialog() {
  document.activeElement.blur();
  dialog.classList.remove('dialogNewsletter--aberto')   
  // conteudoForaDiaLog.inert = false
  conteudoForaDialog.removeAttribute("inert")
  document.querySelector('.conteudo-dialog').classList.remove("blur-modal")
  document.addEventListener('keyup', function(event) {
    if(event.keyCode == 27) {
      fechandoDialog()
    }
  })

  btnAbreDialog.focus()
}

// Listeners
document.querySelector('.dialogNewsletter-fechar').addEventListener('click', fechandoDialog);
dialogOverlay.addEventListener('click', fechandoDialog)

