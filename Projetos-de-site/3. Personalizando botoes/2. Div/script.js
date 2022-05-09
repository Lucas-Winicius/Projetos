function trocar() {
    document.querySelector('#botao').style.backgroundColor = "rgb(2, 82, 136)"
    document.querySelector('#botao').style.color = 'lightgray'
    document.querySelector("#botao").style.boxShadow = "1px 1px 3px rgba(0, 0, 0, 0.349)"
    document.querySelector('#botao').style.textDecoration = 'underline'
}

function voltar() {
    document.querySelector('#botao').style.backgroundColor = "rgb(0, 191, 255)"
    document.querySelector('#botao').style.color = 'black'
    document.querySelector("#botao").style.boxShadow = "3px 2px 4px rgba(0, 0, 0, 0.349)"
    document.querySelector('#botao').style.textDecoration = 'none'
}