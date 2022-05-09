import PySimpleGUI as sg

# CRIAR AS JANELAS E ESTILOS (LAYOT)
# CRIAR AS JANELAS INICIAIS
# CRIAR UM LOOP DE LEITURA DE EVENTOS
     # QUANDO A JANELA FOR FECHADA
     # QUANDO QUEREMOS IR PARA A PROXIMA JANELA
     # QUANDO QUEREMOS VOLTAR PARA A JANELA ANTERIOR
# LOGICA DE O QUE DEVE ACONTECER AO CLICAR OS BOTOES


# CRIAR AS JANELAS E ESTILOS (LAYOT)
def janela_login():
    sg.theme('Reddit')
    layout = [
        [sg.Text('Nome:')],
        [sg.Input()],
        [sg.Button('Prosseguir')]
    ]
    return sg.Window(('Login'), layout=layout, finalize=True)

def janela_pedido():
    sg.theme('Reddit')
    layout = [
        [sg.Text('Fazer Pedido:')],
        [sg.Checkbox('Pizza a la abobora', key='pizza1'), sg.Checkbox('Pizza de Frango', key='pizza2')],
        [sg.Button('Voltar'), sg.Button('Fazer Pedido')]
    ]
    return sg.Window('MONTAR PEDIDO', layout=layout, finalize=True)

# CRIAR AS JANELAS INICIAIS
janela1, janela2 = janela_login(), None

# CRIAR UM LOOP DE LEITURA DE EVENTOS
while True:
    window, event, values = sg.read_all_windows()
    # QUANDO A JANELA FOR FECHADA
    if window == janela1 and event == sg.WIN_CLOSED:
        break
    if window == janela1 and event == 'Prosseguir':
        janela2 = janela_pedido()
        janela1.hide()
    if window == janela2 and event == 'Voltar':
        janela2.hide()
        janela1.un_hide()
    if window == janela2 and event == 'Fazer Pedido':
        if values['pizza1'] == True and values['pizza2'] == True:
            sg.popup('OMG! combo duplo coma a pizza de abobora se puder')
        elif values['pizza1'] == True:
            sg.popup('ENTÃO QUER DIZER QUE... VOCE GOSTA DE ABOBORA')
        elif values['pizza2'] == True:
            sg.popup('FAZENDO PEDIDO DE UMA PIZZA DE FRANGO...')
        elif values['pizza1'] == False and values['pizza2'] == False:
            sg.popup('Sua lista de pedidos esta vazia :/ , faça um pedido antes de prosseguir ')
     # QUANDO QUEREMOS IR PARA A PROXIMA JANELA
     # QUANDO QUEREMOS VOLTAR PARA A JANELA ANTERIOR
# LOGICA DE O QUE DEVE ACONTECER AO CLICAR OS BOTOES

