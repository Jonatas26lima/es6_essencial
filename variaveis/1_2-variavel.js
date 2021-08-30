var test = 'exemplo'; //declaramos uma variavel em escopo global

(() => {
  console.log(`valor dentro da função "${test}"`);// criamos um console na primeira linha da função para sabermos o nome. irá retornar undefined
  
  if (true){ // dentro do if, declaramos novamente a função
    var test = 'exemplo'; //declaração da função
    console.log(`Valor dentro do if "${test}"`); // retorna o valor true 
  }

  console.log(`VAlor apos a execucao do if "${test}"`); // retorna o valor "exemplo" depois de executar o if
})();

