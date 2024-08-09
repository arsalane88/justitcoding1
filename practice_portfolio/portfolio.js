document.addEventListener("DOMContentLoaded", function() {
    var project1 = document.getElementById("project1");
    var link = document.createElement("a");
    link.href = "https://arsalane88.github.io/js_project/";
    link.target = "_blank"; // Opens the link in a new tab
    var img = document.createElement("img");
    img.src = "Screenshot_20-7-2024_104429_arsalane88.github.io.jpeg";
    img.alt = "Project 1 Image";
    link.appendChild(img);
    project1.appendChild(link);
});

document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    var formData = new FormData(this);

    // Send the form data using fetch
    fetch('action_page.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert('Message received: ' + data); // Display the response from the server
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

