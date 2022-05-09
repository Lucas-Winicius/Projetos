var player1 = undefined
var player2 = undefined

var pontos_player1 = 0
var pontos_player2 = 0

var img1 = document.createElement("img")
var img2 = document.createElement("img")
var p = document.createElement("p")
var p_extra = document.querySelector("#Texto")


function validar_p1() {
    let b1 = document.querySelector("#b1")
    let p1 = document.querySelector("#p1")
    if(p1.value == '' || p1.value == undefined) {
        let resp1 = document.querySelector("#resp1")
        resp1.style.color = 'red'
        resp1.style.fontSize = '1em'
        resp1.innerHTML = 'Insira sua jogada'
    }else {
        let resp1 = document.querySelector("#resp1")
        resp1.innerHTML = ''

        if(p1.value < 0 || p1.value > 2) {
            resp1.style.color = 'red'
            resp1.style.fontSize = '1em'
            resp1.innerHTML = 'Numero invalido'
        }else {
            p1.type = 'password'
            b1.value = 'Limpar'
            return true
        }
    }
}

function validar_p2() {
    let b2 = document.querySelector("#b2")
    let p2 = document.querySelector("#p2")
    if(p2.value == '' || p2.value == undefined) {
        let resp2 = document.querySelector("#resp2")
        resp2.style.color = 'red'
        resp2.style.fontSize = '1em'
        resp2.innerHTML = 'Insira sua jogada'
    }else {
        let resp2 = document.querySelector("#resp2")
        resp2.innerHTML = ''

        if(p2.value < 0 || p2.value > 2) {
            resp2.style.color = 'red'
            resp2.style.fontSize = '1em'
            resp2.innerHTML = 'Numero invalido'
        }else {
            p2.type = 'password'
            b2.value = 'Limpar'
            return true
        }
    }
}

function batalha() {
    let p1 = document.querySelector("#p1")
    let p2 = document.querySelector("#p2")
    if(validar_p1() == true && validar_p2() == true && p1.value <= 2 && p1.value > -1 && p2.value <= 2 && p2.value > -1) {
        let start = confirm('Deseja iniciar o jogo?')
        if(start == true) {
            jogo()
        }else{
            alert('Entendido')
        }
    }else {
        alert('Verifique as informações e tente novamente lembre-se de não trocar as informações após que você confirme.')
        p1.type = 'number'
        p2.type = 'number'
    }
}

function jogo() {
    let caminhos = ['img/pedra.png', 'img/papel.png', 'img/tesoura.png']
    let alts = ['Pedra', 'Papel', 'Tesoura']
    let p1 = document.querySelector("#p1").value
    let p2 = document.querySelector("#p2").value
    let res = document.querySelector("#fim")

    p_extra.remove()
    
    img1.setAttribute("src", caminhos[p1])
    img1.setAttribute("width", '200px')
    img1.alt = alts[p1]
    res.appendChild(img1)

    p.innerText = 'VS'
    res.appendChild(p)

    img2.setAttribute("src", caminhos[p2])
    img2.setAttribute("width", '200px')
    img2.alt = alts[p2]
    res.appendChild(img2)

    placar()
}

function vencedor() {
    let p1 = document.querySelector("#p1").value
    let p2 = document.querySelector("#p2").value

    if(p1 == p2) {
        return 'duble'
    }else if(p1 == 0 && p2 == 1) {
        return 'p2'
    }else if(p1 == 0 && p2 == 2) {
        return 'p1'
    }else if(p1 == 1 && p2 == 0) {
        return 'p1'
    }else if(p1 == 1 && p2 == 2) {
        return 'p2'
    }else if(p1 == 2 && p2 == 0) {
        return 'p2'
    }else if(p1 == 2 && p2 == 1) {
        return 'p1'
    }
}

function placar() {
    let pontos1 = document.querySelector("#pont1")
    let pontos2 = document.querySelector("#pont2")
    
    if(vencedor() == 'duble') {
        pontos_player1 += 1
        pontos_player2 += 1
        pontos1.innerHTML = `${pontos_player1} Pontos`
        pontos2.innerHTML = `${pontos_player2} Pontos`
    }else if(vencedor() == "p1") {
        pontos_player1 += 1
        pontos1.innerHTML = `${pontos_player1} Pontos`
    }else if(vencedor() == "p2") {
        pontos_player2 += 1
        pontos2.innerHTML = `${pontos_player2} Pontos`
    }

    pontos()
}

function pontos() {
    if(pontos_player1 >= 10 && pontos_player2 >= 10) {
        location.href = 'empate.html'
    }else if(pontos_player1 >= 10) {
        location.href = 'vitoria.html'
    }else if(pontos_player2 >= 10) {
        location.href = 'vitoria.html'
    }else if(pontos_player1 >= 15 && pontos_player2 >= 15){
        alert('[Erro] Houve um poblema ao depurar os resultados Placar zerado')
    }
}

function limpar() {
    let p1 = document.querySelector("#p1")
    let p2 = document.querySelector("#p2")
    
    let b1 = document.querySelector("#b1")
    let b2 = document.querySelector("#b2")
    
    if(p1.value != '' && p2.value != '' && b1.value == 'Limpar' && b2.value == 'Limpar') {
        p1.value = ''
        p2.value = ''

        p1.type = 'number'
        p2.type = 'number'

        b1.value = 'Confirmar'
        b2.value = 'Confirmar'

        img1.remove()
        img2.remove()
        p.remove()
        p_extra.innerHTML = 'VS'
    
    }
}

