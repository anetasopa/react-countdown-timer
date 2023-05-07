import styles from './timer.module.css';

function Timer({ days, hours, minutes, seconds }) {
  return (
    <div className={styles.container}>
      <span>{days < 10 ? '0' + days : days} : </span>
      <span>{hours < 10 ? '0' + hours : hours} : </span>
      <span>{minutes < 10 ? '0' + minutes : minutes} : </span>
      <span>{seconds < 10 ? '0' + seconds : seconds}</span>
    </div>
  );
}

export default Timer;
