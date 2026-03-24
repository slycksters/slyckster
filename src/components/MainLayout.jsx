import ExperienceSection from './experience-section/ExperienceSection';
import LandingSection from './landing-section/LandingSection';
import { Navbar } from './navbar/Navbar';

const MainLayoutComponent = () => {
  return (
    <main className={'position-relative'}>
      <LandingSection />
      <ExperienceSection />

      <Navbar />
    </main>
  );
};

export default MainLayoutComponent;