import styles from "../styles/components/CompletedChallange.module.css";

export function CompletedChallange(){
    return(
        <div className={styles.completedChallengesContainer}>
           <span>Desafios Completos</span> 
           <span>5</span>
        </div>
    );
}