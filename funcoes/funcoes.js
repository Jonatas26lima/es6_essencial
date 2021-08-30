/* funcoes de primeira classe */

function getName(){
  return "jonatas lima" ;
}

function logFn(Fn) { // função recebe uma função por parâmetro (Fn);
 console.log(Fn()); // aplica o resultado do retorno da função(Fn)
}

const logFnResult = logFn; // atribuição da função para uma variável;

const obj = {
  logFn: logFn // atribuição para um objeto;
}

const arr = [logFn]; // atribuição para um array;

logFnResult(getName);
