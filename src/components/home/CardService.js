import React from "react";

import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";


export const CardService = ({ source, service }) => {

    const uppertext = service.toUpperCase();

    return(
        <TouchableOpacity>
            <View style={ styles.card }>
                <Image 
                    source={ source }
                />
                <Text style={ styles.cardText }>{ uppertext }</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 150,
        backgroundColor: "#ffffff",
        borderRadius: 20,
        margin: 20,
        paddingVertical: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    cardText: {
        color: "#004aad",
        fontWeight: "bold",
        fontSize: 16
    }
});