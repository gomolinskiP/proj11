console.log("DRAGING JS");

const draggables = document.querySelectorAll('.draggable');

const containters = document.querySelectorAll('body');


draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
    });
});

function rotateBG(event, element) {
    if (event.type == "mousemove" || event.type == "dragover") {
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

    element.style.setProperty("--rotateX", offsetY + "deg");
    element.style.setProperty("--rotateY", -offsetX + "deg");
}


containters.forEach(container => {
    container.addEventListener('dragstart', evStart => {

        let dragging = document.querySelector('.dragging');

        const currentXpx = window.getComputedStyle(dragging).getPropertyValue("left");
        const currentYpx = window.getComputedStyle(dragging).getPropertyValue("top");



        currentX = Number(currentXpx.slice(0, -2));
        currentY = Number(currentYpx.slice(0, -2));

        let shouldWait = false;

        container.addEventListener('dragover', e => {
            e.preventDefault();

            if (!shouldWait) {
                shouldWait = true
                dragging = document.querySelector('.dragging');




                const moveX = currentX + e.clientX - evStart.clientX;
                const moveY = currentY + e.clientY - evStart.clientY;



                dragging.style.setProperty("left", moveX + "px");
                dragging.style.setProperty("top", moveY + "px");
                console.log(moveX, moveY)
                rotateBG(e, container)
                shouldWait = false;


            }


        })
    });

    let shouldWaitMouse = false;
    container.addEventListener('mousemove', e=>{
        if(!shouldWaitMouse){
            shouldWaitMouse = true;
            rotateBG(e, container);
            setTimeout(()=>{
                shouldWaitMouse = false;
            }, "10")
            
        }
    })
})