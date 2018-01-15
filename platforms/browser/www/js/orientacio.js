var degFlecha = 0;
var globaldeg;
var savedeg = 0;
var watchID;
var desviationRange;

$(document).ready(function () {
    $("#orientacioEsquerra").click(botonIzquierdaOrientacio);
    $("#orientacioDreta").click(botonDerechaOrientacio);
    $("#orientacioGuardar").click(Ex3());
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

function Ex3() {
    initCompass();

}

function initCompass() {
    var options = {frequency: 500};
    watchID = navigator.compass.watchHeading(onSuccess, onError, options);

}
function onError() {
    alert("EROOOOR");
}

function onSuccess(heading) {
    globaldeg = heading.magneticHeading;
    globaldeg = -globaldeg;
    desviationRange = parseInt(globaldeg) + degFlecha;
    console.log("saveDeg: " + savedeg);
    console.log("degFlecha: " + degFlecha);
    console.log("DesviationRange: "+ desviationRange);
    console.log("GlobalDeg: "+globaldeg);

    if (watchID !== null && parseInt(savedeg) <= (degFlecha + 5) && parseInt(savedeg) >= (degFlecha - 5)) {
        navigator.vibrate(2000);
    }
    console.log("global " + globaldeg + "Save " + savedeg + "watchID") + watchID;
}

function save() {
    console.log("HIIIIIIIIII");
    if (watchID) {
        savedeg = globaldeg;
    }
}

function stop(watchID) {
    if (watchID) {
        navigator.compass.clearWatch(watchID);
        watchID = null;
        globaldeg = null;
        savedeg = null;
    }
}