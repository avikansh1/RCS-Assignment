import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';

const Timer = ({onFinish}) => {
  const [timeLeft, setTimeLeft] = useState(1800); // Example: 1800 seconds (30 minutes)

  useEffect(() => {
    if (timeLeft === 0) {
      onFinish();
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId); // Clean up interval on component unmount
  }, [timeLeft]);

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <View>
      <Text>Time Left: {formatTime(timeLeft)}</Text>
    </View>
  );
};

export default Timer;
