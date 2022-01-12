import React from "react";

import { View, StyleSheet, Image } from "react-native";

export const HeaderLogin = () => {
    return(
        <View style={ styles.header }>
            <Image
                style={ styles.headerIcon } 
                source={ require("../../images/pb-icon-200x200.png") }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 140,
        backgroundColor: "#ffffff",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    headerIcon: {
        width: 80,
        height: 80,
        marginTop: 20
    }
});