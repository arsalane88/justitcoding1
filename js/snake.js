const scoreNo = document.querySelector("#scoreNo");
const resetButton = document.querySelector("#resetButton");

let score = 0;

//board
var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

//snake head
var snakeX = blockSize * 5;
var snakeY = blockSize * 5; // start point on the grid for snake (5,5)

var velocityX = 0;
var velocityY = 0; //snake not moving on start

var snakeBody = []; //snakeBody variable declared as array

//food
var foodX;
var foodY;

var gameOver = false;

window.onload = function() { //onload used to engage function when page is accessed
    board = document.getElementById("board"); //getElementById grabs an id name from html
    board.height = rows * blockSize;
    board.width = cols * blockSize; // size of board defined using above variables
    context = board.getContext("2d"); // context used for drawing on the board

    placeFood(); //calling below placeFood function
    document.addEventListener("keyup", changeDirection); //when an arrow key is pressed, changeDirection function is called
    // update();
    setInterval(update, 1000/10); //update function runs every 100 milliseconds
}

resetButton.addEventListener("click", resetGame);

function update() {
    if (gameOver) {
        return; //game stops when game over becomes true
    }

    context.fillStyle="black";
    context.fillRect(0, 0, board.width, board.height); //fills whole board with specified colour

    context.fillStyle="red";
    context.fillRect(foodX, foodY, blockSize, blockSize); //food before snake essential

    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY]) //allows snake to grow a body part were food was when consumed
        placeFood(); //allows snake to eat food when in same coordinates
    }

    for (let i = snakeBody.length-1; i > 0; i--) {
        snakeBody[i] = snakeBody[i-1]; //allows for new body parts to move with snake head (starting at tail)
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY]; //allows for second segment to take heads place
    }

    context.fillStyle="lime";
    snakeX += velocityX * blockSize; //essential to add for snake to actually move
    snakeY += velocityY * blockSize; //* blockSize allows snake to move a blockSize at a time instead of a pixel
    context.fillRect(snakeX, snakeY, blockSize, blockSize); //applies colour to snake. blockSize is width and height
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize); //allows for body to be drawn on
    }

    //game over conditions
    if (snakeX < 0 || snakeX > cols*blockSize || snakeY < 0 || snakeY > rows*blockSize) {
        gameOver = true;
        alert("Game Over"); //out of bounds game over condition set
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            alert("Game Over"); //body collision game over condition set
        }
    }
}

function changeDirection(e) { //passing key event
    if (e.code == "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.code == "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    }
    else if (e.code == "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    }
    else if (e.code == "ArrowRight" && velocityX != -1) { // after && makes snake unable to change to opposite direction
        velocityX = 1;
        velocityY = 0; //allows for snake to move in direction of 4 arrow keys when pressed
    }
}


function placeFood() {
    //Math.random returns number between 0-1) *cols ->(becomes) (0-19.9999) Math.floor rounds down so ->(becomes) (0.19) * 25
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize; //allows food to appear in random coordinate on board, and after eaten
}

function resetGame(){
    velocityX = 0;
    velocityY = 0;
    snakeX = blockSize * 5;
    snakeY = blockSize * 5;
    snakeBody = [];
    window.onload;
    update();
    changeDirection();
}