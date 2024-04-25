function fetchStarWars() {
    const starId = document.getElementById('starId').value;
    fetch(`https://swapi.py4e.com/api/people/${starId}`)
        .then(response => response.json())
        .then(data => {
            const starWarInfo = document.getElementById('starWarInfo');
            starWarInfo.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h2 class="card-title">${data.name}</h2>
                        <p class="card-text">Height: ${data.height}</p>
                        <p class="card-text">Hair_color: ${data['hair_color']}</p>
                        <p class="card-text">Skin_color: ${data['skin_color']}</p>
                        <p class="card-text">Eye_color: ${data['eye_color']}</p>
                        <p class="card-text">Birth_year: ${data['birth_year']}</p>
                        <p class="card-text">Gender: ${data.gender}</p>
                        <p class="card-text">Homeworld:</p>
                        <div id="homeworldInfo"></div> <!-- Aquí se mostrará la información del planeta -->
                        <div id="filmsInfo"></div> <!-- Aquì se mostrarà la informaciòn del planeta -->
                        <div id="speciesInfo"></div> <!-- Aquì se mostrara la informaciòn del planeta -->
                        <div id="vehiclesInfo"></div> <!-- Aquì se mostrara la informaciòn del planeta -->
                        <p class="card-text">Starships: ${data.starships}</p>
                        <p class="card-text">Created: ${data.created}</p>
                        <p class="card-text">Edited: ${data.edited}</p>
                        <p class="card-text">Url: ${data['url']}</p>
                    </div>
                </div>`;

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
                    console.log(filmInfo);
                    filmsInfo.innerHTML = filmInfo;
                })
                .catch(error => {
                    console.error('Error fetching  film:', error);
                });

            // Realiza una solicitud a las movies 
            fetch(data.species[0])
            .then(response => response.json())
            .then(specieData => {
                const speciesInfo = document.getElementById('speciesInfo');
                // Construye la informaciòn de las movies
                const specieInfo = `
                    <p>Name:${specieData.name}</p>
                    <p>Episode:${specieData.classification}</p>
                    <p>Director:${specieData.designation}</p>
                    <p>Producer:${specieData.average_height}</p>
                    <p>Release Date:${specieData.skin_colors}</p>
                `;
                // Agrega la informacion del planeta al div movies
                console.log(specieInfo);
                speciesInfo.innerHTML = specieInfo;
            })
            .catch(error => {
                console.error('Error fetching  specie:', error);
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