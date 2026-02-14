/* 📸 Carrusel */
const photos = ["foto1.jpeg", "foto2.jpeg", "foto4.jpeg"];
let current = 0;
const photo = document.getElementById("photo");

setInterval(() => {
  current = (current + 1) % photos.length;
  photo.src = photos[current];
}, 2500);

const noBtn = document.getElementById("no");

function moveNoButton() {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

// Desktop
noBtn.addEventListener("mouseover", moveNoButton);

// Mobile
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});


const yesBtn = document.getElementById("yes");
const modal = document.getElementById("modal");

function openModal() {
  modal.style.display = "flex";
  launchConfetti();
}

// Desktop
yesBtn.addEventListener("click", openModal);

// Mobile
yesBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  openModal();
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









