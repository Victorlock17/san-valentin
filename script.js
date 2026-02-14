document.addEventListener("DOMContentLoaded", () => {
  // SLIDER
  const slides = document.querySelectorAll(".slide");
  let index = 0;

  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 3000);

  // MODAL
  const yesBtn = document.getElementById("yesBtn");
  const modal = document.getElementById("modal");

  yesBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});

function closeModal() {
  document.getElementById("modal").style.display = "none";
}



