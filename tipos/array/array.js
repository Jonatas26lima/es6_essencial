const user = ['Salvador', 'Dali', 'Greta'];//array de usuarios

const gender = {
  MAN: Symbol('M'),
  WOMAN: Symbol('W')
}

const persons = [ //array de pessoas com: nome, idade e genero
  {
    name: 'Salvador',
    age: 26,
    gender: gender.MAN
  },
  {
    name: 'Dali',
    age: 43,
    gender: gender.MAN
  },
  {
    name: 'Greta',
    age: 18,
    gender: gender.WOMAN
  }  
];

//retornar a quantidade de itens de um array
//console.log('items = ', persons.length); //retona = 3

// verificar se é um array
//console.log(' A variável persons é um array? ', Array.isArray(persons)); // retorna true

// Iterar os itens do array
persons.forEach(person =>{
  console.log(`Nome: ${person.name}`);
});

//Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\nNova lista com homens', mens); //ira retornar apenas os homens da lista de array

//retornar um novo array
const personsWithcourse = persons.map(person => {
  person.course = 'Introdução ao Javascript'; // nova info adicionada
  return person;
});
console.log('\nPessoas com a adição do course: ', personsWithcourse); //retorna um novo array, com o incremento do curso

//Transformar um array em outro
const totalAge = persons.reduce((age, person) => {
  age += person.age;
  return age;
}, 0);

console.log('\n A soma de todas as idades é: ', totalAge);

//juntando operações
const totalEvenAges = persons
                        .filter(person => person.age % 2 === 0)
                        .reduce((age, person) =>{
                          age += person.age;
                          return age;
                        }, 0);
console.log('\nA soma de idades das pessoas que possuem idade par ', totalEvenAges);
