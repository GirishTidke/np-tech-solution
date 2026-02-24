import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import WhyChoose from './components/WhyChoose';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <WhyChoose />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
