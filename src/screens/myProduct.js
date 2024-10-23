import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { addProductToMyCart } from "../reduxToolKit/cartslice";
import { useNavigation } from "@react-navigation/native";


export const Product = () => {

    const myproduct = useSelector(state => state.product);
    const mycart = useSelector(state => state.cart);

    console.log('add product display', mycart)

    const dispatch=useDispatch();

    const getTotal = () => {
        return mycart.reduce((total, item) => {
            return total + (item.qty * item.price);
        }, 0);
    };


    const navigation=useNavigation();

    return (
        <View style={style.main}>
            <View style={style.header}>
                <Text style={{ fontSize: 22, fontWeight: '700' }}>Redux Toolkit Demo</Text>
            </View>
            <FlatList
                data={myproduct}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <View style={{ width: "90%", height: 120, alignSelf: "center", marginTop: 10, flexDirection: "row", backgroundColor: "#edf4ff", borderRadius: 10, padding: 10, }}>
                            <Image source={item.image} style={{ width: 100, height: 100 }} />
                            <View style={{ marginLeft: 10, justifyContent: "center" }}>
                                <Text style={{ fontSize: 18, fontWeight: '600' }}>{item.name}</Text>
                                {item.price && <Text style={{ fontSize: 16, color: "green", paddingTop: 5 }}>Price: ${item.price}</Text>}
                                <View style={{ flexDirection: "row" }}>
                                    {item.qty == 0 ? (
                                        <TouchableOpacity style={{ backgroundColor: "green", height: 40, justifyContent: "center", borderRadius: 10, padding: 5, }} onPress={() => dispatch(addProductToMyCart(item))}>
                                            <Text style={{ color: "white", fontSize: 18 }}>Add to cart</Text>
                                        </TouchableOpacity>
                                    ) : (
                                        <>
                                            <TouchableOpacity style={{ backgroundColor: "red", height: 40, justifyContent: "center", borderRadius: 10, padding: 5, marginLeft: 10, }}>
                                                <Text style={{ color: "white", fontSize: 18 }}> - </Text>
                                            </TouchableOpacity>
                                            <Text style={{ margin: 10, fontSize: 18, fontWeight: 600 }}>{'0'}</Text>
                                            <TouchableOpacity style={{ backgroundColor: "red", height: 40, justifyContent: "center", borderRadius: 10, padding: 5, marginLeft: 10, }}>
                                                <Text style={{ color: "white", fontSize: 18 }}> + </Text>
                                            </TouchableOpacity>
                                        </>
                                    )}
                                </View>
                            </View>
                        </View>
                    );
                }}
            />
            {mycart.length>0?(
            <View>
             <View style={style.cartheader1}>
                <View>
                <Text style={{ fontSize: 22, fontWeight: '400' }}>{'add item'+'('+mycart.length+')'}</Text>
                <Text style={{ fontSize: 22, fontWeight: '400' }}>{'Total:'+getTotal()}</Text>
                </View>
                <TouchableOpacity style={{margin:20,backgroundColor:"green",padding:5, borderRadius:10,}} onPress={() => navigation.navigate('cart')}>
                    <Text style={{ fontSize: 22, fontWeight: '400' }}>View Cart</Text>
                </TouchableOpacity>
            </View>
            </View>
            ):null}
        </View>
    );
};

const style = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: 40,
    },
    header: {
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 20,
        justifyContent:"space-between"
    },
    cartheader1: {
        height: 80,
        paddingLeft: 40,
        backgroundColor:"#ccdffc",
        flexDirection:"row",
        justifyContent:"space-between"

    }
});

export default Product;
