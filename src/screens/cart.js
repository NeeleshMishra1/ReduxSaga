import React from "react";
import { Text, View, StyleSheet ,FlatList,Image,TouchableOpacity} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addProductToMyCart } from "../reduxToolKit/cartslice";
import { removeMyCartItem } from "../reduxToolKit/cartslice";

export const Cart = () => {


    const mycartItem = useSelector(state => state.cart);
    const dispatch=useDispatch();

    return (
        <View style={style.main}>
            <View style={style.header}>
                <Text style={{ fontSize: 22, fontWeight: '700' }}>Cart</Text>
            </View>
            <FlatList
                data={mycartItem}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <View style={{ width: "90%", height: 120, alignSelf: "center", marginTop: 10, flexDirection: "row", backgroundColor: "#edf4ff", borderRadius: 10, padding: 10, }}>
                            <Image source={item.image} style={{ width: 100, height: 100 }} />
                            <View style={{ marginLeft: 10, justifyContent: "center" }}>
                                <Text style={{ fontSize: 18, fontWeight: '600' }}>{item.name}</Text>
                                {item.price && <Text style={{ fontSize: 16, color: "green", paddingTop: 5 }}>Price: ${item.price}</Text>}
                                <View style={{ flexDirection: "row" }}>
                                    {item.qty==0?null:(
                                    <TouchableOpacity style={{ backgroundColor: "red", height: 40, justifyContent: "center", borderRadius: 10, padding: 5, marginLeft: 10, }} onPress={()=>{dispatch(removeMyCartItem(item))}}>
                                        <Text style={{ color: "white", fontSize: 18 }}> - </Text>
                                    </TouchableOpacity>
                                    )}
                                    {item.qty==0?null:(
                                    <Text style={{ margin: 10, fontSize: 18, fontWeight: 600 }}>{item.qty}</Text>
                                )}
                                 {item.qty==0?null:(
                                    <TouchableOpacity style={{ backgroundColor: "red", height: 40, justifyContent: "center", borderRadius: 10, padding: 5, marginLeft: 10, }} onPress={()=>{dispatch(addProductToMyCart(item))}}>
                                        <Text style={{ color: "white", fontSize: 18 }}> + </Text>
                                    </TouchableOpacity>
                                 )}
                                </View>
                            </View>
                        </View>
                    );
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: 40,
        padding:20,
    }
})