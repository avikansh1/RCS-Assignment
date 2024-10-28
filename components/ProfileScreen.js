import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Arrow from 'react-native-vector-icons/AntDesign';

const ProfileScreen = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      style={styles.mainComponent}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.headers}>
        <Pressable onPress={() => navigation.goBack()}>
          <Arrow name="arrowleft" size={20} color="#000" />
        </Pressable>
        <Text style={styles.headerText}>Profile</Text>
      </View>

      <Image
        style={styles.profileImage}
        source={require('../assets/ProfilePic.png')}
      />

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} placeholder="Alex Turner" />

        <Text style={styles.label}>Mobile</Text>
        <TextInput
          style={styles.input}
          placeholder="+89 2929 29292"
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="**********"
            secureTextEntry
          />
          <Arrow name="eyeo" size={20} color="#000" style={styles.eyeIcon} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  mainComponent: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  headers: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  headerText: {
    marginLeft: 130,
    fontSize: 17,
    fontWeight: '900',
  },
  profileImage: {
    alignSelf: 'center',
    height: 160,
    width: 160,
    borderRadius: 60,
    marginTop: 30,
  },
  inputContainer: {
    marginTop: 100,
    paddingHorizontal: 20,
  },
  label: {
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  input: {
    // borderWidth: 1,
    // borderColor: '#DDD',
    borderRadius: 8,
    padding: 10,
    // marginBottom: 20,
    backgroundColor: '#D2D2D2',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    backgroundColor: '#D2D2D2',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
  },
});
