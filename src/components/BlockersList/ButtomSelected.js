import React from "react";

import { View, Text, StyleSheet, Alert, TouchableOpacity, VirtualizedList } from "react-native";

export const ButtonSelected = () => {
    return (
        <TouchableOpacity 
            onPress={ () => {Alert.alert("Go to next screen!")} }
        >
            <View style={ styles.button }>
                <Text style={ styles.buttonText }>Ver Perfil</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#ffffff",
        paddingVertical: 10,
        marginTop: 10,
        borderRadius: 15
    },
    buttonText: {
        fontWeight: "bold",
        textAlign: "center"
    }
});
