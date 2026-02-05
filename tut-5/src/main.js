import "./style.css"
import gsap from "gsap"
const container = document.getElementById('app');
const tags = document.getElementById('tag');
const bars = [{height:400, label: 'Mon'}, {height: 100, label: 'Tues'}, {height: 350, label: 'Wed'}, {height: 450, label: 'Thurs'}, {height: 150, label: 'Fri'}, {height: 50, label: 'Sat'}];
const btn = document.getElementById('btn');
function renderBars(){
  container.innerHTML = "";
  tags.innerHTML = "";
  bars.forEach((bar,i)=>{
    const element = document.createElement("div");
    const label = document.createElement("div");
    element.classList.add("bar");
    element.style.height = `${bar.height}px`;
    label.classList.add("label");
    label.innerText = bar.label
    container.appendChild(element);
    tags.appendChild(label)
    gsap.fromTo(
      element,
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 1.5,
        ease: "elastic.out(1, 1.25)",
        delay: i * 0.1
      }
    );
    gsap.fromTo(
      label,
      {opacity: 0},
      {opacity:1, delay: i*0.1}
    )
  })
}
renderBars();
btn.addEventListener('click', ()=>{
  renderBars();
})

const fab = document.querySelector(".fab");
const children = document.querySelectorAll(".fab-child");
const radius = 150;
let expanded = false;
fab.addEventListener("click", ()=>{
  expanded = !expanded;
  fab.textContent = expanded?"x":"+";
  if(expanded){
    const arcSpan = Math.PI/1.5;
    const startingAngle = Math.PI/2 + arcSpan/2;
    children.forEach((child, i)=>{
      const angle = startingAngle - i*(arcSpan/(children.length-1));
      const x = Math.cos(angle)*radius;
      const y = -Math.sin(angle)*radius;
      gsap.to(child, {
        x: x,
        y: y,
        opacity: 1,
        rotate: 360,
        duration: 0.5,
        ease: "expo.out"
      })
      })
  }
  else{
    children.forEach((child)=>{
      gsap.to(child, {
        x:0,
        y:0,
        opacity: 0,
        scale: 0.8,
        rotate: 0,
        duration: 0.3,
        ease: 'power1.in',
        pointerEvents: 'none'
      })
    })
  }
})
gsap.from('.card', {
  opacity: 0,
  y: 60,
  duration: 0.6,
  delay: 0.2,
  ease: 'power4.out',
  scale: 0.95,
  stagger: 0.2
  // stagger will add delay in start time of animations creating cascading like effect
})