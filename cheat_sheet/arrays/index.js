/*
// Create an array 

//1. new Array()

const fruits = Array('apple', 'banana', 'orange')
console.log(fruits);

//2. Array literal syntax 

const oneNumber = [4]
console.log(oneNumber)

// Accesing array elemnts 

const firstFruit = fruits[0]
console.log(firstFruit)

// Length property

const numberOfFruits = fruits.length;
console.log(numberOfFruits)

//  Mutability se puede modificar

fruits.push('watermelon') //Agrego en la cola o ultima posicion. 
console.log(fruits);

// Inmutability 

const newFruits = fruits.concat(['grape', 'kiwi']);
console.log(fruits)
console.log(newFruits);

// Checking arrays 

const isArray = Array.isArray(fruits)
console.log(isArray)

// Practical exercise: sum all elements of an array 

const numbersArray = [1,2,3,4,5]
let sum = 0;

for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
}

console.log(sum)



let numbers = [4,18,1,62,43]
console.log(numbers);

numbers.push(27);

console.log(numbers)

numbers.pop()
console.log(numbers) 

//Exercise: Managing a Stack 

let bookCart = [];

const add_to_cart_action = 'addToCart';
const remove_from_cart_action = 'removeFromCart';
const view_Cart_Action = 'viewCart';


function viewCart() {
    console.log('Current Cart of Books: ', bookCart);
}

function performCartActions (action, newBook) {
    switch (action) {
        case add_to_cart_action:
            bookCart.push(newBook)
            break;
        case remove_from_cart_action:
            if(bookCart.length === 0){
                console.log('Cart is empty. No books to remove')
            }else {
                const removedBook = bookCart.pop();
                console.log(`Removed book from the cart: ${removedBook}`)
            }
            break;
        case view_Cart_Action:
            viewCart();
            break;
        default:
            console.log("Invalid Action. Please choose a vaid option");
            break;
        }
    }

    performCartActions(add_to_cart_action, 'New money, new poor');
    performCartActions(view_Cart_Action);
    performCartActions(add_to_cart_action, 'New book');
    performCartActions(view_Cart_Action);
    performCartActions(remove_from_cart_action);

    // methods that modify the original array 

    const colors = ['yellow', 'blue', 'red']
    const removedColors = colors.shift();


console.log(colors);
console.log(removedColors);

//unshift() modifica o muta el valor del primer elemento 

const newColors = colors.unshift('green');

console.log(colors);
console.log(newColors);

// Exercise: Managing a Playlist

    function managePlaylist (playlist, newSong){
    playlist.shift();
    playlist.unshift(newSong);
    return playlist; 
}

const initialPlaylist = ['Hp', 'Borre cassetthe', 'thriller']
const newSongToAdd = 'La tiendecita'

const updatedPlaylist= managePlaylist(initialPlaylist, newSongToAdd);

console.log('Inicial playlist: ', initialPlaylist)
console.log('New song to add: ', newSongToAdd)
console.log('Updated playlist: ', updatedPlaylist);



//Methods that modify the original array (Mutability)

const vegetales = ['carrot', 'brocoli', 'spinach', 'tomato'];
const removedVegetables = vegetales.splice(2, 1, 'cucumber', 'onion')

console.log(vegetales);
console.log(removedVegetables);


const numbersi = [1,2,3,4,5];
const reversedNumbersi = numbersi.reverse();

console.log(numbersi);

// sort () with number 

const unsortedNumbers1 = [4,18,1,10,62,34]
const unicodeSortedNumbers = unsortedNumbers1.sort();

console.log(unsortedNumbers1);
console.log(unicodeSortedNumbers);

const unsortedNumbers2 = [4,18,1,62,34]
const sortedNumbers = unsortedNumbers2.sort((a, b) => a - b)

console.log(sortedNumbers);

//Sort() with strings - UTF-16 (orden por abecedario)

const cities = ['New York', 'Paris', 'Tokyo', 'Londres'];
const sortedCities = cities.sort();

console.log(cities);
console.log(sortedCities);

//fill (i -> el valor que se ingresara, i ->desde que posicion arranca y i -> en que posición finaliza) 
//fill(i) --> si solo ponemos el número a ingresar, entiende que lo modifcara en todas las posiciones.
const ages = [21, 35, 45, 50]
console.log(ages.fill(0, 2, 4));


// map() permite aplicar una función a cada elemento de array y nos arroja un nuevo array 

const figures = [1,2,3,4,5];
const squaredFigures = figures.map(num => num * num);

console.log(figures);
console.log(squaredFigures);

// forEach() itera sobre cada elemento de un array pero sin crear uno nuevo 

const colorin = ['red', 'pink', 'blue']
const iteratedColorin = colorin.forEach(color => console.log(color));

console.log(colorin);
console.log(iteratedColorin);

//Exercise: Fahrenheit to Celsius conversion 

const temperaturesInFahrenheit = [32,68, 95, 104, 212]
const  temperaturesInCelsius = temperaturesInFahrenheit.map(temp => (5/9) * (temp - 32));

console.log('temperatures In Fahrenheit', temperaturesInFahrenheit);
console.log('temperatures In Celsius', temperaturesInCelsius);

// Exercise: Sum of Elements in an array 

const sumita = [1,2,3,4,5];

let add = 0;

sumita.forEach(number => {
    add += number
})

console.log('Array of Numbers:', sumita);
console.log('Sum of numbers: ', add); */

//filter () ayuda a generar un nuevo array con los items que cumplan una condición

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(number => number % 2 === 0)

console.log(numbers);
console.log(evenNumbers);


// reduce () nos ayuda a dar un dato en especifio como la suma de una cantidad de numeros dentro de un array 

let accumulator = 0;

const numbersReduce = [1, 2, 3, 4, 5];

const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(numbersReduce);
console.log(sum);

// reduce () case 2 palabras que se repiten

const words = ['apple', 'banana', 'orange', 'hello', 'bye', 'apple', 'banana'];

const wordFrecuency = words.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++;
    } else {
        accumulator[currentValue] = 1;
    }
    return accumulator;
}, {})

console.log(wordFrecuency)

// Exercise 

const grades = [85, 92, 60, 78, 95, 66, 88, 50, 94];

const passingGrades = grades.filter(grade => grade >= 70)

const averagePassingGrade = passingGrades.reduce((sum, grade) => sum + grade, 0) / passingGrades.length

console.log('Original grades', grades);
console.log('Passing grades',passingGrades);
console.log('Average Passing grade: ',averagePassingGrade);


//find() encuentra el primer item que cumpla con una condición

const multipleOf5 = [5,10,15,20];

const firstNUmberGreaterThan10 = multipleOf5.find(number => number > 10);

console.log(multipleOf5);
console.log(firstNUmberGreaterThan10);

//findIndex()// pasa la posicion del primer elemento que pase la condición.

const randomNumber = [6,14,27,56,40]
const indexNumber = randomNumber.findIndex(number => number > 50);


console.log(randomNumber);
console.log(indexNumber);

// Exercise verification 

const winningParticipants = [ 
    {id: 1, name: 'Jennifer', ticketNumber: 1},
    {id: 8, name: 'Michael', ticketNumber: 8},
    {id: 15, name: 'Emily', ticketNumber: 15},
    {id: 47, name: 'Charlie', ticketNumber: 47}
]

function findWinnerBYname (name) {
    const winner = winningParticipants.find(participants => participants.name === name)
    return winner || 'No hay ganador con ese nombre';
}

function findIndexWinnerByTicket (ticket) {
    const index = winningParticipants.findIndex(participants => participants.ticketNumber === ticket)
    return index !== -1 ? index : 'No hay ganador con ese número de ticket ';
}

function displayWinnerInformation (winner) {
    if(winner !== undefined && winner != null && winner !== 'No hay ganador con esos datos'){
        console.log('El Ganador es', winner ,'con el numero de ticket')
    } else {
        console.log('No hay ganador')
    }
}

const winnerByname = findWinnerBYname('Emily');
const indexWinnerByTicket = findIndexWinnerByTicket(47);

displayWinnerInformation(winnerByname);
console.log('Index of winner by ticket number: ', indexWinnerByTicket);


// Exercise: transaction analysis

const transactions = [
    {
        id: 1, description: 'Grocery Shopping', amount: -50
    },
    {
        id: 2, description: 'Salary Deposit', amount: 2000
    },
    {
        id: 3, description: 'Utility Bill payment', amount: -100
    },
    {
        id: 4, description: 'Online purchase', amount: -30
    }
]

//Calculate total balance 

const totalBalance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0)
console.log('Total balance: ',totalBalance);

//2. find the largest Transaction (Income or expense)

const largestTransaction = transactions.reduce((maxTransaction, transaction) => {
    return Math.abs(transaction.amount) > Math.abs(maxTransaction.amount) ? transaction : maxTransaction;
}, transactions[0]);

console.log('Largest transaction: ', largestTransaction)


// 3. Filter Purchase Transactions 

const  purchaseTransactions = transactions.filter(transaction => transaction.amount < 0)
console.log(purchaseTransactions);

//4. Find a transaction by Description 

const specifcTransaction = transactions.find(transaction => transaction.description === 'Online purchase')
console.log(' Specific Transaction: ',specifcTransaction)

//5. Find the index or a transaction by amount 

const indexTransaccionWithAmount = transactions.findIndex(transaction => transaction.amount === -30)
console.log('Index Transaction With Amount -30: ', indexTransaccionWithAmount)

//6. Update Transaction Descriptions 

transactions.forEach(transaction => {
    if (transaction.amount < 0) {
        transaction.description = `Expense: ${transaction.description}`
    }else {
        transaction.description = `Income: ${transaction.description}`
    }
})
console.log('Updated transactions: ', transactions)