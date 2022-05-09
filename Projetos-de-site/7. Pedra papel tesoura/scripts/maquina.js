// CHECKS BOX                                    
var c1 = document.querySelector('#pedra')      // \\
var c2 = document.querySelector('#papel')     //   \\
var c3 = document.querySelector('#tesoura')  //     \\

var p1 = 0

var pontos_player1 = 0
var pontos_player2 = 0

var img1 = document.createElement("img")
var img2 = document.createElement("img")
var p = document.createElement("p")
var p_extra = document.querySelector("#Texto")


function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function batalha() {


    if(c1.checked == true) {
        p1 = 0
        jogo(randint(0, 2))
    }else if(c2.checked == true) {
        p1 = 1
        jogo(randint(0, 2))
    }else if(c3.checked == true) {
        p1 = 2
        jogo(randint(0, 2))
    }else {
        alert('Faça sua jogada')
    }

    
    
}

function jogo(p2) {
    var p2 = p2
    let caminhos = ['img/pedra.png', 'img/papel.png', 'img/tesoura.png']
    let alts = ['Pedra', 'Papel', 'Tesoura']
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

    placar(p2)
}

function vencedor(p2) {
    var p2 = p2

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

function placar(p2) {
    var p2 = p2
    let pontos1 = document.querySelector("#pont1")
    let pontos2 = document.querySelector("#pont2")
    
    if(vencedor(p2) == 'duble') {
        pontos_player1 += 1
        pontos_player2 += 1
        pontos1.innerHTML = `${pontos_player1} Pontos`
        pontos2.innerHTML = `${pontos_player2} Pontos`
    }else if(vencedor(p2) == "p1") {
        pontos_player1 += 1
        pontos1.innerHTML = `${pontos_player1} Pontos`
    }else if(vencedor(p2) == "p2") {
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
        location.href = 'derrota.html'
    }else if(pontos_player1 >= 15 && pontos_player2 >= 15){
        alert('[Erro] Houve um poblema ao depurar os resultados Placar zerado')
    }
}

function limpar() {
    img1.remove()
    img2.remove()
}