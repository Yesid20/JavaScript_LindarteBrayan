
document.getElementById('trainerForm').addEventListener('submit', function(e) {
    e.preventDefault();

let id = parseInt(document.getElementById('id').value);
let nombres = document.getElementById('nombres').value;
let apellidos = document.getElementById('apellidos').value;
let contacto = parseInt(document.getElementById('contacto').value);
let grupo = document.getElementById('grupo').value;
let areaEntrenamiento = document.getElementById('area-entrenamiento').value;
let time = document.getElementById('time').value;

// Crear objeto del trainer 

let trainer = {
    "id": id,
    "Nombres": nombres,
    "Apellidos": apellidos,
    "Contacto": contacto,
    "Horario": {
        "Grupo": grupo,
        "Area_Entrenamiento": areaEntrenamiento,
        "Time": time
    }
};

// Obtener la lista de trainers de localStorage 
let trainers = JSON.parse(localStorage.getItem('trainers')) || [];
trainers.push(trainer);

// Guardar la lista actualizada 
localStorage.setItem('trainers', JSON.stringify(trainers));

// Redirigir a la página principal 

window.location.href= 'index.html';

});