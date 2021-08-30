// AND lógico (&&)
exp1 && exp2

var a1 = true && true // T & T RETORNA TRUE
var a2 = true && false // T & F RETORNA FALSE
var a3 = false && true // F & T RETORNA FALS E
var a4 = false && 3 == 4 // F & F RETORNA FALSE
var a5 = 'Gato' && 'Cão' // T & T RETORNA CÃO
var a6 = false && 'Gato' // F & T RETORNA FALSE
var a7 = 'Gato' && false // T & F RETORNA FALSE

// OU (OR)  LÓGICO (||)
exp1 || exp2

var a1 = true || true // T || T RETORNA TRUE
var a2 = false || true // f || t RETORNA true
var a3 = true || false // t || f RETORNA true
var a4 = false || 3 == 4 // F || F RETORNA FALSE
var a5 = 'Gato' || 'Cão' // T || T RETORNA GAto
var a6 = false || 'Gato' // F || T RETORNA Gato
var a7 = 'Gato' || false // T || F RETORNA gato

// NOT lógico (!)
!exp1

var n1 = !true; // !t retorna false
var n2 = !false; //  !f retorna true
var n3 = !'Gato'; // !t retorna false 

// true
' '
1
['teste'];

/*false
""
0
[ ];
!!;
*/
