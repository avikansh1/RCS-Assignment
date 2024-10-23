import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ChickList from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        padding: 20,
      }}>
      <View style={{marginTop: 50}}>
        <ChickList
          name="clipboard-check-multiple-outline"
          size={100}
          color="#004CDF"
        />
      </View>
      <View
        style={{
          //   backgroundColor: 'red',
          width: '100%',
          alignItems: 'center',
          marginTop: 20,
          padding: 2,
        }}>
        <Text style={{fontSize: 20, color: '#000', fontWeight: '500'}}>
          Your Test Is Ready
        </Text>
        <Text style={{fontSize: 15, color: '#919CA8', fontWeight: '700'}}>
          Your Exam has Successfully Generated
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#F1f1f1',
          width: '100%',
          height: 500,
          flex: 4,
          padding: 10,
          borderRadius: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 20, color: '#000'}}>Neet</Text>
          <Text style={{fontSize: 20, color: 'red', fontWeight: '500'}}>
            Hard
          </Text>
        </View>
        <View style={{marginTop: 5}}>
          <Text style={{fontSize: 15, color: '#000'}}>
            Physic, Chemistry, Bio
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#FFFFFE',
            width: '100%',
            marginTop: 20,
            height: 250,
            borderRadius: 10,
            padding: 10,
            justifyContent: 'space-around',
          }}>
          <View style={{flexDirection: 'row'}}>
            <ChickList
              name="clipboard-check-multiple-outline"
              size={30}
              color="#004CDF"
            />
            <View style={{marginLeft: 15}}>
              <Text style={{fontWeight: '500'}}>Time allowed</Text>
              <Text style={{fontSize: 15, fontWeight: '900'}}>30 Min</Text>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: '#EDF0F4',
              width: '100%',
              borderWidth: 1,
              marginTop: 10,
            }}></View>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <ChickList
              name="clipboard-check-multiple-outline"
              size={30}
              color="#004CDF"
            />
            <View style={{marginLeft: 15}}>
              <Text style={{fontWeight: '500'}}>Time allowed</Text>
              <Text style={{fontSize: 15, fontWeight: '900'}}>30 Min</Text>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: '#EDF0F4',
              width: '100%',
              borderWidth: 1,
              marginTop: 10,
            }}></View>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <ChickList
              name="clipboard-check-multiple-outline"
              size={30}
              color="#004CDF"
            />
            <View style={{marginLeft: 15}}>
              <Text style={{fontWeight: '500'}}>Time allowed</Text>
              <Text style={{fontSize: 15, fontWeight: '900'}}>30 Min</Text>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: '#EDF0F4',
              width: '100%',
              borderWidth: 1,
              marginTop: 10,
            }}></View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('ExamScreen')}
          style={{
            width: '100%',
            padding: 10,
            backgroundColor: '#004CDF',
            borderRadius: 10,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 15, fontWeight: '900', color: '#ffffff'}}>
            Start Your Test
          </Text>
        </TouchableOpacity>

        <View
          style={{
            width: '100%',
            backgroundColor: '#fff',
            height: 180,
            marginTop: 20,
            borderRadius: 10,
            padding: 10,
            justifyContent: 'space-evenly',
          }}>
          <Text style={{fontSize: 25, fontWeight: '600', color: '#000'}}>
            Share & Challenge
          </Text>
          <Text style={{fontSize: 15, fontWeight: '400', color: '#000'}}>
            Challenge your Friends by simply sharing a link to this test
          </Text>

          <View
            style={{
              fontSize: 20,
              fontWeight: '800',
              // borderWidth: 1,
              padding: 10,
              alignContent: 'center',
              alignSelf: 'center',
              width: '100%',
              alignItems: 'center',
              borderRadius: 10,
              backgroundColor: '#EFF5FE',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '800',
                color: '#3166E2',
              }}>
              Copy Exam Link
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
