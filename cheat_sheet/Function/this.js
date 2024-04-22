//Identificador THIS (Nos ayuda a saber de donde puede ser cada caracteristica)
//.call (nuevoObject) un metodo que nos ayuda agregar nuevos items en un objeto 

//Enlace Implícito ' implicit binding

const house = {
    dogName: 'fico',
    dogGreeting: function () {
        console.log(`Hi, I'm ${this.dogName}`)
    }
}

house.dogGreeting() // Hi, I'

//Enlace explícito ' explícit binding

function dogGreeting () {
    console.log(`Hi, I'm ${this.dogName}`)
}

const newHouse = {
    dogName: 'valverde',
}

dogGreeting.call(newHouse);

function newDogGreeting (owner, address) {
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`)
}

const owner = 'Lucy';
const addrees = 'Aveniu 456';
newDogGreeting.call(newHouse, owner, addrees)



