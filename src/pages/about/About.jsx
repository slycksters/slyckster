import styles from './styles.module.css';

const About = () => {
    return (
        <div id={'/about'} className={styles.about}>
            <p className={styles.myName}>Ronald Madrid</p>
            <div className={'row'}>
                <div className={'col-3'}></div>
                <div className={'col-6'}>
                    <p className={styles.title}>Slyckster</p>

                    <p className={styles.jobTitle}>Web Developer</p>

                    <p className={styles.description}>
                        Hello, my name is Ronald. I am a web developer living in Tarlac, Philippines. I began coding in 2018 and enjoy
                        {' '}
                        learning new things in programming. In my free time, I like to play games such as <b>League of Legends</b>, <b>Mobile</b>
                        {' '}
                        <b>Legends</b>, <b>Roblox</b> and many others.
                    </p>

                    <p className={styles.quote}>Code is like humor. When you have to explain it, it's bad. - <small>Cory House</small></p>
                </div>
                <div className={'col-3'}></div>
            </div>
        </div>
    )
};

export default About;