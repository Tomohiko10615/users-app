import React from "react";

import { Text, StyleSheet } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { ProfileContain } from "../components/profile/ProfileContain";

export const ProfileScreen = () => {
    return(
        <SafeAreaView style={ styles.container }>
            <ProfileContain />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#999"
    }
});