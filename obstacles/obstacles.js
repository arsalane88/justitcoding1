let obstacles = []; // initiated as an array.

function createObstacles() {
    const obstacleSize = level * unitSize; // obstacle size corresponds to the level.
    const obstacleX = Math.floor(Math.random() * (boardWidth / unitSize)) * unitSize;
    const obstacleY = Math.floor(Math.random() * (boardHeight / unitSize)) * unitSize; // coordinates of newly generated obstacles calculated to be anywere on the board (similar to food)
    // check if obstacles overlap with snake or food
    const overlapping = snake.some(part => part.x === obstacleX && part.y === obstacleY) || (foodX === obstacleX && foodY === obstacleY);
    
    if (!overlapping) {
            obstacles.push({ x: obstacleX, y: obstacleY, size: obstacleSize }); // obstacles will not overlap with snake or food.
    }
}
function drawObstacles() {
    context.fillStyle = "brown";
    obstacles.forEach(obstacle => { // iterates through each obstacle unit in the array using forEach method
        context.fillRect(obstacle.x, obstacle.y, obstacle.size * unitSize, unitSize); // fillRect colours each obstacle with above fillStyle using (x & y coordinates, width and hight).
    });
}

const head = snake[0]; // head of snake stored as first unit in array
obstacles.forEach(obstacle => {
// the if statement is checking whether the snakes head comes in to contact with all elements in obstacles array, using forEach method.
if (head.x < obstacle.x + obstacle.size && head.x + unitSize > obstacle.x && head.y < obstacle.y + obstacle.size && head.y + unitSize > obstacle.y){
onrun = false; // Game over if snake collides with obstacle
}
})

const obstacleOverlap = obstacles.some(obstacle => obstacle.x === newFoodX && obstacle.y === newFoodY);