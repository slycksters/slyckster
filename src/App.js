import { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import About from './pages/about/About';
import Experience from './pages/experience/Experience';
import Projects from './pages/projects/Projects';
import { createGalaxyBackground, createMouseTrail } from './helpers/animations';
import { swarmAnimaSquadMusic } from './assets';
import BackgroundMusic from './components/background-music/BackgroundMusic';
import Socials from './components/socials/Socials';

function App() {
  const [volume, setVolume] = useState(0.04);

  useEffect(() => {
    createGalaxyBackground();
    createMouseTrail();  
  });

  return (
    <main className="main">
      {/* Background */}
      <div className="background"></div>
      <BackgroundMusic src={swarmAnimaSquadMusic} volume={volume} />

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

      <div className="social">
        <Socials volume={volume} setVolume={setVolume} />
      </div>
    </main>
  );
}

export default App;
