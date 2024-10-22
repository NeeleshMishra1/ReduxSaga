import React, { useState } from "react";
import { Button, Modal, StyleSheet, Text, View ,StatusBar,Platform} from "react-native";


const ModalP = () => {

    const [showModal, setShowModal] = useState(false);
    
    return (
        <View style={style.main}>
            <StatusBar
            backgroundColor="orange"/>
            <View style={style.buttonmain}>
                <Text style={{fontSize:22}}>platform:{Platform.OS}</Text>
                <Button title="openModal" onPress={() => setShowModal(true)} />
            </View>
            <Modal visible={showModal} transparent={true} animationType="side">
                <View style={style.modalview}>
                    <View style={style.modalcontainer}>
                        <Text >hi modal </Text>
                        <Button title="closeModal" onPress={() => setShowModal(false)} />
                    </View>
                </View>
            </Modal>
        </View>

    )
}
export default ModalP;


const style = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 30,
    },
    buttonmain: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    modalview: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    modalcontainer: {
        backgroundColor: "#d2fcfb",
        padding: 50,
        borderRadius: 10,
        shadowColor: "black",
        elevation: 10,
        justifyContent: "center",
        alignItems: "center"
    }
})