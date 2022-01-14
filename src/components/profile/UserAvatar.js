import React from "react";

import { View, Text, Image, StyleSheet } from "react-native";



export const UserAvatar = () => {

    const data = {
        user: {
            firstname: "Luis Antonio",
            lastname: "Huanca Moreno",
            sources: {
                avatar: require("../../images/user.png")
            }
        }
    }

    const { user } = data;
    console.log(user);

    const { firstname, lastname, sources } = user;
    console.log(firstname, lastname, sources.avatar);

    return(
        <View style={ styles.userContainer }>
            <Image 
                style={ styles.userImageAvatar }
                source={ sources.avatar }
            />
            <Text style={ styles.userName }>{ firstname } { lastname }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    userContainer: {
        width: "100%",
        height: 200,
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center"
    },
    userImageAvatar: {
        width: 70,
        height: 70
    },
    userName: {
        fontWeight: "500",
        fontSize: 18,
        marginTop: 20,
        color: "#333333"
    }
});