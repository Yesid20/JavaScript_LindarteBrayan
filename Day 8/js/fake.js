function fetchStarWars() {
    const starId = document.getElementById('starId').value;
    fetch(`https://swapi.py4e.com/api/people/${starId}`)
        .then(response => response.json())
        .then(data => {
            const starWarInfo = document.getElementById('starWarInfo');

            // Función para obtener información del planeta de origen
            function fetchHomeworld() {
                fetch(data.homeworld)
                    .then(response => response.json())
                    .then(homeworldData => {
                        const homeworldName = homeworldData.name;
                        const homeworldPopulation = homeworldData.population;
                        const homeworldInfo = `
                            <p class="card-text">Homeworld: ${homeworldName}</p>
                            <p class="card-text">Population: ${homeworldPopulation}</p>
                        `;
                        starWarInfo.insertAdjacentHTML('beforeend', homeworldInfo);
                    })
                    .catch(error => {
                        console.error('Error fetching homeworld:', error);
                    });
            }

            // Insertar información del personaje
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
                        <ul class="list-group">
                            ${data['films'].map(alias => `<li class="list-group-item">${alias}</li>`).join('')}
                        </ul>
                        <p class="card-text">Species: ${data.species}</p>
                        <p class="card-text">Vehicles: ${data.vehicles}</p>
                        <p class="card-text">Starships: ${data.starships}</p>
                        <p class="card-text">Created: ${data.created}</p>
                        <p class="card-text">Edited: ${data.edited}</p>
                `
        })
}
