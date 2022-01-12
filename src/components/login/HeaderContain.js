import React from "react";

import { View, Text, StyleSheet } from "react-native";
import { LoginBottomContainer } from "../../containers/LoginBottomContainer";

import { CustomInput } from "./CustomInput";


export const HeaderContain = () => {
    return(
        <View style={ styles.LoginContainer }>
            <Text style={ styles.loginTitle }>INICIAR SESION</Text>
            <CustomInput
                using="Correo electronico"
            />
            <CustomInput 
                using="Contraseña"
            />
            <LoginBottomContainer />
        </View>
    );
}

const styles = StyleSheet.create({
    LoginContainer: {
        width: "100%",
        height: "85%",
        backgroundColor: "#004aad",
        alignItems: "center",
        paddingVertical: 40
    },
    loginTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#ffffff",
        marginBottom: 40
    }
});