var numBeeps = 0;
var stringCounterBeeps = "Beeps : ";

$(document).ready(function () {
    $("#beepsCounter").text(stringCounterBeeps + numBeeps);
    $("#beepsRestar").click(botonIzquierdaBeeps);
    $("#beepsSumar").click(botonDerechaBeeps);
    $("#beepsReproducir").click(vibrar);
    console.log("hi");
});
function botonIzquierdaBeeps() {
    moverIzquierda();
    restarBeeps();
}

function botonDerechaBeeps() {
    moverDerecha();
    sumarBeeps();
}

function restarBeeps() {
    console.log(numBeeps);
    if (numBeeps <= 0)
    {
        console.log("beeps es menor que 0");
        return;
    }
    numBeeps--;
    $("#beepsCounter").text(stringCounterBeeps + numBeeps);
}

function sumarBeeps()
{
    console.log(numBeeps);
    if (numBeeps >= 5)
    {
        console.log("beeps es mayor que 5");
        return;
    }
    numBeeps++;
    $("#beepsCounter").text(stringCounterBeeps + numBeeps);
}

function vibrar() {
    console.log("numBeeps : " + numBeeps + " vibrara " + numBeeps * 1000 + " segundos");
    navigator.vibrate(numBeeps * 1000);
}

function moverIzquierda()
{
    $("#beepsCounter").parent().css({float: 'left'});
    //TODO Mover a la izquierda
    $("#beepsCounter").parent().stop().animate({
        float: 'left',
        right: "87%",
        left: "0%"
    }, 1000);

}

function moverDerecha()
{
    $("#beepsCounter").parent().css({float: 'left'});
    //TODO Mover a la izquierda
    $("#beepsCounter").parent().stop().animate({
        float: 'left',
        left: "85%",
        right: "0%"
    }, 1000);
}
    