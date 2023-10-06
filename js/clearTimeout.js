const timeOut = setTimeout(()=> {
    alert("Se ejecutó");
}, 3000);

const btn = document.getElementById("btn");
btn.addEventListener("click", (evt) => {
    clearTimeout(timeOut);
});