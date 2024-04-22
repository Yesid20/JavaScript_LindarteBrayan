function calculatePrice(price, discountPercentage){
    const discount = (price * discountPercentage) /100;
    const priceWithDiscount = price - discount;

    return  priceWithDiscount;

}

const originaPrice = 100;
const  discountPercentage = 20;
const finalPrice = calculatePrice(originaPrice,discountPercentage);
console.log('Original Price: $' + originaPrice);
console.log('Discount: ' + discountPercentage + '%');
console.log('Price with discount: $' + finalPrice);

//Capacidades de las funciones al igual que otros objetos 

//1. Pasar funciones como argumentos -> callback
/*
function a () {};
function b (a) {};
b(a)

// Retornar funciones 
function a () {
    function b() {}
    return b 
}

// Asignas funciones a variables -> Expresión de función 
const a = function(){};

// Tener propiedades y metodos

function a () {};
const obj = {};
a.call(obj); // Llamada de la funcion y . para agregar un método

// Anidar funciones -> Nested functions

function a () {
    function b() {
        function c() {

        }
        c();
    }
    b();
}
a();
*/

// Almacenar funciones en objetos?

const rocket = {
    name: 'Falcone 8',
    launchMessage: function launchMessage () {
        console.log('The rocket is  being launched');
    }
}

rocket.launchMessage(); //Llamar al objeto y el . para la funcion  que se encuentra dentro del Objeto</s
//Esto es conocido como metodo.


//Funciones puras  o sin efectos secundarios

//Side effects 
//1.Modificar variables globales
//2.Modificar parámetros
//3.Solicitudes HTTP  (peticiones)
//4.Imprimir mensajes en pantalla y/o consola.
//5.Manipulación del DOM. 
//6.Obtener hora actual 

function add(a, b) {
    return (a + b);
}

//Funcion Impura

function add(a, b) {
    console.log('A: ', a)
    return (a + b);
}

let total = 0;

function addWithSideEffect (a) {
    total +=  a;
    return total;
}

// Función pura

function square(x){
    return x * x;
}

function addTen (y) {
    return y + 10;
}

const number = 5;
const finalResult = addTen(square(number));
console.log(finalResult); 

