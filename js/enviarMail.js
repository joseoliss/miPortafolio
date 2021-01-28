document.getElementById('form-der').addEventListener('submit', (e) => {
    e.preventDefault();
    let nombre = document.getElementById('txt_nombre').value;
    let correo = document.getElementById('txt_correo').value;
    let asunto = document.getElementById('txt_asunto').value;
    let mensaje = document.getElementById('txt_mensaje').value;

    if (nombre != "" || correo != "" || asunto != "" || mensaje != "") {
        reg = /[a-zA-Z0-9\.\-\_]+\@[a-zA-Z0-9]+\.[a-zA-Z0-9]/;
        if (reg.test(correo.toLowerCase())) {
            document.getElementById('form-der').reset();
            alert("De momento esta funcionalidad se encuentra inactiva!")
            mensajeForm("Correo enviado exitosamente", true);
        } else {
            mensajeForm("Correo invalido", false);
        }
    } else {
        mensajeForm("Por favor complete el formulario", false);
    }

})

let mensajeForm = (msj, clase) => {
    let mensaje = document.getElementById('mensajeForm')
    mensaje.innerHTML = `<p id="childMensaje">${msj}</p>`
    let contenido = document.getElementById('childMensaje')
    if (clase === false) {
        contenido.className = "error"
    } else {
        contenido.className = "exito"
    }

    setTimeout(function () {
        mensaje.removeChild(childMensaje)
    }, 2000);
}




