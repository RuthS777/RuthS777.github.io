/*
==========================================================
ACADEMIA CENTROAMERICANA DE IDIOMAS (ACI)
Archivo: app.js
----------------------------------------------------------
Contiene funciones generales utilizadas por todas las
páginas del sitio web.
==========================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    /*
    ==========================================================
    EFECTO SUAVE AL HACER CLIC EN LOS ENLACES INTERNOS
    ==========================================================
    */

    document.querySelectorAll('a[href^="#"]').forEach(enlace => {

        enlace.addEventListener("click", function (evento) {

            const destino = document.querySelector(this.getAttribute("href"));

            if (destino) {

                evento.preventDefault();

                destino.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /*
    ==========================================================
    EFECTO HOVER PARA BOTONES
    Hace que los botones aumenten ligeramente de tamaño.
    ==========================================================
    */

    const botones = document.querySelectorAll(".btn");

    botones.forEach(boton => {

        boton.addEventListener("mouseenter", () => {

            boton.style.transform = "scale(1.05)";

        });

        boton.addEventListener("mouseleave", () => {

            boton.style.transform = "scale(1)";

        });

    });

    /*
    ==========================================================
    MENSAJE DE BIENVENIDA
    Se muestra solamente una vez por sesión.
    ==========================================================
    */

    if (!sessionStorage.getItem("bienvenidaMostrada")) {

        setTimeout(() => {

            alert("¡Bienvenido a la Academia Centroamericana de Idiomas (ACI)!");

        }, 800);

        sessionStorage.setItem("bienvenidaMostrada", "si");

    }

});