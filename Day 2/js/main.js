


let first = parseInt(prompt("¿Quieres ver el menu de seguimiento academico? Marca 1 para si y 2 para salir"));

    if (first == "1"){
        alert("-----------------------------\n-       BIENVENIDO A        -\n-        CAMPUSLANDS        -\n-----------------------------\nSeleciona el cargo al que perteneces:\n1. Coordinador \t2. Trainer \t3.Salir")

        let rta = parseInt(prompt("Ingresa el número según el rol: "));

    if (rta == "1"){
        nameModCA = prompt("Ingresa tu nombre: ");
        m = true;
    }if (m == true){
            alert(" \n Bienvenido" + " " + nameModCA + "\n¿A qué área deseas ingresar: \n1. Trainers \t2. Campers \n3. Rutas de entrenamiento  \t4. Reportes \n5. Volver al menú principal");
        optionsAC = parseInt(prompt("Ingresa el número según el área a la cual deseas ingresar: "));
    }if (optionsAC == "1"){
                    alert("Has ingresado a la sección de Trainers "+ "\n¿Qué deseas hacer?" + "\n1. Crear nuevo Trainer \t2. Asignar horario \t3.Ver Trainers \n4. Volver al menú anterior")
                    optionTr = parseInt(prompt("Digite el número según la opción a la deseas ingresar: "));
    switch(optionTr) {
         case 1:
             mod.add_trainers();
             break;
         case 2:
             alert("")
             break;
         case 3: 
             mod.viewTr();
             break;
         case 4:
                x = false
             break;
    }}   else if (optionsAC == '2'){
                f = true
    }while (f == true)
                    console.log("Has ingresado a la sección de Campers")
                    console.log("¿Qué deseas hacer?")
                    console.log("1. Incripciones \t2. Matriculas \n3. Editar información \t4.Notas \n5. Volver al menú anterior ")
                    optionsA = input("Digite el número según la opción a la que deseas ingresar: ")
                    if (optionsA == '1')
                        console.log("Favor ingresar datos del estudiante: ")
                        mod.check_fields_complete()
                        mod.add_campers()
                        limpiarPantalla()
                        console.log("Listo!")
                    elif (optionsA == '2')
                        console.log("Deseas actualizar los campers que han sido aprobados?")
                        sd = input("Ingresa si/no: ")
                        minu = sd.lower
                        if (sd == 'si')
                            mod.matriculas()
                            console.log("Se ha actualizado con exito, puedes ver los cambios 'Reportes'")
                        elif (sd == 'no')
                            console.log("")
                    elif  (optionsA == '3')
                        console.log("")
                    elif (optionsA == '4')
                        console.log("Has ingresado a la sección de notas")
                        console.log("1. Nota inicial \t2. Nota modulos")
                        opN = input("Dijite número según la opción a la que deseas ingresar: ")
                        if (opN == '1')
                            nt.add_notas()
                        elif (opN == '2')
                            console.log("")
                        elif (opN > '2')
                            console.log("Error:")
                            console.log("Favor ingresar un número entre 1 - 2")
                    elif (optionsA > '5')
                        console.log("Error:")
                        console.log("Favor ingresar un núumero entre 1 - 5")
                    elif (optionsA == '5')
                            f = False
            elif (optionsAC == '3')
                n = true
                while (n == True)
                    lejo.letrerito()

                    console.log("Has ingresado a la sección de Rutas de entrenamiento")
                    console.log("¿Qué deseas hacer?")
                    console.log("1. Motrar Rutas \t 2. Crear rutas de entrenamiento \n3. Volver al menú anterior")
                    optionR = input("Digite el número según la opción a la que deseas ingresar: ")
                    limpiarPantalla()
                    if (optionR == '1')
                        lejo.letrerito()
                        pprint("Rutas de entrenamiento: ")
                        mod.viewR()
                        limpiarPantalla()
                    elif (optionR == '2')
                        lejo.letrerito()
                        console.log("Has ingresado a la sección de crear rutas.")
                        mod.newRuta()
                        console.log("Felicidades has creado la ruta con exito!")
                        limpiarPantalla()
                    elif (optionR > '3')
                        console.log("Error:")
                        console.log("Favor digitar un número que este entre 1 - 5")
                    elif (optionR == '3')
                            n = False
            elif (optionsAC == '4')
                
                lejo.letrerito()
                console.log(" Has entrado al la sección de reportes")
                console.log("¡Qué deseas ver?")
                console.log("1. Campers que se encuentran inscritos \n2. Campers que aprobaron el examen inicial\n3. Entrenadores que se encuentran trabajando con CampusLands")
                console.log("4. Campers que se encuentran con bajo rendimiento \n5. Campers y los trainer que se encuentren asociados a una ruta de entrenamiento")
                console.log("6. Número de campers que perdieron y aprobaron cada uno de los módulos")
                lejo.reports()
            elif (optionsAC > '6')
                console.log("Error:")
                console.log("Favor digitar un número que este entre 1 - 5")
            elif (optionsAC == '5')
                    m = False
        elif (rta == '2')
            lejo.letrero()
            console.log("")
            console.log("¿Qué deseas hacer?")
            console.log("1. Horario \t2. Volver al inicio")
            optionsT = input("Ingresa el número según el área a la cual deseas ingresar: ")

            limpiarPantalla()
            if (optionsT == '1')
               lejo.letrero()
               console.log("Has ingresado a la sección de Horarios")
              console.log("Completa la siguiente información para saber tu horario de trabajo")
              limpiarPantalla()
              console.log("Ingresa tu número de identificación.")
             trainerN = input("Número de identificación: ")
            elif (rta > '3')
                console.log("Error")
                console.log("Favor digitar un número que este entre 1 - 3")
             elif (rta == '3')
                fin = False
            }
    else if (first == 2) {
        alert("Muchas gracias por utilizar nuestros servicios");
}

