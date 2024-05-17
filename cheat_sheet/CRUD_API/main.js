

const api = 'https://api.thecatapi.com/v1/images/search?limit=2'

const api_favorites = 'https://api.thecatapi.com/v1/favourites?limit=100&api_key=live_w26565vUs19xzyHdFTe0FJk8gnQHdMAR39CKzgZUYlneXIEdBr1jGg9sFyrAS675'

const spanError = document.getElementById('error');


async function loadRandomMichis() {
    const res = await fetch(api);
    const data = await res.json();
    console.log('aqui fue', data)

    if (res.status !== 200) {
        spanError.innerHTML = "Hubo un error: " + res.status;
    } else {

        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');
        const btn1 = document.getElementById('btn1');
        const btn2 = document.getElementById('btn2');



        img1.src = data[0].url;
        img2.src = data[1].url;

        btn1.onclick = () => saveFavouriteMichi(data[0].id);
        btn2.onclick = () => saveFavouriteMichi(data[0].id);
    }
}

async function loadFavoriteMichis() {
    const res2 = await fetch(api_favorites);
    const data = await res2.json();
    console.log('favorites', data)

    if (res2.status !== 200) {
        spanError.innerHTML = "Hubo un error: " + res.status;
    } else {
        data.forEach(michi => {
            const section = document.getElementById('favoritesMichis')
            const article = document.createElement('article');
            const img = document.createElement('img');
            const btn = document.createElement('button');
            const btnText = document.createTextNode('Sacar al michi de favoritos')

            btn.appendChild(btnText);
            img.src = michi.image.url;
            img.width = 150
            article.appendChild(img);
            article.appendChild(btn);
            section.appendChild(article);
        })
    }
}

async function saveFavouriteMichi(id) {
    const rest = await fetch(api_favorites, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            image_id: id
        }),
    });
    console.log('save', rest)
}


loadRandomMichis();
loadFavoriteMichis();

