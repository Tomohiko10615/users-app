import React from "react";

import { TouchableOpacity, View, Text, StyleSheet} from "react-native";

export const ConfirmButton = () => {
    return(
        <TouchableOpacity>
            <View style={ styles.buttonContainer }>
                <Text style={ styles.buttonText }>IR AL INICIO</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "#ffffff",
        alignItems: "center",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 15,
        marginVertical: 40
    },
    buttonText: {
        color: "#333333",
        fontWeight: "bold"
    }
});