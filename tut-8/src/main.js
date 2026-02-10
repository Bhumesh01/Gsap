import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
gsap.to('.a', {
  scrollTrigger:{
    trigger: '.a',
    toggleActions: "restart pause resume reset"
  },
  x: 700,
  rotate: 360,
  duration: 3,
  ease: 'bounce',
})
gsap.to('.b', {
  scrollTrigger:{
    trigger: '.b',
    toggleActions: "restart pause resume reset"
  },
  x: 700,
  rotate: 360,
  duration: 3,
  ease: 'bounce'
})
gsap.to('.c', {
  scrollTrigger:{
    trigger: '.c',
    toggleActions: "restart pause resume reset"
  },
  x: 700,
  rotate: 360,
  duration: 3,
  ease: 'bounce'
})