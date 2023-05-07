import styles from './header.module.css';

function Header() {
  return (
    <div className={styles.container}>
      <h1>Countdown Timer</h1>
      <span className={styles.span}>
        Waiting time until the{' '}
        <b>
          <i>holidays</i>
        </b>
        ...
      </span>
    </div>
  );
}

export default Header;
