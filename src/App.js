import './App.scss';
import {Route,Routes} from 'react-router-dom'
import Home from './containers/home/index';
import About from './containers/about/index'
import Contact from './containers/contact/index'
import Protfolio from './containers/protfolio/index'
import Resume from './containers/resume/index'
import Skills from './containers/skills/index'
import Navbar from './components/navBar';
import { useLocation } from 'react-router-dom';
import Particle from './utils.js/particle';

function App() {
  const location = useLocation()
  
  const renderparticleJsinHomePage = location.pathname === '/'
  return (
    <div className='App'>
      {
        renderparticleJsinHomePage && <Particle />
      }
      
      <Navbar />
      <div className='App__main-page-content'>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact />}/>
        <Route path='/project' element={<Protfolio/>} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
      </div>
    
    </div>
  );
}

export default App;
