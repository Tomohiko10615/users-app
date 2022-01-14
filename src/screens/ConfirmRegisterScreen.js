import React from "react";

import { View, StyleSheet } from "react-native";

import { ConfirmContain } from "../components/confirm-register/ConfirmContain";

export const ConfirmRegisterScreen = () => {
    return(
        <View style={ styles.container }>
            <ConfirmContain />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#004aad",
        alignItems: "center",
        justifyContent: "center"
    }
});

