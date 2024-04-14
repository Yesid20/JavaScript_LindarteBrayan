


let first = parseInt(prompt("¿Quieres ver el menu de seguimiento academico? Marca 1 para si y 2 para salir"));

if (first == 1) {
    alert("-----------------------------\n-       BIENVENIDO A        -\n-        CAMPUSLANDS        -\n-----------------------------\n Seleciona el cargo al que perteneces:\n 1. Coordinador \n 2. Trainer \n 3. Salir")

    let rta = parseInt(prompt("Ingresa el número según el rol: "));

    if (rta == 1) {
        nameModCA = prompt("Ingresa tu nombre: ");
        alert(" \n Bienvenido/a" + " " + nameModCA + "\n ¿A qué área deseas ingresar?: \n 1. Trainers \n 2. Campers \n 3. Rutas de entrenamiento  \n 4. Reportes \n5. Volver al menú principal");
        optionsAC = parseInt(prompt("Ingresa el número según el área a la cual deseas ingresar: "));
        if (optionsAC == 1) {
            alert("Has ingresado a la sección de Trainers " + "\n¿Qué deseas hacer?" + "\n1. Crear nuevo Trainer \n 2. Asignar horario \n 3.Ver Trainers \n 4. Volver al menú anterior")
            optionTr = parseInt(prompt("Digite el número según la opción a la deseas ingresar: "));
            switch (optionTr) {
                case 1:
                    window.location.href= './html/add_trainers.html';
                    break;
                case 2:
                    alert("")
                    break;
                case 3:
                    window.location.href= './html/views_trainers.html';
                    break;
                case 4:

                    break;
            }
        } else if (optionsAC == 2) {
            alert("Has ingresado a la sección de Campers \n ¿Qué deseas hacer? \n 1. Inscripciones \n 2. Matriculas \n 3. Editar información \n 4. Notas \n 5. Volver al menú anterior ")
            optionsA = parseInt(prompt("Digite el número según la opción a la que deseas ingresar: "));
            if (optionsA == 1) {
                alert("Favor ingresar datos del estudiante: ")
                mod.check_fields_complete()
                mod.add_campers()
                alert("Listo!")
            } else if (optionsA == 2) {
                alert("Deseas actualizar los campers que han sido aprobados?")
                sd = prompt("Ingresa si/no: ")
                minu = sd.lower
                if (sd == 'si')
                    mod.matriculas()
                alert("Se ha actualizado con exito, puedes ver los cambios 'Reportes'")
            } else if (sd == 'no') {
                alert("")
            } else if (optionsA == '3') {
                alert("")
            } else if (optionsA == '4') {
                alert("Has ingresado a la sección de notas")
                alert("1. Nota inicial \t2. Nota modulos")
                opN = parseInt(prompt("Dijite número según la opción a la que deseas ingresar: "));
            } if (opN == '1') {
                nt.add_notas()
            } else if (opN == '2') {
                alert("")
            } else if (opN > '2'){
                alert("Error:")
            alert("Favor ingresar un número entre 1 - 2")
        } else if (optionsA > '5') {
            alert("Error:")
            alert("Favor ingresar un núumero entre 1 - 5")
        } else if (optionsA == '5') {
            f = False
        } 
        } else if (optionsAC == 3) {
            alert("Has ingresado a la sección de Rutas de entrenamiento \n ¿Qué deseas hacer?\n1. Motrar Rutas \t 2. Crear rutas de entrenamiento \n 3. Volver al menú anterior")
            optionR = parseInt(prompt("Digite el número según la opción a la que deseas ingresar: "));
            if (optionR == 1) {
                pprint("Rutas de entrenamiento: ")
                mod.viewR()
            } else if (optionR == 2) {
                alert("Has ingresado a la sección de crear rutas.")
                mod.newRuta()
                alert("Felicidades has creado la ruta con exito!")
            } else if (optionR > 3) {
                alert("Error:")
                alert("Favor digitar un número que este entre 1 - 5")
            } else if (optionR == 3)
                n = False
        } else if (optionsAC == 4) {
            alert(" Has entrado a la sección de reportes \n ¡Qué deseas ver?\n 1. Campers que se encuentran inscritos \n2. Campers que aprobaron el examen inicial\n 3. Entrenadores que se encuentran trabajando con CampusLands\n 4. Campers que se encuentran con bajo rendimiento \n 5. Campers y los trainer que se encuentren asociados a una ruta de entrenamiento \n 6. Número de campers que perdieron y aprobaron cada uno de los módulos");
        } else if (optionsAC > 6) {
            alert("Error: \n Favor digitar un número que este entre 1 - 5")
        } else if (optionsAC == 5) {
            m = False
        }
    } else if (rta == 2) {
        alert("¿Qué deseas hacer? \n 1. Horario \t2. Volver al inicio")
        optionsT = parseInt(prompt("Ingresa el número según el área a la cual deseas ingresar: "));
        if (optionsT == 1) {
            alert("Has ingresado a la sección de Horarios \n Completa la siguiente información para saber tu horario de trabajo \n Ingresa tu número de identificación.")
            trainerN = parseInt(prompt("Número de identificación: "));
        } else if (rta > 3) {
            alert("Error \n Favor digitar un número que este entre 1 - 3")
        } else if (rta == '3') {
            fin = False
        }
    } else if (rta == 3) {
        alert("Te equivocaste de sistema de información")
}
}
else if (first == 2) {
    alert("Muchas gracias por utilizar nuestros servicios");
}

