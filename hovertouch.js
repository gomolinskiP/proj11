console.log("elo");

let cellz = document.querySelectorAll("cellH");

cellz.forEach(function(e){
    e.addEventListener("touchstart", function(){
        e.classList.add("cellHover");
        console.log("hej");
        })
        
        e.addEventListener("touchend", function(){
            e.classList.remove("cellHover");
            console.log("narazie");
            })
})
