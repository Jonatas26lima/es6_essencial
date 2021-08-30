/* exemplo de uma função normal

function soma(a, b){
  return a + b;
}

console.log(soma(2, 2));
console.log(soma(2, 3));
console.log(soma(2, 4));
console.log(soma(2, 5)); 

*/

/* funcao utilizando a tecnica de currying */

function soma(a){ //cri-se uma função com 1(um) parâmetro
  return function(b){ // essa função retorna uma nova função com um 2º parametro (b)
    return a + b ; // então esse será o comportamento dos parametros recebidos
  }
}

const soma2 = soma(2); // cria-se uma variavel recebendo o valor de soma(a) da primeira função. no exemplo atribui-se o valor de (2)

// com o valor da variavel adicionado na memória, agora é só determinar o valor da function(b).
//no exemplo retornaremos a soma das 2 funções
console.log(soma2(2));  // soma de (2 ,2)  resultado da soma // 4                        
console.log(soma2(3));  // soma de (2 ,3)  resultado da soma // 5
console.log(soma2(4));  // soma de (2 ,4)  resultado da soma // 6
console.log(soma2(5));  // soma de (2 ,5)  resultado da soma // 7