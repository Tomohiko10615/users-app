import React from "react";

import { TouchableOpacity, StyleSheet, Text } from "react-native";

export const RegisterButton = ({ action }) => {

    return(
        <TouchableOpacity onPress={ action } style={ styles.button }>
            <Text style={ styles.buttonText }>REGISTRAR</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#ffffff",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 15,
        marginBottom: 15,
    },
    buttonText: {
        fontWeight: "bold",
        color: "#333333"
    }
});