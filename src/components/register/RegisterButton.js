import React from "react";

import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

export const RegisterButton = () => {
    return(
        <TouchableOpacity>
            <View style={ styles.button }>
                <Text style={ styles.buttonText }>REGISTRAR</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#ffffff",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 15
    },
    buttonText: {
        fontWeight: "bold",
        color: "#333333"
    }
});