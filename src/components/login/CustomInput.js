import React from "react";

import { TextInput, StyleSheet } from "react-native";
import { useForm } from "../../hooks/useForm";

export const CustomInput = ( props ) => {

    const { correoElectronico, contraseña, onChange } = useForm({
        correoElectronico: "",
        contraseña: ""
    });

    const onLogin = () => {
        console.log({ correoElectronico, contraseña });
    }

    return(
        <TextInput 
            placeholder={ props.using }
            style={ styles.input }
            onChangeText={ (value) => onChange(value, props.using) }
            value={ props.using }
            onSubmitEditing={ onLogin }
        />
    );
}

const styles = StyleSheet.create({
    input: {
        width: 300,
        height: 40,
        backgroundColor: "#ffffff",
        borderRadius: 15,
        paddingHorizontal: 15,
        marginBottom: 30
    }
});
