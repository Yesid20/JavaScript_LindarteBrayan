let palabraOculta = "javascript";
let intentos = 3;

function verificarSuposicion(suposicion, palabraOculta) {
    if(suposicion.toLowerCase() === palabraOculta){
        return true;
    }
    return false;
}

function jugarAdivinaLaPalabra(){
    console.log("Bienvenido a jugar adivina la palabra oculta");
    console.log("Tienes 3 intentos para adivinar la palabra");
    console.log("-pista- la palabra oculta es un lenguaje de programación");

    while (intentos >0){
        let suposicion = ("Ingresa una letra: ");

        if(verificarSuposicion(suposicion, palabraOculta)){
            console.log("!Correcto!, haz adivinado la palabra. ")
            break;
        } else {
            intentos--;
            if(intentos > 0){
                console.log(`Ìncorrecto, te quedan ${intentos} intentos`);
            }else {
                console.log("Se te acabaron los intentos, la palabra oculta era javascript")
            }
        }
    }};

    jugarAdivinaLaPalabra();