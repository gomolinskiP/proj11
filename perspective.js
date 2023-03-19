const bg = document.querySelector(".bg");


document.addEventListener("mousemove", (e) => {
    rotateBG(e, bg);
});

document.addEventListener("touchmove", (e) => {
    rotateBG(e, bg);
});


function rotateBG(event, element) {
    if (event.type == "mousemove") {
        x = event.clientX;
        y = event.clientY;
    }

    if (event.type == "touchmove") {
        x = event.touches[0].clientX;
        y = event.touches[0].clientY;
    }

    //console.log(x, y);

    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    const offsetX = ((x - middleX) / middleX) * 4.5;
    const offsetY = ((y - middleY) / middleY) * 4.5;

    //console.log(offsetX, offsetY);
    console.log(offsetX, offsetY, event.type);

    element.style.setProperty("--rotateX", offsetY + "deg");
    element.style.setProperty("--rotateY", -offsetX + "deg");
}