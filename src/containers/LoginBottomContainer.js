import React from "react";

import { View, StyleSheet, Text } from "react-native";

import { LoginButton } from "../components/login/LoginButton";

import { useNavigation } from "@react-navigation/native";

export const LoginBottomContainer = () => {

    const navigation = useNavigation();

    return(
        <View style={ styles.bottomContainer }>
            <LoginButton />
            <View style={ styles.navRegisterContainer }>
                <Text style={ styles.navText }>¿No tienes cuenta?</Text>
                <Text 
                    style={ styles.navRegisterText }
                    onPress={ () => navigation.navigate("Register") }
                >Registrate aqui</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bottomContainer: {
        width: "100%",
        height: 300,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    navRegisterContainer: {
        flexDirection: "row"
    },
    navRegisterText: {
        marginLeft: 5,
        borderBottomWidth: 1,
        color: "#ffffff",
        borderBottomColor: "#ffffff"
    },
    navText: {
        color: "#ffffff"
    }
});