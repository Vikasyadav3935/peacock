import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Pressable} from '@react-native-material/core';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DropdownComponent from '../Components/Dropdown';
import List from '../Components/List';

const Attendence = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          marginVertical: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Pressable>
          <MaterialCommunityIcons
            name="arrow-left"
            size={30}
            style={{padding: 10}}
          />
        </Pressable>
        <Text style={{fontSize: 20,color:'#D78602'}}>Student Attendence</Text>
      </View>

      <DropdownComponent />

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
            Select Date
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <MaterialCommunityIcons
            name="calendar-outline"
            size={23}
            color="black"
          />
          <Text style={{marginHorizontal: 10}}>22-02-2023</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginVertical: 20,

          borderBottomWidth: 0.7,
          borderBottomColor: 'gray',
          alignSelf: 'center',
          width: '92%',
        }}>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: 'darkorange',
            padding: 10,
          }}>
          <Text style={{color: 'orange'}}>Total Students</Text>
        </View>

        <View style={{padding: 10}}>
          <Text>Status</Text>
        </View>
      </View>
      <View
        style={{
          width: '92%',
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text>List Of Students</Text>
          <Text>(27)</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <MaterialCommunityIcons
            name="filter-outline"
            size={28}
            color={'#D78602'}
          />
          <MaterialCommunityIcons
            name="pencil-outline"
            size={28}
            color={'#D78602'}
          />
        </View>
      </View>

      
      <List/>
    </View>
  );
};

export default Attendence;

const styles = StyleSheet.create({
  gen: {
    height: 38,
    padding: 10,
    marginHorizontal: 5,
    color: '#0009',
    fontWeight: '700',
  },
  view: {
    marginVertical: 10,
    height: 55,
  },
  sec: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 4,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    width: '92%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
});
