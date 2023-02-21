import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {Pressable} from '@react-native-material/core';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Simple from '../Components/Simple';
import Card from '../Components/Card';
import NextCard from '../Components/NextCard';

const FeeReport = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          marginVertical: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Pressable >
          <MaterialCommunityIcons
            name="arrow-left"
            size={30}
            style={{padding: 10}}
          />
        </Pressable>
        <Text style={{fontSize: 20, color: '#D78602'}}>Fee Report</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.sec}>
          <View
            style={{
              position: 'absolute',
              top: -10,
              left: 5,
              backgroundColor: 'white',
              paddingHorizontal: 9,
            }}>
            <Text
              style={{
                fontSize: 15,
              }}>
           Search
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="search" size={23} color="black" />
            <Text style={{marginHorizontal: 10}}>Search Student Name</Text>
          </View>
        </View>
        <TouchableOpacity
        onPress={()=>navigation.navigate('Filter')}
        >
          <MaterialCommunityIcons
            name="filter-outline"
            size={28}
            color={'#D78602'}
          />
        </TouchableOpacity>
      </View>

      <Simple />

      <Card />
      <NextCard/>
    </ScrollView>
  );
};

export default FeeReport;

const styles = StyleSheet.create({
  sec: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 4,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginRight: 10,
  },
});
