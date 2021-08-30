// retorna o tamanho de uma string
const text = 'texto'.length; //length retorna quantidade de caracteres de uma string
console.log(`quantidade de letras: ${textSize}`); //retorna 5 

// retorna um array quebrando a string por um delimitador indicado no ()
const splittedText = 'texto'.split('x');
console.log('\nArray com as posições separadas pelos delimitador:', splittedText ); // retorna (2) [ "te", "to" ]

// busca um valor e substitui por outro 
const replacedText = 'texto'.replace('texto' , 'testo');
console.log('substituição de valor: ', replacedText); // retorna 'testo'

// retorna a 'fatia' de um valor
const lastchar = 'texto'.slice(-1);
console.log('\nUltima letra de uma string:', lastchar); // retorna 'o' = texto

const allwithoutLastchar = 'texto'.slice(0, -1); // definimos o começo e o final da string
console.log('\nValor da string da primeira letra menos a última:', allwithoutLastchar); // retorna 'text'

const secondToend = 'texto'.slice(1);
console.log('\nValor da string da segunda letra até a última:', secondToend); // retorna 'exto'

// Retorna N caracteres a partir de uma posição
const twoCharsbeforeFirstpos = 'texto'.substr(0, 2); // definimos o começo e a quantidade de caracteres
console.log('\nas duas letras primeiras são:', twoCharsbeforeFirstpos); // retorna 'te'




