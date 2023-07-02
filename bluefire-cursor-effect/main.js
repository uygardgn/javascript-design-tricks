const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
    "#C1EEFF",
    "#B3E5FC",
    "#A2DAF7",
    "#91CFF2",
    "#80C4ED",
    "#70B9E8",
    "#5FADF3",
    "#4EA2EE",
    "#3D97E9",
    "#2C8CE4",
    "#1C81DF",
    "#176FCA",
    "#126DB5",
    "#0D5BA0",
    "#08588B",
    "#035677",
    "#004462",
    "#00324D",
    "#002038",
    "#001E24",
    "#001B0F",
    "#000F08"
];

circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;

});

function animateCircles() {

    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.5;
        y += (nextCircle.y - y) * 0.5;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();