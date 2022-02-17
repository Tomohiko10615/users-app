import React from "react";

import { Text, StyleSheet } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../components/home/Header";
import { ProfileContain } from "../components/profile/ProfileContain";

export const ProfileScreen = () => {
    return(
        <SafeAreaView style={ styles.container }>
            <Header/>
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