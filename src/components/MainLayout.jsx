import Experience from './experience/Experience';
import LandingSection from './landing-section/LandingSection';

const MainLayoutComponent = () => {
  return (
    <main>
      <LandingSection />
      <Experience />
    </main>
  );
};

export default MainLayoutComponent;