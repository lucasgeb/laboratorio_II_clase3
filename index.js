//Declaración de variables 
var formkey = document.querySelector("#formkey");
var names = document.querySelector("#names");
var lastName = document.querySelector("#lastName");
var ID = document.querySelector("#ID")
var birthDate = document.querySelector("#birthDate");
var button = document.querySelector("#button");
var respuesta = document.querySelector("#respuesta");


// variables para expresiones regulares

// La clave tiene que tener 2 letras del nombre, 3 letras del apellido, el DNI completo y la fecha.

function getKey(evento) 
{
// Generación de clave
var key = names.value.substring(0,2);
key += lastName.value.substring(0,3);
key += ID.value;
key += birthDate.value.substring(8);
key += birthDate.value.substring(3,5);
key += birthDate.value.substring(0,2);

respuesta.innerHTML = "Tu clave es:"+key.toUpperCase();

    evento.preventDefault();
    alert ("Enviando Formulario");

}

function validacion(evento){
    var expRegNames = /^([A-Z a-z]+[\s]*)+$/;

    var expReglastName = /^([A-Z a-z]+[\s]*)+$/;

    var expRegID = /^\d+$/; 
    var expRegBirthDate = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})+$/; 

    var quedato = evento.target;



    if(quedato.id == 'names'){

        if(!expRegNames.exec(quedato.value))
           {
            alert('Revise los datos ingresados, deben ser sólo letras');
                // quedato.focus();
         }
    }

    if(quedato.id == 'lastName'){

        if(!expReglastName.exec(quedato.value))
           {
            alert('Revise los datos ingresados, deben ser sólo letras');
                // quedato.focus();
         }
    }

    if(quedato.id == 'ID'){

        if(!expRegID.exec(quedato.value))
           {
            alert('Revise los datos ingresados, deben ser sólo numeros');
                // quedato.focus();
         }
    }

    if(quedato.id == 'birthDate'){

        if(!expRegBirthDate.exec(quedato.value))
           {
            alert('Revise los datos ingresados, deben ser sólo numeros');
                // quedato.focus();
         }
    }

}


function cargaDocu(){
    names.addEventListener("blur",validacion);
    lastName.addEventListener("blur",validacion);
    ID.addEventListener("blur",validacion);
    birthDate.addEventListener("blur",validacion);
    formkey.addEventListener("submit",getKey);

}

window.addEventListener("load", cargaDocu);