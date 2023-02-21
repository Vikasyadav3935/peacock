import { View, Text, FlatList, SafeAreaView,StyleSheet } from 'react-native'
import React from 'react';


const DATA=['Fee Collection','Fee Due','Fee Concess'];
const Simple = () => {
    
  return (
    <SafeAreaView  style={{justifyContent:'center',borderBottomWidth:.8,alignItems:'center',marginHorizontal:20}}>
    <FlatList
      data={DATA}
     horizontal
      renderItem={({item}) => <View style={styles.view} >
  <Text >{item}</Text>
</View> }
      keyExtractor={item => item}

    />
  </SafeAreaView>
  )
}

export default Simple;

const styles=StyleSheet.create({
    view:{
        paddingHorizontal:20,
        marginTop:25,paddingBottom:15
        
    }
})

