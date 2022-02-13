let campoEmail = document.querySelector('#email_input')
let sugestao = document.querySelector('#sugestao')


var domains = ['gmail.com', 'aol.com'];
var secondLevelDomains = ['hotmail']
var topLevelDomains = ["com", "net", "org"];

document.querySelector('#email_input').addEventListener('blur', function () {
    Mailcheck.run({
        email: campoEmail.value,
        domains: domains,                       // optional
        topLevelDomains: topLevelDomains,       // optional
        secondLevelDomains: secondLevelDomains, // optional
        suggested: function (suggestion) {
            sugestao.style.display = 'inline-block'
            sugestao.textContent = `Você quis dizer: ${suggestion.full} ?`
            sugestao.parentNode.classList.add('contatoCampo--erro')
            campoEmail.classList.add('contatoCampo--validouErro')
            sugestao.setAttribute('tabindex', '0')
            sugestao.setAttribute('role', 'alert')
        }
    });
});
