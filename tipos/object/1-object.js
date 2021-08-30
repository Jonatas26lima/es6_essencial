let user =  {
  name: 'claudionor'
};
console.log(user); //retorna 'claudionor'

//alterando propriedade de um objeto
user.name = 'felisbino'; // atribuindo um novo nome
console.log(user); // retorna 'felisbino' pois trocamos o valor

user['name'] = 'evaristo'; // mesmo resultado porém utilizando uma forma de array '[]'
console.log(user); // retorna o novo valor 'evaristo' porém acessando de forma diferente

const prop = 'ulverton'; //cria-se uma variável 'prop'
user[prop] = 'Lincon'; //acessa a variável 'prop' e troca o valor


//criando uma propriedade
user.lastName = 'venderson das chagas';

//deletando uma propriedade
delete user.name;