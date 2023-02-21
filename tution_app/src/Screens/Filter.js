import { View, Text,StyleSheet } from 'react-native'
import React ,{useState} from 'react';
import {Pressable} from '@react-native-material/core';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from '@react-native-community/checkbox';
import Checkbox from '../Components/Checkbox';
const Filter = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);


  return (
  <View style={{flex:1}}>
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


<View style={{flexDirection:'row'}}>
    <View style={{width:'50%',}}>
      <Pressable style={styles.text}>
       <Text>
       Class & Section
       </Text>

      </Pressable>
      <Pressable style={styles.text}>
      <Text>
         Instalments
        </Text>
      </Pressable>
      <Pressable style={styles.text}>
      <Text>
        Route and Stop
        </Text>
      </Pressable>
      <Pressable style={styles.text}>
      <Text>
        Components
        </Text>
      </Pressable>
      
    </View>
    <View style={{width:'50%',alignItems:'center'}}>
        <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'100%'}}>
    <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
  <Text>1st</Text>
  </View>
   <Checkbox grade={'2nd'} />
   <Checkbox grade={'3rd'} />
   <Checkbox grade={'4th'} />
   <Checkbox grade={'5th'} />
   <Checkbox grade={'6th'} />
   <Checkbox grade={'7th'} />
    </View>
    

  


   
</View>
<View style={{justifyContent:'flex-end',flexDirection:'row',width:'60%',alignSelf:'center',marginTop:20}}>
    <Pressable style={{width:'50%',borderWidth:1,justifyContent:'center',alignItems:'center',borderRadius:4}}>
     <Text>Cancel</Text>
    </Pressable>
    <Pressable style={{width:'50%',borderWidth:1,justifyContent:'center',alignItems:'center',marginHorizontal:10,borderRadius:4,backgroundColor:'orange'}}>
    <Text style={{padding:10}}>Apply</Text>
    </Pressable>
</View>


  </View>
  )
}

export default Filter;

const styles=StyleSheet.create({
    text:{
       padding:15,
       marginHorizontal:5
    }
})