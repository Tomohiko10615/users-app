import React from "react";

import { View, StyleSheet, Image } from "react-native";

import Icon from "react-native-vector-icons/Ionicons"

import { useNavigation } from "@react-navigation/native";

export const Header = () => {

    const navigation = useNavigation();

    return(
        <View style={ styles.headerContainer }>
            <Icon 
                size={ 36 }
                name="md-menu"
                color="#ffffff"
                style={ styles.headerItem }
                onPress={ () => navigation.openDrawer() }
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
        backgroundColor: "#004aad",
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