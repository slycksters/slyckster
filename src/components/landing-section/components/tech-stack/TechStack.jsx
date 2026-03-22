import styles from './TechStack.module.css';
import { TECH_STACK } from '../../../../data';

export const TechStack = () => {
  const iconSettings = { size: 24 };

  const renderStack = (stackArray) => (
    <ul className={styles.iconGrid}>
      {stackArray.map(({ name, Icon, colorClass }) => (
        <li key={name} aria-label={name} className={styles.card} title={name}>
          <Icon
            aria-hidden={'true'}
            className={styles[colorClass]}
            {...iconSettings}
          />
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-labelledby={'stack-title'} className={styles.techStack}>
      <h2 id="stack-title" className={styles.mainTitle}>
        My Stack
      </h2>

      <div className={styles.section}>
        <h3 className={styles.label}>Core Proficiencies</h3>
        {renderStack(TECH_STACK.core)}
      </div>

      <div className={styles.section}>
        <h3 className={styles.label}>Additional Technologies</h3>
        {renderStack(TECH_STACK.additional)}
      </div>
    </section>
  );
};
