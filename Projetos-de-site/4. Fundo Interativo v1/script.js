function amarelo() {
    const favi = document.querySelector('#favicon')
    document.title = 'Amarelo'
    document.body.style.background = 'yellow'
    favi.setAttribute('href', 'img/amarelo.png')
    document.querySelector('#preto').style.border = "1px solid black"
}

function azul() {
    const favi = document.querySelector('#favicon')
    document.title = 'Azul'
    document.body.style.background = 'blue'
    favi.setAttribute('href', 'img/azul.png')
    document.querySelector('#preto').style.border = "1px solid black"

}

function vermelho() {
    const favi = document.querySelector('#favicon')
    document.title = 'Vermelho'
    document.body.style.background = 'red'
    favi.setAttribute('href', 'img/vermelho.png')
    document.querySelector('#preto').style.border = "1px solid black"
}

function reset() {
    const favi = document.querySelector('#favicon')
    document.title = 'Selecione alguma cor'
    favi.setAttribute('href', 'img/bug.svg')
    document.body.style.background = 'white'
    document.querySelector('#preto').style.border = "1px solid black"
}

function preto() {
    const favi = document.querySelector('#favicon')
    document.title = 'Preto'
    favi.setAttribute('href', 'img/preto.png')
    document.body.style.background = 'black'
    document.querySelector('#preto').style.border = "1px solid white"
}

function branco() {
    const favi = document.querySelector('#favicon')
    document.title = 'Branco'
    favi.setAttribute('href', 'img/branco.png')
    document.body.style.background = 'white'
    document.querySelector('#preto').style.border = "1px solid black"
}

function rosa() {
    const favi = document.querySelector('#favicon')
    document.title = 'Rosa'
    favi.setAttribute('href', 'img/rosa.png')
    document.body.style.background = 'pink'
    document.querySelector('#preto').style.border = "1px solid black"
}