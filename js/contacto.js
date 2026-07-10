/*
==========================================================
ACADEMIA CENTROAMERICANA DE IDIOMAS (ACI)
Archivo: contacto.js
----------------------------------------------------------
Controla el formulario de inscripción de los cursos,
valida los datos obligatorios y muestra un Toast de
confirmación cuando la solicitud se envía correctamente.
==========================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    // Obtiene el formulario de inscripción.
    const formulario = document.getElementById("formInscripcion");

    // Si la página no tiene este formulario, el archivo termina.
    if (!formulario) {

        return;

    }

    // Escucha el evento de envío del formulario.
    formulario.addEventListener("submit", function (event) {

        // Evita que la página se recargue.
        event.preventDefault();

        // Obtiene todos los controles del formulario.
        const nombre = document.getElementById("nombre");
        const correo = document.getElementById("correo");
        const telefono = document.getElementById("telefono");
        const curso = document.getElementById("curso");
        const nivel = document.getElementById("nivel");
        const mensaje = document.getElementById("mensaje");

        // Verifica que todos los campos tengan información.
        if (

            nombre.value.trim() === "" ||

            correo.value.trim() === "" ||

            telefono.value.trim() === "" ||

            curso.selectedIndex === 0 ||

            nivel.selectedIndex === 0 ||

            mensaje.value.trim() === ""

        ) {

            alert("Por favor complete todos los campos antes de enviar la solicitud.");

            return;

        }

        // Cierra el modal de inscripción.
        const modal = bootstrap.Modal.getInstance(
            document.getElementById("modalInscripcion")
        );

        modal.hide();

        // Muestra el Toast de confirmación.
        const toast = new bootstrap.Toast(

            document.getElementById("toastInscripcion")

        );

        toast.show();

        // Limpia el formulario para una nueva inscripción.
        formulario.reset();

    });

});


/*
==========================================================
FORMULARIO DE CONTACTO
----------------------------------------------------------
Valida el formulario de contacto y muestra un Toast de
confirmación.
==========================================================
*/

const formularioContacto = document.getElementById("formContacto");

if (formularioContacto) {

    formularioContacto.addEventListener("submit", function (event) {

        event.preventDefault();

        const nombre = document.getElementById("nombreContacto");
        const correo = document.getElementById("correoContacto");
        const asunto = document.getElementById("asuntoContacto");
        const mensaje = document.getElementById("mensajeContacto");

        if (

            nombre.value.trim() === "" ||

            correo.value.trim() === "" ||

            asunto.value.trim() === "" ||

            mensaje.value.trim() === ""

        ) {

            alert("Debe completar todos los campos del formulario.");

            return;

        }

        const toast = new bootstrap.Toast(

            document.getElementById("toastContacto")

        );

        toast.show();

        formularioContacto.reset();

    });

}