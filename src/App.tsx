import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import ProjectsGallery from './components/ProjectsGallery';
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <ProjectsGallery />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
