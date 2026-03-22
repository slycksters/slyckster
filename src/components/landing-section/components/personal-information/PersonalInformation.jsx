import { BIO_CONTENT } from '@data';
import styles from './PersonalInformation.module.css';

export const PersonalInformation = () => {
  return (
    <article className={styles.detailSection}>
      {/*  Personal Info Section */}
      <header className={styles.personalInformation}>
        <img
          alt={'Ronald (Slyckster) profile avatar'}
          className={styles.avatar}
          loading={'lazy'}
          src={BIO_CONTENT.avatar}
        />

        <div className={styles.infoStack}>
          <h1 className={styles.name}>
            {BIO_CONTENT.name}{' '}
            <span className={styles.aka}>— {BIO_CONTENT.aka}</span>
          </h1>

          <address className={styles.location}>{BIO_CONTENT.location}</address>

          <p className={styles.jobTitle}>{BIO_CONTENT.jobTitle}</p>
        </div>
      </header>

      {/*  Introduction Section */}
      <div className={styles.introduction}>
        {BIO_CONTENT.paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>

      {/*  Quote Section */}
      <figure className={styles.quote}>
        <blockquote className={styles.quoteText}>
          "{BIO_CONTENT.quote.text}"
        </blockquote>
        <figcaption className={styles.quoteAuthor}>
          — {BIO_CONTENT.quote.author}
        </figcaption>
      </figure>

      <button
        aria-label={`Learn more about ${BIO_CONTENT.name}`}
        className={styles.button}
        type={'button'}
      >
        Learn more
      </button>
    </article>
  );
};
