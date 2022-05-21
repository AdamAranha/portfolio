import './fonts.css';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';



function App() {
  return (
    <div className="App">

      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />

    </div>
  );
}

export default App;
