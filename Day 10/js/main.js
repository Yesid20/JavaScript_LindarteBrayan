function fetchStarWars() {
    const starId = document.getElementById('starId').value;
    fetch(`https://swapi.py4e.com/api/people/${starId}`)
        .then(response => response.json())
        .then(data => {
            const starWarTable = document.getElementById('starWarTable');
            starWarTable.innerHTML = `
            <table class="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Height</th>
                    <th scope="col">Hair_color</th>
                    <th scope="col">Skin_color</th>
                    <th scope="col">Eye_color</th>
                    <th scope="col">Birth_year</th>
                    <th scope="col">Genero</th>
                    <th scope="col">Homeworld</th>
                    <th scope="col">Films</th>
                    <th scope="col">Species</th>
                    <th scope="col">Vehicles</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${data.name}</td>
                    <td>${data.height}</td>
                    <td>${data['hair_color']}</td>
                    <td>${data['skin_color']}</td>
                    <td>${data['eye_color']}</td>
                    <td>${data['birth_year']}</td>
                    <td>${data.gender}</td>
                    <td id="homeworldInfo"></td>
                    <td id="filmsInfo"></td>
                    <td id="speciesInfo"></td>
                    <td id="vehiclesInfo"></td>
                </tr>
            </tbody>
        </table>`;

            // Realiza una solicitud al planeta (homeworld)
            fetch(data.homeworld)
                .then(response => response.json())
                .then(homeworldData => {
                    const homeworldInfo = document.getElementById('homeworldInfo');
                    // Construye la información del planeta
                    const planetInfo = `
                        <p>Name: ${homeworldData.name}</p>
                        <p>Rotation Period: ${homeworldData.rotation_period}</p>
                        <p>Orbital Period: ${homeworldData.orbital_period}</p>
                        <p>Diameter: ${homeworldData.diameter}</p>
                        <p>Climate: ${homeworldData.climate}</p>
                        <p>Gravity: ${homeworldData.gravity}</p>
                        <p>Terrain: ${homeworldData.terrain}</p>
                        <p>Surface Water: ${homeworldData.surface_water}</p>
                        <p>Population: ${homeworldData.population}</p>
                        <!-- Agrega aquí más información si es necesario -->
                    `;
                    // Agrega la información del planeta al div homeworldInfo
                    homeworldInfo.innerHTML = planetInfo;
                })
                .catch(error => {
                    console.error('Error al obtener datos del planeta:', error);
                });
            // Realiza una solicitud a las movies 
            fetch(data.films[0])
                .then(response => response.json())
                .then(filmData => {
                    const filmsInfo = document.getElementById('filmsInfo');
                    // Construye la informaciòn de las movies
                    const filmInfo = `
                        <p>Title:${filmData.title}</p>
                        <p>Episode:${filmData.episode_id}</p>
                        <p>Director:${filmData.director}</p>
                        <p>Producer:${filmData.producer}</p>
                        <p>Release Date:${filmData.release_date}</p>
                    `;
                    // Agrega la informacion del planeta al div movies
                    filmsInfo.innerHTML = filmInfo;
                })
                .catch(error => {
                    console.error('Error fetching  film:', error);
                });

            // Realiza una solicitud a las species 
            // Obtener información de todas las películas
            Promise.all(data.films.map(filmUrl => fetch(filmUrl).then(response => response.json())))
                .then(films => {
                    const filmsInfo = films.map(film => `
                        <p>Title: ${film.title}</p>
                        <p>Episode: ${film.episode_id}</p>
                        <p>Director: ${film.director}</p>
                        <p>Producer: ${film.producer}</p>
                        <p>Release Date: ${film.release_date}</p>
                         `).join('');
                    document.getElementById('filmsInfo').innerHTML = filmsInfo;
                })
                .catch(error => {
                    console.error('Error al obtener datos de las películas:', error);
                });

            // Realiza una solicitud a las movies 
            fetch(data.vehicles[0])
                .then(response => response.json())
                .then(vehicleData => {
                    const vehiclesInfo = document.getElementById('vehiclesInfo');
                    // Construye la informaciòn de las movies
                    const vehicleInfo = `
                    <p>Name:${vehicleData.name}</p>
                    <p>Model:${vehicleData.model}</p>
                    <p>Manufacturer:${vehicleData.manufacturer}</p>
                    <p>Cost_in_credits:${vehicleData.cost_in_credits}</p>
                    <p>Length:${vehicleData.length}</p>
                `;
                    // Agrega la informacion del planeta al div movies
                    console.log(vehicleInfo);
                    vehiclesInfo.innerHTML = vehicleInfo;
                })
                .catch(error => {
                    console.error('Error fetching  vehicle:', error);
                });
        })

}