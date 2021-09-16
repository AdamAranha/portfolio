import logo from './logo.svg';
import './fonts.css';
import './App.css';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div className="App">

      <Header />
      <Intro />
      <Skills />
      <Projects />
      <Contact />

    </div>
  );
}

export default App;
