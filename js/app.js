const cardBack = document.querySelector(".back");
const cardFront = document.querySelector(".front");
const nextBtn = document.querySelector(".next-btn");
const cancelBtn = document.querySelector(".cancel-btn");

nextBtn.addEventListener("click", () => {
  cardFront.classList.add("hidden");
  cardBack.classList.add("animate-in");
  cardBack.classList.remove("animate-out");
});
cancelBtn.addEventListener("click", () => {
  cardFront.classList.remove("hidden");
  cardFront.classList.add("animate-in");
  cardBack.classList.remove("animate-out");
});
