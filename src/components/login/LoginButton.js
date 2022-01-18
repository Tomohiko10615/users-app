import React from "react";

import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";

export const LoginButton = () => {

    const navigation = useNavigation();

    return(
        <TouchableOpacity 
            activeOpacity={ 0.6 }
            onPress={() => navigation.navigate("Home")}
        >
            <View style={ styles.button }>
                <Text style={ styles.buttonText }>CONTINUAR</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        backgroundColor: "#ffffff",
        borderRadius: 15,
        marginVertical: 25
    },
    buttonText: {
        color: "#333333",
        fontWeight: "bold"
    }
});