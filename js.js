document.addEventListener("mousemove", function(event) {
    let coords = document.getElementById("coordinates");
    coords.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
});