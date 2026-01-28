// First Animation 
gsap.to("#card1", {
  opacity: 1,
  duration: 5,
  scale: 1,
  onComplete: ()=>{
    gsap.to('#card1', {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 0.5
    })
  }
});
// Second Animation
gsap.to("#card2", {
  skewX: 15,
  repeat: -1,
  yoyo: true,
  duration: 5,
})