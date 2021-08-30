// declaração clássica de função
function fn(){
  return 'code here';
}

// declaração no ES6 = arrow function
const arrowfn = () => 'code here'; // em casos de expressões simples, return é implícito
const arrowfn = () => {
  //Mais de um expressão por exemplo:
  // if, for, while, declaração de variável..etc
  return 'code here'; // nesse caso é obrigatório o return
}

//Funcções tambem são objetos
fn.prop = 'posso criar objetos';
console.log(fn());
console.log(fn(prop));

//Receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());
logFnResult(fn);

// receber e retornar funções
const controlFnExec = fnParam => allowed => {
  if (allowed) {
    fnParam();
  }
}
const handleFnExecution = controlFnExec(fn);
handleFnExecution(true); //executa a função fn
handleFnExecution(); // não executará a função fn

//mesmo exemplo anterior em formato de função clássica
function handleFnExecution(fnParam){
  return function(allowed) {
    if (allowed) {
      fnParam();
    }    
  }
}