const gameContainer = document.querySelector(".game-container")
const ground = document.querySelector(".ground")
const dragon = document.querySelector(".dragon")

let gravity = 3
let dragonHeight = 450
let dragonLeft = 200
let isEndGame = false
let gap = 400

/*------------------------------------------- start game function */

function startGame() {
    dragon.style.bottom = dragonHeight + 'px'
    dragon.style.left = dragonLeft + "px"
    dragonHeight -= gravity
}
var gameInterval = setInterval(startGame, 10)

 /*------------------------------------------- flap function */

function flap() {
    if (dragonHeight < 700) dragonHeight += 100
    dragon.style.bottom = dragonHeight + "px"
    console.log(dragonHeight)
}

/*------------------------------------------- create water pipe function */

function createWaterPipe() {
    let waterPipeLeft = 2000
    let randomHeight = Math.random() * 150
    let waterPipeHeight = randomHeight

    const waterPipe = document.createElement('div')
    const topWaterPipe = document.createElement('div')

    if (!isEndGame) {
        waterPipe.classList.add("water-pipe")
        topWaterPipe.classList.add("top-water-pipe")
    }
    gameContainer.appendChild(waterPipe)
    gameContainer.appendChild(topWaterPipe)

    waterPipe.style.left = waterPipeLeft + "px"
    topWaterPipe.style.left = waterPipeLeft + "px"
    waterPipe.style.bottom = waterPipeHeight + "px"
    topWaterPipe.style.bottom = waterPipeHeight + gap + "px"

    function moveWaterPipe() {
        waterPipeLeft -= 3
        waterPipe.style.left = waterPipeLeft + "px"
        topWaterPipe.style.left = waterPipeLeft + "px"

        if (waterPipeLeft === -200) {
            clearInterval(pipeInterval)
            gameContainer.removeChild(waterPipe)
        }
        if (
            waterPipeLeft > 200 && waterPipeLeft < 205 && dragonLeft === 200 &&
            (dragonHeight < waterPipeHeight + 300|| dragonHeight > waterPipeHeight + gap -45) ||
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
    gameOver.style.display = "block" 
}
