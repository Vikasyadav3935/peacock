import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home'
import Chat from '../Screens/Chat'
import Profile from '../Screens/Profile'
import Icon from 'react-native-vector-icons/Ionicons';
import StackNavigator from './StackNavigator';

const TabNavigator = () => {
    const Tab=createBottomTabNavigator();
 
   
      const getTabBarIcon = (iconName) => ({ color, size }) => (
        <Icon name={iconName} color={color} size={size} />
      );
    


  return (
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'chatbox' : 'chatbox-outline';
          }else if (route.name === 'Profile') {
            iconName = focused ? 'happy' : 'happy-outline';
          }

          return getTabBarIcon(iconName)({ color, size });
        },
      })}
    
    
    >
     <Tab.Screen   name='Home'  component={StackNavigator} options={{headerShown:false}}/> 
     <Tab.Screen   name='Chat' component={Chat} options={{headerShown:false}}/> 
     <Tab.Screen   name='Profile' component={Profile} options={{headerShown:false}}/>   
    </Tab.Navigator>
    </NavigationContainer>
  )

}

export default TabNavigator