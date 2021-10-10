var personas = [
    { nombre: "Andres Rodriguez", saldo: 100, contra: "contraseña" },
    { nombre: "Juan Perez", saldo: 650, contra: "cuentaBanco" },
    { nombre: "Andrea Lopez", saldo: 320, contra: "perrito123" },
    { nombre: "Snoop Dogg", saldo: 900, contra: "Smoke420" },
    { nombre: "Renata Martinez", saldo: 950, contra: "abc987" }
];

var nombreFinal, numPersona;

function muestra_oculta(id) {
    if (document.getElementById) { //se obtiene el id
        var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
        el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
    }
}
window.onload = function () {/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
    muestra_oculta('opciones');/* "contenido_a_mostrar" es el nombre que le dimos al DIV */
}

function main() {
    let nom = document.getElementById("nom").value;
    let contra = document.getElementById("password").value;
    nombreFinal = nom;
    let param = obtenerInfo2(nom, contra);

    if (param >= 0 && param <= 4) {
        //document.body.innerHTML = "<h1>La persona es: " + personas[param].nombre;
        muestra_oculta('opciones');
        muestra_oculta('inicio');
        numPersona = param;
        document.getElementById('bien').innerHTML = "Bienvenido, " + personas[numPersona].nombre;
    } else if (param == "contraseña") {
        alert("Contraseña incorrecta");
        document.getElementById("nom").value = "";
        document.getElementById("password").value = "";
        main();
    } else {
        alert("No existe el usuario");
        document.getElementById("nom").value = "";
        document.getElementById("password").value = "";
        main();
    }
}

function obtenerInfo2(nombres, cont) {
    let i = 0;

    while (i <= personas.length) {

        if (personas[i].nombre == nombres && personas[i].contra == cont) {
            return i;
        } else if (personas[i].nombre == nombres && personas[i].contra != cont) {
            return "contraseña";
        } else {
            i++;
        }
    }
    return false;
}


function getSaldo() {
    document.getElementById('saldo').innerHTML = "Tu saldo es: $" + personas[numPersona].saldo;
}


function setSaldo() {
    let dinero = prompt("Cuanto dinero vas a ingresar?");
    let SaldoAnterior = personas[numPersona].saldo;
    let SaldoActual = parseInt(dinero) + SaldoAnterior;

    if (SaldoActual > 990) {
        alert("No se pueden tener mas de $990 en una cuenta");
    } else {
        personas[numPersona].saldo = SaldoActual;
        document.getElementById('deposito').innerHTML = "Monto depositado: $" + dinero + ", Monto actual: $" + personas[numPersona].saldo;
    }
}

function setRetiro() {
    let retiro = prompt("Cuanto dinero vas a retirar?");
    let SaldoAnterior = personas[numPersona].saldo;
    let SaldoActual = SaldoAnterior - parseInt(retiro);

    if (SaldoActual < 10) {
        alert("No se pueden tener menos de $10 en una cuenta");
    } else {
        personas[numPersona].saldo = SaldoActual;
        document.getElementById('alm').innerHTML = "Monto retirado: $" + retiro + ", Monto actual: $" + personas[numPersona].saldo;
    }
}