import { useState } from 'react';
import { EXPERIENCE_DATA } from '@data';
import { ExperienceContent, ExperiencePreview } from './components';
import styles from './ExperienceSection.module.css';

const Experience = () => {
  const [category, setCategory] = useState('professional'); // 'professional' or 'personal'
  const [jobIndex, setJobIndex] = useState(0);

  const activeJobs = EXPERIENCE_DATA[category];
  const currentJob = activeJobs[jobIndex];

  // Reset job index when switching category
  const handleCategoryChange = (newCat) => {
    setCategory(newCat);
    setJobIndex(0);
  };

  return (
    <section className={styles.experienceSection}>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className={'mb-15'}>
          <label className={styles.title}>Experience</label>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">  
          <ExperienceContent 
            category={category}
            onCategoryChange={handleCategoryChange}
            jobData={currentJob}
            totalJobs={activeJobs.length}
            activeJobIndex={jobIndex}
            setJobIndex={setJobIndex}
          />

          <ExperiencePreview 
            key={currentJob.id} // Key ensures carousel resets when job changes
            projects={currentJob.projects} 
          />
          
        </div>
      </div>
    </section>
  );
};

export default Experience;