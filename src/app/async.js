import React, {  useRef } from "react";
import { Button, StyleSheet, Text,  View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Async = () => {

    const setData=async()=>{
        await AsyncStorage.setItem("user","Neelesh")
    }

    const getData=async()=>{
        const name=await AsyncStorage.getItem("name");
        console.log(name);
    }

    return (
        
        <View style={style.main}>
            <Text style={{ fontSize: 22, paddingTop: 40, }}>
                Async Storage with react Native
            </Text>
            <Button title="set Data" onPress={setData}/>
            <Button title="get Data"onPress={getData}/>
           
        </View>
    )
}


const style = StyleSheet.create({
    main: {
        flex: 1,
        padding:20,
    },
})