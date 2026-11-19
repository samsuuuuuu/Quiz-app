import { useEffect, useState } from 'react';

const Timer = ({ setIsOver }) => {
  const [leftTime, setLeftTime] = useState(15);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLeftTime((prev) => {
        return prev > 0 ? prev - 1 : 0;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (leftTime === 0) {
      setIsOver(true);
    }
  }, [leftTime, setIsOver]);

  const displayTime = `${Math.floor(leftTime / 60)
    .toString()
    .padStart(2, '0')}:${(leftTime % 60).toString().padStart(2, '0')}`;

  return <div>Time left: {displayTime}</div>;
};

export default Timer;
