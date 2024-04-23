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
                        <ul class="list-group">
                            ${data['films'].map(alias => `<li class="list-group-item">${alias}</li>`).join('')}
                        </ul>
                        <p class="card-text">Species: ${data.species}</p>
                        <p class="card-text">Vehicles: ${data.vehicles}</p>
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
        })
        .catch(error => {
            console.error('Error al obtener datos del personaje:', error);
        });
}
