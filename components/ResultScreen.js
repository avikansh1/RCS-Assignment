import React from 'react';
import {View, Text} from 'react-native';

const ResultScreen = ({route}) => {
  // Ensure route and route.params exist, use default values if not passed
  const {score = 0, totalQuestions = 0} = route?.params || {};

  const passPercentage = 50;
  const percentage = (score / totalQuestions) * 100;
  const isPassed = percentage >= passPercentage;

  return (
    <View style={{padding: 20, alignItems: 'center'}}>
      <Text style={{fontSize: 24}}>
        Your Score: {score} / {totalQuestions}
      </Text>
      <Text style={{fontSize: 20, color: isPassed ? 'green' : 'red'}}>
        {isPassed ? 'Congratulations! You Passed!' : 'Sorry, You Failed!'}
      </Text>
    </View>
  );
};

export default ResultScreen;
