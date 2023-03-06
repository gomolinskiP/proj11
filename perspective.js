const bg = document.querySelector(".bg");

document.addEventListener("mousemove", (e)=>{
    rotateBG(e, bg);
});

document.addEventListener("touchmove", (e)=>{
    rotateBG(e, bg);
});

function rotateBG(event, element){
    const x = event.clientX;
    const y = event.clientY;

    //console.log(x, y);

    const middleX = window.innerWidth/2;
    const middleY = window.innerHeight/2;

    const offsetX = ((x-middleX)/middleX) * 13;
    const offsetY = ((y-middleY)/middleY) * 8;

    console.log(offsetX, offsetY);

    element.style.setProperty("--rotateX", -offsetY + "deg");
    element.style.setProperty("--rotateY", offsetX + "deg");
}