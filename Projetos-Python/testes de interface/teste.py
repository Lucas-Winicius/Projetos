from PySimpleGUI import PySimpleGUI as sg

sg.theme('Reddit')

layout = [
    [sg.Text('USUARIO'), sg.Input(key='usuario', size=(15, 1))],
    [sg.Text('SENHA'), sg.Input(key='senha', password_char='*', size=(15, 1))],
    [sg.Checkbox('salvar o login?')],
    [sg.Button('Entrar')]
]

janela = sg.Window('LOGIN', layout)

while True:
    eventos, valores = janela.read()
    if eventos == sg.WINDOW_CLOSED:
        break

    elif eventos == 'Entrar':
        if valores['usuario'] == 'ABOBORA' and valores['senha'] == '12345':
            print('BEM VINDO(A)')
            break
            
print()
print('PROGRAMA FINALIZADO!')
