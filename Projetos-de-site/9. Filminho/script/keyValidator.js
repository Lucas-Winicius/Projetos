function validarChave() {
    const elemento = document.querySelector('#key')
    if (elemento.value.toLowerCase() == 'luk' || elemento.value.toLowerCase() == 'abobora' || elemento.value.toLowerCase() == 'lucas') {
        location.href = 'player.html'
    }
}

function maiuscula() {
    const elemento = document.querySelector('#key')
    let texto = elemento.value.toUpperCase()
    elemento.value = texto
}