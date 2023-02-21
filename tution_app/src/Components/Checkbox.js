import { View, Text } from 'react-native'
import React,{useState} from 'react';
import CheckBox from '@react-native-community/checkbox';

const Checkbox = ({grade}) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return (
    
        <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'100%',marginTop:10}}>
    <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
  <Text>{grade}</Text>
  </View>
  
   
  )
}

export default Checkbox