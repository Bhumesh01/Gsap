import "./style.css"
import gsap from 'gsap'
const btn = document.querySelector(".scroll-to-top");
window.addEventListener("scroll", ()=>{
  if(window.scrollY>100){
    btn.classList.add('show');
  }
  else {
    btn.classList.remove("show")
  }
})