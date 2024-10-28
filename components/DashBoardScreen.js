import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DashBoardScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <View>
          <Text style={styles.text}>Welcome back,</Text>
          <Text style={styles.text}>Alex</Text>
        </View>
        <Image source={require('../assets/ProfilePic.png')} />
      </View>
      <Image style={{margin: 10}} source={require('../assets/banner.png')} />
      <Text style={styles.text}>Punch In</Text>
      <View style={styles.punchInContainer}>
        <View style={styles.punchInTopContainer}>
          <Text
            style={{
              fontWeight: '500',
              color: '#fff',
              letterSpacing: 2,
              fontSize: 14,
            }}>
            Punch In Time
          </Text>
          <Text
            style={{
              fontWeight: '700',
              color: '#fff',
              letterSpacing: 2,
              fontSize: 27,
            }}>
            09:00 a.m.
          </Text>
        </View>
        <View style={styles.punchInBottomContainer}>
          <Text style={{fontWeight: '600', lineHeight: 17, fontSize: 15}}>
            Total hours worked
          </Text>
          <Text style={{fontWeight: '600', lineHeight: 17, fontSize: 15}}>
            01:25
          </Text>
        </View>
      </View>
      <Text style={styles.text}>Punch Out</Text>
      <View style={styles.punchInContainer}>
        <View style={styles.punchInTopContainer}>
          <Text
            style={{
              fontWeight: '500',
              color: '#fff',
              letterSpacing: 2,
              fontSize: 14,
            }}>
            Punch Out Time
          </Text>
          <Text
            style={{
              fontWeight: '700',
              color: '#fff',
              letterSpacing: 2,
              fontSize: 27,
            }}>
            06:00 a.m.
          </Text>
        </View>
        <View style={styles.punchInBottomContainer}>
          <Text style={{fontWeight: '600', lineHeight: 17, fontSize: 15}}>
            Total hours worked
          </Text>
          <Text style={{fontWeight: '600', lineHeight: 17, fontSize: 15}}>
            07:00
          </Text>
        </View>
      </View>

      <Pressable onPress={() => navigation.navigate('QRScreen')}>
        <Image
          style={{alignSelf: 'center', top: 135}}
          source={require('../assets/ScanIcon.png')}
        />
      </Pressable>
    </View>
  );
};

export default DashBoardScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 10,
  },
  text: {
    fontWeight: '700',
    fontSize: 15,
    color: '#000',
  },
  punchInContainer: {
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  punchInTopContainer: {
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#827EB8',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  punchInBottomContainer: {
    width: '100%',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ECE1FF',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    flexDirection: 'row',
  },
});
