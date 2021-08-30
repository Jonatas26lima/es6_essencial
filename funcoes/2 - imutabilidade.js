const students = [
  //cria-se um array com nome e nota de alunos
  {
    nome: 'quédema',
    nota: 10
  },

  {
    nome: 'alice',
    nota: 9
  },
  {
    nome: 'jonatas',
    nota: 7
  }
]

function getAprovedstudents(studentsList) { //essa função recebe a lsita de alunos
  return studentsList.filter(student => student.nota >= 8); // e retorna apenas a lista de aprovados, com nota 8 ou superior 
}

console.log('alunos aprovados: '); // titulo da lista
console.log(getAprovedstudents(students)); // nome e nota dos alunos aprovados

console.log('\nLista de alunos: '); // titulo da lista
console.log(students); // lsita com todos os alunos
