// How To Play pop-up

var howToPlay = document.getElementById("htp");
var htpNav = document.getElementById("htp-nav");
var close = document.getElementsByClassName("btn-close")[0];

htpNav.onclick = function() {
    howToPlay.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == howToPlay) {
        howToPlay.style.display = "none";
    }
}

close.onclick = function() {
    howToPlay.style.display = "none";
}

// Game over pop-up

var gameOver = document.getElementById("game-over");
var gameClose = document.getElementsByClassName("game-close")[0];

gameOver.onclick = function() {
    gameOver.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == gameOver) {
        gameOver.style.display = "none";
    }
}

gameClose.onclick = function() {
    gameOver.style.display = "none";
}