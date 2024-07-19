import { useEffect } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import About from './pages/about/About';
import Experience from './pages/experience/Experience';
import Projects from './pages/projects/Projects';
import { createGalaxyBackground, createMouseTrail } from './helpers/animations';

function App() {

  useEffect(() => {
    createGalaxyBackground();
    createMouseTrail();  
  });

  return (
    <main className="main">
      <div class="background"></div>
      {/* Sidebar */}
      <div>
        <Sidebar />
      </div>

      {/* Content */}
      <div className="content">
        <About />
        <Experience />
        <Projects />
      </div>

      <div style={{ width: '200px' }}></div>
    </main>
  );
}

export default App;
