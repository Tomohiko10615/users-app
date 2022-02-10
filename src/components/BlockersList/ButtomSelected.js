import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { View, Text, StyleSheet, Alert, TouchableOpacity, VirtualizedList } from "react-native";

export const ButtonSelected = (props) => {
    const { profileData, avatar, serviceId } = props;
    const navigation = useNavigation();
    return (
            <TouchableOpacity 
                onPress={ () => { navigation.navigate("BlockerDetailsNav", {
                    screen: 'BlockerDetails',
                    params: { profileData: profileData, avatar: avatar, serviceId: serviceId }
                  })} }
            >
                <View style={ styles.button }>
                    <Text style={ styles.buttonText }>Ver Perfil</Text>
                </View>
            </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#ffffff",
        paddingVertical: 10,
        marginTop: 10,
        borderRadius: 15
    },
    buttonText: {
        fontWeight: "bold",
        textAlign: "center"
    }
});
