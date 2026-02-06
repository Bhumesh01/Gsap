import './style.css'
import gsap from 'gsap'
const pulses = document.querySelectorAll('.pulse');
pulses.forEach((pulse, index)=>{
  gsap.fromTo(pulse, {
    scaleY: 0.4
  },{
    scaleY: 1.6,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    delay: index*0.1
  })
})
gsap.set('.gsap-box', {
  scale: 0.5,
  opacity: 0,
  y: -100,
  x: -100
})
gsap.to('.gsap-box', {
  delay: 0.5,
  opacity: 1,
  scale: 1,
  y: 0,
  x: 0,
  duration: 0.5,
  ease: 'expo.out'
})