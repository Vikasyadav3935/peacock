import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Screens/Home';
import Attendence from '../Screens/Attendence';
import FeeReport from '../Screens/FeeReport';
import Filter from '../Screens/Filter';

const StackNavigator = () => {
    const Stack=createStackNavigator();
  return (
     <Stack.Navigator>
        <Stack.Screen   name='Main Screen ' component={Home}/> 
        <Stack.Screen   name='Attendence' component={Attendence} options={{headerShown:false}}/> 
        <Stack.Screen   name='FeeReport' component={FeeReport} options={{headerShown:false}}/> 
        <Stack.Screen   name='Filter' component={Filter} options={{headerShown:false}}/> 
     </Stack.Navigator>

  )
}

export default StackNavigator;
