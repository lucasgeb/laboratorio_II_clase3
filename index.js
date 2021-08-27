//Declaración de variables 
var formkey = document.querySelector("#formkey");
var name = document.querySelector("#name");
var lastName = document.querySelector("#lastName");
var ID = document.querySelector("#ID")
var birthDate = document.querySelector("#birthDate");
var button = document.querySelector("#button");


//variables para expresiones regulares



function getKey(evento) 
{
//Generación de clave
var clave = name.value.substring(0,3);
clave += lastName.value.substring(0,2);
clave += ID.value;
clave += birthDate.value.substring(8);
clave += birthDate.value.substring(3,5);
clave += birthDate.value.substring(0,2);

respuesta.innerHTML = "Tu clave es:"+clave.toUpperCase();

    evento.preventDefault();
    alert ("Enviando Formulario");

}
