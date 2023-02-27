console.log("elo");

var cellH = document.getElementsByClassName("cellH")[0];

cellH.addEventListener("touchstart", function(){
cellH.classList.add("cellHover");
console.log("hej");
})

cellH.addEventListener("touchend", function(){
    cellH.classList.remove("cellHover");
    console.log("narazie");
    })