var wires = document.querySelectorAll("button");
var cut = document.querySelector(".cut");

wires.forEach((wire) => {
    wire.addEventListener("click", () => {
        if (wire.classList.contains("selected")) wire.classList.remove("selected");
        else {
            wires.forEach((wire) => wire.classList.remove("selected"));
            wire.classList.add("selected");
        }
    });
});