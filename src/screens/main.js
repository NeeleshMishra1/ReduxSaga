import React, { startTransition, useEffect } from "react";
import { Text, View ,StyleSheet} from "react-native";
import { AppNavigation } from "../navigation/appNavigation";
import { useDispatch, useSelector } from "react-redux";
import { addMyProduct } from "../reduxToolKit/productSlice";

const items = [
    {
        id: 1,
        name: "Bata",
        image: require('/Users/user/useeffect/src/screens/pumaimage.jpg'),
        price: 2500,
        qty: 0,
    },
    {
        id: 2,
        name: "Redtap",
        image: require('/Users/user/useeffect/src/screens/pumaimage.jpg'),
        price: 2000,
        qty: 0,
    },
    {
        id: 3,
        name: "Addidas",
        image: require('/Users/user/useeffect/src/screens/pumaimage.jpg'),
        price: 3000,
        qty: 0,
    },
    {
        id: 4,
        name: "Nike",
        image: require('/Users/user/useeffect/src/screens/pumaimage.jpg'),
        price: 1000,
        qty: 0,
    },
    {
        id: 5,
        name: "Puma",
        image: require('/Users/user/useeffect/src/screens/pumaimage.jpg'),
        price: 5000,
        qty: 0,
    }
];

 export const  Main=()=>{

    const dispatch=useDispatch();
    useEffect(()=>{
        items.map(items=>{
            dispatch(addMyProduct(items));
        })
    },[])
    return(
        <AppNavigation/>
    )
}

const style= StyleSheet.create({
    main:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }
})