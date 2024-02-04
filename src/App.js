import './App.scss';
import Home from './containers/home/index';
import About from './containers/about/index'
import Contact from './containers/contact/index'
import Protfolio from './containers/protfolio/index'
import Github from './containers/github/index'
import Skills from './containers/skills/index'
import Navbar from './components/navBar';
import "aos/dist/aos.css";
import Aos from "aos";
import { Link } from '@chakra-ui/react'
import Particle from './utils.js/particle';
import { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';

function App() {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <div className='App'>
      <CustomCursor />
      {
        // renderparticleJsinHomePage &&
        <Particle />
      }
      <div className='pointer'></div>

      <Navbar />
      <div className='App__main-page-content'>
        <Home />
        <About />
        <Skills />
        <Protfolio />
        <Github />
        <Contact />
        <div className='footer'>
          <p>💛💛Sejal Jaiswal💛💛</p>
        </div>
        <Link className="home-goto_top" data-aos="fade-left" href="#home">
          <div class="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span>
            <img src="https://media2.giphy.com/media/KZfAUL6c7G3Odb3uDf/source.gif" />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default App;
