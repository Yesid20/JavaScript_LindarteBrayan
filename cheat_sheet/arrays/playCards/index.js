//Exercise: Card Game Implementation 

const deck = ['flecha', 'trebol', 'corazon', 'rombo', 'flecha', 'trebol', 'corazon', 'rombo', 'flecha', 'trebol', 'corazon', 'rombo'];

// Fisher-Yates Algorithm 
function shuffleDeck(){
    for(let i = deck.length - 1; i > 0; i--){
        // [0, i] -> i + 1;
        //[0, i) -> i; 
        //Math.floor recordemos que esto redondea el resultado al numero menor = 4.9 = 4
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]
    }
}

function dealCardss (numCard) {
    const dealCards = deck.splice(0, numCard)
    return dealCards;
}


shuffleDeck();

const player1Hand = dealCardss(3);
const player2Hand = dealCardss(3);
const player3Hand = dealCardss(3);

console.log(player1Hand, 'el juego');
console.log(player2Hand, 'juego de integrante 2');
console.log(player3Hand, 'juego integrante 3');

//github Copilot -> Ia para verificar código 