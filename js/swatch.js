const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn"); //all necessary elements readied for later use with html ids selected

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;
let milli = 0; //all variables needed. manipulated below

startBtn.addEventListener("click", () => {
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 100); //ensures below updateTime function updates every 100 milliseconds
    }
});
pauseBtn.addEventListener("click", () => {
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});
resetBtn.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    milli = 0;
    timeDisplay.textContent = "00:00:00:000";
});

function updateTime(){
    elapsedTime = Date.now() - startTime;

    milli = Math.floor(elapsedTime % 1000);
    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60); //Date.now given in milliseconds so has to be converted to correct unit with this maths

// Pad single-digit values with leading zeros
const pad = (unit, length) => {
    const padded = "0" + unit;
    return padded.slice(-length);
};

// Ensure milliseconds are always displayed with three digits
const formattedTime = `${pad(hrs, 2)}:${pad(mins, 2)}:${pad(secs, 2)}:${pad(milli, 3)}`;
timeDisplay.textContent = formattedTime;
}