import { PersonalInformation } from './components';
import { TechStack } from './components/tech-stack/TechStack';
import styles from './LandingSection.module.css';

const LandingSection = () => {
  return (
    <section className={styles.landingSection}>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* 1 column on mobile, 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-11 md:gap-12 items-center">
          {/* Column 1 */}
          <PersonalInformation />
          {/* Column 2 */}
          <TechStack />
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
