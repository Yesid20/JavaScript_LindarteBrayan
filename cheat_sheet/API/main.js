/* Para conseguir API REST gratuitas github public APis*/

console.log("Hello, world!")

//La direccion de la API que se consumira 
const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=5';   
//limit=x es el queryParameters que nos da la documentación de la API 

//Para realizar la solicitud  a la API utilizaremos el metodo fetch
// fetch devuelve promesas que las resolvemos con .then
// json viewer nos ayuda a mirar que trae los JSON de las APIS de manera didactica 
async function reload() {
    const res = await fetch(API_URL);
    const data = await res.json();

    console.log(data)

    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');

    img1.src= data[0].url;
    img2.src= data[1].url;
    img3.src= data[2].url;

    //img.src = data[0].url; //Selecciona solo el atributo que vaya dentro de URL 
}

reload(); //Llamada a la funcion para cargar automaticamente una imagen al inicio del programa


const api = 'https://api.thecatapi.com/v1/images/search?limit=2'

const api_favorites = 'https://api.thecatapi.com/v1/favourites/search?limit=2'


async function loadRandomMichis() {
    const res = await fetch(api);
    const data = await res.json();

    const img1= document.getElementById('img1');
    const img2= document.getElementById('img2');

    img1.src= data[0].url;
    img2.src= data[1].url;    
}

async function loadFavoritesMichis() {
    const res = await fetch(api_favorites);
    const data = await res.json();
    console.log(data)
}
loadRandomMichis();
loadFavoritesMichis();