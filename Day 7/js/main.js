function fetchSuperHero() {
    const heroId = document.getElementById('heroId').value;
    fetch(`https://www.superheroapi.com/api.php/ef41bedfe806af49f8bb2e468f225944/${heroId}`)
    .then(response => response.json())
    .then(data => {
        const superHeroInfo = document.getElementById('superHeroInfo');
        superHeroInfo.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h2 class="card-title">${data.name}</h2>
                    <p class="card-text">Alter egos: ${data.biography['alter-egos']}</p>
                    <p class="card-text">Aliases:</p>
                    <ul class="list-group">
                        ${data.biography.aliases.map(alias => `<li class="list-group-item">${alias}</li>`).join('')}
                    </ul>
                    <p class="card-text">Place of birth: ${data.biography['place-of-birth']}</p>
                </div>
            </div>
        `;
    })
    .catch(error => console.error('Error fetching superhero:', error));
}
