/* 📸 Carrusel */
const photos = ["foto1.jpeg", "foto2.jpeg", "foto4.jpeg"];
let current = 0;
const photo = document.getElementById("photo");

setInterval(() => {
  current = (current + 1) % photos.length;
  photo.src = photos[current];
}, 2500);

const noTexts = [
  "¿Estás segura? 😢",
  "Piénsalo bien 🥺",
  "No seas mala 💔",
  "Ándale, di que sí 😭",
  "Última oportunidad 😳"
];

let noIndex = 0;

noBtn.addEventListener("mouseover", () => {
  noBtn.textContent = noTexts[noIndex];
  noIndex = (noIndex + 1) % noTexts.length;

  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});


/* 💕 Modal SÍ */
const yesBtn = document.getElementById("yes");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close");

yesBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  launchConfetti();
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

/* 🎉 Confeti */
function launchConfetti() {
  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.textContent = ["💖","💘","💕","❤️"][Math.floor(Math.random()*4)];
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = (3 + Math.random() * 2) + "s";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }
}







