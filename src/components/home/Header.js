import React from "react";

import { View, StyleSheet, Image } from "react-native";

import Icon from "react-native-vector-icons/Ionicons"

export const Header = () => {
    return(
        <View style={ styles.headerContainer }>
            <Icon 
                size={ 32 }
                name="md-menu"
                color="#000000"
                style={ styles.headerItem }
            />
            <Image
                style={ styles.headerIcon } 
                source={ require("../../images/pb-icon-200x200.png") }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        width: "100%",
        height: 70,
        backgroundColor: "#ffffff",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    headerIcon: {
        width: 60,
        height: 60,
        marginRight: 15
    },
    headerItem: {
        padding: 15
    }
});