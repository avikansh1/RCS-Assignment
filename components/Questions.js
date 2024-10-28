import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';

const Questions = ({questions, answers, setAnswers}) => {
  const handleSelectAnswer = (questionId, answer) => {
    setAnswers({
      ...answers,
      [questionId]: answer,
    });
  };

  const renderQuestion = ({item}) => (
    <View key={item.id} style={{marginVertical: 10}}>
      <Text style={{fontSize: 18, color: 'black'}}>{item.question}</Text>
      {item.options.map(option => (
        <TouchableOpacity
          key={option}
          onPress={() => handleSelectAnswer(item.id, option)}
          style={{
            backgroundColor:
              answers[item.id] === option ? 'lightgreen' : 'lightgray',
            padding: 10,
            marginVertical: 5,
            borderRadius: 5,
          }}>
          <Text style={{color: 'black'}}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <FlatList
      data={questions}
      renderItem={renderQuestion}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default Questions;
