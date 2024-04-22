const owner = 'Lucy';
const address = '123 Main'

function dogGreeting (owner, address) {
    console.log(`Hi, I'M ${this.dogName} and I live with ${owner} on ${address}`)
}

const newHouse = {
    dogName: 'Bruno',

}

dogGreeting.call(newHouse, owner, address);

const necessaryValues = [owner, address];
dogGreeting.apply(newHouse, necessaryValues);

const bindingWith = dogGreeting.bind(newHouse, owner, address)
bindingWith();

/* 3 metodos que nos permiten cambiar el
contexto de ejecución. call, apply(los ingresa en un array) o bind.(si necesitamos una función) */
