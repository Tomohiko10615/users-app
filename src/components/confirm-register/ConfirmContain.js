import React from "react";

import { View, Text, StyleSheet, Image } from "react-native";

import pasteblockIcon from "../../images/pb-icon-200x200.png";

import { ConfirmButton } from "./ConfirmButton";

export const ConfirmContain = () => {
    return(
        <View style={ styles.contain }>
            <View>
                <Image 
                    source={ pasteblockIcon }
                />
            </View>
            <View>
                <Text style={ styles.text }>Su perfil se ha actualizado con exito</Text>
                <ConfirmButton />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contain: {
        width: "80%",
        height: "70%",
        alignItems: "center",
        justifyContent: "space-between"
    },
    text: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold"
    }
});