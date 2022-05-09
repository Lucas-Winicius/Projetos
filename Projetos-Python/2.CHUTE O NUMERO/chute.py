from random import randint
cont = 0
erros = 0
jogadas = []

print('-' * 30)
print(F"{'JOGO CHUTE AO NUMERO':^30}")
print('-' * 30)

print()

print('SELECIONE A DIFICULDADE:\n[ 1 ] FACIL (0 A 10)\n[ 2 ] MEDIO (0 A 100)\n[ 3 ] MEDIO (0 A 200)\n[ 4 ] DIFICIL (0 A 500)\n[ 5 ] IMPOSSIVEL (0 A 5000)')

opc = int(input('SUA OPÇÃO: '))

if opc < 0 or opc > 5:
    print('OPÇÃO INVALIDA!')
    print('FINALIZANDO...')

elif opc == 1:
    comp = randint(0, 10)

elif opc == 2:
    comp = randint(0, 100)

elif opc == 3:
    comp = randint(0, 200)

elif opc == 4:
    comp = randint(0, 500)

elif opc == 5:
    comp = randint(0, 5000)

while True:
    print()
    jogador = int(input('SEU CHUTE: '))
    print()
    cont += 1
    jogadas.append(jogador)

    if jogador > comp:
        print('NUMERO MUITO ALTO!')
        print()
        print('TENTE NOVAMENTE.')
    
    elif jogador < comp:
        print('NUMERO MUITO PEQUENO')
        print()
        print('TENTE NOVAMENTE.')

    elif jogador == comp:
        
        break

    else:
        print('HOUVE UM ERRO AO ANALIZAR AS INFORMAÇOES')
        erros += 1

print('-' * 30)

print('VITORIA!')
print()
if cont == 1:
    print('PARABENS, DE PRIMEIRA!')
    print()

print(f'VOCE GANHOU COM {cont} TENTATIVAS')
print()
print(f'OCORRERAM {erros} ERROS')
print()
opc = str(input('VOCE DESEJA VER SUAS JOGADAS? ')).strip().upper()[0]

print()

if opc == 'S':
    print('SUAS JOGADAS FORAM: ', end='')
    for opc in jogadas:
        print(opc, end=' ')

print('\n')
print('-' * 30)