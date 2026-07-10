/*
==========================================================
ACADEMIA CENTROAMERICANA DE IDIOMAS (ACI)
Archivo: darkmode.js
----------------------------------------------------------
Permite activar y desactivar el modo oscuro del sitio.
Además, recuerda la preferencia del usuario utilizando
el almacenamiento local del navegador.
==========================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    // Obtiene el botón que activa el modo oscuro.
    const botonModo = document.getElementById("modoOscuro");

    // Si la página no contiene el botón, termina el script.
    if (!botonModo) {

        return;

    }

    // Aplica el modo guardado anteriormente.
    if (localStorage.getItem("modo") === "oscuro") {

        document.documentElement.classList.add("modo-oscuro");

        botonModo.innerHTML = `
            <i class="bi bi-sun-fill"></i>
            Modo claro
        `;

    }

    // Cambia entre modo oscuro y modo claro.
    botonModo.addEventListener("click", () => {

        document.documentElement.classList.toggle("modo-oscuro");

        if (document.documentElement.classList.contains("modo-oscuro")) {

            localStorage.setItem("modo", "oscuro");

            botonModo.innerHTML = `
                <i class="bi bi-sun-fill"></i>
                Modo claro
            `;

        } else {

            localStorage.setItem("modo", "claro");

            botonModo.innerHTML = `
                <i class="bi bi-moon-fill"></i>
                Modo oscuro
            `;

        }

    });

});
