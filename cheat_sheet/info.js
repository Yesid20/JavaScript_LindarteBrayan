<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API CRUD Example</title>
</head>
<body>
    <h1>API CRUD Example</h1>
    
    <h2>Create</h2>
    <input type="text" id="createInput">
    <button onclick="createItem()">Create</button>
    
    <h2>Read</h2>
    <ul id="itemList"></ul>
    
    <h2>Update</h2>
    <input type="text" id="updateInput">
    <button onclick="updateItem()">Update</button>
    
    <h2>Delete</h2>
    <input type="text" id="deleteInput">
    <button onclick="deleteItem()">Delete</button>

    <script>
        // Función para obtener todos los elementos de la API
        function getItems() {
            fetch('https://tu-api.com/items')
            .then(response => response.json())
            .then(data => {
                const itemList = document.getElementById('itemList');
                itemList.innerHTML = '';
                data.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item.name;
                    itemList.appendChild(li);
                });
            });
        }

        // Función para crear un nuevo elemento en la API
        function createItem() {
            const inputValue = document.getElementById('createInput').value;
            fetch('https://tu-api.com/items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: inputValue })
            })
            .then(response => response.json())
            .then(data => {
                getItems();
                document.getElementById('createInput').value = '';
            });
        }

        // Función para actualizar un elemento de la API
        function updateItem() {
            const inputValue = document.getElementById('updateInput').value;
            fetch('https://tu-api.com/items/1', { // Debes proporcionar el ID del elemento que quieres actualizar
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: inputValue })
            })
            .then(response => response.json())
            .then(data => {
                getItems();
                document.getElementById('updateInput').value = '';
            });
        }

        // Función para eliminar un elemento de la API
        function deleteItem() {
            const inputValue = document.getElementById('deleteInput').value;
            fetch('https://tu-api.com/items/1', { // Debes proporcionar el ID del elemento que quieres eliminar
                method: 'DELETE'
            })
            .then(response => {
                getItems();
                document.getElementById('deleteInput').value = '';
            });
        }

        // Al cargar la página, obtener todos los elementos de la API
        getItems();
    </script>
</body>
</html>


<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Formulario de Gestion de Heroes</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="col col-lg-2">
          </div>
          <div class="col-md-auto">
            <div class="card text-bg-light mb-3" style="max-width: 70rem;">
                <div class="card-header">Mis Heroes</div>
                <div class="card-body">
                  <h5 class="card-title">Gestion de Heroes</h5>
            <form>
              <div class="row g-3">
                <div class="col">
                  <label for="nombrePersonaje" class="form-label">Nombre Personaje</label>
                  <input type="text" class="form-control" id="nombrePersonaje">
                </div>
                <div class="col">
                  <label for="nombreActor" class="form-label">Nombre Actor</label>
                  <input type="text" class="form-control" id="nombreActor">
                </div>
              </div>
              <div class="row g-3">
                <div class="col">
                  <label for="edadActor" class="form-label">Edad Actor</label>
                  <input type="text" class="form-control" id="edadActor">
                </div>
                <div class="col">
                  <label for="ubicacion" class="form-label">Ubicacion</label>
                  <input type="text" class="form-control" id="ubicacion">
                  <div id="ubicacionHelp" class="form-text">Nombre de la ciudad de origen.</div>
                </div>
              </div>
              <div class="row g-3">
                <div class="col">
                  <label for="poster" class="form-label">Poster</label>
                  <input type="text" class="form-control" id="poster">
                </div>
                <div class="col">
                  <label for="fecha" class="form-label">Fecha de estreno</label>
                  <input type="date" class="form-control" id="fecha">
                </div>
              </div>
              <button type="submit" class="btn btn-dark">Nuevo Heroe</button>
              <button type="submit" class="btn btn-primary">Guardar Heroe</button>
              <button type="submit" class="btn btn-danger">Cancelar</button>
            </form>
            </div>
        </div>
          </div>
          <div class="col col-lg-2">
          </div>
        </div>
</body>
</html>

