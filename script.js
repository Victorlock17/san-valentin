// Carrusel
let slides = document.querySelectorAll('.slide');
let index = 0;

setInterval(() => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 3000);

// Botón NO escapa
const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseover', () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Modal
const yesBtn = document.getElementById('yesBtn');
const modal = document.getElementById('modal');

yesBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

function closeModal() {
  modal.style.display = 'none';
}

// Corazones flotando
const heartsContainer = document.querySelector('.hearts');

setInterval(() => {
  const heart = document.createElement('span');
  heart.innerHTML = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = Math.random() * 20 + 15 + 'px';
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}, 400);




