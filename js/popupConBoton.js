const popup = document.getElementById("popup-ejemplo");  
const popupBox = document.querySelector("#popup-ejemplo .popup-box");
const popupTitle = document.querySelector("#popup-ejemplo .popup-title");
const popupBody = document.querySelector("#popup-ejemplo .popup-body");
const button = document.getElementById("boton");
const closePopup = document.getElementById("close_popup");

let eventTimeout = null;
const showMessage = (title, body) => {
    popupTitle.innerHTML = title;
    popupBody.innerHTML = body;

    popup.style.display = 'flex';
    popupBox.classList.add('fade-in');
    popupBox.classList.remove('fade-out');
    eventTimeout = setTimeout(() => {
        setTimeout(() => {
            popup.style.display = 'none';
        }, 450);
        
        popupBox.classList.remove('fade-in');
        popupBox.classList.add('fade-out');
    }, 3000);
}


button.addEventListener("click", (evt) => {
    showMessage("¡ALERTA!", `<p>Mensaje <strong>muy importante</strong> para les estudiantes:</p><p>¡PROGRAMEN!</p>`);
});

closePopup.addEventListener("click", (evt) => {
    clearTimeout(eventTimeout);
    setTimeout(() => {
        popup.style.display = 'none';
    }, 450);
    
    popupBox.classList.remove('fade-in');
    popupBox.classList.add('fade-out');
})