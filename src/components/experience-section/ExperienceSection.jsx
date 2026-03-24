import { Experience, Projects } from './components';
import styles from './ExperienceSection.module.css';

const ExperienceSection = () => {
  return (
    <section className={styles.experienceSection}>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">  
          <Experience />

          <Projects />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;