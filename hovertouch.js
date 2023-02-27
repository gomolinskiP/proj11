console.log("elo");

var cellz = document.querySelectorAll("cellHover");

cellz.forEach(e=>{
    e.addEventListener("touchstart", function(){
        e.classList.add("cellHover");
        console.log("hej");
        })
        
        e.addEventListener("touchend", function(){
            e.classList.remove("cellHover");
            console.log("narazie");
            })
})
