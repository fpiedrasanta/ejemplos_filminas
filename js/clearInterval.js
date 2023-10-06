let counter = 10;
const contador = document.getElementById("contador");

const interval = setInterval(() => {
    counter--;
    contador.innerText = counter;
    if (counter === 0) {
        clearInterval(interval);
        setTimeout(() => {
            alert("Tiempo terminado");
        }, 0);
    }
}, 1000);