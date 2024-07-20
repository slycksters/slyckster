import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './stytes.module.css';
import { faFacebook, faGithub, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { faVolumeHigh, faVolumeLow } from '@fortawesome/free-solid-svg-icons';
import { chibiKatarina } from '../../assets';

const Socials = ({ volume, setVolume }) => {
    const socialIcons = [
        { path: 'https://www.facebook.com/RJM.Sniper.X.05', icon: faFacebook },
        { path: 'https://github.com/slycksters', icon: faGithub },
        { path: 'https://www.tiktok.com/@zephy_ron', icon: faTiktok },
    ];
    const [hoveredIcon, setHoveredIcon] = useState();

    return (
        <div className={styles.socials}>
            <div className={'mb-5'} style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon
                    beat={hoveredIcon === (volume === 0 ? faVolumeLow : faVolumeHigh)}
                    icon={volume === 0 ? faVolumeLow : faVolumeHigh}
                    fontSize={'25px'}
                    onClick={() => setVolume(volume === 0 ? 0.04 : 0)}
                    onMouseEnter={() => setHoveredIcon(volume === 0 ? faVolumeLow : faVolumeHigh)}
                    onMouseLeave={() => setHoveredIcon()}
                />
            </div>

            {socialIcons.map((social, index) => (
                <div key={`socials-link-${index}`} className={'mb-5'} onMouseEnter={() => setHoveredIcon(social.icon)} onMouseLeave={() => setHoveredIcon()}>
                    <Link to={social.path} target={'_blank'} className={styles.socialLink}>
                        <FontAwesomeIcon icon={social.icon} fontSize={'25px'} beat={hoveredIcon === social.icon} />
                    </Link>
                </div>
            ))}

            <img className={styles.chibiKatarina} src={chibiKatarina} alt={'chibi-katarina'} />
        </div>
    )
};

export default Socials;