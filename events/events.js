//Event
const button=document.getElementById("btn");

//Event Listener
button.addEventListener("click", clickEvent);

    function clickEvent(){
    alert("Button clicked!")
}
// Add two buttons - (Show Image, Hide Image) and an image to your HTML file and set the image initial display property to none. Using JavaScript, write code so that when you click on a "Show Image" button, it displays the image. Conversely, when you click on a "Hide Image" button, it hides the image.
const image=document.querySelector("img");
const show=document.getElementById("show");
const hide=document.getElementById("hide");

show.addEventListener("click", ()=>{
    image.style.display="block";
});

hide.addEventListener("click", ()=>{
    image.style.display="none";
});

const alertButton= document.getElementById("msg");
const text=document.getElementById("txt");

alertButton.addEventListener("click",()=>{
    alert(text.value);
});

//new task

const addButton = document.getElementById("add");
const textarea = document.getElementById("txtarea");
const outputDiv = document.getElementById("output");

addButton.addEventListener("click", function() {
  const text = textarea.value;
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  outputDiv.appendChild(paragraph);
});
output.style.color="red";