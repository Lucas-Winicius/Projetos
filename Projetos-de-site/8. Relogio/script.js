hora()

function hora() {
    const conteiner = document.querySelector('#hour')
    const data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    let sec = data.getSeconds()

    conteiner.innerHTML = `<p>Agora são</p></br><p id="hora">${hora}:${min}:${sec}</p></br>`
    tema(hora)
    loop()

}

function tema(hora) {
    const conteiner = document.querySelector('#hour')

    if (hora > 1 && hora < 4) {
        conteiner.innerHTML += `<p>Boa Madrugada</p>`
        document.querySelector('#hour').style.backgroundColor = "#121268"
        document.body.style.backgroundColor = "#0A0A3D"
        document.querySelector('p').style.color = "white"
        document.querySelector('#hour').style.color = "lightgray"

    } else if (hora >= 4 && hora < 7) {
        conteiner.innerHTML += '<p>Boa Madrugada</p>'
        document.body.style.backgroundColor = "#000C58"
        document.querySelector('#hour').style.backgroundColor = "#00008C"
        document.querySelector('p').style.color = "white"
        document.querySelector('#hour').style.color = "lightgray"

    } else if (hora >= 7 && hora < 12) {
        conteiner.innerHTML += '<p>Bom Dia<p>'
        document.body.style.backgroundColor = "lightblue"
        document.querySelector('#hour').style.backgroundColor = "white"


    } else if (hora >= 12 && hora < 18) {
        conteiner.innerHTML += '<p>Boa Tarde<p>'
        document.body.style.backgroundColor = "orange"
        document.querySelector('#hour').style.backgroundColor = "white"
    } else if (hora >= 18 && hora < 20) {
        conteiner.innerHTML += '<p>Boa Noite<p>'
        document.body.style.backgroundColor = "orangered"
        document.querySelector('#hour').style.backgroundColor = "white"
    } else {
        conteiner.innerHTML += '<p>Boa Noite<p>'
        document.body.style.backgroundColor = "#000328"
        document.querySelector('#hour').style.backgroundColor = "white"
    }
}

function loop() {
    setTimeout(function () {
        hora()
    }, 500)
}