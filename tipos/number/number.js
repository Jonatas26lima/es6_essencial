const myNumber = 12.0856

//Transforma numero para string
const numberASstring = myNumber.toString()
console.log('numero transformado em string: ', typeof numberASstring)

// Retorna numero com casas decimais
const numberTwodecimal = myNumber.toFixed(2)
console.log('\nNumero com 2 casas decimais: ', numberTwodecimal)

//transforma uma string em float
console.log('\nString parseada em float: ', parseFloat(15.22))

//transforma uma string em int
console.log('\nString parseada em int: ', parseInt(12.22))
