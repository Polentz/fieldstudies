const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const mouse = {
    x: undefined,
    y: undefined,
};

window.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
    drawLine();
});

window.addEventListener("click", () => {
    clearCanvas();
});

window.addEventListener("touchmove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
    drawLine();
});

function drawLine() {
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 1, 0, Math.PI * 2)
    ctx.fill();
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
