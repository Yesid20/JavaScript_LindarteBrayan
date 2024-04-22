const first = 'Comillas simples'; //Strings literals
const second = "Comillas dobles"; //Resultados en pantalla se les conoce String values
const three = `Template Literals`;

//Concatenación 

const address = 'Calle 156';
const city = 'Floridablanca';
const addressFull = 'My addrees is full' +  address + city;
console.log(addressFull);

//Concatenación Template 

const name = 'stefany';
const country = 'colombia';
const presentation = `Hola, soy ${name} de ${country}`;
console.log(presentation); 

//Concatenación Join()

const firstpa = 'Me encanta'
const secondpa = 'la gente de '
const thirdpa = 'Mexico'
const think = [firstpa,secondpa,thirdpa];
console.log(think.join('weys'));

//Concatenación concat()

const hobbie1 = 'Correr'
const hobbie2 = 'Leer'
const hobbie3 = 'Cantar'
const hobbies = 'Mis hobbis son: '.concat(hobbie1, ',', hobbie2, ',', hobbie3);
console.log(hobbies);

// Caracteres de escape 
//const wahtDoIDo = 'I'm Software Engineer';

//1. Escape alternativo 
const escapeAlternativo = "I'm Software engineer"
//2. Barra  invertida 
const barraInvertida = 'I\'m Software engineer';
//3. Template literals
const escapeComillaInvertida = `I'm Software Engineer`;
// Escritura Strings Largos
/* 
    Las rosas son verdes,
    Las violetas son amarillas,
    Caracter inesperadom
    En la línea 86.
*/

const poema = 'Las rosas son verdes,\n' +
              'Las violetas son amarillas\n' +
              'Caracter inesperado \n' +
              'En la línea 86.';

console.log(poema)

//Manipulacion String

const stringPrimiti = 'Soy un string primitivo';
console.log(typeof stringPrimiti); //Imprime el tipo de dato 

const stringPrimitiToo = String('Soy otro string primitivo'); //Damos por entendido el tipo de dato que estara dentro de los ()
console.log(stringPrimitiToo);

//String objeto 

const stringObjeto = new String('Soy un string objeto');
console.log(typeof stringObjeto);

// Acceder a caracteres 

const saludo = 'Hi, how do you feel?'

console.log(saludo[2]);
console.log(saludo.charAt(4)) //Devuelve el carácter en la posicion
console.log(saludo.indexOf('o')); //  Devuelve la primera aparición de un element
console.log(saludo.indexOf('feel')); //  Si no encuentra devuelve -1, y si encuentra imprime el número de posición desde donde inicia
console.log(saludo.indexOf('Are')); // Imprimie el número de posicion de la primer letra
console.log(saludo.lastIndexOf( 'y')); // Imprime la ultima posición de adelante hacia atras
console.log(saludo.slice(3, 6)) //(fragmento de caracter primero donde INICIA y luego donde FINALIZA)
console.log(saludo.length); //Imprime el tamaño 
console.log(saludo.toLocaleLowerCase()); // Todas las letras  minúsculas
console.log(saludo.toLocaleUpperCase()); // Todas las letras mayusculas 

const saludoDivid = saludo.split(' ') // Convierte en un array por posiciones cada palabra
console.log(saludoDivid); 
console.log(saludoDivid[1]); // Imprime solo la palabra de la posición que se escriba 

const saludConEspacios = ' Hola Mundo ';
const  saludSinEspacios = saludConEspacios.trim(); // Quita espacios
console.log(saludSinEspacios);

const saludoOrigin = 'Hola Mundo';
const newSalud = saludoOrigin.replace('Mundo', 'moda'); //Reemplaza la palabra que escribimos de primero por la que escribimos seguido de una coma 
console.log(newSalud);
