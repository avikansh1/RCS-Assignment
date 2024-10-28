import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const WelcomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/onBording1.png')}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>Welcome User</Text>
          <Text style={styles.descriptionText}>
            Master cleanliness effortlessly with our management app
          </Text>
          <Text style={styles.descriptionText}>
            . Keep a track of your bookings
          </Text>
        </View>
        <Pressable
          onPress={() => navigation.navigate('LoginScreen')}
          style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  container: {
    // backgroundColor: 'yellow',
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
    padding: 20,
    justifyContent: 'space-between',
  },
  textContainer: {
    padding: 10,
    width: '100%',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 27,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 20,
    color: '#ffffff',
    // marginTop: 10,
  },
  button: {
    backgroundColor: '#fff',
    width: '95%',
    padding: 15,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    color: '#000',
  },
});
