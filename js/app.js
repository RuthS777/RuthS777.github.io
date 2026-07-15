/*
    Ejecuta el código cuando la página termina de cargarse.
*/
document.addEventListener("DOMContentLoaded", () => {

    /* Selecciona todos los enlaces que apuntan a una sección de la misma página. */
    document.querySelectorAll('a[href^="#"]').forEach(enlace => {

        /* Detecta el clic sobre cada enlace interno. */
        enlace.addEventListener("click", function (evento) {

            /* Obtiene la sección de destino correspondiente al enlace. */
            const destino = document.querySelector(this.getAttribute("href"));

            /* Verifica que la sección exista antes de desplazarse. */
            if (destino) {

                /* Evita el comportamiento predeterminado del enlace. */
                evento.preventDefault();

                /* Desplaza la página de forma suave hasta la sección seleccionada. */
                destino.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /* Obtiene todos los botones del sitio web. */
    const botones = document.querySelectorAll(".btn");

    /* Recorre cada botón para agregar efectos de interacción. */
    botones.forEach(boton => {

        /* Aumenta ligeramente el tamaño del botón al pasar el cursor. */
        boton.addEventListener("mouseenter", () => {

            boton.style.transform = "scale(1.05)";

        });

        /* Devuelve el botón a su tamaño original al retirar el cursor. */
        boton.addEventListener("mouseleave", () => {

            boton.style.transform = "scale(1)";

        });

    });

    /* Comprueba si el mensaje de bienvenida ya fue mostrado durante la sesión. */
    if (!sessionStorage.getItem("bienvenidaMostrada")) {

        /* Espera un momento antes de mostrar el mensaje de bienvenida. */
        setTimeout(() => {

            alert("¡Bienvenido a la Academia Centroamericana de Idiomas (ACI)!");

        }, 800);

        /* Guarda un indicador para evitar que el mensaje vuelva a mostrarse. */
        sessionStorage.setItem("bienvenidaMostrada", "si");

    }

});