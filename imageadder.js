const images = [
    "images/gritty-tina.png", "images/gritty-wooder.png", "images/naked-gritty.png"
]

let i = 0

function placeImage (x, y) {
    const nextImage = images[i];

    const img = document.createElement("img");
    img.setAttribute("src", nextImage);
    img.style.left = x + "px";
    img.style.top = y + "px";

    document.body.appendChild(img);




};

placeImage(500, 400);
placeImage(400, 500);
placeImage(600, 300);