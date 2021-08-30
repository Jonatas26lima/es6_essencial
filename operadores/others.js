// unários

//deletar algo
delete something;

// Determinar tipo
typeof something; 

/*--------------------- */

//Binários

//IN
something in somethingItems

//Arrays
var arvores = new array ('pau brasil', 'loureiro', 'cedro', 'carvalho', 'sicômoro');

0 in arvores  // retorna true    
3 in arvores // retorna true
6 in arvores // RETORNA false

'cedro' in arvores // retorna false (deve-se especificar o numero do indice não o valor naquele indice)
'length' in  arvores // retorna true (length é uma propriedade de array)

// Objetos predefinidos
'PI' in Math; // retorna true
var minhaString = new String ("coral");
'length' in minhaString; // retorna true


// objetos personalizados
var meuCarro = {marca: 'Honda', modelo: 'Accord', ano:'1998'};
'marca' in meuCarro // retorna true
'modelo' in meuCarro // retorna true

//instaceof

objeto instanceof tipoObjeto

var dia = new Date(2018, 12, 17);

if (dia instanceof Date){
  //code here
}

