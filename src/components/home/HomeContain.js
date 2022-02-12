import React, { useContext } from "react";

import { View, StyleSheet, Text } from "react-native";
import { HomeBottomContainer } from "../../containers/HomeBottomContainer";


export const HomeContain = () => {

    return(
        <View style={ styles.bottomContainer }>
            <View style={ styles.welcomeContainer }>
                <View style={ styles.welcome }>
                    <Text style={ styles.welcomeText }>Bienvenido, </Text>
                    <Text style={ styles.username }>USUARIO</Text>
                </View>
                <View style={ styles.description }>
                    <Text style={ styles.descriptionText }>En </Text>
                    <Text style={ styles.bold }>Pasteblock</Text>
                    <Text style={ styles.descriptionText }>, selecciona el servicio que necesites</Text>
                </View>
            </View>
            <HomeBottomContainer />
        </View>
    );
}

const styles = StyleSheet.create({
    bottomContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "#f3f6f9"
    },
    welcome: {
        flexDirection: "row"
    },
    description: {
        flexDirection: "row"
    },
    welcomeText: {
        color: "#333333",
        fontWeight: "bold",
        fontSize: 24
    },
    username: {
        color: "#004aad",
        fontWeight: "bold",
        fontSize: 24
    },
    descriptionText: {
        color: "#747474"
    },
    bold: {
        fontWeight: "bold",
        color: "#747474"
    },
    welcomeContainer: {
        paddingHorizontal: 20,
        paddingVertical: 40
    }
});