const isActive = true; //Nombre de variable tipo pregunta 
const hasPermisson = false; //Buena practica para saber variables con booleanos

//Conversion implícita 
const result = 5 > 3
console.log(result)


const name = 'Campus';
console.log(!!name)

//Conversion explicita

const value = 0;
const otherValue = -10;
const explicitBoolean = Boolean(otherValue);
console.log(explicitBoolean); 

// Null

const snoopy = null
console.log(snoopy);
console.log(typeof snoopy);

// Undefined No se asigna
let name2 
console.log(name2)

//Symbol  Es unico, no se puede repetir y
const uniqueId = Symbol('id');
const symbol1 = Symbol('1')
const symbol2 = Symbol('1')
console.log(symbol1 === symbol2)

const ID = Symbol('id')
let user = {}
user[ID] = '1234';
console.log(user);

//BigInt 

const bigNumber = 348138138344381687317337431n
console.log(bigNumber)

const numberOfParticlesInTheUniver = 10000000000000000000000000n
console.log(numberOfParticlesInTheUniver)