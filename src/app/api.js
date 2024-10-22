import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export const Apipage = () => {

    const [data,setData]=useState([]);

    const getApiData = async () => {
        //Api call
        const url = "https://jsonplaceholder.typicode.com/posts";
        let result = await fetch(url);
        result = await result.json();
        setData(result);
    }

    useEffect(() => {
        getApiData();
    }, [])

    return (
        
        <View style={style.main}>
            <Text style={{ fontSize: 22, paddingTop: 40, }}>
                Api call
            </Text>
            <ScrollView>
            {
                data.length ?
                data.map((item)=>
                    <View style={{marginVertical:20,backgroundColor:"#d2fcfb"}}>
                        <Text style={{ color:"red"}}>Id:{item.id}</Text>
                        <Text style={{ color:"green"}}>{item.title}</Text>
                        <Text style={{ color:"blue"}}>{item.body}</Text>
                    </View>

                )
                :null
            }
            </ScrollView>
        </View>
    )
}


const style = StyleSheet.create({
    main: {
        flex: 1,
        padding:20,
    
    },


})