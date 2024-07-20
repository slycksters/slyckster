import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.css';
import { faAngular, faBootstrap, faCss3, faFigma, faNodeJs, faGit, faGithub, faHtml5, faJs, faReact, faVuejs, faNpm } from '@fortawesome/free-brands-svg-icons';
import { faC } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Experience = () => {
    const skillIcons = [faHtml5, faCss3, faJs, faC, faBootstrap, faVuejs, faAngular, faReact, faGithub, faFigma, faGit, faNodeJs, faNpm];
    const [hoveredIcon, setHoveredIcon] = useState();

    return (
        <div id={'/experience'} className={styles.experience}>
            <span className={styles.title}>Experience</span>
            
            <div className={styles.informations}>
                <div className={styles.informationItem}>
                    <div>
                        <span className={styles.role}>Skill Stack</span>
                    </div>

                    <div style={{ height: '10px' }}></div>
                    
                    <div className={'row'}>
                        {skillIcons.map((icon, index) => (
                            <div key={`skill-stack-icon-${index}`} className={`${styles.skillBox} col-xs-4 col-sm-2 col-lg-1`} onMouseEnter={() => setHoveredIcon(icon)} onMouseLeave={() => setHoveredIcon()}>
                                <FontAwesomeIcon icon={icon} fontSize={'50px'} bounce={hoveredIcon === icon} />
                            </div>
                        ))}
                    </div>
                </div>                

                <div className={styles.informationItem}>
                    <div>
                        <span className={styles.role}>Op2mise <small> - Web developer</small></span>
                        <span className={styles.period}>2022 - Present</span>
                    </div>

                    <div style={{ height: '10px' }}></div>
                    
                    <p className={styles.description}>
                        I began my career at Op2mise as a Front End Developer and have since been involved in various projects,
                        {' '}
                        including Encore Monitoring, B2BME, TV Scheduling, and Media Planning. Over the years, I have honed my skills
                        {' '}
                        and progressed to become a Full Stack Developer. This is also my first company, which has significantly improved my social skills.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Experience;