let puntos1 = 0;
let puntos2 = 0;

const puntos1Texto = document.getElementById("puntos1");
const puntos2Texto = document.getElementById("puntos2");
const mensaje = document.getElementById("mensaje");

document.getElementById("sumar1").addEventListener("click", () => {
    puntos1++;
    actualizarMarcador();
});

document.getElementById("sumar2").addEventListener("click", () => {
    puntos2++;
    actualizarMarcador();
});

document.getElementById("reiniciar").addEventListener("click", () => {
    puntos1 = 0;
    puntos2 = 0;
    actualizarMarcador();
    mensaje.textContent = "Marcador reiniciado";
});

function actualizarMarcador() {
    puntos1Texto.textContent = puntos1;
    puntos2Texto.textContent = puntos2;

    if (puntos1 > puntos2) {
        mensaje.textContent = "Va ganando el Equipo 1";
    } else if (puntos2 > puntos1) {
        mensaje.textContent = "Va ganando el Equipo 2";
    } else {
        mensaje.textContent = "Empate";
    }
}

const form = document.getElementById("formJugador");
const input = document.getElementById("nombreJugador");
const lista = document.getElementById("listaJugadores");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = input.value.trim();

    if (nombre === "") {
        alert("El nombre no puede estar vacío");
        return;
    }

    const jugadores = document.querySelectorAll("#listaJugadores li");

    for (let jugador of jugadores) {
        if (jugador.firstChild.textContent === nombre) {
            alert("Este jugador ya existe");
            return;
        }
    }

    const li = document.createElement("li");
    li.textContent = nombre;

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";

    botonEliminar.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(botonEliminar);
    lista.appendChild(li);

    input.value = "";
});

