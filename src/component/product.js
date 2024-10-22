import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart,removeFromeCart } from "../redux/action";



export const Product = (props) => {
    const item = props.item;

    const dispactch = useDispatch();

    const cartItems = useSelector((state) => state.reducer);

    const [isAdded, setAdded] = useState(false);


    const handleAddtoCart = (item) => {
        dispactch(addToCart(item));
    }

    const handleRemoveToCart=(item)=>{
        dispactch(removeFromeCart(item.name));
    }
    useEffect(() => {
        let result=cartItems.filter((element)=>{
            console.log();
            
           return element.name===item.name 
        });
        if(result.length){
            setAdded(true)
        }else {
          setAdded(false)
        }
    }, [cartItems])


    return (

        <View style={{ margin: 10, padding: 10, backgroundColor: "#c3faf8" }}>
            <View style={{ flexDirection: "row", backgroundColor: "#c3faf8" }}>
                <Image style={style.icon} source={item.image} />
                <Text style={{ fontSize: 22, padding: 10 }}>{item.price}</Text>
            </View>
            <Text style={{ fontSize: 22, paddingTop: 15 }}>{item.name}</Text>

            {
                isAdded ?
                    <TouchableOpacity style={style.button} onPress={() => { handleRemoveToCart(item) }}>
                        <Text style={{ fontSize: 22 }}>Remove to cart</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={style.button} onPress={() => { handleAddtoCart(item) }}>
                        <Text style={{ fontSize: 22 }}>Add to cart</Text>
                    </TouchableOpacity>
            }
        </View>
    )
}

const style = StyleSheet.create({

    icon: {
        width: 70,
        height: 70
    },
    button: {
        backgroundColor: "#66b5fa",
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        borderRadius: 10,
    }


})
