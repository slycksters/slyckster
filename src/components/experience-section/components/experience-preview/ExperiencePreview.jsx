import { useState, useEffect, useRef } from 'react';
import { CiImageOff } from 'react-icons/ci';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import clsx from 'clsx';
import styles from './ExperiencePreview.module.css';

export const ExperiencePreview = ({ projects }) => {
  // 1. Setup clones for infinite loop
  const slides = [
    projects[projects.length - 1], // Clone of last
    ...projects,
    projects[0],                   // Clone of first
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 (the first real image)
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef(null);

  if (!projects || projects.length === 0) return null;

  const handleNext = () => {
    if (currentIndex >= slides.length - 1) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentIndex <= 0) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // 2. The "Magic" jump logic
  const handleTransitionEnd = () => {
    // If we reach the "First Item Clone" at the end
    if (currentIndex === slides.length - 1) {
      setIsTransitioning(false); // Turn off animation
      setCurrentIndex(1);        // Jump to real first item
    }
    // If we reach the "Last Item Clone" at the start
    if (currentIndex === 0) {
      setIsTransitioning(false); // Turn off animation
      setCurrentIndex(slides.length - 2); // Jump to real last item
    }
  };

  // Determine which dot is active
  const activeDot = currentIndex === 0 
    ? projects.length - 1 
    : currentIndex === slides.length - 1 
      ? 0 
      : currentIndex - 1;

  return (
    <div className={styles.previewContainer}>
      <div className={styles.mockupWrapper}>
        <div className={styles.browserFrame}>
          <div className={styles.carouselWindow}>
            <div 
              className={styles.slideTrack} 
              onTransitionEnd={handleTransitionEnd}
              style={{ 
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: isTransitioning ? 'transform 0.7s cubic-bezier(0.85, 0, 0.15, 1)' : 'none'
              }}
            >
              {slides.map((project, index) => (
                <div key={`${project.id}-${index}`} className={styles.slide}>
                  {!project.image ? (
                    <div className={styles.imageFallback}>
                      <CiImageOff size={48} />
                      <span className={styles.fallbackTitle}>{project.title}</span>
                    </div>
                  ) : (
                    <img src={project.image} alt={project.title} className={styles.previewImage} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={clsx(styles.controls, projects.length <= 1 && styles.navigationHidden)}>
          <button onClick={handlePrev} className={styles.navBtn}>
            <FaAngleLeft />
          </button>
          
          <div className={styles.dotsGroup}>
            {projects.map((_, i) => (
              <button 
                key={i} 
                onClick={() => {
                    setIsTransitioning(true);
                    setCurrentIndex(i + 1);
                }}
                className={clsx(styles.dot, i === activeDot && styles.dotActive)} 
              />
            ))}
          </div>

          <button onClick={handleNext} className={styles.navBtn}>
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};