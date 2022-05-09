from random import shuffle, choice

rsp = ['SIM!',
 "NÃO",
  'Sim',
   'Não',
    'Você quem escolhe',
     'Não sei, tambem estou indeciso hoje',
      'Não estou consegundo decidir']


user = str(input('QUAL E A SUA PERGUNTA? ')).strip().title()

print()
print(choice(rsp))
print()