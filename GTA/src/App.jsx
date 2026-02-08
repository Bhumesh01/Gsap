import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Hero from './sections/Hero';
import NavBar from './sections/NavBAr';
gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <main>
      <NavBar></NavBar>
      <Hero></Hero>
    </main>
  )
}

export default App
