function trocar() {
    document.querySelector('#botao').style.background = 'rgb(145, 96, 5)'
    document.querySelector('#botao').style.color = 'lightgray'
    document.querySelector('#botao').style.textDecoration = "underline"
}

function voltar(cor_antiga, cor_texto, decoracao) {
    document.querySelector('#botao').style.background = cor_antiga
    document.querySelector('#botao').style.color = cor_texto
    document.querySelector('#botao').style.textDecoration = decoracao
}