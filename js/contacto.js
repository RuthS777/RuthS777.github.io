/* Ejecuta el código cuando la página termina de cargarse. */
document.addEventListener("DOMContentLoaded", () => {

    /* Obtiene el formulario de inscripción. */
    const formulario = document.getElementById("formInscripcion");

    /* Finaliza la ejecución si el formulario no existe en la página. */
    if (!formulario) {

        return;

    }

    /* Detecta el envío del formulario de inscripción. */
    formulario.addEventListener("submit", function (event) {

        /* Evita que la página se recargue al enviar el formulario. */
        event.preventDefault();

        /* Obtiene los campos del formulario. */
        const nombre = document.getElementById("nombre");
        const correo = document.getElementById("correo");
        const telefono = document.getElementById("telefono");
        const curso = document.getElementById("curso");
        const nivel = document.getElementById("nivel");
        const mensaje = document.getElementById("mensaje");

        /* Comprueba que todos los campos obligatorios estén completos. */
        if (

            nombre.value.trim() === "" ||

            correo.value.trim() === "" ||

            telefono.value.trim() === "" ||

            curso.selectedIndex === 0 ||

            nivel.selectedIndex === 0 ||

            mensaje.value.trim() === ""

        ) {

            /* Informa al usuario que debe completar todos los campos. */
            alert("Por favor complete todos los campos antes de enviar la solicitud.");

            return;

        }

        /* Obtiene la instancia del modal de inscripción. */
        const modal = bootstrap.Modal.getInstance(
            document.getElementById("modalInscripcion")
        );

        /* Cierra el formulario de inscripción. */
        modal.hide();

        /* Crea el mensaje de confirmación. */
        const toast = new bootstrap.Toast(

            document.getElementById("toastInscripcion")

        );

        /* Muestra el mensaje de confirmación. */
        toast.show();

        /* Limpia el formulario para una nueva inscripción. */
        formulario.reset();

    });

});

/* Obtiene el formulario de contacto. */
const formularioContacto = document.getElementById("formContacto");

/* Verifica que el formulario exista antes de utilizarlo. */
if (formularioContacto) {

    /* Detecta el envío del formulario de contacto. */
    formularioContacto.addEventListener("submit", function (event) {

        /* Evita que la página se recargue. */
        event.preventDefault();

        /* Obtiene los campos del formulario. */
        const nombre = document.getElementById("nombreContacto");
        const correo = document.getElementById("correoContacto");
        const asunto = document.getElementById("asuntoContacto");
        const mensaje = document.getElementById("mensajeContacto");

        /* Comprueba que todos los campos obligatorios estén completos. */
        if (

            nombre.value.trim() === "" ||

            correo.value.trim() === "" ||

            asunto.value.trim() === "" ||

            mensaje.value.trim() === ""

        ) {

            /* Muestra un aviso cuando existen campos vacíos. */
            alert("Debe completar todos los campos del formulario.");

            return;

        }

        /* Crea el mensaje de confirmación. */
        const toast = new bootstrap.Toast(

            document.getElementById("toastContacto")

        );

        /* Muestra el mensaje de confirmación. */
        toast.show();

        /* Limpia el formulario después del envío. */
        formularioContacto.reset();

    });

}