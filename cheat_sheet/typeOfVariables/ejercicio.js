// Social Media Profile 

//1. User information
const username = 'Yesid23';
const fullName = 'Brayan Lindarte';
const age = 24;
const isCamper = true;

// 2. Address

const address = {
    street: '156 Main Street',
    city: 'Floridablanca',
    state: 'Bucaramanga',
    zipCode: 540001
}

// 3. Hobbies 

const hobbies = ['Coding', 'reading', 'Gaming'];

// 4. Generating Personalized 

const personalizedBio = `Hi, I'm ${fullName}.
I'm ${age} years old.
I live in ${address.city}.
I love ${hobbies.join(', ')}.
follow me for coding adventures!`

// Print the user profile and bio 
console.log(personalizedBio)
