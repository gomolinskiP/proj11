console.log("elo");

let cellz = document.querySelectorAll(".cellH");

console.log(cellz);

cellz.forEach(function (e) {
    e.addEventListener("touchmove", function (event) {
        event.preventDefault();
        e.classList.add("cellHover");
        console.log("hej");
        e.addEventListener("touchmove", function (event) {
            event.preventDefault();
            e.classList.add("cellHover");
            console.log("hej");
        });
        setTimeout(function () {
            e.classList.remove("cellHover");
            console.log("timeout");
        }, 2000);
    });

    e.addEventListener("touchend", function () {
        e.classList.remove("cellHover");
        console.log("narazie");
        e.addEventListener("touchend", function () {
            e.classList.remove("cellHover");
            console.log("narazie");
        });
    });

    e.addEventListener("click", function () {
        console.log("click");
        e.addEventListener("click", function () {
            console.log("click");
        });
    });
});
