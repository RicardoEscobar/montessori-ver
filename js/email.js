// selecciona los elementos necesarios para el correo
const formulario = document.getElementById('formulario');
const enviar = document.getElementById('enviar');
const validationNombre = document.getElementById('validationNombre');
const validationEmail = document.getElementById('validationEmail');
const validationTelefono = document.getElementById('validationTelefono');
const gridRadios1 = document.getElementById('gridRadios1');
const gridRadios2 = document.getElementById('gridRadios2');
const gridRadios3 = document.getElementById('gridRadios3');
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');

function getSubject() {

    // Retorna la opcion de nivel escolar elegida en el formulario
    if (gridRadios1.checked) {
        return label1.innerText;
    } else if (gridRadios2.checked) {
        return label2.innerText;
    } else if (gridRadios3.checked) {
        return label3.innerText;
    } else {
        return "No se checo ninguna opcion";
    }
}

function getBody() {
    let body = "";

    // %0D%0A es un retorno de carro
    body = body + "Nombre: " + validationNombre.value + "%0D%0A";
    body = body + "Email: " + validationEmail.value + "%0D%0A";
    body = body + "Telefono: " + validationTelefono.value + "%0D%0A";
    body = body + "Comentario: " + validationComentario.value;

    return body;
}

function creaLigaEmail(sendToEmail) {
    let ligaEmail = "mailto:" + sendToEmail + "?";
    ligaEmail = ligaEmail + "subject=Interesado en " + getSubject();
    ligaEmail = ligaEmail + "&body=" + getBody();
    ligaEmail = encodeURI(ligaEmail);
    formulario.setAttribute('action', ligaEmail);
}