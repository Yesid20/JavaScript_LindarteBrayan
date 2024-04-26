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
                    <th scope="col">Starships</th>
                    <th scope="col">Created</th>
                    <th scope="col">Edited</th>
                    <th scope="col">Url</th>
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
                    <td id="starshipsInfo"></td>
                    <td>${data.created}</td>
                    <td>${data.edited}</td>
                    <td>${data.url}</td>
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

            // Realiza una solicitud a las species 
            fetch(data.species[0])
                .then(response => response.json())
                .then(specieData => {
                    const speciesInfo = document.getElementById('speciesInfo');
                    // Construye la informaciòn de los vehicles
                    const specieInfo = `
                <p>Name:${specieData.name}</p>
                <p>Classification:${specieData.classification}</p>
                <p>Designation:${specieData.designation}</p>
                <p>Average_height:${specieData.average_height}</p>
                <p>Skin_color:${specieData.skin_colors}</p>
                <p>Hair_color:${specieData.hair_colors}</p>
                <p>Eye_color:${specieData.eye_colors}</p>
                <p>Average_lifespan:${specieData.average_lifespan}</p>
                <p>Homeworld:${specieData.homeworld}</p>
                <p>Language:${specieData.language}</p>

            `;
                    // Agrega la informacion del planeta al div movies
                    console.log(specieInfo);
                    speciesInfo.innerHTML = specieInfo;
                })
                .catch(error => {
                    console.error('Error fetching  specieInfo:', error);
                });


            // Realiza una solicitud a vehicles
            fetch(data.vehicles[0])
                .then(response => response.json())
                .then(vehicleData => {
                    const vehiclesInfo = document.getElementById('vehiclesInfo');
                    // Construye la informaciòn de los vehicles
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

            // Realiza una solicitud a starships
            fetch(data.starships[0])
                .then(response => response.json())
                .then(starshipData => {
                    const starshipsInfo = document.getElementById('starshipsInfo');
                    // Construye la informaciòn de los starships
                    const starshipInfo = `
                <p>Name:${starshipData.name}</p>
                <p>Model:${starshipData.model}</p>
                <p>Manufacturer:${starshipData.manufacturer}</p>
                <p>Cost_in_credits:${starshipData.cost_in_credits}</p>
                <p>Length:${starshipData.length}</p>
                <p>Max_Atmosphering_Speed: ${starshipData.max_atmosphering_speed}</p>
                <p>Crew: ${starshipData.crew}</p>
                <p>Passengers: ${starshipData.passengers}</p>
                <p>Cargo_capacity: ${starshipData.cargo_capacity}</p>
                <p>Consumables: ${starshipData.consumables}</p>
                <p>Hyperdrive_rating: ${starshipData.hyperdrive_rating}</p>
                <p>Mglt: ${starshipData.MGLT}</p>
                <p>Starship_class: ${starshipData.starship_class}</p> 
            `;
                    // Agrega la informacion de star
                    starshipsInfo.innerHTML = starshipInfo;
                })
                .catch(error => {
                    console.error('Error fetching  starships:', error);
                });






        })

}