import { AiFillInstagram } from 'react-icons/ai';
import { BiLogoGmail } from 'react-icons/bi';
import { FaGithub } from "react-icons/fa";
import clsx from 'clsx';
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

      {/* Social Links */}
      <div className={styles.socials}>
        <a
          className={clsx(styles.socialBtn, styles.gmail)}
          href="mailto:ronald.j.madrid@gmail.com"
        >
          <BiLogoGmail size={12} />
          <span style={{ marginTop: '3px' }}>Email</span> {/* Shortened text looks better at this size */}
        </a>

        <a
          aria-label={'Instagram'}
          className={clsx(styles.socialBtn, styles.instagram)}
          href={'https://www.instagram.com/slyckster05/'}
          target={'_blank'}
        >
          <AiFillInstagram size={14} />
        </a>

        <a aria-label={'Github'}
          className={clsx(styles.socialBtn, styles.github)}
          href={'https://github.com/slycksters'}
          target={'_blank'}>
            <FaGithub size={14} />
          </a>
      </div>

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
    </article>
  );
};
