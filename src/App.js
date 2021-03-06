import './Styles/fonts.css';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">

    <Navbar/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    </div>
  );
}

export default App;
