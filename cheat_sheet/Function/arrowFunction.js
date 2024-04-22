const greeting = function (name) {
    return `Hi, ${name}`;
}
//Arrow function explicit return
const newGreeting = (name2) => {
    return `Hi, ${name2}, how are you?`;
}

//Arrow function - implicit return 

const newGreetingImplicit = name3 => `HI, ${name3}`;
const newGreetingImplicitWithTwoParameters = (name4, lastName) => `Howdy, ${name4, lastName}`;

//Lexical Binding 

const functionalCharacter = {
    name5: 'Uncle Ben',
    messageWithTradicionalFunction: function (message) {
        console.log(`${this.name5} says: ${message}`);
    },
    messageWithArrowFunction: (message) => {
        console.log(`${this.name5} says: ${message}`);
    }
}
functionalCharacter.messageWithTradicionalFunction('With great power comes freat responsability.');
functionalCharacter.messageWithArrowFunction('Beware of Doctor Octopus.');

