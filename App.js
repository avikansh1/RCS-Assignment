import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import HomeScreen from './components/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ExamScreen from './components/ExamScreen';
import Timer from './components/Timer';
import Questions from './components/Questions';
import ResultScreen from './components/ResultScreen';
import WelcomeScreen from './components/WelcomeScreen';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ExamScreen" component={ExamScreen} />
        <Stack.Screen name="Timer" component={Timer} />
        <Stack.Screen name="Questions" component={Questions} />
        <Stack.Screen name="ResultScreen" component={ResultScreen} /> */}
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
