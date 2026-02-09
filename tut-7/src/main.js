import './style.css'
import gsap from 'gsap';

const star = document.querySelector('.star');
const container = document.querySelector('.container');

const forward = document.getElementById('right');
const backward = document.getElementById('left');
const reset = document.getElementById('reset');
const segments = document.querySelectorAll('.segment');

function updateSegments() {
  const currentX = gsap.getProperty(star, "x");
  const step = Math.round(currentX / 50);

  segments.forEach((seg, index) => {
    seg.style.backgroundColor =
      index <= step ? "limegreen" : "#333";
  });
}


forward.addEventListener("click", () => {
  const starRect = star.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  if (starRect.right >= containerRect.right) {
    alert("Cannot move further");
    return;
  }

  gsap.to(star, {
    x: "+=50",
    duration: 0.3,
    onUpdate: updateSegments
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
    duration: 0.3,
    onUpdate: updateSegments
  });
});

reset.addEventListener("click", () => {
  gsap.to(star, {
    x: 0,
    duration: 0.3,
    onUpdate: updateSegments
  });
});