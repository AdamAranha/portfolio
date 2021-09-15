import logo from './logo.svg';
import './fonts.css';
import './App.css';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';


function App() {
  return (
    <div className="App">

      <Header />
      <Intro />
      <Projects />

    </div>
  );
}

export default App;
