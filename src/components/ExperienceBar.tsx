import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
    return (
    <header className={styles.experienceBar}>
        <span>0 XP</span>
        <div>
            <div style={{ width: '25%' }} />
           
            <span className={styles.currentExperience} style={{ left:'25%' }}>150 XP</span>
        </div>
        <span>600 XP</span>
    </header>
    );
}
