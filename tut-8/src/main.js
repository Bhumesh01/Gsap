import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
gsap.to('.a', {
  scrollTrigger:{
    trigger: '.a',
    start: 'top center',
    end: 'bottom 100',
    markers: true,
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
    start: 'top center',
    end: 'bottom 100',
    markers: true,
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
    start: 'top center',
    end: ()=>"+="+document.querySelector('.c').offsetWidth,
    markers: true,
    toggleActions: "restart pause resume reset"
  },
  x: 700,
  rotate: 360,
  duration: 3,
  ease: 'bounce'
})