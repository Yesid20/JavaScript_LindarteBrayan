function empezarPartida() {
    document.querySelector('.instrucciones').style.display = 'none';
    document.querySelector('.mesa').style.display = 'block';
    document.querySelector('.cartas').style.display = 'flex';
    document.querySelector('.espacios-vacios').style.display = 'flex';
}

let posicionesOriginales = []; // Almacena las posiciones originales de las cartas


async function obtenerDeckId() {
    try {
        const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
        const data = await response.json();
        const deckId = data.deck_id;
        return deckId;
    } catch (error) {
        console.error('Error al obtener el deck_id:', error);
        return null;
    }
}

async function obtenerCartas(deckId, cantidad) {
    try {
        const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${cantidad}`);
        const data = await response.json();
        const cartas = data.cards.map(carta => ({
            ...carta,
            code: carta.code
        }));
        console.log(cartas);
        return cartas;
    } catch (error) {
        console.error('Error al obtener las cartas:', error);
        return null;
    }
}
function guardarPosicionesOriginales(cartas) {
    posicionesOriginales = cartas.map((carta, index) => ({
        code: carta.code,
        posicion: index
    }));
}

async function mostrarCartas() {
    const deckId = await obtenerDeckId();
    if (!deckId) return;

    const cantidadCartas = 5;
    const cartasOriginales = await obtenerCartas(deckId, cantidadCartas);
    if (!cartasOriginales) return;

    const cartasDiv = document.getElementById('cartas');
    cartasDiv.innerHTML = '';

    cartasOriginales.forEach(carta => {
        const cartaElement = document.createElement('img');
        cartaElement.classList.add('carta');
        cartaElement.src = carta.image;
        cartaElement.dataset.code = carta.code;
        cartasDiv.appendChild(cartaElement);
    });

    guardarPosicionesOriginales(cartasOriginales);

    await new Promise(resolve => setTimeout(resolve, 5000));

    const cartasAleatorias = cartasOriginales.slice().sort(() => Math.random() - 0.5);

    cartasDiv.innerHTML = '';

    cartasAleatorias.forEach(carta => {
        const cartaElement = document.createElement('img');
        cartaElement.classList.add('carta');
        cartaElement.src = carta.image;
        cartaElement.dataset.code = carta.code;
        cartasDiv.appendChild(cartaElement);
    });

    new Sortable(document.querySelector('#cartas'), {
        animation: 150,
        onEnd: function (evt) {
            // Aquí puedes añadir la lógica para verificar si las cartas están en el orden correcto
        }
    });
}

function verificarPosiciones() {
    const cartasDiv = document.getElementById('cartas');
    const cartas = Array.from(cartasDiv.children);

    const posicionesActuales = cartas.map((carta, index) => ({
        code: carta.dataset.code,
        posicion: index
    }));

    let coinciden = true;
    posicionesOriginales.forEach((carta, index) => {
        if (carta.code !== posicionesActuales[index].code || carta.posicion !== posicionesActuales[index].posicion) {
            coinciden = false;
        }
    });

    if (coinciden) {
        alert('¡Felicitaciones! Las cartas están en su posición original.');
    } else {
        alert('Lo siento, las cartas no están en su posición original. Inténtalo de nuevo.');
    }
}
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.mesa').style.display = 'none';
    document.querySelector('.cartas').style.display = 'none';
});

function empezarJuego() {
    empezarPartida();
    mostrarCartas();
    document.getElementById('verificarBtn').style.display = 'block';
}

