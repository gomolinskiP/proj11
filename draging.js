console.log("DRAGING JS");

let kolor;
const kolorDefault = '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
window.addEventListener("load", startup, false);


function startup() {
    kolor = document.querySelector("#kolor");
    kolor.value = kolorDefault;
    setColor(kolorDefault);
    kolor.addEventListener("input", updateFirst, false);
    console.log("startup");
}

function setColor(color) {
    const textArea = document.querySelector("textarea");
    if (textArea) {
        textArea.style.color = color;
        textArea.style.borderColor = color;
    }
}

function updateFirst(event) {
    setColor(event.target.value);
}

function subLink(x){
    changeSmall();
     setTimeout(()=>{
        window.scrollTo(0, 0);
     }, "40");      

    // console.log(x.href);
    // window.location.hash = x.name;
    // window.history.replaceState(null, null, x.name)
}

function changeSmall() {
    
    link = document.getElementsByClassName("bigLink");
    // window.scrollTo(0, 0);


    link[0].href = "#home";
    link[0].style.setProperty("font-size", "8rem");
    // setTimeout(() => {
    //     window.scrollTo(0, 0);
    // }, "50")
}

function changeBig() {
    link = document.getElementsByClassName("bigLink");

    link[0].href = "#";
    link[0].style.setProperty("font-size", "20rem");
}


function linkKlik() {
    link = document.getElementsByClassName("bigLink");


    let currentLink = link[0].href;
    if (currentLink.search("home") == -1) {
        changeSmall();
    }
    else {
        changeBig();
    }
}

const draggables = document.querySelectorAll('.draggable');

const backGround = document.querySelector('.bg');


const elementy = document.querySelectorAll('.element');
elementy.forEach((item, index) => {
    item.style.setProperty('animation-duration', Math.round(Math.random()*20+10) + "s")
}) 


draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
    });
});

function rotateBG(element, rotX, rotY, rotZ, scaleX, scaleY) {

    // if (event.type == "touchmove") {
    //     x = event.touches[0].clientX;
    //     y = event.touches[0].clientY;

    // }



    //console.log(x, y);


    element.style.setProperty("--rotateX", (rotY).toFixed(1) + "deg");
    element.style.setProperty("--rotateY", (-rotX).toFixed(1) + "deg");
    element.style.setProperty("--rotateZ", (rotZ).toFixed(1) + "deg");

    element.style.setProperty("--scaleX", scaleX);

    element.style.setProperty("--scaleY", scaleY);

    


    // console.log((rotY).toFixed(2))


    //console.log(offsetX, offsetY);


}



// containters.forEach(container => {
//     container.addEventListener('dragstart', evStart => {
//         rotateBG(container, 0, 0, 0);

//         let dragging = document.querySelector('.dragging');

//         const currentXpx = window.getComputedStyle(dragging).getPropertyValue("left");
//         const currentYpx = window.getComputedStyle(dragging).getPropertyValue("top");

//         const startX = evStart.clientX;
//         const startY = evStart.clientY;



//         currentX = Number(currentXpx.slice(0, -2));
//         currentY = Number(currentYpx.slice(0, -2));

//         let shouldWait = false;

//         container.addEventListener('dragover', e => {
//             e.preventDefault();
//             if (!shouldWait) {
//                 shouldWait = true
//                 dragging = document.querySelector('.dragging');

//                 const moveX = currentX + e.clientX - startX;
//                 const moveY = currentY + e.clientY - startY;

//                 dragging.style.setProperty("left", moveX + "px");
//                 dragging.style.setProperty("top", moveY + "px");




//                 setTimeout(() => {
//                     shouldWait = false;
//                 }, "100")
//             }


//         })
//     });



function mouseMove(e) {
    window.removeEventListener('mousemove', mouseMove)

    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    x = e.clientX;
    y = e.clientY;

    let offsetX = ((x - middleX) / middleX) * 30;
    let offsetY = ((y - middleY) / middleY) * 30;
    let offsetZ = -(offsetX * offsetY / 200);

let scaleX = 1 - 0.2*(Math.abs(x - middleX) / middleX);
let scaleY = 1 - 0.4*(Math.abs(y - middleY) / middleY);


    rotateBG(backGround, offsetX, offsetY, offsetZ, scaleX, scaleY);
    window.scrollTo(0, 0);
    setTimeout(() => {
    window.addEventListener('mousemove', mouseMove);
    }, "30")
}

if (window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener('mousemove', mouseMove);
}

// let shouldWaitTouch = false;
// container.addEventListener('touchmove', e => {
//     if (!shouldWaitTouch) {
//         shouldWaitTouch = true;
//         rotateBG(e, container);
//         setTimeout(() => {
//             shouldWaitTouch = false;
//         }, "10")

//     }
// })

let startX = 999;
let startY = 999;
let startZ = 999;
let lastX = startX;
let lastY = startY;
let lastZ = startZ;


let startOrient = 1

let shouldWaitMotion = false;
function motion(e) {
    window.removeEventListener("deviceorientation", motion);

    if(startOrient == 1){
        startX = e.gamma;
        startY = e.beta;
        startZ = e.alpha;

        lastX = startX;
        lastY = startY;
        lastZ = startZ;

        startOrient = 0;
    }
    
    var nowX = e.gamma;
    var nowY = e.beta;
    var nowZ = e.alpha;


    if(nowX > 80 && lastX < -80) startX = startX + 180;
    if(nowX < -80 && lastX > 80) startX = startX - 180;

    if(nowY > 170 && lastY < -170) startY = startY + 360;
    if(nowY < -170 && lastY > 170) startY = startY - 360;

    if(nowZ > 170 && lastZ < -170) startZ = startZ + 360;
    if(nowZ < -170 && lastZ > 170) startZ = startZ - 360;



    x = Math.min(Math.max((nowX - startX), -90), 90) /3;

    y = Math.min(Math.max((nowY - startY), -90), 90) / 2;

    z = -(x * y / 200);

    console.log(e.gamma, startX, e.gamma - startX)


    rotateBG(backGround, x, y, z, 1-Math.abs(x)/100, 1-Math.abs(y)/100);

    setTimeout(() => {
        window.addEventListener("deviceorientation", motion, true);
    }, "40")

    lastX = nowX;
    lastY = nowY;

}

function requestOrientationPermission() {
    startOrient = 1;
    try{
        DeviceOrientationEvent.requestPermission()
        .then(response => {
            if (response == 'granted') {
                window.addEventListener('deviceorientation', motion, true)
            }
        })
        .catch(console.error)
    }
    catch{
        console.log('request permission not possible')
    }
    
    

}

if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", motion, true);
} else {
    console.log("DeviceMotionEvent is not supported");
}

const htmlElement = document.querySelector('html')
invert();

function invert() {
    var currentFilter = getComputedStyle(htmlElement).getPropertyValue('filter')

    if (currentFilter == 'invert(1) hue-rotate(180deg)') {
        htmlElement.style.setProperty('filter', 'invert(0) hue-rotate(0deg)')
    }
    else {
        htmlElement.style.setProperty('filter', 'invert(1) hue-rotate(180deg)')
    }
}

// document.addEventListener("scroll", (event) => {
//     {
//         lastKnownScrollPosition = window.scrollY;

//         // console.log(lastKnownScrollPosition)
//     }
// });


