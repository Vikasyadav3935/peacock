import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const Card = () => {
  return (
    <View style={styles.card}>
       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{flexDirection:'row'}}>
         <FontAwesome name='dollar' size={17}  />
        <Text>Total Fee Receivable</Text>
        </View>
          <Text>8,23,34,54</Text>
       </View>
       <View style={{borderWidth:1,borderRadius:40/10,marginVertical:16}}>
        <View style={{height:10,backgroundColor:'#D78602'}}>

        </View>
       </View>

       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text>Tution Fees</Text>
        <Text>99.25%</Text>
       </View>
       <View style={{borderWidth:1,borderRadius:40/10,marginVertical:16}}>
        <View style={{height:10,backgroundColor:'#D78602',width:'2.5%',borderRadius:2}}>

        </View>
       </View>

       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text>Transport Fees</Text>
        <Text>2.5%</Text>
       </View>
       <View style={{borderWidth:1,borderRadius:40/10,marginVertical:16}}>
        <View style={{height:10,borderRadius:2}}>

        </View>
       </View>
       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text>Fine Fees</Text>
        <Text>0.00%</Text>
       </View>

      </View>
  )
}

export default Card;

const styles=StyleSheet.create({
    card:{
        borderWidth:1,
        marginTop:15,
        width:'90%',
        alignSelf:'center',
        padding:10,
        borderRadius:8
      }
})