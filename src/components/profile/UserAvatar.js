import React from "react";

import { View, Text, Image, StyleSheet } from "react-native";
import useAuth from "../../hooks/useAuth"
import { getStars } from "../../utils/Stars";

export const UserAvatar = (props) => {
    const { nombre } = useAuth();
    const {reputacion} = props;

    const data = {
        user: {
            sources: {
                avatar: require("../../images/user.png")
            }
        }
    }

    const { user } = data;

    const { sources } = user;

    return(
        <View style={ styles.userContainer }>
            <Image 
                style={ styles.userImageAvatar }
                source={ sources.avatar }
            />
            <Text style={ styles.userName }>{ nombre }</Text>
            
            <View style={styles.container}>{getStars(reputacion)}
                <View style={styles.badge}><Text style={styles.text}>  {reputacion}</Text></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    userContainer: {
        width: "85%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1565c0",
        marginHorizontal: 30,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingVertical: 20,
        marginTop: "10%"
    },
    userImageAvatar: {
        width: 70,
        height: 70,
        borderWidth: 4, borderColor: "#ffffff", borderRadius: 100
    },
    userName: {
        fontWeight: "500",
        fontSize: 18,
        marginTop: 20,
        color: "#ffffff"
    },
    container: {
        alignSelf: "center",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 15 / 2,
      },
});