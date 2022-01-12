import React from "react";

import { TextInput, StyleSheet } from "react-native";

export const CustomInput = ( props ) => {
    return(
        <TextInput 
            placeholder={ props.using }
            style={ styles.input }
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
