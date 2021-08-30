const symbol1 = Symbol();
const symbol2 = Symbol();


//symbols são únicos
console.log('symbol1 é igual a symbol2:', symbol1 === symbol2);

//Prevenir conflitos entres nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
  [nameSymbol1]: 'Oscar',
  [nameSymbol2]: 'Suriname'
  lastName: 'Merchan Neves'
}
console.log(user);

// symbols criam propriedades que não são enumerables

for (const key in user) {
  if (user.hasOwnProperty(key)){
    console.log(`\nvalor da chave ${key}:${key[user]}`);
  }
}

console.log('propriedades do objeto user:', Object.keys(user));
console.log('valores das propriedades do objeto user:', Object.values(user));

//exibir symbols de um objeto
console.log('Simbols registrados no objeto user:', Object.getOwnPropertySymbols(user));

//acessando todas as propriedades de um objeto
console.log('Todas as propriedades no objeto user:', Reflect.ownKeys(user));

//criando um ENUM
const directions = {
  UP    : Symbol('UP'),
  DOWN  : Symbol('DOWN'),
  LEFT  : Symbol('LEFT'),
  RIGHT : Symbol('RIGHT')
};
