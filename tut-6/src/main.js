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