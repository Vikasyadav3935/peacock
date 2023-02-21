import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react';
import { Pressable } from "@react-native-material/core";

const Home = ({navigation}) => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>
     
     <Pressable     
      onPress={()=>navigation.navigate('Attendence')}
     style={{padding:10,backgroundColor:'#19c',borderRadius:4,elevation:3}}
     >
      <Text style={{color:'white'}}>Student Attendence</Text>
     </Pressable>
     
     <Pressable
       onPress={()=>navigation.navigate('FeeReport')}
     style={{padding:10,backgroundColor:'#19a',borderRadius:4,elevation:3,marginTop:25}}

     >
      <Text style={{color:'white'}}>Fee Report </Text>
     </Pressable>
    </View>
  )
}

export default Home