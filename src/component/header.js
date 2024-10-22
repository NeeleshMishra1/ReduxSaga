import React, { useEffect, useRef, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

export const Header = () => {

    const cartData = useSelector((state) => state.reducer)
    const [cartItem, setCartItem] = useState(0);
    useEffect(() => {
        console.log('length=>', cartData.length);
        setCartItem(cartData.length)
    })


    return (

        <View style={style.main}>
            <Text style={{ fontSize: 22, textAlign: "right" }}>cart:
                {cartItem}
            </Text>
        </View>
    )
}


const style = StyleSheet.create({
    main: {
        textAlign: "right",
        marginTop: 20,
        padding: 10,
        backgroundColor: "orange",
        justifyContent: "center",
    }

})