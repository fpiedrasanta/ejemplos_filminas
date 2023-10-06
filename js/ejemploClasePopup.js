const btn = document.getElementById("btn");
const background = document.getElementById("popup");
const close = document.getElementById("close");

let timeOut = null;
btn.addEventListener("click", (evt) => {
    background.style.display = "flex";

    timeOut = setTimeout(() => {
        background.style.display = "none";
    }, 5000);
});

close.addEventListener("click", (evt) => {
    clearTimeout(timeOut);
    background.style.display = "none";
});