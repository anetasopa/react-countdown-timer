import { useEffect, useState } from 'react';
import image from '../Images/timer.png';
import styles from './component.module.css';
import Header from './Header/Header';
import Timer from './Timer/Timer';

// const holidayTime = new Date('Tuesday August 01 2023 12:12:12');

function Component() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = 'August, 01, 2023';

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    const deadlineTime = new Date(deadline);

    console.log({
      'Date.parse(deadline)': deadlineTime.getHours(),
      'Date.now()': new Date().getHours(),
    });

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);
    return () => clearInterval(interval);
  }, []);

  // const data = new Date();

  // const monthNames = [
  //   'January',
  //   'February',
  //   'March',
  //   'April',
  //   'May',
  //   'June',
  //   'July',
  //   'August',
  //   'September',
  //   'October',
  //   'November',
  //   'December',
  // ];

  // const dayNames = [
  //   'Sunday',
  //   'Monday',
  //   'Tuesday',
  //   'Wednesday',
  //   'Thursday',
  //   'Friday',
  //   'Saturday',
  // ];
  // const dayName = dayNames[data.getDay()];
  // const monthName = monthNames[data.getMonth()];

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTime(getTime());
  //   }, 1000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <div className={styles.container}>
      <img className={styles.img} alt="img" src={image} />
      <Header />
      <Timer
        // monthName={monthName}
        // dayName={dayName}
        // month={time}
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    </div>
  );
}

export default Component;
