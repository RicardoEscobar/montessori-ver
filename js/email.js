// selecciona los elementos necesarios para el correo
const enviar = document.getElementById('enviar');
const validationNombre = document.getElementById('validationNombre');
const validationEmail = document.getElementById('validationEmail');
const validationTelefono = document.getElementById('validationTelefono');
const gridRadios1 = document.getElementById('gridRadios1');
const gridRadios2 = document.getElementById('gridRadios2');
const gridRadios3 = document.getElementById('gridRadios3');


function creaLigaEmail(sendToEmail) {
    let ligaEmail = "mailto:" + sendToEmail;
    ligaEmail + validationEmail.value ? validationEmail.value : "";
    ligaEmail + validationEmail.value ? validationEmail.value : "";

    console.log(ligaEmail);
}