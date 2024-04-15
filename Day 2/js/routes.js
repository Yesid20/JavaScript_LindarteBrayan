
document.getElementById('routesForm').addEventListener('submit', function(e) {
    e.preventDefault();

let id = parseInt(document.getElementById('id').value);
let titulo = document.getElementById('titulo').value;
let concepto = document.getElementById('concepto').value;
let concepto_2 = document.getElementById('concepto_2').value;
let concepto_3 = document.getElementById('concepto_3').value;

// Crear objeto de las rutas

let route = {
    "id": id,
    "Titulo": titulo,
    "concepto": concepto,
    "concepto_2": concepto_2,
    "concepto_3": concepto_3
};

// Obtener la lista de trainers de localStorage 
let routes = JSON.parse(localStorage.getItem('routes')) || [];
routes.push(route);

// Guardar la lista actualizada 
localStorage.setItem('routes', JSON.stringify(routes));

// Redirigir a la página principal 

window.location.href= 'index.html';

});