// import './Template4Home.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import { ThemeProvider } from './common/ThemeContext.jsx';


function Template4Home() {
  return (
    <ThemeProvider>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default Template4Home;