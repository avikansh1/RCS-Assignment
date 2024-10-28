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
import LoginScreen from './components/LoginScreen';
import DashBoardScreen from './components/DashBoardScreen';
import Home from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons
import User from 'react-native-vector-icons/AntDesign';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from './components/ProfileScreen';
import QRScreen from './components/QRScreen';

const App = () => {
  const Tab = createBottomTabNavigator();

  function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {backgroundColor: '#FFFFFF'},
          headerShown: false,
        }}>
        <Tab.Screen
          name="DashBoards"
          component={DashBoardScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Home name="home" color="#000" size={size} />
            ),
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <User name="user" size={20} color="#000" />
            ),
            headerShown: false,
          }}
        />
        {/* Add more tabs here if needed */}
      </Tab.Navigator>
    );
  }

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
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="DashBoardScreen" component={MyTabs} />
        <Stack.Screen name="QRScreen" component={QRScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
