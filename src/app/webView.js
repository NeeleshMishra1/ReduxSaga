import React, { useEffect, useState } from "react";
import { StyleSheet,  View ,} from "react-native";
import { WebView } from 'react-native-webview';


const Webview2=()=>{

    return(
        <View style={style.main}>
        <WebView source={{uri:"https://openai.com/index/gpt-4/"}}/>
        </View>
    )
}
export default Webview2;

const style = StyleSheet.create({
    main: {
        flex: 1, 
    },
});

