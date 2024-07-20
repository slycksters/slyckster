import { b2bmeImage, encoreMonitoringImage, mediaPlanningImage, tvSchedulingImage } from '../../assets';
import styles from './styles.module.css';

const Projects = () => {
    const projects = [
        { name: 'Encore Monitoring', image: encoreMonitoringImage },
        { name: 'B2BME', image: b2bmeImage },
        { name: 'Tv Scheduling', image: tvSchedulingImage },
        { name: 'Media Planning', image: mediaPlanningImage },
    ];

    return (
        <div id={'/projects'} className={styles.projects}>
            <span className={styles.title}>Projects</span>

            <div className={`${styles.projectsList} row`}>
                {projects.map((project) => (
                    <div className={'col-12 col-sm-6 col-md-6 col-lg-3 p-4'}>
                        <div className={styles.projectItemWrapper}>
                            <div className={styles.projectItem}>
                                <div className={styles.projectItemImageWrapper}>
                                    <img className={styles.projectItemImage} src={project.image} alt={project.name} />
                                </div>                    
                                
                                <p className={styles.projectName}>{project.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Projects;