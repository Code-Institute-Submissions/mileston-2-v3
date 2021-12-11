const gameContainer = document.querySelector(".game-container")
const ground = document.querySelector(".ground")
const dragon = document.querySelector(".dragon")

let gravity = 3
let dragonHeight = 450
let dragonLeft = 200
let isEndGame = false

/*------------------------------------------- start game function */

function startGame() {
    dragon.style.bottom = dragonHeight + 'px'
    dragon.style.left = dragonLeft + "px"
    dragonHeight -= gravity
}
var gameInterval = setInterval(startGame, 10)

 /*------------------------------------------- flap function */

function flap() {
    if (dragonHeight < 700) dragonHeight += 150
    dragon.style.bottom = dragonHeight + "px"
    console.log(dragonHeight)
}

/*------------------------------------------- create water pipe function */

function createWaterPipe() {
    let waterPipeLeft = 2000
    let randomHeight = Math.random() * 150
    let waterPipeHeight = randomHeight

    const waterPipe = document.createElement('div')
    const waterPipe = document.createElement('div')

    if (!isEndGame) waterPipe.classList.add("water-pipe")
    gameContainer.appendChild(waterPipe)
    waterPipe.style.left = waterPipeLeft + "px"
    waterPipe.style.bottom = waterPipeHeight + "px"

    function moveWaterPipe() {
        waterPipeLeft -= 3
        waterPipe.style.left = waterPipeLeft + "px"

        if (waterPipeLeft === -200) {
            clearInterval(pipeInterval)
            gameContainer.removeChild(waterPipe)
        }
        if (
            waterPipeLeft > 200 && waterPipeLeft < 240 && dragonLeft === 200 &&
            dragonHeight < waterPipeHeight + 270|| 
            waterPipeHeight === 0
            ) {
            endGame()
            clearInterval(pipeInterval)
        }
    }
    var pipeInterval = setInterval(moveWaterPipe, 10)
    if (!isEndGame) setTimeout(createWaterPipe, 2000)
}
createWaterPipe()

function endGame() {
    clearInterval(gameInterval)
    console.log("Game Over")
    isEndGame = true    
}