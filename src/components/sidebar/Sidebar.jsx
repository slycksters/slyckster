import { faBarsProgress, faBook, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { myPhoto } from '../../assets';
import styles from './styles.module.css';

const Sidebar = () => {
    const links = [
        { path: '/about', label: 'About', icon: faCircleInfo },
        { path: '/experience', label: 'Experience', icon: faBook },
        { path: '/projects', label: 'Projects', icon: faBarsProgress },
    ];

    const slideToElement = (path) => {
        const element = document.getElementById(path);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={styles.sidebar}>
            <section className={styles.sidebarHeader}>
                <img className={styles.logo} src={myPhoto} alt="SXZ Logo" />
            </section>

            <div className={styles.sidebarListWrapper}>
                <div>
                    <ul className={styles.sidebarList}>
                            {links.map((link, index) => (
                                <li
                                    key={`link-icon-${index}`} className={styles.sidebarListItem}
                                    style={{ marginTop: index === 0 ? '2px' : null }}
                                    onClick={() => slideToElement(link.path)}
                                >
                                    <FontAwesomeIcon icon={link.icon} style={{ cursor: 'pointer' }} />
                                </li>
                            ))}
                        </ul>
                </div>
                <div className={styles.divider}></div>
                <div>
                    <ul className={styles.sidebarList}>
                        {links.map((link, index) => (
                            <li key={`link-${index}`} className={`${styles.sidebarListItem} ${styles.linkText}`}>
                                <span
                                    className={styles.sidebarLink}
                                    onClick={() => slideToElement(link.path)}
                                >
                                    {link.label}
                                </span>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;