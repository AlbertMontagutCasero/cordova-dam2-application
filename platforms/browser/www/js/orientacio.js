var degFlecha = 0;
var globaldeg;
var watchID;
var aux = true;
// var desviationRange;

$(document).ready(function () {
    //rotar imagen
    $("#orientacioEsquerra").click(botonIzquierdaOrientacio);
    $("#orientacioDreta").click(botonDerechaOrientacio);
    $("#orientacioGuardar").click(direccion);
});

function botonIzquierdaOrientacio() {
    restarGradosFlechita();
    rotarFlechita();
}
function botonDerechaOrientacio() {
    sumarGradosFlechita();
    rotarFlechita();
}

function restarGradosFlechita() {
    degFlecha -= 10;
}

function sumarGradosFlechita() {
    degFlecha += 10;
}

function rotarFlechita() {
    console.log(degFlecha);
    document.getElementById('flecha').style.transform = "rotate(" + degFlecha + "deg)";
}

function rotarFlechitaAZero() {
    console.log(degFlecha);
    document.getElementById('flecha').style.transform = "rotate(" + 0 + "deg)";
}
function direccion() {
    if (!watchID) 
    {
        initCompass();
    } else
    {
        stop();
    }
}

function initCompass() {

    var options = {frequency: 250};
    watchID = navigator.compass.watchHeading(onSuccess, onError, options);
    rotarFlechitaAZero();
}
function onError() {
    alert("EROOOOR");
}

function onSuccess(heading) {
    globaldeg = heading.magneticHeading;
    // volver la flecha a apuntar al 0
    // desviationRange = parseInt(globaldeg) + degFlecha;
    // console.log("DesviationRange: "+ desviationRange);
    console.log("degFlecha: " + degFlecha);
    console.log("Watch ID: " + watchID);
    console.log("GlobalDeg: " + globaldeg);
    console.log("degFlecha nega: " + (degFlecha - 5));
    console.log("degFlecha nega: " + (degFlecha + 5));

    var degFlechaMeno = degFlecha - 5;
    var degFlechaMayo = degFlecha + 5;
    
    if (watchID != null && parseInt(globaldeg) >= degFlechaMeno
            && parseInt(globaldeg) <= degFlechaMayo) {
        alert("Enhorabuena, estas apuntando en la direccion indicada previamente");
    }
}

function stop() {
    if (watchID) {
        navigator.compass.clearWatch(watchID);
        watchID = null;
        globaldeg = null;
        aux = true;
        rotarFlechita();
    }

}