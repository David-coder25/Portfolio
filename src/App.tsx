import Nav from './components/Nav';
import Hero from './components/Hero';
import ValueStrip from './components/ValueStrip';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Approach from './components/Approach';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ background: '#06080f', color: '#eef0f8', overflowX: 'hidden' }}>
      <Nav />
      <main>
        <Hero />
        <ValueStrip />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
