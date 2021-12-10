const gameContainer = document.querySelector(".game-container")
const ground = document.querySelector(".ground")
const dragon = document.querySelector(".dragon")

let gravity = 3
let dragonHeight = 450
let dragonLeft = 200

function startGame() {
    dragon.style.bottom = dragonHeight + 'px'
    dragon.style.left = dragonLeft + "px"
    dragonHeight -= gravity
}
setInterval(startGame, 10)

function flap() {
    if (dragonHeight < 700) dragonHeight += 150
    dragon.style.bottom = dragonHeight + "px"
    console.log(dragonHeight)
}