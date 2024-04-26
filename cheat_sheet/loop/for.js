//For estructura normal 
//for (variable ; condicion  ; incremento) {
    //Cuerpo del bucle.
//}


let food = ['dog', 'hamburguer', 'fries', 'ice', 'coffee'];


for (let i = 0; i < food.length ; i++){
    console.log(food[i]);
}

//forEach 
//array.forEach((item) =>{
//    código a ejecutar
//})

let list = ["eat", "sleep", "code", "repeat"];

list.forEach((item) => {
    console.log(item);
})

/* 
Objetos iterables (arrays, strings[lista,de,algo])

for(variable of objeto) {
    código 
} 
*/

let canasta = ['apple', 'pera', 'orange', 'uva'];

for (fruta of canasta) {
    console.log(fruta +' es una fruta');
} 

/* 
(uso exclusivo de objetos innumerables(estructura de datos, que cuenta con llave - valor))

for (llave in objeto) {
    código a ejecutar
} 

*/

const listaDeCompras = {
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva: 1
}

for (fruta in listaDeCompras){
    console.log(fruta)
}//solo imprime las llaves no valor 

for (fruta in listaDeCompras) {
    console.log(`${fruta} : ${listaDeCompras[fruta]}`);
}