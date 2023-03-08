console.log("elo");

let elementy = document.querySelectorAll(".element");

console.log(elementy);

elementy.forEach(function (e, self) {
    e.addEventListener("touchmove", function (event) {
        event.preventDefault();
        console.log(self);
        elementy[self].focus();
    });

    e.addEventListener("touchend", function () {
        console.log("narazie");
        e.addEventListener("touchend", function () {
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
