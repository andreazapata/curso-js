let calificacion = parseInt(prompt("Dime tu calificación y te digo si pasas o repruebas."));

while (calificacion > 0) 
{
    if (calificacion > 70) {
        alert("Con " + calificacion + " pasas.");
        calificacion = parseInt(prompt("Dime otra calificación."));
    }
    else {
        alert("Con " + calificacion + " repruebas.");
        calificacion = parseInt(prompt("Dime otra calificación."));
    }
}