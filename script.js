// Mostrar fecha y hora actual
const fecha = new Date();
document.getElementById("fecha").textContent =
  "Fecha y hora: " + fecha.toLocaleString();

function respuesta() {
  const mensaje = document.getElementById("mensaje-sorpresa");
  mensaje.style.display = "block";
}

function escapar() {
  const noBtn = document.querySelector(".no");
  const mensajes = ["¿Estás segura? :(", "Piénsalo bien 💔", "No me digas eso 😢"];
  const mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
  noBtn.textContent = mensaje;

  const contenedor = document.querySelector(".botones");
  const maxTop = contenedor.offsetHeight - noBtn.offsetHeight;
  const maxLeft = contenedor.offsetWidth - noBtn.offsetWidth;

  const nuevoTop = Math.random() * maxTop;
  const nuevoLeft = Math.random() * maxLeft;

  noBtn.style.top = nuevoTop + "px";
  noBtn.style.left = nuevoLeft + "px";
}
