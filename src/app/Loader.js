import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View ,ActivityIndicator, Button} from "react-native";


const Loader=()=>{

    const [show,setShow]=useState(false);

    const DisplayLoader=()=>{
         setShow(true)

         setTimeout(()=>{
            setShow(false)
         },5000);

         //api call in 3 sec
    }
    return(
       <View style={style.main}>
       <ActivityIndicator size={"large"} color={"blue"} animating={show}
       />
       <Button title="ActivityIndicator" onPress={DisplayLoader}/>
       </View>
    )
}
export default Loader;

const style= StyleSheet.create({
    main:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
   

})