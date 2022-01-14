import React from "react";

import { View, Text, StyleSheet } from "react-native";
import { UserAvatar } from "./UserAvatar";
import { UserInformation } from "./UserInformation";

export const ProfileContain = () => {
    return(
        <View style={ styles.profileContainer }>
            <UserAvatar />
            <UserInformation />
        </View>
    );
}

const styles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        backgroundColor: "#f3f6f9",
        width: "100%"
    }
});