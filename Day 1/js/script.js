a=10;
b=7;
console.log(a+b);




// ***************************  BUCLE FOR **************************

arreglo=[123,"pedro",true]
console.log(arreglo.length);

tamano = arreglo.length;

for (let i=0; i < tamano; i++) {
    console.log(arreglo[i])
}


// *************************** Ejercicio en clase ********************* 

function conver(celsius) {
    return (celsius * 1.8) + 32;
}

let celsius = 25;
let fahrenheit = conver(celsius);
console.log("Los grados Fahrenheit son " + fahrenheit);

// ** FUNCION SIN RETORNO Y SIN PARAMETROS **
function funcionNormal(){
    console.log("Mi función");
}

// ** FUNCION SIN RETORNO Y CON PARAMETROS **
function suma(a,b){
    console.log(a+b);
}
// ** FUNCION CON RETORNO Y CON PARAMETROS **
function sumaR(a,b){
    //console.log(a+b);
    return a+b;
}
// ** FUNCION CON RETORNO Y SIN PARAMETROS **
function salonFavorito(){
    //console.log(a+b);
    return "P1";
}