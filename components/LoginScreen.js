import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Mail from 'react-native-vector-icons/AntDesign';
import Phone from 'react-native-vector-icons/Ionicons';

const LoginScreen = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#CFCFDD', '#FFFFFF']} // Updated gradient colors
      style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>
          Please enter your mobile number and password below
        </Text>

        <Text style={styles.label}>Mobile</Text>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            // backgroundColor: 'red',
            alignItems: 'center',
            padding: 5,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#262161',
            marginTop: 10,
          }}>
          <Mail name="mail" size={20} />
          <TextInput
            style={styles.input}
            placeholder="Enter your mobile number"
          />
        </View>

        <Text style={styles.label}>Password</Text>

        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            width: '100%',
            // backgroundColor: 'red',
            alignItems: 'center',
            padding: 5,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#262161',
          }}>
          <Phone name="phone-portrait-outline" size={20} />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry
          />
        </View>

        <Pressable
          onPress={() => navigation.navigate('DashBoardScreen')}
          style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    padding: 20,
    justifyContent: 'center',
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 18,
    color: '#9C9C9C',
    marginBottom: 20,
    fontWeight: '400',
    marginTop: 10,
  },
  label: {
    fontWeight: 'bold',
    color: '#1F1B44',
    marginTop: 15,
  },
  input: {
    padding: 5,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#4A3D93',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
