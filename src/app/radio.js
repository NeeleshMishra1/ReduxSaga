import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";


const Radio = () => {

    const data=[
        {
            id:1,
            name:"Neelesh"
        },
        {
            id:2,
            name:"kapil"
        },
        {
            id:3,
            name:"Rahul"
        },
        {
            id:4,
            name:"kapil"
        }
    ]


    const [setectRadio, setselectRadio] = useState(1);
    return (
        <View style={style.main}>
         {
            data.map((item,index)=>
                <TouchableOpacity onPress={()=>setselectRadio(item.id)}>
            <View style={style.radiowapper}>
                <View style={style.box}>
                    {
                        setectRadio === item.id ? <View style={style.radiobag}></View> : null
                    }

                </View>
                <Text style={style.RadioText}>{item.name}</Text>
            </View>
        </TouchableOpacity>)
         }
        </View>

    )
}
export default Radio;




const style = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    RadioText: {
        fontSize: 20,
        fontWeight: "500"
    },
    box: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 5,
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center"
    },
    radiowapper: {
        flexDirection: "row",
        alignItems: "center",
        margin: 10,
    },
    radiobag: {
        width: 23,
        height: 23,
        borderRadius: 15,
        backgroundColor: "black",
        margin: 2,

    }

})