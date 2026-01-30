import "./style.css";
import gsap from "gsap";
const animation = gsap.to(".box", {
  opacity: 1,
  rotation: 360,
  borderRadius: "50%",
  scale: 1.25,
  duration: 2,
});
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const resume = document.querySelector(".resume");
const restart = document.querySelector(".restart");
const reverse = document.querySelector(".reverse");
const repeat = document.querySelector(".repeat");
const yoyo = document.querySelector(".yoyo");
const kill = document.querySelector(".kill");
const info = document.getElementById("info");

/* ------------------ Helper Function ------------------ */
function updateInfo(list) {
  info.innerHTML = "";
  const fragment = document.createDocumentFragment();

  list.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    fragment.appendChild(li);
  });

  info.appendChild(fragment);
}


play.addEventListener("click", () => {
  animation.play();
  updateInfo([
    "play() resumes the animation from its current position",
    "Use play(0) to start from the beginning",
    "Plays in forward direction"
  ]);
});

pause.addEventListener("click", () => {
  animation.pause();
  updateInfo([
    "pause() freezes the animation",
    "You can pause at any moment"
  ]);
});

resume.addEventListener("click", () => {
  animation.resume();
  updateInfo([
    "resume() continues a paused animation",
    "Functionally same as play()"
  ]);
});

restart.addEventListener("click", () => {
  animation.restart();
  updateInfo([
    "restart() resets animation to start",
    "Then plays it again from zero"
  ]);
});

reverse.addEventListener("click", () => {
  animation.reverse();
  updateInfo([
    "reverse() plays animation backward",
    "Can be called anytime",
    "Calling again toggles direction"
  ]);
});

repeat.addEventListener("click", () => {
  const count = Number(prompt("Enter repeat count (use -1 for infinite):"));

  if (isNaN(count)) {
    updateInfo(["Invalid repeat value"]);
    return;
  }

  animation.repeat(count).restart();
  updateInfo([
    `Animation will repeat ${count} times`,
    "repeat(0) = no repeat",
    "repeat(-1) = infinite loop"
  ]);
});

yoyo.addEventListener("click", () => {
  animation.yoyo(true).repeat(1).restart();
  updateInfo([
    "yoyo() reverses animation on repeat",
    "Works only when repeat is set",
    "Here it plays forward then backward"
  ]);
});

kill.addEventListener("click", () => {
  animation.kill();
  updateInfo([
    "kill() completely destroys the animation",
    "It cannot be restarted",
    "You must create a new GSAP tween"
  ]);
});
