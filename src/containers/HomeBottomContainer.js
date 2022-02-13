import React from "react";

import { View, StyleSheet, Text } from "react-native";
import { CardService } from "../components/home/CardService";

import iconAlbañil from "../images/albañil.png";
import iconGasfitero from "../images/gasfiteria.png";
import iconElectrico from "../images/electricidad.png";
import iconPintor from "../images/pintura.png";

export const HomeBottomContainer = () => {
    return(
        <View style={ styles.bottomContainer }>
            <CardService 
                source={ iconAlbañil }
                service="Albañileria"
                serviceId="1"
            />
            <CardService 
                source={ iconGasfitero }
                service="Gasfiteria"
                serviceId="2"
            />
            <CardService 
                source={ iconElectrico }
                service="Electricidad"
                serviceId="3"
            />
            <CardService 
                source={ iconPintor }
                service="Pintura"
                serviceId="4"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    bottomContainer: {
        flex: 1,
        height: "100%",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: 0
    }
});