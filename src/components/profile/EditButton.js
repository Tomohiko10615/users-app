import React, { useReducer } from "react";

import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

export const EditButton = () => {

    const edit = () => {}
    const save = () => {}

    return(
        <TouchableHighlight>
            <View style={ styles.buttonContainer }>
                <Text style={ styles.buttonText }>EDITAR</Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "#ffffff",
        marginVertical: 50,
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 20,
        width: 150
    },
    buttonText: {
        textAlign: "center",
        color: "#333333",
        fontWeight: "bold"
    }
});