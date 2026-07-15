/* Ejecuta el código cuando la página termina de cargarse. */
document.addEventListener("DOMContentLoaded", () => {

    /* Obtiene el botón que controla el modo oscuro. */
    const botonModo = document.getElementById("modoOscuro");

    /* Finaliza el script si el botón no existe en la página. */
    if (!botonModo) {

        return;

    }

    /* Comprueba si el modo oscuro estaba guardado previamente. */
    if (localStorage.getItem("modo") === "oscuro") {

        /* Activa el modo oscuro en la página. */
        document.documentElement.classList.add("modo-oscuro");

        /* Actualiza el texto y el icono del botón. */
        botonModo.innerHTML = `
            <i class="bi bi-sun-fill"></i>
            Modo claro
        `;

    }

    /* Detecta el clic sobre el botón del modo oscuro. */
    botonModo.addEventListener("click", () => {

        /* Activa o desactiva el modo oscuro. */
        document.documentElement.classList.toggle("modo-oscuro");

        /* Comprueba si el modo oscuro quedó activado. */
        if (document.documentElement.classList.contains("modo-oscuro")) {

            /* Guarda la preferencia del usuario. */
            localStorage.setItem("modo", "oscuro");

            /* Cambia el texto y el icono para indicar el modo claro. */
            botonModo.innerHTML = `
                <i class="bi bi-sun-fill"></i>
                Modo claro
            `;

        } else {

            /* Guarda la preferencia del modo claro. */
            localStorage.setItem("modo", "claro");

            /* Cambia el texto y el icono para indicar el modo oscuro. */
            botonModo.innerHTML = `
                <i class="bi bi-moon-fill"></i>
                Modo oscuro
            `;

        }

    });

});