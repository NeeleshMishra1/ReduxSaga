import React from "react";
import { Text, View ,StyleSheet} from "react-native";

 export const  Home=()=>{
    return(
        <View style={style.main}>
            <Text>Home</Text>
        </View>
    )
}

const style= StyleSheet.create({
    main:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }
})