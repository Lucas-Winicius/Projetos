meta()

function meta() {
    var descricao = document.createElement('meta')
    descricao.name = 'description'
    descricao.setAttribute('content', 'Meu portfólio criado para exibir todos os meus projetos criados de uma forma mais entuitiva.')
    document.getElementsByTagName('head')[0].appendChild(descricao);
}