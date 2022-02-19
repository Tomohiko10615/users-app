import React from "react";

import { View, StyleSheet, Text } from "react-native";

import { LoginButton } from "../components/login/LoginButton";

import { useNavigation } from "@react-navigation/native";

export const LoginBottomContainer = () => {

    const navigation = useNavigation();

    return(
        <View style={ styles.navRegisterContainer }>
            <Text style={ styles.navText }>¿No tienes cuenta?</Text>
            <Text 
                style={ styles.navRegisterText }
                onPress={ () => navigation.navigate("Register") }
            >Registrate aqui</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    navRegisterContainer: {
        flexDirection: "row"
    },
    navRegisterText: {
        marginLeft: 5,
        borderBottomWidth: 1,
        color: "#ffffff",
        borderBottomColor: "#ffffff",
        marginBottom: 15
    },
    navText: {
        color: "#ffffff"
    }
});