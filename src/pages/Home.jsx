import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import About from "../components/About";
import Projects from "../components/Project";
import Contact from "../components/Contact";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />  
      <Skills />
      <About />
      <Projects />
      <Contact  />
    </div>
  );
};

export default Home; 
