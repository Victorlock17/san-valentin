const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const modal = document.getElementById("modal");
const dateEl = document.getElementById("date");

const messages = [
  "¿Estás segura? 😢",
  "Piénsalo bien 🙈",
  "No seas mala 😭",
  "Dale que sí 💖",
  "Vamos, di que sí 🥺"
];

let msgIndex = 0;

// Fecha y hora (San Valentín vibe)
const today = new Date();

dateEl.textContent =
  today.toLocaleDateString("es-PE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }) + " · 5:00 pm";


noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 100 - 50;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  noBtn.textContent = messages[msgIndex];
  msgIndex = (msgIndex + 1) % messages.length;
});

yesBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

function closeModal() {
  modal.style.display = "none";
}
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  let index = 0;

  if (slides.length < 2) return;

  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 3000);
});
  const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 120 - 60;
  const y = Math.random() * 40 - 20;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

