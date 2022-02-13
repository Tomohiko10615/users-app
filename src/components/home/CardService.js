import React from "react";

import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native"

export const CardService = ({ source, service, serviceId }) => {

    const uppertext = service.toUpperCase();
    const navigation = useNavigation();

    return(
        <TouchableOpacity
             onPress={ () => navigation.navigate("Proccess", {
                screen: 'Blockers',
                params: { service: service, serviceId: serviceId }
              }) }
        >
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
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#ddd"
    },
    cardText: {
        color: "#004aad",
        fontWeight: "bold",
        fontSize: 16
    }
});