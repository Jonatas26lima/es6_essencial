/* hoistimg de variaveis 

function fn(){
  console.log(text);

  let text = 'exemplo';

  console.log(text);
}

fn();

*/


/* hoisting de função */

function fn(){
  log('hoisting de função');

  function log(value){
    console.log(value);
  }
}

fn();

// caso queira um texto mais aprofundado acesse:
// https://developer.mozilla.org/pt-BR/docs/Glossary/Hoisting