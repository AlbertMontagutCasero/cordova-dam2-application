var numBallsSpawn = 0;
var numItemsInGame = 0;
var intervalID;
$(document).ready(function () {
    $("#Start").click(playGame);

});

function playGame() {
    //crear barra items 
    var div = " <div id='game'> ";
    //TODO check
    var bar = '<div class="progress"><div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div></div>'; 
    
    $(".progress").remove();
    $("#game").remove();
    $("#gamePanel").append(bar);
    $("#gamePanel").append(div);
    var screenHeight = $(window).height();
    var gameSpaceHeight = (screenHeight - $("#desplegable").height()) - $(".progress").height();
    $("#game").css({
        height: gameSpaceHeight,
        "margin-top": "40px"
    });
    //crear barra items 
    var i = 0;
    //timer 
    intervalID = setInterval(function () 
    {
        console.log("hi");
        if (numItemsInGame < 10) {
            if (i < 6)
            {
                numBallsSpawn++;
            }
            $(".clean").remove();           
            
            numItemsInGame += numBallsSpawn;
            for (var j = 0; j < numBallsSpawn; j++) {
                spawnBasic();
            }
            console.log("");
            if ((i % 10) == 0)
            {
                spawnClean();
                numItemsInGame++;
            }

            if ((i % 2) == 0)
            {
                spawnTrap();
                numItemsInGame++;
            }
            //actualizar items
        } else
        {
            endGame();
        }
        i++;
    }, 3000);
}

function spawnBasic() {
    var posx = (Math.random() * $("#game").width()).toFixed();
    var posy = ((Math.random() * $("#game").height()) + $("#desplegable").height() - $("#game").height() - 35).toFixed();

    $basic = $("<div class='basic'> <img class='img' src='img/Ball.png'/> </div>").css({
        'left': posx + 'px',
        'top': posy + 'px'
    });

    $basic.appendTo($("#game"));
    $basic.click(destroy);
}

function destroy() {
    $(this).remove();
    numItemsInGame--;
}

function destroyAllBasicItems() {
    $(".basic").remove();
    $(".trap").remove();
    numItemsInGame = 0;
}

function endGame() {
    $("#game").remove();
    numItemsInGame = 0;
    numBallsSpawn = 0;
    clearInterval(intervalID);
    //borrar barra
}

function spawnTrap() {
    var posx = (Math.random() * $("#game").width()).toFixed();
    var posy = ((Math.random() * $("#game").height()) + $("#desplegable").height() - $("#game").height() - 35).toFixed();

    $trap = $("<div class='trap'> <img class='img' src='img/Trap.png'/> </div>").css({
        'left': posx + 'px',
        'top': posy + 'px'
    });
    $trap.appendTo($("#game"));
    $trap.click(endGame);
}

function spawnClean() {
    var posx = (Math.random() * $("#game").width()).toFixed();
    var posy = ((Math.random() * $("#game").height()) + $("#desplegable").height() - $("#game").height() - 35).toFixed();

    $clean = $("<div class='clean'> <img class='img' src='img/Clean.png'/> </div>").css({
        'left': posx + 'px',
        'top': posy + 'px'
    });
    
    $clean.appendTo($("#game"));
    
    $clean.click(destroyAllBasicItems);
}
