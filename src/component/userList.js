import React, { useEffect, useRef, useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getUserList } from "../redux/action";

export const userList = () => {

    const dispatch = useDispatch();
    const userList = useSelector((state) => state.reducer)
    console.log(userList, 'sdfghjgfdsasdfghjxcvx');

    useEffect(() => {
        dispatch(getUserList())
    }, [])

    return (

        <View style={style.main}>
            <ScrollView>
                <View style={{ marginTop: 30, width: "100%", justifyContent: "center", alignItems: "center" }}>
                    {userList.length > 0 && userList[0].users ? (
                        userList[0].users.map((user) => (
                            <Text key={user.id} style={{ fontSize: 22 }}>
                                Age: {user.age}
                            </Text>
                        ))
                    ) : (
                        <Text>Loading...</Text>
                    )}
                </View>
            </ScrollView>
        </View>
    )
}


const style = StyleSheet.create({
    main: {
        flex: 1,


    }

})