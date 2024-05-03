let heroes = [];

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('hero-form').addEventListener('submit', handleFormSubmit);
    document.getElementById('btn-guardar-heroe').addEventListener('click', guardarHeroe);
    document.getElementById('btn-cancelar').addEventListener('click', cancelar);
    document.getElementById('btn-eliminar').addEventListener('click', eliminar);
    showHeroes();
});

function handleFormSubmit(event) {
    event.preventDefault(); 

    const nombrePersonaje = document.getElementById('nombrePersonaje').value;
    const nombreActor = document.getElementById('nombreActor').value;
    const edadActor = document.getElementById('edadActor').value;
    const ubicacion = document.getElementById('ubicacion').value;
    const poster = document.getElementById('poster').value;
    const fecha = document.getElementById('fecha').value;
    const productora = document.getElementById('productora').value;

    const hero = {
        nombrePersonaje,
        nombreActor,
        edadActor,
        ubicacion,
        poster,
        fecha,
        productora
    };

    // Agrega el héroe a la lista
    heroes.push(hero);
    
    // Guarda la lista actualizada en el almacenamiento local
    saveHeroes();
    
    // Limpia el formulario
    clearForm();
    
    // Muestra los héroes en la página
    showHeroes();
}

// Función para limpiar el formulario después de enviar
function clearForm() {
    document.getElementById('hero-form').reset();
}

// Función para guardar la lista de héroes en el almacenamiento local
function saveHeroes() {
    localStorage.setItem('heroes', JSON.stringify(heroes));
}

// Función para obtener la lista de héroes del almacenamiento local
function getHeroes() {
    const storedHeroes = localStorage.getItem('heroes');
    if (storedHeroes) {
        heroes = JSON.parse(storedHeroes);
    }
}

// Función para mostrar los héroes en la página
function showHeroes() {
    getHeroes();
    const heroList = document.getElementById('hero-list');
    heroList.innerHTML = ''; // Limpiar la lista antes de mostrar los héroes

    // Iterar sobre la lista de héroes y mostrarlos en la página
    heroes.forEach(hero => {
        const listItem = document.createElement('li');
        listItem.textContent = `${hero.nombrePersonaje} - ${hero.nombreActor}`;
        heroList.appendChild(listItem);
    });
}

// Funciones para los botones dentro del formulario
function guardarHeroe(event) {
    event.preventDefault();
    // Lógica para guardar el héroe
}

function cancelar(event) {
    event.preventDefault();
    // Lógica para cancelar
}

function eliminar(event) {
    event.preventDefault();
    // Lógica para eliminar
}
