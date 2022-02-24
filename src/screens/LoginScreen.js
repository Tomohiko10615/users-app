import React from "react";

import { View, StyleSheet, StatusBar } from "react-native";
import { HeaderContain } from "../components/login/HeaderContain";
import { HeaderLogin } from "../components/login/HeaderLogin";

export const LoginScreen = () => {
    return(
        <View style={ styles.container }>
            <StatusBar backgroundColor={"#ffffff"} barStyle="dark-content" />
            <HeaderLogin />
            <HeaderContain />
        </View>
    ); 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#004aad"
    }
});

