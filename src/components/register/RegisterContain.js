import React from "react";

import { View, Text, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { RegisterBottomContainer } from "../../containers/RegisterBottomContainer";

import { CustomInput } from "../login/CustomInput";
import { useNavigation } from "@react-navigation/native";

export const RegisterContain = () => {

    const navigation = useNavigation();

    const hole = "";

    return(
        <View style={ styles.registerContain }>
            <View style={ styles.containHeader }>
                <Icon
                    onPress={() => navigation.goBack()}
                    style={ styles.iconBack } 
                    name="arrow-back"
                    size={ 20 }
                />
                <Text style={ styles.registerTitle }>REGISTRO</Text>
                <Text>{ hole }</Text>
            </View>
            <CustomInput 
                using="Nombres"
            />
            <CustomInput 
                using="Apellidos"
            />
            <CustomInput 
                using="Correo electronico"
            />
            <CustomInput 
                using="Espacio para celular y distrito"
            />
            <RegisterBottomContainer />
        </View>
    );
}

const styles = StyleSheet.create({
    registerContain: {
        width: "100%",
        height: "85%",
        backgroundColor: "#004aad",
        alignItems: "center"
    },
    containHeader: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 30,
        alignItems: "center" 
    },
    iconBack: {
        backgroundColor: "#ffffff",
        borderRadius: 100,
        padding: 10
    },
    registerTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#ffffff"
    }
});