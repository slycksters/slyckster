import { FaProjectDiagram } from 'react-icons/fa';
import { PROJECTS } from '@data';
import styles from './Projects.module.css';

export const Projects = () => {
  return (
    <section
      aria-labelledby={'experience-heading'}
      className={styles.projectSection}
    >
      <h2 id={'experience-heading'} className={styles.sectionTitle}>
        <FaProjectDiagram
          aria-hidden={'true'}
          className={styles.projectIconColor}
        />{' '}
        Projects
      </h2>

      <ol className={styles.projects}>
        {PROJECTS.map((proj) => (
          <li key={proj.id} className={styles.projectItem}>
            <a href={proj.url} target={'_blank'}>
              <article className={styles.projectCard}>
                <header className={styles.projectHeader}>
                  <h3 className={styles.projectTitle}>{proj.title}</h3>
                  <time
                    dateTime={proj.periodIso}
                    className={styles.projectPeriod}
                  >
                    {proj.period}
                  </time>
                </header>

                <p className={styles.projectUrl}>{proj.url}</p>

                <p className={styles.projectDescription}>{proj.description}</p>
              </article>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
};
