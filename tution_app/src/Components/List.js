import {View, Text,FlatList,TouchableOpacity,Image} from 'react-native';
import React, { useContext,useEffect,useState } from 'react';
import { AuthContext } from './ContextProvider';
import firestore from '@react-native-firebase/firestore';
const List = () => {
    const {user,setUser}=useContext(AuthContext);
    
    const [state,setState]=useState([]);
    
    useEffect(()=>{
    getData();
    },[user])
  const getData = () => {
    console.log(user)

    firestore()
    .collection('students')
    .where('class','==',user)
    .get()
    .then(querySnapshot => {
      
     let arr=[];
      querySnapshot.forEach(documentSnapshot => {
        // console.log(documentSnapshot.data());

     arr.push(documentSnapshot.data());
      });
      setState(arr);
    });
  };

 if(state.length==0){
    return <View>
     
    </View>
 }

console.log(state)

  return (

   <View>
    {state.map((el,i)=>(
        <View style={{width: '92%', alignSelf: 'center', flexDirection: 'row',marginTop:20}} key={i}>
        <View style={{width: '12%'}}>
          <View style={{alignSelf: 'center'}}>
            <Image
              source={{
                uri:el.image
              }}
              style={{width: 30, height: 30}}
            />
          </View>
        </View>
        <View style={{width:'68%',marginLeft:5}} >
          <Text>Rohit Sharma</Text>
          <View style={{flexDirection:'row'}}>
            <Text>Admission Id : </Text>
            <Text>145</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>Roll No. : </Text>
            <Text>34</Text>
          </View>
          <View style={{flexDirection:'row'}}>
          <Text>Father Name : </Text>
          <Text>Shressnath</Text>
          </View>
          
        </View>
        <View style={{width:"20%",}}
        >
            <View style={[el.presence=='true'?
            {width:10,height:10,backgroundColor:'green',alignSelf:'center',borderRadius:5}
            :
            {width:10,height:10,backgroundColor:'red',alignSelf:'center',borderRadius:5}
            ]}>

            </View>
            {el.presence =='true'?<Text style={{alignSelf:'center'}}>Present</Text>:<Text style={{alignSelf:'center'}}>Absent</Text>}
        </View>
      </View>
    ))}
   </View>
    
    
    
    
  )
};

export default List;
