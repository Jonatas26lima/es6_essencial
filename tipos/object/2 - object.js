// funções de object

const user = {
  name: 'Ursula',
  lastName: 'Del Mar'
}

//recupera as chaves do objeto
console.log('Propriedades do objeto user: ', Object.keys(user));

//recupera valores das chaves do objeto
console.log('\nValores das propriedades dos objetos user: ', Object.values(user));

// Retorna um array de uma array contendo [nome-prop, valor_prop]
console.log('\nLista de propriedades e valores: ', Object.entries(user));

// Mergerar propriedades de objetos

Object.assign(user, {fullName:'Ursula del mar'}); // primeiro recebe um target 'user' e depois aceita merge de outros parametros
console.log('\nAdiciona as propriedades fullname no objeto : ', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos : ', Object.assign({}, user, {age: 26})); // quando for fazer merge de um array, primeiro insira um array vazio '{}', depois adiciona os novos objetos, para não perder as informações anteriores.

//Previne todas a alterações em um objeto
const newObj = { foo: 'bar' };
Object.freeze(newObj); // 'congela' as alterações solicitadas para um novo objeto 

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariavel newObj após as alterações: ', newObj);

// permite apenas as propriedades existentes em um objeto
 const person = { name: 'Philipi' };
 Object.seal(person); // não permite deletar nem criar propriedades.

person.name = 'Philipi Cótler'; //modificando a propriedade
delete person.name ; //deletando propriedade
person.age = 26; //criando propriedade

console.log('\nVariável person após as alterações: ', person);












