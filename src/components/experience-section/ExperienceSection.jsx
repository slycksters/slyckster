import { motion } from 'framer-motion';
import { Experience, Projects } from './components';
import styles from './ExperienceSection.module.css';

const ExperienceSection = () => {
  return (
    <motion.section
      id={'experience-section'}
      className={styles.experienceSection}
      // 1. Starting state (Hidden)
      initial={{ opacity: 0, y: 30 }}
      // 2. State when scrolled into view
      whileInView={{ opacity: 1, y: 0 }}
      // 3. Animation settings
      transition={{ duration: 0.8, ease: 'easeOut' }}
      // 4. Configuration: once: false makes it re-animate every time
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <Experience />

          <Projects />
        </div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
