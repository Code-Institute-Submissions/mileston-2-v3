// How To Play pop-up

var howToPlay = document.getElementById("htp");
var htpNav = document.getElementById("htp-nav");
var close = document.getElementsByClassName("btn-close")[0];

htpNav.onclick = function() {
    howToPlay.style.display = "block";
}

close.onclick = function() {
    howToPlay.style.display = "none";
}

