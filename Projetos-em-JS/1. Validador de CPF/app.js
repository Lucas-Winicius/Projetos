console.log(validar_cpf('145.382.206-20'))

/*
CPF PARA TESTES DO SITE (https://www.4devs.com.br/gerador_de_cpf)

133.824.820-02
961.730.170-91
853.804.820-15
468.684.350-29
446.022.950-10
651.204.920-96
741.465.810-44

*/


// SE O *(CPF FOR VALIDO O RETORNO SERA VERDADEIRO)* CASO CONTARIO O *(RETORNO SERA FALSO)*
function validar_cpf(cpf) {
    //  CHAMA A FUNCAO DE TRATAMENTO E CRIA UMA VARIAVEL COM O RETORNO
    let tratamento = tratar_cpf(cpf)
    let res = []

    if(tratamento == undefined) {
        // Caso o retorno seja indefinido ele vai printar no console cpf invalido e retornar False
        console.log('CPF Invalido!')
        return false
    // CASO CONTARIO O RATAMENTO IRA CONTINUAR
    }else {
        // INVERTE A LISTA E REMOVE OS ULTIMOS 2 DIGITOS
        for(let c = 8; c >= 0; c--) {
            res.push(tratamento[c])
        }
        
        // Tratamento lv2
        let soma = 0
        let multiplicar = 10

        for(let c = res.length - 1; c >= 0; c--) {
            soma += (res[c] * multiplicar)
            multiplicar--
        }
        
        // PEGAR O RESTO E FAZER OS ULTIMOS TESTES
        soma = soma % 11
        soma = 11 - soma
        
        if(tratamento[9] == soma) {
            // CPF VALIDO!
            return true
        }else {
            // CPF INVALIDO!
            return false
        }
    }
}



// TRATAMENTO DO CPF -- E ATIVO AUTOMATICAMENTE PELO (validar_cpf()) MAS PODE SER USADO SEPARADAMENTE
function tratar_cpf(cpf) {
    // VARIAVEIS
    let valores_desejados = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] // Filtro do tratamento
    rf = [] // *Retorno *Final -> Valor que sera retornado
    

    for(let c = 0; c <= cpf.length; c++) {

        // PEGA UM CARACTER E ANALIZA ELE COM CADA UM DO FILTRO
        for(let cont = 0; cont < valores_desejados.length; cont++) {

            // VERIFICA O CARACTER
            if(cpf[c] == valores_desejados[cont]) {
                // ADICIONA O NUMERO AO RETORNO MAS ANTES TRANFORMA ELE EM UM NUMERO
                rf.push(Number(cpf[c]))
            }
        }
    }

    // VALIDADOR SIMPLES
    if (rf.length == 11) {
        // E UM CPF
        return rf

        /**
         * RETORNO:
         * 
         * True: (Contem 11 caracteres) Retorno -> Uma lista com os caracteres numerais do cpf
         * 
         * False: (Contem mais ou contem menos que 11 caracteres) Retorno -> Valor undefined
         * 
         */
    }


}