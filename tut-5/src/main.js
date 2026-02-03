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