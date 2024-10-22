import React, {  useRef } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export const Ref = () => {
        
    const input=useRef();

    const updatButton=()=>{
      input.current.focus();
    }
   

    return (
        
        <View style={style.main}>
            <Text style={{ fontSize: 22, paddingTop: 40, }}>
                Ref(reference)
            </Text>
            <TextInput ref={input} style={style.input} placeholder="Enter Name"/>
            <TextInput style={style.input} placeholder="Enter password"/>
            <Button  title="Update Input" onPress={updatButton}/>
        </View>
    )
}


const style = StyleSheet.create({
    main: {
        flex: 1,
        padding:20,
    },
    input:{
        borderColor:"#c3faf8",
        borderWidth:2,
        margin:10,
        padding:10,   
    },
 
})