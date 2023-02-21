import { View, Text ,StyleSheet, ScrollView} from 'react-native'
import React,{useState,useEffect} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {Pressable} from '@react-native-material/core';
import firestore from '@react-native-firebase/firestore';
const NextCard = () => {

    const [tution,setTution]=useState(false);
  
    const [data,setData]=useState([]);

    const getdata=()=>{
   firestore()
  .collection('fees')
  .get()
  .then(querySnapshot => {
     let arr=[];

    querySnapshot.forEach(documentSnapshot => {
      console.log( documentSnapshot.data());
      arr.push(documentSnapshot.data())
    });
    setData(arr);

  });
    }

    useEffect(()=>{
   getdata();
    },[])

 console.log(data);
  return (
   <View style={styles.card}>
   <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{flexDirection:'row'}}>
         <FontAwesome name='dollar' size={17}  />
        <Text>Fee Collection</Text>
        </View>
          <Text>₹8,23,34,54</Text>
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
            <Pressable onPress={()=>setTution(true)} >
        <View
         style={[!tution?{padding:10}:styles.focus]}>
          <Text style={[tution?{color:'orange'}:'']}>Tution Payment 1</Text>
        </View>
        </Pressable>
       
        <Pressable  onPress={()=>setTution(false)}>
        <View style={[tution?{padding:10}:styles.focus]}>
          <Text>Tution Payment 2</Text>
        </View>
        </Pressable>
      </View>
      
      <View style={{borderWidth:1,
        width:200,
        height:200,
        alignSelf:'center',
        borderRadius:100,justifyContent:'center',
        backgroundColor:'#D78602'
        }}>
            <View style={{borderWidth:1,
        width:170,
        height:170,
        alignSelf:'center',
        borderRadius:85,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
        }}>
            
            <Text style={{color:'black',fontSize:35}}>
           { tution?data[0]?.tution1+"K":data[0]?.tution2+ "K"}
            </Text>


      </View>
       




      </View>

   </View>
  )
}

export default NextCard;

const styles=StyleSheet.create({
    card:{
        borderWidth:1,
        marginTop:15,
        width:'90%',
        alignSelf:'center',
        padding:10,
        borderRadius:8

    },
    focus:{
        borderBottomWidth: 2,
        borderBottomColor: 'darkorange',
        padding:10
    }
})