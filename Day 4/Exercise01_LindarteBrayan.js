let person = {
    nombre: "Fulanito",
    identificacion: 1003292832,
    edad: 43,
    profesion: "Docente universitario",
    genero: "Masculino"
}

let car = {
    color: "Rojo",
    modelo: 1999,
    capacidad: "Familiar",
    kilometraje: 0
}

let book = {
    escritor: "Gabriel marquez",
    genero: "Historia",
    paginas: 879,
    protagonista: "Coronel Claudio Cataño",
    titulo: "Cien años de soledad"
}

let number = {
    value: 10,
    par: true,
    inpar: false,
    cantidad_digitos: 2
}

function crearMateria(nombre, docente, programa) {
    let materia = {
        Nombre: nombre,
        Docente: docente,
        Programa: programa
    };

    return materia;
}

