import styles from './timer.module.css';

function Timer({ days, hours, minutes, seconds }) {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <div className={styles.block}>
          <span>{days < 10 ? '0' + days : days}</span>
          <span className={styles.containerName}>DAYS</span>
        </div>
        <span> : </span>
      </div>
      <div className={styles.contents}>
        <div className={styles.block}>
          <span>{hours < 10 ? '0' + hours : hours}</span>
          <span className={styles.containerName}>HOURS</span>
        </div>
        <span> : </span>
      </div>
      <div className={styles.contents}>
        <div className={styles.block}>
          <span>{minutes < 10 ? '0' + minutes : minutes}</span>
          <span className={styles.containerName}>MINUTES</span>
        </div>
        <span> : </span>
      </div>
      <div className={styles.contents}>
        <div className={styles.block}>
          <span>{seconds < 10 ? '0' + seconds : seconds}</span>
          <span className={styles.containerName}>SECONDS</span>
        </div>
      </div>
    </div>
  );
}

export default Timer;
