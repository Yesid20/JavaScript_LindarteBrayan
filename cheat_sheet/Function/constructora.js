//Convencion De Nomenclatura está funcion debe iniciar con su primera letra en Mayuscula.


const personalizedMessage = () => 'Goodbye everybody :)'


function Rocket (name, ownMessage) {
    this.name = name;
    this.launchMessage = ownMessage
}

const falcon9Rocket = new Rocket ('Falcon 9', personalizedMessage);
const falconHeavyRocket = new Rocket('Falcon Heavy', personalizedMessage);

console.log(falcon9Rocket.name);
console.log(falcon9Rocket.launchMessage());


const RocketWithArrowFunction = (name, ownMessage) => ({
    name2: name,
    launchMessage: ownMessage
})

const personalizedMessageForArrowFunction = () => 'Sucess loading :)'
const falcon9Rocket1 = RocketWithArrowFunction('Falcon 9', personalizedMessageForArrowFunction );

console.log(falcon9Rocket1.name2);
console.log(falcon9Rocket1.launchMessage())

