let data = new Date()
let footer = document.querySelector("footer")
let ano = data.getFullYear()
let mes = data.getMonth()
let dia = data.getDate()

if(dia == 31 && mes == 11) {
    footer.innerHTML = 'Feliz véspera de ano novo&#x1F389;'
}else if (dia == 1 && mes == 0) {
    footer.innerHTML = `Feliz ${ano}&#x1F973;`
    document.title = 'Feliz ano novo!'
}else {
    footer.innerHTML = `&copy; 2021 - ${ano} | <a href="https://www.instagram.com/sr_pumpkin_/" target="_blank" rel="noopener noreferrer">Lucas Winicius</a>`
}