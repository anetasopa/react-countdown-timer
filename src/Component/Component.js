import { useEffect, useState } from 'react';
import image from '../Images/timer.png';
import styles from './component.module.css';
import Header from './Header/Header';
import Timer from './Timer/Timer';

function Component() {
  // set the default value
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = 'August, 01, 2023';

  const getTime = () => {
    // parse - converts the declared string deadline
    const time = Date.parse(deadline) - Date.now();
    // calculate values for variables
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  // get the timer to render after every second
  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <img className={styles.img} alt="img" src={image} />
      <Header />
      <Timer days={days} hours={hours} minutes={minutes} seconds={seconds} />
    </div>
  );
}

export default Component;
