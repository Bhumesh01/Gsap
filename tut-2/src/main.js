import gsap from "gsap"
import "./style.css";  
gsap.to('.box', {
  x: 200,
  y: 200,
  opacity: 1,
  rotation: 360,
  background: '#ffe761',
  borderRadius: '50%',
  scale: 1.25,
  duration: 2,
  delay: 1,
  ease: 'bounce',
  repeat: -1,
  yoyo: true,
  repeatDelay: 2,
  // paused: true,
  stagger: 1
})
// Can change or animate any css property