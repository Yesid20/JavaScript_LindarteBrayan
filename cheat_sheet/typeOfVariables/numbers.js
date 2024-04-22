//Tipo entero y decimal 

const entero = 10;
const decimal = 3.1415;
console.log(typeof entero, typeof decimal)  

//Notación científica 
const científica = 5e4

// Infinitos y NaN 
const infinito = Infinity;
const NoEsUnNumero = NaN;

//Operaciones aritméticas 

// Suma, Resta, Multipli, Division 

const addition = 3 + 6;
const subtraction = 4 - 2;
const multiplication = 3 * 3;
const division = 8 / 2;

// Modulo y exponenciación 

const modulo = 15 % 8 ; //Saber si un número es multiplo de otro
const exponenciación = 4 ** 2;

// Precisión

const resultado = 0.1 + 0.2
console.log(resultado)
console.log(resultado.toFixed(1))//Que tantos valores despues del punto queremos
console.log(resultado === 0.3) //Comprueba si los argumentos son igual en numero(en este caso ) y tipo 

// Operaciones Avanzadas 

const raizCuadrada = Math.sqrt(16); //Quisieramos saber raiz cuadrada
const valorAbsolut = Math.abs(-5); // Valor absoluto de un negativo o cualquier numero. 
const aleatorio = Math.random();
console.log(raizCuadrada);
console.log(valorAbsolut);
console.log(aleatorio); 



