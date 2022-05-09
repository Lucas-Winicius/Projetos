function mostrar_senha() {
    let caixa_senha = document.querySelector('#senha')
    if(caixa_senha.type == 'password') {
        caixa_senha.type = 'text'
    }else {
        caixa_senha.type = 'password'
    }
}

function tratar_texto(texto) {
    // Voce chama a funcao com o texto q vc quiser e a funçao vai retornar o texto tratado
    let resultado = ''
    let caracteres = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
'@', '!', '#', '$', '&', '*', '(', ')', '-', '_', '[', ']', '{', '}', '<', '>', 'ç', 'Ç', '+', '~', '=', ' ']

    for(let c1 in texto) {
        for(let c2 in caracteres) {
            if(texto[c1] == caracteres[c2]) {
                resultado += texto[c1]
            }
        }
    }
    return resultado
}

function clicou() {
    document.querySelector('#logar').style.backgroundImage = 'linear-gradient(to right, #000092, #003a81, #005386, #007694, #06746e)'
    document.querySelector('#logar').style.textDecoration = 'underline'
}

function saiu() {
    document.querySelector('#logar').style.backgroundImage = 'linear-gradient(to right, #0002ff, #0072ff, #009fff, #00c1f1, #07ddd2)'
    document.querySelector('#logar').style.textDecoration = 'none'
}

function continuar() {
    location.href = 'pagina2.html'
}