import clsx from 'clsx';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import styles from './ExperienceContent.module.css';

export const ExperienceContent = ({
  category,
  onCategoryChange,
  jobData,
  totalJobs,
  activeJobIndex,
  setJobIndex,
}) => {
  const handlePrev = () => {
    setJobIndex((prev) => (prev - 1 + totalJobs) % totalJobs);
  };

  const handleNext = () => {
    setJobIndex((prev) => (prev + 1) % totalJobs);
  };

  return (
    <article className={styles.container}>
      <nav className={styles.tabGroup}>
        <button
          className={clsx(
            styles.tab,
            styles.tabLeft,
            category === 'professional' && styles.tabActive,
          )}
          onClick={() => onCategoryChange('professional')}
        >
          Professional Works
        </button>
        <button
          className={clsx(
            styles.tab,
            styles.tabRight,
            category === 'personal' && styles.tabActive,
          )}
          onClick={() => onCategoryChange('personal')}
        >
          Personal Works
        </button>
      </nav>

      <div className={styles.jobEntry}>
        <header className={styles.jobHeader}>
          <h5 className={styles.companyName}>{jobData.company}</h5>
          <a
            className={styles.hyperlink}
            href={jobData.url}
            target={'_blank'}
            rel={'noopener noreferrer'}
          >
            view website
          </a>
        </header>

        <header className={styles.jobSubHeader}>
          <p className={styles.jobRole}>{jobData.role}</p>
          <p className={styles.jobDuration}>{jobData.duration}</p>
        </header>

        <p className={styles.jobDescription}>{jobData.description}</p>
      </div>

      {/* 
          Always render the div. 
          Add 'navigationHidden' class if there is only 1 job to keep the space occupied.
      */}
      <div
        className={clsx(
          styles.jobNav,
          totalJobs <= 1 && styles.navigationHidden,
        )}
      >
        <button
          onClick={handlePrev}
          className={styles.navArrow}
          aria-label="Previous job"
        >
          <FaAngleLeft />
        </button>

        <div className={styles.dotsGroup}>
          {Array.from({ length: totalJobs }).map((_, i) => (
            <button
              key={i}
              onClick={() => setJobIndex(i)}
              className={clsx(
                styles.jobDot,
                i === activeJobIndex && styles.jobDotActive,
              )}
              aria-label={`Go to job ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className={styles.navArrow}
          aria-label="Next job"
        >
          <FaAngleRight />
        </button>
      </div>
    </article>
  );
};
