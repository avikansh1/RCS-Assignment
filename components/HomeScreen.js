import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ChickList from 'react-native-vector-icons/MaterialCommunityIcons';
import Clock from 'react-native-vector-icons/Feather';
import Book from 'react-native-vector-icons/FontAwesome5';
import Check from 'react-native-vector-icons/FontAwesome5';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <ChickList
          name="clipboard-check-multiple-outline"
          size={100}
          color="#004CDF"
        />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.mainText}>Your Test Is Ready</Text>
        <Text style={styles.subText}>Your Exam has Successfully Generated</Text>
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.row}>
          <Text style={styles.courseText}>React Native</Text>
          <Text style={styles.difficultyText}>Hard</Text>
        </View>
        <View style={styles.marginTop}>
          <Text style={styles.subInfoText}>React Native, Javascript</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.row1}>
            <Clock name="clock" size={30} color="#004CDF" />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Time allowed</Text>
              <Text style={styles.cardSubtitle}>30 Min</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.rowMargin}>
            <Book name="book-open" size={30} color="#004CDF" />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Number Of Questions</Text>
              <Text style={styles.cardSubtitle}>30 </Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.rowMargin}>
            <Check name="check-square" size={30} color="#004CDF" />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Total Marks</Text>
              <Text style={styles.cardSubtitle}>30</Text>
            </View>
          </View>
          <View style={styles.divider} />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('ExamScreen')}
          style={styles.button}>
          <Text style={styles.buttonText}>Start Your Test</Text>
        </TouchableOpacity>

        <View style={styles.shareCard}>
          <Text style={styles.shareTitle}>Share & Challenge</Text>
          <Text style={styles.shareSubtitle}>
            Challenge your Friends by simply sharing a link to this test
          </Text>

          <View style={styles.shareButton}>
            <Text style={styles.shareButtonText}>Copy Exam Link</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  iconWrapper: {
    marginTop: 10,
  },
  textWrapper: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    padding: 2,
  },
  mainText: {
    fontSize: 20,
    color: '#000',
    fontWeight: '500',
  },
  subText: {
    fontSize: 15,
    color: '#919CA8',
    fontWeight: '700',
  },
  contentWrapper: {
    backgroundColor: '#F1f1f1',
    width: '100%',
    height: 500,
    flex: 4,
    padding: 10,
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row1: {
    flexDirection: 'row',
  },
  courseText: {
    fontSize: 20,
    color: '#000',
  },
  difficultyText: {
    fontSize: 20,
    color: 'red',
    fontWeight: '500',
    alignSelf: 'flex-end',
  },
  marginTop: {
    marginTop: 5,
  },
  subInfoText: {
    fontSize: 15,
    color: '#000',
  },
  card: {
    backgroundColor: '#FFFFFE',
    width: '100%',
    marginTop: 20,
    height: 250,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'space-around',
  },
  cardContent: {
    marginLeft: 15,
  },
  cardTitle: {
    fontWeight: '500',
    color: 'black',
  },
  cardSubtitle: {
    fontSize: 15,
    fontWeight: '900',
    color: 'black',
    alignSelf: 'flex-start',
  },
  divider: {
    borderBottomColor: '#EDF0F4',
    width: '100%',
    borderWidth: 1,
    marginTop: 10,
  },
  rowMargin: {
    flexDirection: 'row',
    marginTop: 15,
  },
  button: {
    width: '100%',
    padding: 10,
    backgroundColor: '#004CDF',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '900',
    color: '#ffffff',
  },
  shareCard: {
    width: '100%',
    backgroundColor: '#fff',
    height: 180,
    marginTop: 20,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'space-evenly',
  },
  shareTitle: {
    fontSize: 25,
    fontWeight: '600',
    color: '#000',
  },
  shareSubtitle: {
    fontSize: 15,
    fontWeight: '400',
    color: '#000',
  },
  shareButton: {
    padding: 10,
    alignContent: 'center',
    alignSelf: 'center',
    width: '100%',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#EFF5FE',
  },
  shareButtonText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#3166E2',
  },
});
