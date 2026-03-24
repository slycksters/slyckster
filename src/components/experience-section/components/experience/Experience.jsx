import { FaBriefcase } from 'react-icons/fa';
import { EXPERIENCES } from '@data';
import styles from './Experience.module.css';

export const Experience = () => {
  return (
    <section
      aria-labelledby={'experience-heading'}
      className={styles.experienceSection}
    >
      <h2 id={'experience-heading'} className={styles.sectionTitle}>
        <FaBriefcase
          aria-hidden={'true'}
          className={styles.experienceIconColor}
        />{' '}
        Experience
      </h2>

      <ol className={styles.timeline}>
        {EXPERIENCES.map((exp) => (
          <li key={exp.id} className={styles.timelineItem}>
            <article className={styles.jobCard}>
              <header className={styles.jobHeader}>
                <h3 className={styles.jobTitle}>{exp.title}</h3>
                <time dateTime={exp.periodIso} className={styles.jobPeriod}>
                  {exp.period}
                </time>
              </header>
              <p className={styles.jobDescription}>{exp.description}</p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
};
