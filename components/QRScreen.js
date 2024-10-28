import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Arrow from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

const QRScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headers}>
        <Pressable onPress={() => navigation.goBack()}>
          <Arrow name="arrowleft" size={20} color="#000" />
        </Pressable>
        <Text style={styles.headerText}>Scan QR</Text>
      </View>

      <Image style={styles.image} source={require('../assets/ScanQR.png')} />

      <Text style={styles.scanText}>Scan QR to punch in</Text>
    </View>
  );
};

export default QRScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  headers: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  headerText: {
    marginLeft: 150,
    fontSize: 17,
    fontWeight: '900',
  },
  image: {
    marginTop: 230,
    alignSelf: 'center',
  },
  scanText: {
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 15,
  },
});
