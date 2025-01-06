// script.js
document.addEventListener("DOMContentLoaded", function() {
    const playerElement = document.getElementById("player");
    playerElement.innerHTML = "<h2>ArtPlayer is ready!</h2>";
    
    // Example of adding more functionality to the player
    const video = document.createElement("video");
    video.setAttribute("controls", "true");
    video.setAttribute("width", "100%");
    video.innerHTML = "<source src='/assets/video.mp4' type='video/mp4'>Your browser does not support the video tag.";
    
    playerElement.appendChild(video);
});
