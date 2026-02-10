import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
gsap.to('.a', {
  scrollTrigger: '.a',
  x: 700,
  rotate: 360,
  duration: 2,
  ease: 'expo'
})
gsap.to('.b', {
  scrollTrigger: '.b',
  x: 700,
  rotate: 360,
  duration: 2,
  ease: 'expo'
})
gsap.to('.c', {
  scrollTrigger: '.c',
  x: 700,
  rotate: 360,
  duration: 2,
  ease: 'expo'
})