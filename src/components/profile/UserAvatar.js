import React from "react";

import { View, Text, Image, StyleSheet } from "react-native";
import useAuth from "../../hooks/useAuth"
import { getStars } from "../../utils/Stars";

export const UserAvatar = (props) => {
    const { nombre } = useAuth();
    const {reputacion} = props;

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

    const { firstname, lastname, sources } = user;

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
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 15
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
    },
    container: {
        alignSelf: "center",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 15 / 2,
      },
      badge: {
        
      }
});