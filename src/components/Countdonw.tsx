import { useState, useEffect } from "react";
import styles from "../styles/components/Countdown.module.css"

let countdownTimeout: NodeJS.Timeout;

export function Countdonw() {
    const [time, setTime] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split(' ');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split(' ');

    function starCountdonw() {
        setIsActive(true);
    }

    function resetCountdonw() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(25 * 60);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 100);
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
        }

    }, [isActive, time]);

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <div>
                <button disabled className={styles.countdownButton}>
                    Ciclo encerado <span>✔</span>
                </button>
                    <div className={styles.countdownFinished}></div>
                </div>
            ) : (
                    <>
                        { isActive ? (
                            <button type="button" className={`${styles.countdownButton} ${styles.countdownbuttonActive}`} onClick={resetCountdonw}>
                                Abandonar ciclo
                            </button>
                        ) : (
                                <button type="button" className={styles.countdownButton} onClick={starCountdonw}>
                                    Iniciar um ciclo
                                </button>
                            )
                        }
                    </>
                )
            }



        </div>
    );
}