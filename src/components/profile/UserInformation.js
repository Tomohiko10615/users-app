import React from "react";

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { EditButton } from "./EditButton";
import { UserInput } from "./UserInput";

import useAuth from "../../hooks/useAuth";

/**
 * 
 * @component DropPicker: Error en toda la Screen al cambiarlo por <Dropdown /> (Componente hijo)
 */

export const UserInformation = () => {
    const {distrito} = useAuth();

    return(
        <View style={ styles.informationContainer }>
            <UserInput 
                label="Distrito"
                information={ distrito }
                type="drop"
            />
            <UserInput 
                label=" Direccion"
                information="Sector 1 Grupo 22"
                type="input"
            />
            <UserInput 
                label="Celular"
                information="952014938"
                type="input"
            />
            <UserInput 
                label="Reputacion"
                information="Rate Stars"
                type="rate"
            />
            <EditButton />
        </View>
    );
}

const styles = StyleSheet.create({
    informationContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "#004aad",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: "center",
        paddingVertical: 40
    }
});