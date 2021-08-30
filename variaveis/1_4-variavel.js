(() => {
  const  test = 'exemplo' // primeiros declaramos a variavel
  console.log(`valor dentro da função "${test}"`); // console.log do test
  
  if (true){ // dentro do if, declaramos novamente a função
    const test = 'exemplo2'; //declaração da função
    console.log(`Valor dentro do if "${test}"`); // retorna o valor adicionado dentro do escopo no caso "exemplo2" 
  }

  console.log(`VAlor apos a execucao do if "${test}"`); // retorna o valor "exemplo" adicionado no primeiro "const"
})();

