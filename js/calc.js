const display = document.getElementById("display"); //accessing the display id

function appendToDisplay(input){
    display.value += input; //accessing display elements value and appending (+=) it with whatever the input is
}

function clearDisplay(){
    display.value = ""; //accessing display elements value and making it = to empty when clear is pressed
}

function calculate(){
    try{
        display.value = eval(display.value); //eval function is its own built in calculator in js
    }
    catch(error){
        display.value = "Error"; //try, catch statement is in place in order to account for mistakes by displaying Error
    }
}    