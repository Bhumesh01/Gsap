import './style.css'
import gsap from 'gsap';

const star = document.querySelector('.star');
const container = document.querySelector('.container');

const forward = document.getElementById('right');
const backward = document.getElementById('left');
const reset = document.getElementById('reset');

forward.addEventListener("click", () => {
  const starRect = star.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  if (starRect.right >= containerRect.right) {
    alert("Cannot move further");
    return;
  }

  gsap.to(star, {
    x: "+=50",
    duration: 0.3
  });
});

backward.addEventListener("click", () => {
  const starRect = star.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  if (starRect.left <= containerRect.left) {
    alert("Cannot move further");
    return;
  }

  gsap.to(star, {
    x: "-=50",
    duration: 0.3
  });
});

reset.addEventListener("click", () => {
  gsap.to(star, {
    x: 0,
    duration: 0.3
  });
});
