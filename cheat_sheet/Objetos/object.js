/* let persona = {
    name: "Brayan",
    lastName: "Lindarte",
    age: 23,
}

//Modelo para crear nuevos objetos
function Persona(name,lastName,age){
    this.name = name;
    this.lastName= lastName;
    this.age = age;
}
//Haciendo uso del objeto, para crear uno nuevo se utiliza la palabra reservada "new"
const persona1 = new Persona("Juan", "Perez", 30);
//Se utiliza para agregar una nueva propiedad a un object en especifico 
persona1.nationality = "Colombovenezolano";

const persona2 = new Persona("Felipe", "Rota", 25);

// Agregar una nueva propiedad para todos los nuevos objetos 
Persona.prototype.saludar = function (){
    console.log(`Hola, me llamo ${this.name} ${this.lastName}`)
};

//Uso de class 

class Personita {
    constructor(namee, agee) {
        this.namee = namee;
        this.agee = agee;
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.namee} y tengo ${this.agee} years old.`)
    }
}


const personaOne = new Personita("Calamardo", 48);

personaOne.saludar(); 


// Clases y funciones constructoras generan moldes y/o nuevos prototipos 

class Animal {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    emitirSonido(){
        console.log("El animal emite un sonido")
    }
}

//Herencia para acceder a ciertas propiedas 

class Perro extends Animal{
    constructor(name, type, raza) {
        super(name, type); // super palabra reservada para traernos la herencia de la class Animal
        this.raza = raza;
    }
    emitirSonido () {
        console.log("El perro ladra");
    }
    correr() {
        console.log(`${this.name} corre alegremente`)
    }
}


const perro1 = new Perro("Firulais", "Perro", "Pug");

console.log(perro1);
perro1.correr() // Llamo el metodo que está dentro del nuevo objeto 

perro1.emitirSonido(); 

perro1.newMethod = function (){
    console.log("This is a method")
}
//Prototype crea en una nueva clase constructoras y funciones constructoras, NO funciona en instancias
Perro.prototype.secondMethod = function() {
    console.log("Es otro nuevo metodo");
}

///////////////////////////////////////////


this -- class

this --- object -- class 

class Persona {
    constructor(name, age){
        this.name = name;
        this.age = age;  //This hace referencia al objeto Persona
    }
}

const person1 = new Persona("alice", 25)

console.log(person1);


persona1.newMethod = function() {
    console.log(`Mi nombre es: ${this.name}`)
}  */


const usersDataBase = [
    {
        username: "andres",
        password: "123"
    },
    {
        username: "caro",
        password: "456"
    },
    {
        username: "mariana",
        password: "789"
    }
]

const usersTimeLine = [
    {
        username: "Estefany",
        timeline: "Me encanta JavaScript!"
    },
    {
        username: "Oscar",
        timeline: "Bebeloper es lo mejor!"
    },
    {
        username: "Mariana",
        timeline: "A mi me gusta más el café que el té"
    },
    {
        username: "Andres",
        timeline: "I dont want to work today"
    }
]

const username = prompt("Which are your user?");
const password = prompt("Which are your password?");

function userExisting(username, password) {
    for (let i = 0; i < usersDataBase.length; i++) {
        if(
            usersDataBase[i].username === username && 
            usersDataBase[i].password === password
        ) {
            return true;
        } else {
            continue;
        }
    }
}

function signIn(username, password) {
    if(userExisting(username, password)){
        alert(`Bienvenido a tu cuenta ${username}`);
        console.log(usersTimeLine);
    }else {
        alert("Uups, usuario o contraseña incorrectos.")
    }
}

signIn(username, password);
