const CAMPO_CEP = document.getElementById('cep')

CAMPO_CEP.oninvalid = function () {
    this.setCustomValidity('');

    if (!this.validity.valid) {
        this.setCustomValidity('Ops! Tem algo errado neste campo!')
        // this.parentNode.classList.add('contatoCampo--erro')
    }
}