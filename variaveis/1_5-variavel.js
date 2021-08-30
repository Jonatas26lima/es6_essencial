const name = 'xispirito'; // valor da const

// não pode alterar o valor
//name = 'joão';

const user = { // objeto
 name: 'chaves'
};

// se for um objeto podemos trocar o valor
user.name = 'madruga';

//NÃO podemos fazer o objeto apontar para outro lugar
//user = {
  //name: 'chiquinha'
//};

const alunos = ['huguinho', 'zezinho', 'luizinho']; // array

//podemos adicionar novos itens
alunos.push('donald');
//['huguinho', 'zezinho', 'luizinho'. 'donald']

//remover um item
alunos.shift(); // retirei o 1º item do array
//['zezinho', 'luizinho'. 'donald']

// alterar diretamente
alunos[1] = 'patinhas';
//['zezinho', 'patinhas'. 'donald']

console.log('array após as alterações: ' , alunos);
