const colorPicker = document.getElementById("colorPicker");
const canvasColor = document.getElementById("canvasColor");
const canvas = document.getElementById("myCanvas");
const clearButton = document.getElementById("clearButton");
const saveButton = document.getElementById("saveButton");
const fontPicker = document.getElementById("fontPicker");
const retrieveButton = document.getElementById("retrieveButton");

const ctx = canvas.getContext("2d");

let isDrawing = false; // Declare isDrawing
let lastX = 0; // Declare and initialize lastX and lastY
let lastY = 0;

colorPicker.addEventListener("change", (e) => {
    ctx.strokeStyle = e.target.value;
    ctx.fillStyle = e.target.value;
});

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    lastX = e.offsetX; // Use e instead of event
    lastY = e.offsetY;
});

canvas.addEventListener("mousemove", (e) => {
    if (isDrawing) {
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY); // Use e instead of event
        ctx.stroke();
        lastX = e.offsetX; // Update lastX
        lastY = e.offsetY; // Update lastY
    }
});

canvas.addEventListener("mouseup", () => {
    isDrawing = false;
});

canvasColor.addEventListener("change", (e) => { // Corrected spelling "chanage" to "change"
    ctx.fillStyle = e.target.value;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
});

fontPicker.addEventListener("change", (e) => {
    ctx.lineWidth = parseInt(e.target.value, 10); // Parse value to an integer
});

clearButton.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

saveButton.addEventListener("click", () => {
    localStorage.setItem("canvasContents", canvas.toDataURL());
    let link = document.createElement("a");
    link.download = "my-canvas.png";
    link.href = canvas.toDataURL();
    link.click();
});

retrieveButton.addEventListener("click", () => {
    let savedCanvas = localStorage.getItem("canvasContents");
    if (savedCanvas) {
        let img = new Image();
        img.src = savedCanvas;
        img.onload = () => { // Ensure image is loaded before drawing
            ctx.drawImage(img, 0, 0);
        };
    }
});
