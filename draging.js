console.log("DRAGING JS");

let kolor;
const kolorDefault = "#0000ff";
window.addEventListener("load", startup, false);

function startup() {
    kolor = document.querySelector("#kolor");
    kolor.value = kolorDefault;
    kolor.addEventListener("input", updateFirst, false);
    console.log("startup");
}

function updateFirst(event) {
    const textArea = document.querySelector("textarea");
    if (textArea) {
        textArea.style.color = event.target.value;
        textArea.style.borderColor = event.target.value;
    }
}

function changeSmall() {
    link = document.getElementsByClassName("bigLink");

    link[0].href = "#home";
    link[0].style.setProperty("font-size", "8rem");
}

function changeBig() {
    link = document.getElementsByClassName("bigLink");

    link[0].href = "#";
    link[0].style.setProperty("font-size", "20rem");
}


function linkKlik() {
    console.log("klik link");
    link = document.getElementsByClassName("bigLink");

    console.log(link[0].href);

    let currentLink = link[0].href;
    if (currentLink.search("home") == -1) {
        changeSmall();
    }
    else {
        changeBig();
    }
}

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

function rotateBG(element, rotX, rotY, rotZ) {

    // if (event.type == "touchmove") {
    //     x = event.touches[0].clientX;
    //     y = event.touches[0].clientY;

    // }



    //console.log(x, y);


    element.style.setProperty("--rotateX", rotY + "deg");
    element.style.setProperty("--rotateY", -rotX + "deg");
    element.style.setProperty("--rotateZ", rotZ + "deg");


    //console.log(offsetX, offsetY);


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

                x = e.clientX;
                y = e.clientY;

                const middleX = window.innerWidth / 2;
                const middleY = window.innerHeight / 2;
                let offsetX = ((x - middleX) / middleX) * 1.5;
                let offsetY = ((y - middleY) / middleY) * 1.5;
                let offsetZ = offsetX + offsetY;


                dragging.style.setProperty("left", moveX + "px");
                dragging.style.setProperty("top", moveY + "px");

                console.log(currentX, moveY)

                rotateBG(container, offsetX, offsetY, offsetZ)
                setTimeout(() => { shouldWait = false; }, "0")


            }


        })
    });


    let shouldWaitMouse = false;
    container.addEventListener('mousemove', e => {
        if (!shouldWaitMouse) {
            shouldWaitMouse = true;

            x = e.clientX;
            y = e.clientY;

            const middleX = window.innerWidth / 2;
            const middleY = window.innerHeight / 2;
            let offsetX = ((x - middleX) / middleX) * 3;
            let offsetY = ((y - middleY) / middleY) * 3;

            let offsetZ = offsetX * offsetY / 9;


            rotateBG(container, offsetX, offsetY, offsetZ);
            setTimeout(() => {
                shouldWaitMouse = false;
            }, "10")

        }
    })

    let shouldWaitTouch = false;
    container.addEventListener('touchmove', e => {
        if (!shouldWaitTouch) {
            shouldWaitTouch = true;
            rotateBG(e, container);
            setTimeout(() => {
                shouldWaitTouch = false;
            }, "10")

        }
    })

    let startX = 0;
    let startY = 0;
    let startZ = 0;

    function startOrient(e) {
        if (startX == 0) startX = e.gamma + 180;
        if (startY == 0) startY = e.beta + 180;
        console.log("startOrient")
    }

    let shouldWaitMotion = false;
    function motion(e) {
        if (!shouldWaitMotion) {
            shouldWaitMotion = true;
            x = Math.min(Math.max((e.gamma + 180 - startX), -90), 90) / 30;

            y = Math.min(Math.max((e.beta + 180 - startY), -90), 90) / 30;
            z = x * y / 9;
            rotateBG(container, -x, y, z);

            shouldWaitMotion = false;
        }

    }
    if (window.DeviceMotionEvent) {
        window.addEventListener("deviceorientation", startOrient, { once: true })
        window.addEventListener("deviceorientation", motion, true);
    } else {
        console.log("DeviceMotionEvent is not supported");
    }
});





document.addEventListener("scroll", (event) => {
    {
        lastKnownScrollPosition = window.scrollY;

        // console.log(lastKnownScrollPosition)
    }
});