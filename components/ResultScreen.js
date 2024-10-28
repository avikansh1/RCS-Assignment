import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Arrowleft from 'react-native-vector-icons/AntDesign';

const ResultScreen = ({route}) => {
  const navigation = useNavigation();

  const {score = 0, totalQuestions = 0} = route?.params || {};
  const passPercentage = 50;
  const percentage = (score / totalQuestions) * 100;
  const isPassed = percentage >= passPercentage;

  return (
    <View style={{padding: 20, alignItems: 'center'}}>
      <View style={{width: '100%', flexDirection: 'row'}}>
        {/* <TouchableOpacity onPress={() => navigation.goBack()}>
          <Arrowleft name="arrowleft" size={30} color="black" />
        </TouchableOpacity> */}
      </View>
      <Text style={{fontSize: 24, color: 'black'}}>
        Your Score: {score} / {totalQuestions}
      </Text>
      <Text style={{fontSize: 20, color: isPassed ? 'green' : 'red'}}>
        {isPassed ? 'Congratulations! You Passed!' : 'Sorry, You Failed!'}
      </Text>

      {/* Button to navigate to HomeScreen */}
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: '#004CDF',
          borderRadius: 5,
        }}>
        <Text style={{color: 'white', fontSize: 18}}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResultScreen;
