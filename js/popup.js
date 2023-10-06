const showMessage = (title, body) => {
    const popup = document.getElementById("popup-ejemplo");
    
    const popupBox = document.querySelector("#popup-ejemplo .popup-box");

    const popupTitle = document.querySelector("#popup-ejemplo .popup-title");
    popupTitle.innerHTML = title;

    const popupBody = document.querySelector("#popup-ejemplo .popup-body");
    popupBody.innerHTML = body;

    popup.style.display = 'flex';
    popupBox.classList.add('fade-in');
    popupBox.classList.remove('fade-out');
    setTimeout(() => {
        setTimeout(() => {
            popup.style.display = 'none';
        }, 500);
        
        popupBox.classList.remove('fade-in');
        popupBox.classList.add('fade-out');
    }, 3000);
}

const button = document.getElementById("boton");
button.addEventListener("click", (evt) => {
    showMessage("¡ALERTA!", `<p>Mensaje <strong>muy importante</strong> para les estudiantes:</p><p>¡PROGRAMEN!</p>`);
});