import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </div>
    </div>
  );
}

export default App;
