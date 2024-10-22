
import React ,{useEffect, useRef, useState}from 'react';
import { View,Text, StyleSheet , TouchableOpacity, TextInput} from 'react-native';
import Radio from './src/app/radio';
import Loader from './src/app/Loader';

function effect() {
  const [value,valueSet]=useState(0);

  useEffect(()=>{
    console.log("neelesh")
  })
  useEffect(()=>{
    console.log("neelesh1")
  },[])
  useEffect(()=>{
    console.log("neelesh2")
  },[value])

  const ref=useRef();
  return (
      <View style={{flex:1,backgroundColor:"#acf9fa",justifyContent:"center",alignItems:"center"}}>
        <Text>{value}</Text>
        <TouchableOpacity onPress={()=>{valueSet(value+1)}}>
        <View style={{backgroundColor:"yellow",justifyContent:"center",alignItems:"center",marginTop:10,width:100,height:50,}}>
        <Text>increment</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{ref.current.clear();}}>
        <View style={{backgroundColor:"yellow",justifyContent:"center",alignItems:"center",marginTop:10,width:100,height:50,}}>
        <Text>decrement</Text>
      </View>
      </TouchableOpacity>
      <TextInput ref={ref} style={{backgroundColor:"white",justifyContent:"center",alignItems:"center",marginTop:10,width:200,height:50,}}>

      </TextInput>
      </View>
  );
}



export default effect;
