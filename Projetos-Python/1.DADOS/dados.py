from random import randint

print('-' * 20)
print(f'{"DADO":^20}')
print('-' * 20 )
print()

n1 = int(input('DIGITE O MAIOR VALOR DO DADO: '))

print()

print(f'VALOR DO DADO FOI: {randint(1, n1)}')
print()
