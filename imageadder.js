const images = [
    "images/gritty-tina.png", "images/gritty-wooder.png", "images/naked-gritty.png", 
    "images/gritty-rocky.png", "images/gritty-profile.png", "images/nightmare-gritty.png",
    "images/gritty-profile1.png", "images/gritty-hockey.png"
]

let i = 0

function placeImage (x, y) {
    const nextImage = images[i];

    const img = document.createElement("img");
    img.setAttribute("src", nextImage);
    img.style.left = x + "px";
    img.style.top = y + "px";
    // img.style.transform = "translate(-50%, -50%) scale(0.5) rotate(" + Math.random() * 20 - 10) + "deg)";

    document.body.appendChild(img);

    i += 1; 

    if( i >= images.length) {
        i = 0;
    }
};

// placeImage(500, 400);
// placeImage(400, 500);
// placeImage(600, 300);

// on click! 

document.addEventListener("click", (event) => {
    event.preventDefault();
    placeImage(event.pageX, event.pageY);
})


// mouse over 
// let mouse = 0; 
// document.addEventListener("mousemove", (event) => {
//     event.preventDefault();
//     mouse += 1; 
//     if (mouse % 20 == 0) {
//         placeImage(event.pageX, event.pageY);
//     }
// })

// mobile 
document.addEventListener("touchend", () => {
    
})