import "./style.css"
import gsap from 'gsap'
const btn = document.querySelector(".scroll-to-top");

let isFloating = false;

window.addEventListener("scroll", ()=>{
  if(window.scrollY>100){
    btn.classList.add('show');
    if(!isFloating){
      gsap.to(btn, {
        y: -10,
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        ease: 'sine.out'
      })
      isFloating = true;
    }
  }
  else {
    btn.classList.remove("show")
  }
})
btn.addEventListener("mouseenter", ()=>{
  gsap.to(btn, {
    scale: 1.1,
    duration: 0.2,
    ease: 'sine.in'
  })
})
btn.addEventListener("mouseleave", ()=>{
  gsap.to(btn, {
    scale: 1,
    duration: 0.2,
    ease: 'sine.out'
  })
})
btn.addEventListener("click", ()=>{
  window.scrollTo(0,0);
})

const tabs = document.querySelectorAll(".link");
const indicator = document.querySelector(".indicator");
const tabRow = document.querySelector(".tabs");
const updateIndicator = (target)=>{
  const tabBounds = target.getBoundingClientRect();
  const rowBounds = tabRow.getBoundingClientRect();
  const width = tabBounds.width;
  const offset = tabBounds.left - rowBounds.left;
  gsap.to(indicator, {
    x: offset,
    width: width,
    ease: 'back.out(1.7)'
  })
}
const activeTab = document.querySelector(".link.active");
updateIndicator(activeTab);
tabs.forEach((tab)=>{
  tab.addEventListener('click', ()=>{
    tabs.forEach((t)=>t.classList.remove('active'));
    tab.classList.add('active');
    updateIndicator(tab);
  })
})