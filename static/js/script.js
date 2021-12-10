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



