const h1Element=document.querySelector("#heading1");
h1Element.textContent = "Task Update";
h1Element.style.color = "green";
h1Element.style.backgroundColor = "red";
const myListItems = document.querySelectorAll("#list li");
myListItems.forEach((item, index) => {
    item.textContent = `New Text ${index + 1}`;
    item.style.color = "blue";
});
h1Element.remove();