import { useState, useEffect } from 'react';
import { BsPersonWorkspace } from "react-icons/bs";
import { IoIosInformationCircle } from "react-icons/io";
import { motion } from 'framer-motion';
import clsx from 'clsx';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('landing-section');

  // 1. Scroll without changing URL
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 2. Track scroll position
  useEffect(() => {
    const sections = ['landing-section', 'experience-section'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: 'landing-section', icon: <IoIosInformationCircle /> },
    { id: 'experience-section', icon: <BsPersonWorkspace /> },
  ];

  return (
    <nav className={styles.navbar}>
      <ul className={styles.linkSection}>
        {navItems.map((item) => (
          <li 
            key={item.id} 
            className={clsx(
              styles.linkItem, 
              activeSection === item.id && styles.linkItemActive
            )}
          >
            <a href={`#${item.id}`} onClick={(e) => scrollToSection(e, item.id)}>
              {item.icon}
            </a>

            {/* This creates the sliding border effect */}
            {activeSection === item.id && (
              <motion.div 
                layoutId={'activeBorder'} 
                className={styles.activeBorderLine}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};