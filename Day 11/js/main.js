
const find = document.querySelector('.find');
const pok_Num = document.querySelector('.pok_Num');
const pok_Name = document.querySelector('.pok_Name');
const forms = document.querySelector('.forms');
const b_Prev = document.querySelector('.b_Prev');
const b_Next = document.querySelector('.b_Next');
const pok_Img = document.querySelector('.pok_Img');


let init_Pok = 23;

const fetchPokemonInfo = async (pok) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pok}`); // Template literals para agregar la variable de manera dinamica a la URL
    return res.status === 200 ? await res.json() : null; // Uso de ternarios 
};

const getPokemon = async (pok) => {
    pok_Name.innerText = 'Consultando';
    pok_Num.innerText = '';

    pok > 649
        ? (() => {
            pok_Img.style.display = 'none';
            pok_Name.innerText = 'Ese Pokémon esta fuera de su nivel, por ende no se puede mostrar';
            return;
        })()
        : null;

    let data;
    try {
        data = await fetchPokemonInfo(pok);
    } catch (error) {
        console.error('Error fetching pok', error);
        pok_Img.style.display = 'none';
        pok_Name.innerText = 'Error al consultar el Pokémon';
        return;
    }

    if (data) {
        pok_Img.style.display = 'block';
        pok_Name.innerText = data.name;
        pok_Num.innerText = data.id;

        // Verifica si existe una URL de GIF animado en las versiones de sprites de generación V
        pok_Img.src = data.sprites.versions['generation-v'] &&
            data.sprites.versions['generation-v']['black-white'] &&
            data.sprites.versions['generation-v']['black-white']['animated'] &&
            data.sprites.versions['generation-v']['black-white']['animated']['front_shiny'] ?
            data.sprites.versions['generation-v']['black-white']['animated']['front_shiny'] :
            data.sprites.versions['generation-v']['black-white']['front_shiny'] 
            ; // Utiliza la URL de GIF animado si existe, de lo contrario, utiliza una URL de imagen estática por defecto
        find.value = '';
        init_Pok = data.id;
    } else {
        pok_Img.style.display = 'none';
        pok_Name.innerText = 'No encontrado';
    }
};

forms.addEventListener('submit', (event) => {
    event.preventDefault();
    getPokemon(find.value.toLowerCase());
})

let waiting = false;

const handleButtonClick = (increment) => {
    if (!waiting) {
        const newSearchPokemon = init_Pok + increment;
        if (newSearchPokemon >= 1 && newSearchPokemon <= 649) {
            init_Pok = newSearchPokemon;
            getPokemon(init_Pok);
            waiting = true;
            setTimeout(() => {
                waiting = false;
            }, 500);
        }
    }
};

b_Prev.addEventListener('click', () => {
    handleButtonClick(-1);
});

b_Next.addEventListener('click', () => {
    handleButtonClick(1);
});

getPokemon(init_Pok);
