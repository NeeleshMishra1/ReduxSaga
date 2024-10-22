import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export const ThemeSwitcher = () => {
    const [theme, setTheme] = useState('Light'); 

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'Dark' ? 'Light' : 'Dark'));
    };

    const backgroundColor = theme === 'Dark' ? '#333' : '#fff';
    const textColor = theme === 'Dark' ? '#fff' : '#000';
    const buttonBackgroundColor = theme === 'Dark' ? '#fff' : '#000';
    const buttonTextColor = theme === 'Dark' ? '#000' : '#fff';

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Text style={[styles.text, { color: textColor }]}>
                Current Theme: {theme}
            </Text>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: buttonBackgroundColor }]}
                onPress={toggleTheme}
            >
                <Text style={[styles.buttonText, { color: buttonTextColor }]}>
                    Switch to {theme === 'Dark' ? 'Light' : 'Dark'} Theme
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
    },
    button: {
        width: 200,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 18,
    },
});

export default ThemeSwitcher;
