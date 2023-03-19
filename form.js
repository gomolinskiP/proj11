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
    }
  }