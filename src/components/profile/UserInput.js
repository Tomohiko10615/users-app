import React from "react";

import { View, Text, StyleSheet, TextInput } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { Dropdown } from "./Dropdown";

export const UserInput = ({ label, information, type }) => {

    {/**
        label: placeholder,
        information: input-description
        type: value ( "input" | "drop" | "rate" )
    */}

    const renderInput = () => {
        switch(type) {
            case "input":
                return(
                    <TextInput 
                        style={ styles.input }
                        placeholder={ information }
                    />
                );
            case "drop":
                return(
                    <Dropdown />
                );
            case "rate":
                return(
                    <Icon 
                        name="md-star-sharp"
                        size={ 20 }
                        color="#ffb552"
                    />
                );
            default:
                console.log("Envia el parametro del tipo de input correcto");
        }

    }

    return(
        <View style={ styles.componentContainer }>
            <Text style={ styles.textLabel }>{ label }</Text>
            {
                renderInput()
            }
        </View>
    );
}

const styles = StyleSheet.create({
    componentContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
        padding: 10,
        width: "75%"
    },
    input: {
        width: 160,
        backgroundColor: "#ffffff",
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 15,
        textAlign: "center"
    },
    textLabel: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 16
    }
});