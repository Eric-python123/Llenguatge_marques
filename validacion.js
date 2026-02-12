const form = document.getElementById("formulario");
const email = document.getElementById("email").value;
const fecha = document.getElementById("fecha").value;

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let valido = true;

    document.querySelectorAll(".error").forEach(e => e.textContent = "");
    document.getElementById("mensajeFinal").textContent = "";

    if (email.includes("test")) {
        document.getElementById("errorEmail").textContent =
            "El correo no puede contener la palabra 'test'.";
        valido = false;
    }

    if (fecha < "2024-01-01") {
        document.getElementById("errorFecha").textContent =
            "La fecha no es válida.";
        valido = false;
    }

    if (valido) {
        document.getElementById("mensajeFinal").textContent =
            "Formulario enviado correctamente.";
        form.reset();
    }
});


