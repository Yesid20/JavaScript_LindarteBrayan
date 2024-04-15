
document.getElementById('camperForm').addEventListener('submit', function(e) {
    e.preventDefault();

let id = parseInt(document.getElementById('id').value);
let nombres = document.getElementById('nombres').value;
let apellidos = document.getElementById('apellidos').value;
let direccion = document.getElementById('direccion').value;
let acudiente = document.getElementById('acudiente').value;
let contacto = parseInt(document.getElementById('contacto').value);
let riesgo = document.getElementById('riesgo').value;
let estado = document.getElementById('estado').value;

// Crear objeto del trainer 

let camper = {
    "id": id,
    "Nombres": nombres,
    "Apellidos": apellidos,
    "Contacto": contacto,
    "Direccion": direccion,
    "Acudiente": acudiente,
    "Riesgo": riesgo,
    "Estado": estado
};

// Obtener la lista de trainers de localStorage 
let campers = JSON.parse(localStorage.getItem('campers')) || [];
campers.push(camper);

// Guardar la lista actualizada 
localStorage.setItem('campers', JSON.stringify(campers));

// Redirigir a la página principal 

window.location.href= 'index.html';

});