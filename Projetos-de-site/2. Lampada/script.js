function ligar() {
    let ligar = testar()
    if (ligar == true) {
        let lampada = document.querySelector('img')
        lampada.src = 'img/acesa.png'
        lampada.id = 'acesa'
        lampada.alt = 'Lampada Ligada'
    }
    
}

function desligar() {
    let ligar = testar()
    if (ligar == true) {
        let lampada = document.querySelector('img')
        lampada.src = 'img/desligada.png'
        lampada.id = 'desligada'
        lampada.alt = 'Lampada Desligada'
    }
    
}

function quebrar() {
    let lampada = document.querySelector('img')
    lampada.src = 'img/quebrada.png'
    lampada.id = 'quebrada'
    lampada.alt = 'Lampada Quebrada'
}

function testar() {
    let lampada = document.querySelector('img')
    if (lampada.id == 'quebrada') {
        return false
    }else {
        return true
    }
}