$(document).ready(function () {
    $("#Start").click(playGame);
});
function playGame() {
    var screenHeight = $(window).height();
    var gameSpaceHeight = (screenHeight - $("#desplegable").height()) - 5;
    var gameSpaceWith = $(window).width();
    $("#game").css({
        height: gameSpaceHeight,
        "margin-top": "40px"
    });
    var numBalls = 0;
    var i = 0; // change for seconds
    while (numBalls < 10) {
        if (i <= 6) 
        {
            numBalls++;
        }
        
        
        spawnBasic();
        
        if((i % 5 )== 0)
        {
            spawnClean();
        }
        
        if((i % 2) == 0)
        {
            spawnTrap();
        }
        i++;
    }
}

function spawnBasic() {
    var basic = " <div class='basic'> ";
    $("#game").append(basic);

}

function spawnTrap() {
    var basic = " <div class='trap'> ";
}

function spawnClean() {
    var basic = " <div class='clean'> ";
}
