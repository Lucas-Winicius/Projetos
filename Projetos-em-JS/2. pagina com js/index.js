

// -----------------------------  HEAD  ------------------------- //

var head = {"title":function(titulo){document.title = titulo}}

//LINGUAGEM
document.querySelector('html').setAttribute('lang', 'pt-br')

// charset
var charset = document.createElement('meta')
charset.setAttribute('charset', 'UTF-8')
document.getElementsByTagName('head')[0].appendChild(charset)

// Compatibilidade?
var comp = document.createElement('meta')
comp.setAttribute('http-equiv', 'X-UA-Compatible')
comp.setAttribute('content', 'IE=edge')
document.getElementsByTagName('head')[0].appendChild(comp)

// viewport
var vp = document.createElement('meta')
vp.name = 'viewport'
vp.setAttribute('content', 'width=device-width, initial-scale=1.0')
document.getElementsByTagName('head')[0].appendChild(vp)

// Titulo
head.title('Pagina Com JavaScript')

// -----------------------------  BODY  ------------------------- //
document.querySelector('body').setAttribute('style', 'height: 100vh; background-color: darkgray;')

// div
var div = document.createElement('div')
div.setAttribute('style', 'max-width: 630px; height: max-content; margin: auto; background-color: white; border-radius: 30px; margin-top: 10%; box-shadow: 4px 5px 9px #00000036;')
document.getElementsByTagName('body')[0].appendChild(div)

// h1
var h1 = document.createElement('h1')
h1.setAttribute('style', 'padding: 20px 0px; text-align: center; font-family: "Courier New", Courier, monospace;')
h1.textContent = 'Pagina criada com JS'
document.getElementsByTagName('div')[0].appendChild(h1)

// p 
var p = document.createElement('p')
p.setAttribute('style', 'font-family: Arial, Helvetica, sans-serif; text-align: center; padding: 20px; line-height: 40px;')
p.textContent = 'Olá, há algum tempo tive uma ideia de criar uma pagina web exclusivamente com JavaScript. Com esse projeto espero melhorar minha habilidades com JS ou ao menos me divertir um pouco.'
document.getElementsByTagName('div')[0].appendChild(p)
