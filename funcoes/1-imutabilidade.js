const user = {
  //nesse exemplo temos o usuario (user)
  name: 'jonatas',
  lastname: 'willians dorta lima'
}

function getUserwithfullname(user) {
  // criamos a função que retornará o nome completo do usuário
  return {
    ...user, // speed operator (novidade no ecmascript)
    fullName: `${user.name} ${user.lastname}` // para retonar o nome completo precisamos do nome e sobrenome do usuário. (modelo de string literal)
  }
}

const Userwithfullname = getUserwithfullname(user)

console.log(Userwithfullname) // no console irá exibir o nome do usuário, sobrenome e o nome completo
