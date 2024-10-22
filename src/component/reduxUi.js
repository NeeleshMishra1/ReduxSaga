import React, { useRef } from "react";
import { Button, StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Header } from "./header";
import { Product } from "./product";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const ReduxUi = ({navigation}) => {

    const product = [
        {
            name: "Nike",
            color: "white",
            price: 3000,
            image: require('/Users/user/useeffect/src/app/pumaimage.jpg')
        },
        {
            name: "puma",
            color: "blue",
            price: 4000,
            image: require('/Users/user/useeffect/src/app/pumaimage.jpg')
        },
        {
            name: "addidas",
            color: "black",
            price: 5000,
            image: require('/Users/user/useeffect/src/app/pumaimage.jpg')
        },
        {
            name: "sparx",
            color: "green",
            price: 1000,
            image: require('/Users/user/useeffect/src/app/pumaimage.jpg'),
        }
    ]


    return (

        <View style={style.main}>
            <Button title="user" onPress={()=>navigation.navigate("userList")}/>
              <Header />
            <Text style={{ fontSize: 22, paddingTop: 20, }}>
                UI for add to cart with Redux
            </Text>
            <ScrollView>
                {
                    product.map((item,index) => <Product item={item} index={index} />)
                }
            </ScrollView>
        </View>
    )
}


const style = StyleSheet.create({
    main: {
        flex: 1,
        padding: 20,
        paddingTop:0,
    },
    icon: {
        width: 70,
        height: 70
    }


})