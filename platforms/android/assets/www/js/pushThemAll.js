$(document).ready(function () {
    $("#Start").click(playGame);
    $(".basic").click(destroy);
});
var numBallsSpawn = 0;
var numBallsInGame = 0;

function playGame() {
    var screenHeight = $(window).height();
    var gameSpaceHeight = (screenHeight - $("#desplegable").height()) - 5;
    var gameSpaceWith = $(window).width();
    $("#game").css({
        height: gameSpaceHeight,
        "margin-top": "40px"
    });
    var numBallsSpawn = 0;
    var numBallsInGame = 0;
    var i = 0;
    //timer 
    setInterval(function () {
        if (numBallsInGame < 10) {
            if (i < 6)
            {
                numBallsSpawn++;
            }
            numBallsInGame += numBallsSpawn;
            console.log("");
            console.log(i);
            for (var j = 0; j < numBallsSpawn; j++) {
                spawnBasic();
                console.log("Basic");
            }
            console.log("");
            if ((i % 5) == 0)
            {
                console.log("Clean");
                spawnClean();
            }

            if ((i % 2) == 0)
            {
                console.log("Trap");
                spawnTrap();
            }
        }
        i++;
    }, 1000);
}

function spawnBasic() {
    var numRand = Math.floor(Math.random() * 501);
    var divsize = 100;
    var posx = (Math.random() * ($("#game").width() - divsize)).toFixed();
    var posy = (Math.random() * ($("#game").height() - divsize)).toFixed();

    $basic = $("<div class='basic'> <img class='img' src='img/Ball.png'/> </div>").css({
        'left': posx + 'px',
        'top': posy + 'px'
    });

    $basic.appendTo($("#game"));
}

function destroy() {
    $(this).remove();
    numBallsInGame--;
}

function spawnTrap() {
    var trap = " <div class='trap'> ";
    $("#game").append(trap);
}

function spawnClean() {
    var clean = " <div class='clean'> ";
    $("#game").append(clean);
}
