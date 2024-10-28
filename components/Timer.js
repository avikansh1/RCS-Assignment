import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Arrowleft from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const Timer = ({onFinish}) => {
  const navigation = useNavigation();

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
    <View
      style={{
        width: '100%',
        // backgroundColor: '#004CDF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Arrowleft name="arrowleft" style={{color: 'black'}} size={30} />
      </TouchableOpacity>

      <Text style={{fontSize: 18, color: 'black'}}>
        Time Left: {formatTime(timeLeft)}
      </Text>
    </View>
  );
};

export default Timer;
