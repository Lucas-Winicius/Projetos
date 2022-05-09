function tema() {
    let botao = document.querySelector('#botao')
    trocar_tema(botao.value)
}

function trocar_tema(cor_tema) {
    let corpo = document.querySelector('body')
    let botao = document.querySelector('#botao')
    if (cor_tema == 'Tema Escuro') {
        corpo.className = 'tema_escuro'
        botao.value = 'Tema Claro'
    }else if (cor_tema == 'Tema Claro') {
        corpo.className = 'tema_claro'
        botao.value = 'Tema Escuro'
    }
}